# Security Specification — KGB Group HR Lead Management

## 1. Data Invariants
1. Every document in `/applications/{applicationId}` must have a valid alphanumeric/hyphen/underscore document ID (`<= 128` chars) and strictly conform to the `Application` schema (`fullName`, `phone`, `email`, `city`, `qualification`, `role`, `notes`, `status`, `timestamp`, `createdAt`).
2. Public job seekers can submit (`create`) new applications with `status == "New"` and server timestamp `createdAt == request.time`, with strict field-length and key-whitelist validation (`hasAll` and `hasOnly`).
3. Because `/applications/{applicationId}` contains PII (`phone`, `email`, `fullName`), `read` (`get`, `list`), `update`, and `delete` access on `/applications/{applicationId}` is strictly restricted to verified HR Administrators (`isAdmin()`).
4. During `update`, `createdAt` and `timestamp` are immutable, and once `status == 'Placed'` (terminal state), non-admin updates are blocked while verified admins (`isAdmin()`) can manage status transitions (`New`, `Contacted`, `Shortlisted`, `Placed`).

## 2. The "Dirty Dozen" Payloads
1. **Shadow Field Injection**: `{ fullName: "Aman", phone: "9876543210", ..., isSuperAdmin: true }` -> Rejected by `hasOnly()`.
2. **Oversized String ("Denial of Wallet")**: `{ fullName: "A".repeat(5000), ... }` -> Rejected by `size() <= 100`.
3. **Invalid Phone Regex**: `{ phone: "abc-not-a-phone", ... }` -> Rejected by `matches('^[0-9+\\-\\s]{10,20}$')`.
4. **Premature Status Escalation on Create**: `{ status: "Placed", ... }` on `create` -> Rejected because `create` requires `incoming().status == 'New'`.
5. **Client Timestamp Spoofing**: `{ createdAt: "2020-01-01T00:00:00Z" }` -> Rejected by `incoming().createdAt == request.time`.
6. **Unauthenticated PII Read (`get`)**: Anonymous user reading `/applications/app_1` -> Rejected by `isAdmin()`.
7. **Unauthenticated PII Scraping (`list`)**: Non-admin user listing `/applications` -> Rejected by `isAdmin()`.
8. **Spoofed Unverified Admin Email**: Authenticated user with `email == 'shriyanshsingh7581@gmail.com'` but `email_verified == false` -> Rejected by `request.auth.token.email_verified == true`.
9. **ID Poisoning**: Document ID with 250 characters or special characters -> Rejected by `isValidId(applicationId)`.
10. **Immutable Field Mutation**: Updating `createdAt` or `timestamp` on an existing application -> Rejected by immutability check.
11. **Value Poisoning on Update**: Updating `status` to a boolean `true` or invalid string `"Hacked"` -> Rejected by `isValidApplication(incoming())`.
12. **Self-Assigned Admin**: Non-admin user writing to `/admins/{uid}` -> Rejected (`allow write: if false;` on `/admins`).

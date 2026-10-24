/**
 * Logic and validation helpers for KGB Group (Knowledge Gurukul) application portal
 */

export interface ApplicationFormData {
  fullName: string;
  phone: string;
  email?: string;
  qualification: string;
  preferredRole: string;
  city?: string;
  hasLaptop?: boolean;
  experience?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateApplicationForm(data: ApplicationFormData): ValidationResult {
  const errors: Record<string, string> = {};

  const trimmedName = data.fullName.trim();
  if (!trimmedName) {
    errors.fullName = 'Please enter your full name.';
  } else if (trimmedName.length < 3) {
    errors.fullName = 'Full name must be at least 3 characters.';
  }

  const cleanPhone = data.phone.replace(/[\s\-\+]/g, '');
  // Match 10 digits or 10 digits with 91 prefix
  const phonePattern = /^(91)?[6-9]\d{9}$/;
  if (!cleanPhone) {
    errors.phone = 'Please enter your 10-digit mobile number.';
  } else if (!phonePattern.test(cleanPhone)) {
    errors.phone = 'Please enter a valid 10-digit Indian phone number.';
  }

  if (!data.qualification || data.qualification.trim() === '') {
    errors.qualification = 'Please select your highest qualification.';
  }

  if (!data.preferredRole || data.preferredRole.trim() === '') {
    errors.preferredRole = 'Please choose your preferred job role.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function generateApplicationRef(name: string): string {
  const prefix = 'KGB';
  const nameCode = (name.replace(/[^A-Za-z]/g, '').slice(0, 3) || 'CAN').toUpperCase();
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${nameCode}-${randomSuffix}`;
}

export function formatWhatsAppMessage(data: ApplicationFormData, refId?: string): string {
  const ref = refId || generateApplicationRef(data.fullName);
  const text = `*New Job Application - KGB Group Knowledge Gurukul*
Ref ID: ${ref}
Name: ${data.fullName.trim()}
Phone: ${data.phone.trim()}
Qualification: ${data.qualification}
Preferred Role: ${data.preferredRole}
${data.city ? `City: ${data.city.trim()}` : ''}
${data.hasLaptop ? 'Laptop Available: Yes (Ready for WFH)' : 'Laptop Available: No'}
${data.experience ? `Experience: ${data.experience}` : ''}

I would like to apply for placement. Please guide me with the next steps!`;

  return encodeURIComponent(text.trim());
}

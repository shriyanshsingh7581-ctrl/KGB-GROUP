import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateApplicationForm,
  generateApplicationRef,
  formatWhatsAppMessage,
} from './jobValidation.ts';

test('validates incomplete application form with descriptive errors', () => {
  const result = validateApplicationForm({
    fullName: '',
    phone: '',
    qualification: '',
    preferredRole: '',
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.qualification);
  assert.ok(result.errors.preferredRole);
});

test('validates correct application form inputs', () => {
  const result = validateApplicationForm({
    fullName: 'Rahul Sharma',
    phone: '9876543210',
    qualification: 'B.Tech / B.E',
    preferredRole: 'Work From Home Data Entry Operator',
  });

  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('validates phone number formats properly', () => {
  const invalid = validateApplicationForm({
    fullName: 'Ananya Verma',
    phone: '12345',
    qualification: 'Graduate',
    preferredRole: 'Customer Support Executive',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.phone);

  const validWithCountryCode = validateApplicationForm({
    fullName: 'Ananya Verma',
    phone: '+91 9876543210',
    qualification: 'Graduate',
    preferredRole: 'Customer Support Executive',
  });
  assert.equal(validWithCountryCode.isValid, true);
});

test('generates reference ID with KGB prefix and candidate initials', () => {
  const ref = generateApplicationRef('Pooja Patel');
  assert.ok(ref.startsWith('KGB-POO-'));
});

test('formats WhatsApp message with candidate details encoded for wa.me link', () => {
  const message = formatWhatsAppMessage(
    {
      fullName: 'Vikas Tiwari',
      phone: '7987683263',
      qualification: 'MBA',
      preferredRole: 'Customer Support Executive',
      city: 'Bhopal',
      hasLaptop: true,
    },
    'KGB-VIK-9999'
  );

  const decoded = decodeURIComponent(message);
  assert.ok(decoded.includes('KGB-VIK-9999'));
  assert.ok(decoded.includes('Vikas Tiwari'));
  assert.ok(decoded.includes('Customer Support Executive'));
  assert.ok(decoded.includes('Laptop Available: Yes'));
});

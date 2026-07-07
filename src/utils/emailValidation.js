export function validateContactForm({ name, email, subject, message }) {
  const errors = {};

  if (!name?.trim()) errors.name = 'Name is required';
  if (!email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email';
  }
  if (!subject?.trim()) errors.subject = 'Subject is required';
  if (!message?.trim()) errors.message = 'Message is required';

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

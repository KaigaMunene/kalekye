'use client';

import { useState, FormEvent, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/** Letters, spaces, hyphens, apostrophes only; 2–100 chars (e.g. O'Brien, Mary-Jane) */
const NAME_REGEX = /^[a-zA-Z][a-zA-Z\s'-]{1,99}$/;
const NAME_MIN_LENGTH = 2;
const NAME_MAX_LENGTH = 100;

/** Standard email: local@domain.tld */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const MESSAGE_MIN_LENGTH = 20;
const MESSAGE_MAX_LENGTH = 5000;

type FieldName = 'firstName' | 'lastName' | 'email' | 'service' | 'message';

function validateName(value: string): string | null {
  const trimmed = value.trim();
  if (trimmed.length === 0) return 'This field is required.';
  if (trimmed.length < NAME_MIN_LENGTH) return `Enter at least ${NAME_MIN_LENGTH} characters.`;
  if (trimmed.length > NAME_MAX_LENGTH) return `Maximum ${NAME_MAX_LENGTH} characters.`;
  if (/[0-9]/.test(trimmed)) return 'Names cannot contain numbers.';
  if (!NAME_REGEX.test(trimmed)) return 'Use only letters, spaces, hyphens, or apostrophes.';
  return null;
}

function validateEmail(value: string): string | null {
  const trimmed = value.trim();
  if (trimmed.length === 0) return 'Email is required.';
  if (!EMAIL_REGEX.test(trimmed)) return 'Enter a valid email (e.g. name@example.com).';
  return null;
}

function validateMessage(value: string): string | null {
  const trimmed = value.trim();
  if (trimmed.length === 0) return 'Message is required.';
  if (trimmed.length < MESSAGE_MIN_LENGTH)
    return `Enter at least ${MESSAGE_MIN_LENGTH} characters.`;
  if (trimmed.length > MESSAGE_MAX_LENGTH) return `Maximum ${MESSAGE_MAX_LENGTH} characters.`;
  return null;
}

function validateService(value: string): string | null {
  if (!value.trim()) return 'Please select a service.';
  return null;
}

const services = [
  'Hosting Services',
  'Public Speaking',
  'Voiceover Services',
  'Own Your Mic Program',
  'Podcast',
  'Consultation',
  'Other',
];

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});

  const validateForm = useCallback((): boolean => {
    const next: Partial<Record<FieldName, string>> = {
      firstName: validateName(formData.firstName) ?? undefined,
      lastName: validateName(formData.lastName) ?? undefined,
      email: validateEmail(formData.email) ?? undefined,
      service: validateService(formData.service) ?? undefined,
      message: validateMessage(formData.message) ?? undefined,
    };
    setErrors(next);
    return !Object.values(next).some(Boolean);
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as FieldName]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    let message: string | null = null;
    switch (name) {
      case 'firstName':
      case 'lastName':
        message = validateName(value);
        break;
      case 'email':
        message = validateEmail(value);
        break;
      case 'service':
        message = validateService(value);
        break;
      case 'message':
        message = validateMessage(value);
        break;
      default:
        break;
    }
    setErrors((prev) =>
      message !== null ? { ...prev, [name]: message } : { ...prev, [name]: undefined },
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setSubmitStatus('success');
        setErrorMessage(null);
        setErrors({});
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          service: '',
          message: '',
        });
        // Auto-close after 2 seconds
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(typeof data?.error === 'string' ? data.error : null);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
          >
            <motion.div
              className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              {/* Modal Content */}
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-2 font-forum">
                  Contact Us
                </h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and we&apos;ll get back to you soon.
                </p>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="font-semibold">
                      Thank you! Your message has been sent successfully.
                    </p>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <motion.div
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="font-semibold">Something went wrong. Please try again later.</p>
                    {errorMessage && <p className="mt-2 text-sm opacity-90">{errorMessage}</p>}
                  </motion.div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* First Name & Last Name Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        aria-invalid={Boolean(errors.firstName)}
                        aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                        className={`w-full text-black px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition ${
                          errors.firstName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="John"
                      />
                      {errors.firstName && (
                        <p id="firstName-error" className="mt-1 text-sm text-red-600" role="alert">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        aria-invalid={Boolean(errors.lastName)}
                        aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                        className={`w-full text-black px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition ${
                          errors.lastName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Doe"
                      />
                      {errors.lastName && (
                        <p id="lastName-error" className="mt-1 text-sm text-red-600" role="alert">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`w-full text-black px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="john.doe@example.com"
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      What Service Are You Interested In? <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      aria-invalid={Boolean(errors.service)}
                      aria-describedby={errors.service ? 'service-error' : undefined}
                      className={`w-full text-black px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition bg-white ${
                        errors.service ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p id="service-error" className="mt-1 text-sm text-red-600" role="alert">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      rows={5}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`w-full text-black px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition resize-none ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Tell us more about your inquiry..."
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 px-6 py-3 bg-brand-gold text-white font-medium rounded-lg hover:bg-brand-secondary transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

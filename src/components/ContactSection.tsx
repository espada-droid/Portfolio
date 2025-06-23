import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ContactSection: React.FC = () => {
  const { currentTheme } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState<null | 'ok' | 'error'>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch('https://formspree.io/f/mldnpdpn', {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
      body: new FormData(e.target as HTMLFormElement)
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted('ok');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setSubmitted('error');
        }
        setTimeout(() => setSubmitted(null), 3000);
      })
      .catch(() => {
        setSubmitted('error');
        setTimeout(() => setSubmitted(null), 3000);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6"
      style={{ backgroundColor: currentTheme.colors.secondary }}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-5xl font-bold mb-16 text-center"
          style={{ color: currentTheme.colors.foreground }}
        >
          Let's Create Together
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Terminal-style form */}
          <div
            className="p-6 rounded-xl font-mono"
            style={{ backgroundColor: currentTheme.colors.card }}
          >
            <div
              className="flex items-center gap-2 pb-4 mb-6 border-b"
              style={{ borderColor: currentTheme.colors.border }}
            >
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span
                className="ml-4 text-sm"
                style={{ color: currentTheme.colors.muted }}
              >
                contact_jaiwardhan.terminal
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label
                  className="block text-sm mb-2"
                  style={{ color: currentTheme.colors.accent }}
                >
                  ~/name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-none outline-none text-base"
                  style={{ color: currentTheme.colors.foreground }}
                  placeholder="Enter your name..."
                  required
                />
                <div
                  className="h-px mt-2"
                  style={{ backgroundColor: currentTheme.colors.border }}
                />
              </div>
              <div>
                <label
                  className="block text-sm mb-2"
                  style={{ color: currentTheme.colors.accent }}
                >
                  ~/email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-none outline-none text-base"
                  style={{ color: currentTheme.colors.foreground }}
                  placeholder="your.email@domain.com"
                  required
                />
                <div
                  className="h-px mt-2"
                  style={{ backgroundColor: currentTheme.colors.border }}
                />
              </div>
              <div>
                <label
                  className="block text-sm mb-2"
                  style={{ color: currentTheme.colors.accent }}
                >
                  ~/message:
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-transparent border-none outline-none text-base resize-none"
                  style={{ color: currentTheme.colors.foreground }}
                  placeholder="Your colorful ideas here..."
                  required
                />
                <div
                  className="h-px mt-2"
                  style={{ backgroundColor: currentTheme.colors.border }}
                />
              </div>
              <div className="flex items-center gap-2 mt-6">
                <span className="text-sm" style={{ color: currentTheme.colors.accent }}>
                  $
                </span>
                <button
                  type="submit"
                  className="text-base hover:underline"
                  style={{ color: currentTheme.colors.foreground }}
                >
                  send_message
                </button>
              </div>
              {submitted === 'ok' && (
                <div
                  className="text-sm mt-4"
                  style={{ color: currentTheme.colors.accent }}
                >
                  ✓ Message submitted. Please be patient.
                </div>
              )}
              {submitted === 'error' && (
                <div className="text-sm mt-4" style={{ color: '#ff4d4f' }}>
                  ❌ Something went wrong. Try again.
                </div>
              )}
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <h3
              className="text-2xl font-semibold mb-6"
              style={{ color: currentTheme.colors.foreground }}
            >
              Ready to Paint Digital Canvases?
            </h3>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: currentTheme.colors.muted }}
            >
              I'm passionate about collaborating on projects where color and creativity meet functionality.
              Whether you need a vibrant brand identity or an innovative user interface, let's bring your vision to life.
            </p>

            <a
              href="mailto:jaiwardhan.panwar@email.com"
              className="flex items-center gap-4 p-4 rounded-lg hover:scale-105 transition-transform"
              style={{ backgroundColor: currentTheme.colors.card }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: currentTheme.colors.accent }}
              >
                📧
              </div>
              <div>
                <p
                  className="font-medium"
                  style={{ color: currentTheme.colors.foreground }}
                >
                  jai.pwr.15@email.com
                </p>
                <p className="text-sm" style={{ color: currentTheme.colors.muted }}>
                  Email
                </p>
              </div>
            </a>

            <div
              className="flex items-center gap-4 p-4 rounded-lg hover:scale-105 transition-transform"
              style={{ backgroundColor: currentTheme.colors.card }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: currentTheme.colors.accent }}
              >
                📱
              </div>
              <div>
                <p
                  className="font-medium"
                  style={{ color: currentTheme.colors.foreground }}
                >
                  +91 9372441598
                </p>
                <p className="text-sm" style={{ color: currentTheme.colors.muted }}>
                  Phone
                </p>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/jaiwardhan-panwar-2a64382bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg hover:scale-105 transition-transform"
              style={{ backgroundColor: currentTheme.colors.card }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: currentTheme.colors.accent }}
              >
                in
              </div>
              <div>
                <p
                  className="font-medium"
                  style={{ color: currentTheme.colors.foreground }}
                >
                  linkedin.com/in/jaiwardhan-panwar
                </p>
                <p className="text-sm" style={{ color: currentTheme.colors.muted }}>
                  LinkedIn
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

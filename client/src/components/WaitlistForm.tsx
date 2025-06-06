import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { apiRequest } from '../lib/queryClient';

const WaitlistForm: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const currentLanguage = i18n.language.split('-')[0];
      const response = await apiRequest('POST', '/api/waitlist', {
        email,
        name: name.trim(),
        language: currentLanguage,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setEmail('');
        setName('');
        // Optional: trigger confetti or toast here
      } else {
        throw new Error(result.error || 'Unknown error');
      }
    } catch (err: any) {
      console.error('Waitlist form error:', err);
      setStatus('error');
      setError(err.message || 'Submission failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder={t('name')}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="email"
        placeholder={t('email')}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {status === 'loading' ? t('submitting') : t('join')}
      </button>
      {status === 'success' && <p className="text-green-600">{t('successMessage')}</p>}
      {status === 'error' && <p className="text-red-600">{error}</p>}
    </form>
  );
};

export default WaitlistForm;
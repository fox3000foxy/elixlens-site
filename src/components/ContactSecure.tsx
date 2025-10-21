import React, { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactSecure: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message || 'Message envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.error || 'Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <section id="contact" className="contact">
        <div className="contact-content">
          <h2>Let's Work Together</h2>
          <p>Ready to capture your moments? Fill out the form below to get in touch!</p>
          <form id="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <section className="collaboration">
        <h2>Collaboration with ItsRealFortune</h2>
        <p>We are excited to announce our collaboration with ItsRealFortune, bringing you exclusive photography experiences and unique storytelling.</p>
        <p>Her website is <a href="https://itsrealfortune.fr" target="_blank" rel="noopener noreferrer">here</a></p>
        <p>Stay tuned for upcoming workshops and events that will enhance your photography skills!</p>
      </section>
    </>
  );
};

export default ContactSecure;


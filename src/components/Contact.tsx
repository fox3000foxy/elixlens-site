import React, { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      
      const webhookResponse = await fetch('https://discord-webhooks.fox3000foxy.workers.dev/elixlensWebhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: null,
          embeds: [{
            title: `Contact Request from ${formData.name}`,
            description: formData.message,
            color: 5814783,
            fields: [
              {
                name: "Nom",
                value: formData.name,
                inline: true
              },
              {
                name: "Email",
                value: formData.email,
                inline: true
              },
              {
                name: "Message",
                value: formData.message,
                inline: false
              },
              {
                name: "Envoyé le",
                value: new Date().toLocaleString(),
                inline: true
              }
            ],
            footer: {
              text: "Nouvelle soumission de formulaire de contact depuis elixlens.ovh",
              icon_url: "https://elixlens.ovh/icon.ico"
            }
          }],
          username: "Contact Form",
          attachments: []
        }),
      });

      if (webhookResponse.ok) {
        alert('Message envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Erreur lors de l\'envoi');
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

export default Contact;



const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        
        const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
        
        if (!webhookUrl) {
            return res.status(500).json({ error: 'Configuration webhook manquante' });
        }
        
        const webhookResponse = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content: null,
                embeds: [{
                    title: `Contact Request from ${name}`,
                    description: message,
                    color: 5814783,
                    fields: [
                        {
                            name: "Nom",
                            value: name,
                            inline: true
                        },
                        {
                            name: "Email",
                            value: email,
                            inline: true
                        },
                        {
                            name: "Message",
                            value: message,
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
            res.json({ success: true, message: 'Message envoyé avec succès !' });
        } else {
            throw new Error('Erreur lors de l\'envoi vers Discord');
        }
    } catch (error) {
        console.error('Erreur:', error);
        res.status(500).json({ error: 'Erreur lors de l\'envoi du message' });
    }
});

app.listen(PORT, () => {
    console.log(`API Server running on port ${PORT}`);
});


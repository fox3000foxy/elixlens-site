const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 8669;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Middleware for caching static files for 1 minute
app.use(express.static(path.join(__dirname), { maxAge: 60 * 1000 }));

// Middleware for cache control on all routes
app.use((req, res, next) => {
    res.set('Cache-Control', 'public, max-age=60');
    next();
});

// app.get('/blogs/:blog', (req, res) => {
//     if(fs.existsSync(path.join(__dirname, 'blogs', req.params.blog+'.html'))){
//         res.sendFile(path.join(__dirname, 'blogs', req.params.blog+'.html'));
//     } else {
//         res.sendFile(path.join(__dirname, '404.html'));
//     }
// });

// Serve index.html for root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve 404.html for /launch.html
app.get('/launch.js', (req, res) => {
    res.sendFile(path.join(__dirname, '404.html'));
});

app.post('/contact', (req, res) => {
    console.log(req.body);
    const webhook = fetch('https://discord.com/api/webhooks/1308789246848532520/5bO4_De8yRtUSf1OEGozRjYopbbdKWz3A3os8sqi-P6A2oQ1RPCXKkWClUw4GrcsRf35', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            content: null,
            embeds: [{
                title: `Contact Request from ${req.body.name}`,
                description: req.body.message,
                color: 5814783,
                fields: [
                    {
                        name: "Nom",
                        value: req.body.name,
                        inline: true
                    },
                    {
                        name: "Email",
                        value: req.body.email,
                        inline: true
                    },
                    {
                        name: "Message",
                        value: req.body.message,
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
    // webhook.then(res=>res.json()).then(response => {
        // console.log(response);
        res.redirect('/');
    // });
    // res.sendFile(path.join(__dirname, 'pages/contacted.html'));
});


// Serve 404.html for unknown routes
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(PORT, () => {
    console.log(`Serving at port ${PORT}`);
});

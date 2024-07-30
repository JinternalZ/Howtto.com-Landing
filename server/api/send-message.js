// server/api/send-message.js
const twilio = require('twilio');
const express = require('express');
const router = express.Router();

const accountSid = 'ACbc43675d96b4bef3e26c97ca11d8715a';
const authToken = 'e2f0a628898bac5d9c9ed977173c36d8';
const client = new twilio(accountSid, authToken);

router.post('/send-message', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const response = await client.messages.create({
            body: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            from: 'your_twilio_phone_number',
            to: 'your_phone_number'
        });
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
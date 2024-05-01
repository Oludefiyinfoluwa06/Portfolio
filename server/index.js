const express = require('express');
const validator = require('validator');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello world!'));

app.post('/', async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ 'error': 'Input fields cannot be empty' });
    }

    if (!validator.isEmail(email)) {
        return res.status(406).json({ 'error': 'Please enter a valid email' });
    }

    try {
        const emailBody = `
            <h1>${name}</h1>
            <p>${email}</p>
            <p>${message}</p>
        `;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const mailOptions = {
            from: email,
            to: 'oludefiyinfoluwa06@gmail.com',
            subject: subject,
            html: emailBody
        }

        await transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return res.status(500).json({ 'error': 'An error occured' });
            }

            return res.status(200).json({ 'message': 'Email sent successfully' });
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ 'error': error.message });
    }
});

app.listen(port, () => console.log('Server is up and running on port: http://localhost:' + port));
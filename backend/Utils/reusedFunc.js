const nodemailer = require('nodemailer');
require('dotenv').config();
const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_PASS
    }
});

module.exports.sendTicket = async (email, username) => {
    const mailOptions = {
        from : `"OLConvention Ticket" <noreply-olcon@omahti.web.id>`,
        to: email,
        subject: `OLConvention Ticket for ${username}`,
        html: `<h1>OlConvention ticket</h1>
        <p>Halo, ${username}. Welcome to OLCon 2024</p>
        <p>Show this email to the gatekeeper</p>
        `
    };

    await transporter.sendMail(mailOptions);
};

module.exports.resetPasswordEmail = async (email, resetUrl) => {
    const mailOptions = {
        from: '"OmahTI Learning Center 2024 Password Reset" <noreply-password-reset-olc2024@omahti.web.id>',
        to: email,
        subject: 'Password Reset Request',
        html: `
            <h1>Password Reset Request</h1>
            <p>You requested a password reset. Click the button below to reset your password:</p>
            <a href="${resetUrl}" style="background-color: #4CAF50; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer;">Reset Password</a>
            <p>If you did not request this, please ignore this email.</p>
            <p>This link will expire in 1 hour.</p>
        `
    };

    await transporter.sendMail(mailOptions);
}
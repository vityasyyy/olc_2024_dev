if (process.env.NODE_ENV === 'development') {
    require('dotenv').config();
}
const nodemailer = require('nodemailer');
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
        from: '"OLConvention Ticket" <noreply-olcon@omahti.web.id>',
        to: email,
        subject: `OLConvention Ticket for ${username}`,
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OLConvention Ticket</title>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');
        body {
            font-family: "JetBrains Mono", monospace;
            background-color: #1e3a8a;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
        }
        .header {
            background-color: #1e3a8a;
            color: #ffffff;
            padding: 20px;
            text-align: center;
        }
        .logo {
            width: 200px; /* Set a fixed width */
            height: auto; /* Maintain aspect ratio */
            display: block; /* Ensures the image is centered */
            margin: 0 auto; /* Centers the image */
        }
        h1 {
            color: #ffffff;
            font-size: 24px;
            margin-bottom: 10px;
        }
        .content {
            padding: 20px;
        }
        .ticket-info {
            background-color: #f3f4f6;
            border: 2px solid #d1d5db;
            border-radius: 8px;
            padding: 15px;
            margin-top: 20px;
        }
        .button {
            display: inline-block;
            background-color: #f59e0b;
            color: #ffffff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            color: #6b7280;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>OLConvention 2024 Ticket</h1>
        </div>
        <div class="content">
            <p>Halo, ${username}. Welcome to OLCon 2024!</p>
            <p>We're excited to have you join us for this amazing event. Below are your ticket details:</p>
            <div class="ticket-info">
                <p><strong>Name:</strong> ${username}</p>
                <p><strong>Event:</strong> OLConvention 2024</p>
                <p><strong>Date:</strong> 27 Oktober 2024 dan 3 November 2024</p>
                <p><strong>Venue:</strong> Auditorium FMIPA UGM Lantai 7 dan Lantai 1</p>
            </div>
            <p>Please show this email to the gatekeeper upon arrival.</p>
            <a href=${process.env.FRONTEND_COMPLETE_URL} class="button">View Full Schedule</a>
        </div>
        <div class="footer">
            <p>Presented by OmahTI | Tingkatkan Skill IT Bersama Professional Industri</p>
            <p>© 2024 OLC. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error(`Failed to send ticket to ${email}:`, error);
        throw error; // Re-throw the error for the caller to handle
    }
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
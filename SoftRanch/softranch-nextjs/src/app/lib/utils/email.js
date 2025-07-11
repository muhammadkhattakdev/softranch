import nodemailer from 'nodemailer';

const sendEmail = async (options) => {
  // Create transporter
  let transporter;
  
  if (process.env.NODE_ENV === 'production') {
    // Production email service (e.g., SendGrid, Mailgun, etc.)
    transporter = nodemailer.createTransporter({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });
  } else {
    // Development email service (Mailtrap)
    transporter = nodemailer.createTransporter({
      host: process.env.EMAIL_HOST || 'smtp.mailtrap.io',
      port: process.env.EMAIL_PORT || 2525,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });
  }
  
  // Define email options
  const mailOptions = {
    from: process.env.EMAIL_FROM || 'SoftRanch <noreply@softranch.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.html || `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333; text-align: center; margin-bottom: 30px;">SoftRanch</h2>
          <div style="color: #666; line-height: 1.6;">
            ${options.message.replace(/\n/g, '<br>')}
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #999; font-size: 12px; text-align: center;">
            This email was sent from SoftRanch. If you didn't request this email, please ignore it.
          </p>
        </div>
      </div>
    `
  };
  
  // Send email
  await transporter.sendMail(mailOptions);
};

export default sendEmail;
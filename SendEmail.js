import nodemailer from 'nodemailer'

// Email configuration
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'zoroharshmaster@gmail.com',
		pass: '1234QWERqwer@',
	},
});

// Email content
const mailOptions = {
	from: 'zoroharshmaster@gmail.com',
	to: 'joshiharsh0506@gmail.com',
	subject: 'Example Email',
	text: 'This is the body of the email.',
};

// Send the email
transporter.sendMail(mailOptions, function (error, info) {
	if (error) {
		console.log('An error occurred while sending the email:', error);
	} else {
		console.log('Email sent successfully!', info.response);
	}
});
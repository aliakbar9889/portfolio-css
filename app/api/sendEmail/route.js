import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Step 1: Parse incoming request
    const data = await request.json();
    console.log('Data Received:', data); // Debug incoming data

    // Step 2: Setup Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER, // Ensure this is correct
        pass: process.env.EMAIL_PASS, // Ensure this is correct
      },
    });

    // Step 3: Setup Email Options
    const mailOptions = {
      from: data.email,
      to: process.env.EMAIL_USER,
      subject: `Message from ${data.firstName} ${data.lastName}`,
      text: `Phone: ${data.phone}\nMessage: ${data.message}`,
    };
    console.log('Mail Options:', mailOptions); // Debug email options

    // Step 4: Send Email
    const result = await transporter.sendMail(mailOptions);
    console.log('Email Sent Successfully:', result); // Debug email result

    // Step 5: Return Success Response
    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    // Debugging Errors
    console.error('Error in Email Sending:', error); // Log error details
    return NextResponse.json({ success: false, message: 'Error sending message' });
  }
}

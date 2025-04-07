import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import mongoose from 'mongoose';



const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

export const sendVerificationMail = async (email,token) =>{
    const verifyUrl = `http://localhost:1256/api/user/verify/${token}`;
    await transporter.sendMail({
        to: email,
        subject: 'Verify your email',
        html:`<h3>Namaste 🙏</h3><p>Click <a href="${verifyUrl}">yahan</a> to verify your email address.</p><p>Yeh link sirf 24 ghante ke liye valid hai ⏳</p>`
    })
}
import { Injectable } from '@nestjs/common';

import { MailerService } from '@nestjs-modules/mailer';
@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  // async mailAcceptedDemande(email: string, name: string ,lastName: string) {
  //   const result = await this.mailerService.sendMail({
  //     to: email,
  //     from: 'raniaelouni421@gmail.com',
  //     subject: 'Your Application Has Been Accepted ✔',
  //     text: `Dear ${name} ${lastName}, congratulations on moving forward!`,
  //     html: `
  //       <h1>Welcome to Our Team!</h1>
  //       <p>Dear ${name} ${lastName},</p>
  //       <p>We are pleased to inform you that your application has been accepted. Congratulations on making it to the next stage of our selection process!</p>
  //       <p>We will be contacting you shortly to schedule an interview. Please ensure that your contact information is up-to-date and feel free to reach out to us if you have any questions.</p>
  //       <p>Thank you for your interest in joining our team. We look forward to speaking with you soon.</p>
  //       <p>Best regards,</p>
  //       <p>The Recruitment Team</p>
  //     `,
  //   });
  //   return result;
  // }


  async mailAcceptedDemande(email: string, name: string ,lastName: string) {
    if (!email) {
      throw new Error('No email address provided');
    }

    const result = await this.mailerService.sendMail({
      to: email,
      from: 'raniaelouni421@gmail.com',
      subject: 'Your Application Has Been Accepted ✔',
      text: 'Dear Candidate, congratulations on moving forward!',
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h1 style="color: green;">Welcome to Our Team!</h1>
          <p>Dear ${name} ${lastName},</p>
          <p style="color: green;">We are pleased to inform you that your application has been accepted. Congratulations on making it to the next stage of our selection process!</p>
          <p>We will be contacting you shortly to schedule an interview. Please ensure that your contact information is up-to-date and feel free to reach out to us if you have any questions.</p>
          <p>Thank you for your interest in joining our team. We look forward to speaking with you soon.</p>
          <p>Best regards,</p>
          <p>The Recruitment Team</p>
        </div>
      `,
    });
    return result;
  }

  async mailRefusedDemande(email: string, name: string ,lastName: string) {
    if (!email) {
      throw new Error('No email address provided');
    }

    const result = await this.mailerService.sendMail({
      to: email,
      from: 'raniaelouni421@gmail.com',
      subject: 'Your Application Status - Refused',
      text: 'Dear Candidate, we regret to inform you that...',
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h1 style="color: red;">Application Status: Refused</h1>
          <p>Dear ${name} ${lastName},</p>
          <p style="color: red;">We regret to inform you that your application has not been successful this time. We appreciate your interest and the time you invested in applying.</p>
          <p>We encourage you to apply for future openings that match your skills and experiences. Thank you for your understanding.</p>
          <p>Best regards,</p>
          <p>The Recruitment Team</p>
        </div>
      `,
    });
    return result;
  }


}

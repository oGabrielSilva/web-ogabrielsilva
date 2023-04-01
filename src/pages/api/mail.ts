// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { APIResponse } from '@/models/APIResponse';
import type { NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface NextApiRequestExtended {
  body: {
    message: string;
    email: string;
    name: string;
    otherContact: string;
  };
}

export default async function handler(
  req: NextApiRequestExtended,
  res: NextApiResponse<APIResponse<null>>
) {
  const { email, message, name, otherContact } = req.body;

  const text = `
  De: ${email} - ${name};
  ---------------------------------
  Outros contatos: ${otherContact}
  ---------------------------------
  Mensagem: ${message}
  `;

  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false,
    },
  });

  const info = await transporter.sendMail({
    from: '"Gabriel" '.concat(process.env.EMAIL_USER!), // sender address
    to: 'gabriel04gh1.gh@gmail.com, g.h.silva.digital@gmail.com, odev.gabriel@gmail.com', // list of receivers
    subject: 'Mensagem de '.concat(name), // Subject line
    text, // plain text body
  });

  res.status(200).json(new APIResponse(true));
}

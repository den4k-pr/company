import { NextApiRequest, NextApiResponse } from "next"

export default function (req: NextApiRequest, res: NextApiResponse) {
    require('dotenv').config()
    
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: 'yakovden4k@gmail.com',
        pass: 'Naruto228',
      },
      secure: true,
    })
    const mailData = {
      from: 'yakovden4k@gmail.com',
      to: 'yakovden4k@gmail.com',
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`
    }
    transporter.sendMail(mailData, function (err: any, info: any) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    res.status(200).send("Email sent successfully");
}

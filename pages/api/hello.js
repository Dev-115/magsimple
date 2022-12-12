import mailer from "./email";
// import { createTestAccount, createTransport, getTestMessageUrl } from "nodemailer";


export default function handler(req, res) {
  if (req.method == "POST") {
    try {
      // res.status(200).json({ name: 'John Doe' })
      const body = req.body
      // console.log(req.body)
      res.status(200).json({ name: body.name, email: body.email, message: body.message })


      mailer(body.email, body.name, body.message).catch(console.error);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    return res.status(500).json({ message: 'Sorry Request Denied' });
  }
}

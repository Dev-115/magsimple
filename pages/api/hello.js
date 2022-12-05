import mailer from "./email";


export default function handler(req, res) {


  if (req.method == "POST") {
    try {
      // res.status(200).json({ name: 'John Doe' })
      const body = req.body

      mailer(body.Email, body.Name, body.Message).catch(console.error);
      res.status(200).json({ name: body.Name, email: body.Email, message: body.Message })
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    return res.status(500).json({ message: 'Sorry Request Denied' });
  }
}

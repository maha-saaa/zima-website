import sendgridMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";
import { ZIMAEMAIL } from "@/utils/constants";

sendgridMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, subject, message } = req.body;

  const data = {
    to: ZIMAEMAIL,
    from: ZIMAEMAIL,
    subject,
    text: message.replace(/\r\n/g, "<br />"),
  };

  try {
    await sendgridMail.send(data);
    res.json({ message: `Email has been sent` });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Error sending email" });
  }
}

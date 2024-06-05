import { handleServerError } from "./helpers/error-tracker";
import { transporter } from "./helpers/mail-transporter";

export const sendMailMessage = async (
  toEmail: string,
  subject: string,
  message: string
) => {
  try {
    const options = {
      from: process.env.GOOGLE_APP_EMAIL,
      to: toEmail,
      subject: subject,
      html: message,
    };
    const data = await transporter.sendMail(options);
    return { success: true, message: "Email sent successfully", data: data };
  } catch (error) {
    handleServerError;
    error;
  }
};

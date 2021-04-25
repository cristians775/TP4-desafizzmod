import { ejsRender } from "../utils/ejsRender.util.js";
import nodemailer from "nodemailer";
import fs from "fs";
import { EMAIL_PATH } from "../constants/email/emailPath.constant.js";

const PRODUCTS_TEMPLATE_PATH = process.cwd() + "/src/views/mail-products.ejs";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  service: "gmail",
  auth: {
    user: "cristiandesafizzmod@gmail.com",
    pass: "jjpiimjxckivnpfb",
  },
});

export const sendMail = async (products) => {
  const email = await readEmail();
  const options = await mailOptions(email, products);
  return await transporter.sendMail(options);
};

const readEmail = async () => {
  return await fs.promises.readFile(EMAIL_PATH, "utf-8");
};

const mailOptions = async (destination = null, products = []) => {
  return {
    from: '"Productos " <cristiandesafizzmod@gmail.com>',
    to: destination,
    subject: "Lista de productos",
    html: await ejsRender(PRODUCTS_TEMPLATE_PATH, { products }),
  };
};

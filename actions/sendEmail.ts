"use server";
import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import { getErrorMessage } from "@/lib/utils";
import ContactForm from "../email/ContactForm";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const senderName = formData.get("senderName");
  const senderMessage = formData.get("senderMessage");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(senderMessage, 200)) {
    return {
      error: "Invalid sender message",
    };
  }

  if (!validateString(senderName, 5000)) {
    return {
      error: "Invalid sender name",
    };
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "alanvarghesepaul29@gmail.com",
      subject: `Message from ${senderName} - AVP Portfolio website`,
      reply_to: senderEmail as string,
      react: React.createElement(ContactForm, {
        senderName: senderName as string,
        senderEmail: senderEmail as string,
        senderMessage: senderMessage as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};

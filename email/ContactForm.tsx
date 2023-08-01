import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  senderMessage: string;
  senderEmail: string;
  senderName: string;
};

export default function ContactForm({
  senderMessage,
  senderEmail,
  senderName,
}: ContactFormEmailProps) {
  return (
    <div>
      <Html>
        <Head />
        <Preview>New message from your portfolio website</Preview>
        <Tailwind>
          <Body className="bg-gray-100 text-gray-900 font-[Bai_Jamjuree]">
            <Container>
              <Section className="bg-white border border-gray-600 my-10 px-10 py-4 rounded">
                <Heading className="leading-tight text-2xl">
                  You recieved the following message from the Portfolio contact form
                </Heading>
                <Text className="font-normal text-gray-500">From {senderName}</Text>
                <Text className="text-lg text-gray-700 text-justify">{senderMessage}</Text>
                <Hr />
                <Text>Email from {senderEmail}</Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    </div>
  );
}

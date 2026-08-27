import { z } from "zod";

export const contactPayloadSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(1000),
});

export type ContactPayload = z.infer<typeof contactPayloadSchema>;

// Kept server-side only so the address never ships in the client bundle.
const RECIPIENT = ["harshbhatt7579", "gmail.com"].join("@");

export function buildMailtoLink(payload: ContactPayload | null) {
  if (!payload) return `mailto:${RECIPIENT}`;
  const subject = encodeURIComponent(`Portfolio enquiry from ${payload.name}`);
  const body = encodeURIComponent(
    `${payload.message}\n\n— ${payload.name} (${payload.email})`,
  );
  return `mailto:${RECIPIENT}?subject=${subject}&body=${body}`;
}

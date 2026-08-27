import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { buildMailtoLink, contactPayloadSchema } from "./contact.server";

export const getContactMailto = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactPayloadSchema.parse(data))
  .handler(async ({ data }) => buildMailtoLink(data));

export const getContactAddressLink = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => z.object({}).parse(data ?? {}))
  .handler(async () => buildMailtoLink(null));

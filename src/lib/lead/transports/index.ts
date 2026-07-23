import { env } from "@/lib/env";
import type { Lead, LeadTransport } from "../types";
import { telegramTransport } from "./telegram";
import { emailTransport } from "./email";
import { crmTransport } from "./crm";

const transports: Record<typeof env.LEAD_TRANSPORT, LeadTransport> = {
  telegram: telegramTransport,
  email: emailTransport,
  crm: crmTransport,
};

// Single point that decides where a lead goes. Swap via LEAD_TRANSPORT env
// or extend to fan out to several transports when a CRM is added.
export async function sendLead(lead: Lead): Promise<void> {
  await transports[env.LEAD_TRANSPORT].send(lead);
}

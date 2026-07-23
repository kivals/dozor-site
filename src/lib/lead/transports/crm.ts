import type { Lead, LeadTransport } from "../types";

// Placeholder for a future CRM integration (Bitrix24, amoCRM, etc.).
// Implement `send` here when a CRM is introduced — forms won't need changes.
export const crmTransport: LeadTransport = {
  async send(_lead: Lead) {
    throw new Error("CRM transport is not implemented yet");
  },
};

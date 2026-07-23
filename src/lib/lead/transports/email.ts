import type { Lead, LeadTransport } from "../types";

// Placeholder transport. Wire up SMTP/Resend when email delivery is needed.
export const emailTransport: LeadTransport = {
  async send(_lead: Lead) {
    throw new Error("Email transport is not implemented yet");
  },
};

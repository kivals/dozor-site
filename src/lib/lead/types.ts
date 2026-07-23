import type { LeadInput } from "./schema";

export type Lead = LeadInput;

export interface LeadTransport {
  send(lead: Lead): Promise<void>;
}

export type LeadFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; errors?: Record<string, string[]>; message?: string };

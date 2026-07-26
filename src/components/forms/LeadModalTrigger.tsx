"use client";

import { useState, type ReactNode } from "react";
import { Modal } from "@/components/ui/Modal";
import { LeadModalForm } from "./LeadModalForm";

export function LeadModalTrigger({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>

      <Modal open={open} onClose={close} label="Оставить заявку">
        <LeadModalForm onSuccess={close} />
      </Modal>
    </>
  );
}

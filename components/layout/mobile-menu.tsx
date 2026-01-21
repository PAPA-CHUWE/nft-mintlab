"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose }) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 md:hidden w-screen",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity",
          open ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Panel */}
      <div
        className={cn(
          "absolute top-0 right-0 w-full rounded-b-3xl bg-background px-6 pt-6 pb-8 shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-transform",
          open ? "translate-y-0" : "-translate-y-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="font-logo text-sm tracking-[0.22em]">
            MINTLAB
          </span>

          <button
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-10 w-10 place-items-center rounded-full hover:bg-muted"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Links */}
        <nav className="mt-8 flex flex-col gap-6 text-sm font-medium">
          <Link href="/recent" onClick={onClose} className="hover:opacity-70">
            Recent
          </Link>
          <Link href="/contact" onClick={onClose} className="hover:opacity-70">
            Contact
          </Link>
          <Link href="/help" onClick={onClose} className="hover:opacity-70">
            Help
          </Link>
          <Link href="/shop" onClick={onClose} className="hover:opacity-70">
            Shop
          </Link>
        </nav>

        {/* Footer actions */}
        <div className="mt-8 border-t pt-6">
          <button
            className="w-full rounded-full bg-black py-3 text-sm font-semibold text-white"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

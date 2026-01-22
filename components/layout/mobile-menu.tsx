"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Image from "next/image";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose }) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 md:hidden w-screen h-[calc(100vh-80px)]",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
    >
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-white backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0"
        )}
      />
      <div
        className={cn(
          "absolute inset-0 w-screen h-screen bg-background",
          "px-6 pt-6 pb-8",
          "flex flex-col",
          "transition-transform duration-300 ease-out",
          open ? "translate-y-0" : "-translate-y-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="font-logo text-sm tracking-[0.22em]">
            <Image src={'/logos/mintlab.svg'} alt="ML" height={150} width={100}/>
          </span>

          <button
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-10 w-10 place-items-center rounded-full hover:bg-muted"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-12 flex flex-col gap-8 text-base font-medium">
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

        {/* Spacer */}
        <div className="flex-1" />

        {/* Footer action */}
        <div className="pt-6 border-t">
          <button className="w-full rounded-full bg-black py-4 text-sm font-semibold text-white">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

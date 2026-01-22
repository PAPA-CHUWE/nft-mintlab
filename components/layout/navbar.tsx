"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Menu, ShoppingBag, ShoppingCart } from "lucide-react";
import MobileMenu from "./mobile-menu";
import Image from "next/image";

type NavRole = "creator" | "collector";

export default function NavBar() {
    const [role, setRole] = React.useState<NavRole>("creator");
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [menuOpen, setMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="w-full">
            <div
                className={cn(
                    "relative mx-auto flex h-[76px] w-full items-center justify-between px-4 sm:px-8",
                    "text-card-foreground",
                    isScrolled && "shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
                )}
            >
                {/* Left: logo icon only on mobile */}
                <div className="flex items-center gap-10">
                <Link href="/" className="flex items-center">
  <span className="relative block w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px]">
    <Image
      src="/logos/mintlab.svg"
      alt="MintLab"
      width={140}
      height={40}
      priority
      className="h-auto w-full object-contain"
    />
  </span>
</Link>
                    <nav className="hidden md:flex items-center gap-10 text-[14px] font-medium text-foreground/70">
                        <Link href="/recent" className="hover:text-foreground">
                            Recent
                        </Link>
                        <Link href="/contact" className="hover:text-foreground">
                            Contact
                        </Link>
                    </nav>
                </div>

                {/* Center notch/tab (always visible) */}
                <div className="absolute left-1/2 top-6 -translate-x-1/2 -translate-y-1/2">
                    <div className="rounded-b-[20px] bg-white px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.06)] sm:px-6 sm:pb-3 sm:pt-3">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <button
                                type="button"
                                onClick={() => setRole("creator")}
                                className={cn(
                                    "rounded-full font-semibold tracking-wide transition-colors",
                                    "h-8 px-3 text-[12px] sm:h-9 sm:px-5 sm:text-[14px]",
                                    role === "creator"
                                        ? "bg-black text-white hover:bg-black/90"
                                        : "bg-transparent text-foreground/70 hover:bg-muted"
                                )}
                            >
                                Creator
                            </button>

                            <button
                                type="button"
                                onClick={() => setRole("collector")}
                                className={cn(
                                    "rounded-full font-semibold tracking-wide transition-colors",
                                    "h-8 px-3 text-[12px] sm:h-9 sm:px-4 sm:text-[14px]",
                                    role === "collector"
                                        ? "bg-black text-white hover:bg-black/90"
                                        : "bg-transparent text-foreground/70 hover:bg-muted"
                                )}
                            >
                                Collector
                            </button>
                        </div>
                    </div>
                </div>


                {/* Right: mobile menu icon (mobile), full right nav (desktop) */}
                <div className="flex items-center gap-10">
                    {/* Desktop right nav */}
                    <nav className="hidden md:flex items-center gap-10 text-[14px] font-medium text-foreground/70">
                        <Link href="/help" className="hover:text-foreground">
                            Help
                        </Link>
                        <Link href="/shop" className="hover:text-foreground">
                            Shop
                        </Link>
                    </nav>

                    {/* Desktop actions */}
                    <div className="hidden md:flex items-center gap-3">
                        <Button
                            size="icon"
                            className="h-10 w-10 rounded-full bg-background text-black hover:bg-primary/20 cursor-pointer"
                            aria-label="Cart"
                        >
                            <ShoppingCart className="h-[18px] w-[18px]" />
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10 rounded-full p-0 hover:bg-muted cursor-pointer"
                            aria-label="Profile"
                        >
                            <Avatar className="h-10 w-10">
                                <AvatarImage
                                    src="https://i.pravatar.cc/100?img=48"
                                    alt="User avatar"
                                />
                                <AvatarFallback>ML</AvatarFallback>
                            </Avatar>
                        </Button>
                    </div>

                    {/* Mobile menu button (only on small screens) */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden h-10 w-10 rounded-full"
                        aria-label="Open menu"
                        onClick={() => setMenuOpen(true)}
                    >
                        <Menu className="h-5 w-5" />
                    </Button>

                    <MobileMenu
                        open={menuOpen}
                        onClose={() => setMenuOpen(false)}
                    />
                </div>
            </div>
        </header>
    );
}

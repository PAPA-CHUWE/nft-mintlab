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
                    <Link href="/" className="flex items-center gap-1">
                        <div className="flex h-10 w-7  place-items-center">
                            <svg
                                role="img"
                                aria-label="MintLab icon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                width="34"
                                height="34"
                            >
                                <title>MintLab icon</title>
                                <g transform="translate(1.4066 1.4066) scale(2.81 2.81)" fill="currentColor" fill-rule="evenodd" stroke="none">
                                    <path d="M45 90c-1.206 0-2.412-.311-3.488-.931L8.58 70.054c-2.152-1.241-3.488-3.556-3.488-6.04V25.987c0-2.485 1.337-4.8 3.489-6.041L41.512.932c2.152-1.242 4.824-1.243 6.977 0L81.42 19.945c2.151 1.241 3.488 3.556 3.488 6.041v38.027c0 2.485-1.337 4.8-3.489 6.041L48.488 89.068C47.412 89.689 46.206 90 45 90zM45 5.998c-.168 0-.336.043-.487.13L11.58 25.142c-.301.174-.488.498-.488.845v38.027c0 .347.187.671.487.844l32.933 19.015c.3.172.674.174.975 0L78.42 64.859c.301-.174.487-.497.487-.845V25.987c0-.348-.187-.671-.486-.844L45.487 6.128C45.337 6.041 45.168 5.998 45 5.998z" />
                                    <path d="M32.122 58.462c-1.019 0-1.992-.521-2.549-1.418l-7.438-11.983v10.401c0 1.657-1.343 3-3 3-1.657 0-3-1.343-3-3V34.538c0-1.34.889-2.518 2.177-2.885 1.292-.365 2.666.165 3.372 1.303l7.438 11.983V34.538c0-1.657 1.343-3 3-3 1.657 0 3 1.343 3 3v20.924c0 1.34-.889 2.518-2.177 2.885-.375.103-.652.14-.925.14z" />
                                    <path d="M42.236 58.462c-1.657 0-3-1.343-3-3V34.538c0-1.657 1.343-3 3-3h8.321c1.657 0 3 1.343 3 3s-1.343 3-3 3h-5.321v17.924c0 1.657-1.343 3-3 3z" />
                                    <path d="M50.557 48h-8.321c-1.657 0-3-1.343-3-3 0-1.657 1.343-3 3-3h8.321c1.657 0 3 1.343 3 3 0 1.657-1.343 3-3 3z" />
                                    <path d="M70.865 37.538H58.974c-1.657 0-3-1.343-3-3s1.343-3 3-3h11.891c1.657 0 3 1.343 3 3s-1.343 3-3 3z" />
                                    <path d="M64.919 58.462c-1.657 0-3-1.343-3-3V34.538c0-1.657 1.343-3 3-3 1.657 0 3 1.343 3 3v20.924c0 1.657-1.343 3-3 3z" />
                                </g>
                            </svg>

                        </div>
                        <span className="hidden md:block">
                            <Image src={'/logos/mintlab.svg'} alt="ML" height={150} width={100} />
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

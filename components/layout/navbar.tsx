"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Menu, ShoppingBag, ShoppingCart } from "lucide-react";

type NavRole = "creator" | "collector";

export default function NavBar() {
    const [role, setRole] = React.useState<NavRole>("creator");
    const [isScrolled, setIsScrolled] = React.useState(false);

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
                    <Link href="/" className="flex items-center gap-3">
                        <div className="grid h-10 w-10 place-items-center">
                            <svg
                                width="34"
                                height="18"
                                viewBox="0 0 34 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-label="MintLab"
                            >
                                <path
                                    d="M9 16C5.686 16 3 13.314 3 10C3 6.686 5.686 4 9 4C11.485 4 13.617 5.502 14.53 7.65C15.206 9.223 16.794 9.223 17.47 7.65C18.383 5.502 20.515 4 23 4C26.314 4 29 6.686 29 10C29 13.314 26.314 16 23 16C20.516 16 18.384 14.498 17.47 12.35C16.794 10.777 15.206 10.777 14.53 12.35C13.617 14.498 11.485 16 9 16Z"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        {/* Hide text on small screens */}
                        <span className="hidden  font-logo text-sm tracking-[0.22em]">
                            MINTLAB
                        </span>
                    </Link>

                    {/* Hide left nav on small screens */}
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
                    <div className="rounded-b-[20px] bg-background  px-6 pb-3 pt-3 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                        <ToggleGroup
                            variant="outline" type="single"
                            value={role}
                            onValueChange={(v) => v && setRole(v as NavRole)}
                            className=""
                            size={'lg'}
                        >
                            <ToggleGroupItem
                                value="creator"
                                className={cn(
                                    "h-9 rounded-full px-5 text-[14px] font-semibold tracking-wide",
                                    role === "creator"
                                        ? "bg-black text-white hover:bg-black/90"
                                        : "bg-transparent text-foreground/70 hover:bg-muted"
                                )}
                            >
                                Creator
                            </ToggleGroupItem>

                            <ToggleGroupItem
                                value="collector"
                                className={cn(
                                    "h-9 rounded-full px-4 text-[14px] font-semibold tracking-wide",
                                    role === "collector"
                                        ? "bg-black text-white hover:bg-black/90"
                                        : "bg-transparent text-foreground/70 hover:bg-muted"
                                )}
                            >
                                Collector
                            </ToggleGroupItem>
                        </ToggleGroup>
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
                    >
                        <Menu className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </header>
    );
}

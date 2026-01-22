"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 grid gap-8 md:grid-cols-2 md:items-center">
          {/* LEFT: copy */}
          <div className="order-2 mt-6 md:order-1 md:mt-0">
            <h5 className="max-w-xl text-4xl font-semibold leading-snug text-foreground sm:text-5xl">
              Create and sell{" "}
              <span className="bg-clip-text text-foreground/95 font-extrabold">
                NFT
              </span>{" "}
              without fee
            </h5>

            <p className="mt-4 max-w-lg text-sm text-muted-foreground">
              NFT marketplace focused on Zimbabwean creators and collectors —
              low fees, simple minting, local payments.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="default">Explore Now</Button>
              <Button variant="outline">Create NFT</Button>
            </div>

            <div className="mt-12 flex gap-8">
              <div>
                <div className="text-2xl font-semibold text-foreground">200M+</div>
                <div className="text-xs text-muted-foreground">People Joined Crypto</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-foreground">$150</div>
                <div className="text-xs text-muted-foreground">Minimum Balance</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-foreground">500M+</div>
                <div className="text-xs text-muted-foreground">Apps & Service Growing</div>
              </div>
            </div>
          </div>

          {/* RIGHT: artwork with blob behind and overlap at bottom */}
          <div className="relative order-1 flex items-center justify-center md:order-2">
            {/* blob behind — colored via currentColor (use CSS to control) */}
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="pointer-events-none absolute -right-6 -top-6 max-h-[340px] max-w-[340px] transform-gpu text-card opacity-95 md:-right-12 md:-top-12 md:h-[360px] md:w-[360px] lg:right-24 lg:-bottom-52"
              aria-hidden
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                fill="currentColor"
                d="M59.6,-49.9C71.3,-32.9,70.7,-8.4,64,12.1C57.4,32.7,44.6,49.4,26.5,60.1C8.4,70.7,-15,75.3,-35.3,67.7C-55.6,60.1,-72.7,40.3,-72.8,21.8C-72.9,3.2,-56.1,-14,-41.1,-31.8C-26.1,-49.6,-13.1,-67.9,5.4,-72.3C23.9,-76.6,47.9,-67,59.6,-49.9Z"
                transform="translate(100 100)"
              />
            </svg>

            {/* main image — overlaps blob at bottom */}
            <div className="relative z-20 -mb-6 flex w-[280px] items-end justify-center md:w-[320px] lg:w-[380px]">
              <div className="relative w-full">
                <Image
                  src="/images/nft.png"
                  alt="NFT preview"
                  width={520}
                  height={520}
                  priority
                  className="w-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
                />

              </div>
            </div>
          </div>
        </div>
      </div>

  
    </section>
  );
}

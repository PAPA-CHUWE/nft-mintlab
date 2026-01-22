import Hero from "@/components/layout/hero";
import NavBar from "@/components/layout/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-full min-h-screen overflow-x-hidden">
      <NavBar/>
      <Hero/>
    </main>
  );
}

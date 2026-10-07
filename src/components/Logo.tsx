import Image from "next/image";
import logo from "@/assets/logo.webp";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src={logo}
      alt="The Handover"
      className={className}
      priority
    />
  );
}

import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-4 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-ink/20 transition-transform hover:scale-105 lg:hidden"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}

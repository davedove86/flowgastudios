import { Facebook, Instagram, Linkedin } from "lucide-react";

export function SocialLinks() {
  return (
    <div className="socials">
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
        <Instagram size={22} strokeWidth={1.6} />
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
        <Facebook size={22} strokeWidth={1.6} />
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <Linkedin size={22} strokeWidth={1.6} />
      </a>
    </div>
  );
}

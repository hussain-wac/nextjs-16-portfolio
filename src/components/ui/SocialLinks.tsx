"use client";

import { memo } from "react";
import { useSocial } from "@/hooks";
import { GithubIcon, LinkedinIcon, TwitterIcon, DribbbleIcon } from "./Icons";

interface SocialLinksProps {
  className?: string;
}

export const SocialLinks = memo(function SocialLinks({
  className = "",
}: SocialLinksProps) {
  const social = useSocial();

  const links = [
    { href: social.github, icon: <GithubIcon />, label: "GitHub" },
    { href: social.linkedin, icon: <LinkedinIcon />, label: "LinkedIn" },
    { href: social.twitter, icon: <TwitterIcon />, label: "Twitter" },
    { href: social.dribbble, icon: <DribbbleIcon />, label: "Dribbble" },
  ];

  return (
    <div className={`flex gap-2 ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border border-white text-white hover:bg-white hover:text-black transition-colors"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
});

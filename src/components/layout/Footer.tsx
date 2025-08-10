import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { socialLinks } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {socialLinks.map((item) => {
            const IconComponent = getIconComponent(item.icon);
            return (
              <Link
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <span className="sr-only">{item.name}</span>
                <IconComponent className="h-6 w-6" aria-hidden="true" />
              </Link>
            );
          })}
          <Link
            href="mailto:sasparavinit@gmail.com"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-400">
            &copy; {currentYear}Vinit Saspara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function getIconComponent(iconName: string) {
  switch (iconName.toLowerCase()) {
    case "github":
      return Github;
    case "linkedin":
      return Linkedin;
    case "twitter":
      return Twitter;
    default:
      return Github;
  }
}

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FOOTER_SECTIONS, SOCIAL_LINKS } from "@/lib/constants";

const Footer = () => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "linkedin":
        return <FaLinkedin className="w-6 h-6" />;
      case "twitter":
        return <FaXTwitter className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-primary-green text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Logo and Contact Section */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <Image
                src="/EmaLogoFooter.png"
                alt="Ema Logo"
                width={100}
                height={40}
                className="object-contain mb-4"
              />
              <p className="text-lg font-medium">Your Universal AI Employee</p>
            </div>

            <div>
              <Link
                href="mailto:ask@ema.co"
                className="inline-block px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-primary-green transition-colors"
              >
                ask@ema.co
              </Link>
            </div>

            <div className="text-sm space-y-1">
              <p>147 Castro St, Suite 2</p>
              <p>Mountain View, CA</p>
              <p>94041</p>
            </div>

            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label={social.name}
                >
                  {getSocialIcon(social.icon)}
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links Sections */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-sm hover:underline transition-all"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-white/20 text-sm text-right">
          <p>© 2024 Ema | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

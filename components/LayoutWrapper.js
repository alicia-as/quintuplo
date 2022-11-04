import Link from "./Link";

import SectionContainer from "./SectionContainer";

import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";
import Image from "next/image";

const siteMetadata = {
  title: "Next.js Starter Blog",
  description: "A starter blog demonstrating what Next.js can do.",
  headerTitle: "Fem sporter på én dag",
};
export const headerNavLinks = [
  { href: "/archive", title: "Arkiv" },
  { href: "/about", title: "Om quintuplo" },
];

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3 pt-3">
                  <Image src="/logo.svg" alt="Logo" width={32} height={32} />
                </div>
                {typeof siteMetadata.headerTitle === "string" ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;

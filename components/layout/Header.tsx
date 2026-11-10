"use client";

import { SiteHeader } from "./SiteHeader";

// The shared Pulsar header (SiteHeader.tsx is identical on every site).
// This site is its own origin, so the other sites' links are absolute.
export function Header() {
  return <SiteHeader current="dev" prefix="https://pulsarnative.com" logoSrc="/logos/pulsar.png" />;
}

export default Header;

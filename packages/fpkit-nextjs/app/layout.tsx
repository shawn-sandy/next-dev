import React from "react";
import "@shawnsandy/first-paint/dist/css/libs/all.min.css";

import NavList from "@/components/next/nav-list";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NavList />
      <body>{children}</body>
    </html>
  );
}

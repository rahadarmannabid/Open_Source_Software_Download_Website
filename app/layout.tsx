import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Expert Goggles - Interactive Data Visualization Research Tool | Temple University HCI Lab",
  description: "An open-source research tool for learning data visualization, developed by Temple University's Human-Computer Interaction Lab. Evidence-based interactive learning for researchers, educators, and students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}


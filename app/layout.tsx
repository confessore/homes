import GoogleAnalytics from "@/components/google_analytics";
import "./globals.css";
import type { Metadata } from "next";
import { Akshar } from "next/font/google";
import Backdrop from "@/components/backdrop";
import MainWrapper from "@/components/main_wrapper";
import Overlay from "@/components/overlay";
import FlexColumn from "@/components/flex_column";

const akshar = Akshar({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Balanced Solutions Software - Seamless Development and Hosting Solutions for Web, Mobile, and Desktop Applications",
  description:
    "We shall handle the nerd stuff. Elevate your digital presence with our expert development and hosting services. From web to mobile to desktop, we deliver tailored solutions for optimal performance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={akshar.className}>
        <MainWrapper>
          <Overlay />
          <Backdrop>
            {children}
            <FlexColumn></FlexColumn>
          </Backdrop>
        </MainWrapper>
      </body>
      <GoogleAnalytics />
    </html>
  );
}

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
    "Homes by Balanced Solutions",
  description:
    "Homes by Balanced Solutions - For Sale by Owner",
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
          </Backdrop>
        </MainWrapper>
      </body>
      <GoogleAnalytics />
    </html>
  );
}

import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const OutfitFunc = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const OvoFunc = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio App",
  description: "a system to show all my works",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${OutfitFunc.className} ${OvoFunc.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

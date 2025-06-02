import { Karla, Plus_Jakarta_Sans, Nunito_Sans } from "next/font/google";

export const karlaFont = Karla({
  subsets: ["latin"],
  weight: "400",
});

export const plusJakartaSansGFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "400",
});

export const nunitoSansFont = Nunito_Sans({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-nunito-sans",
  display: "swap",
});
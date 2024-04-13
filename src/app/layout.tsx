import { Inter } from "next/font/google";
import { DeckContextProvider } from "~/context/DeckContext";
import "~/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Graph Guesser",
  description: "Guess what the plots mean!",
  icons: [{ rel: "icon", url: "/front-page.webp" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DeckContextProvider>
      <html lang="en">
        <body
          className={`font-sans ${inter.variable} flex min-h-screen flex-col`}
        >
          {children}
        </body>
      </html>
    </DeckContextProvider>
  );
}

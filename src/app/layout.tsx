import { Inter, Poppins } from "next/font/google"
import { cn } from "~/lib/utils"
import "~/styles/globals.css"

const body = Inter({
  subsets: ["latin"],
})

const title = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--title",
})

export const metadata = {
  title: "Graph Guesser",
  description: "Guess what the plots mean!",
  icons: [{ rel: "icon", url: "/front-page.webp" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(body.className, title.variable)}>
      <body>{children}</body>
    </html>
  )
}

import { Inter } from "next/font/google";
import "./globals.css";
import { ActiveLink } from "./components/ActiveLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Components",
  description: "Radix UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <ActiveLink href="/">Homepage</ActiveLink>
          <ActiveLink href="/slow">Slow</ActiveLink>
          <ActiveLink href="/fast">Fast</ActiveLink>
          <ActiveLink href="/posts">Posts</ActiveLink>
          <ActiveLink href="/posts/101">No Post</ActiveLink>
          <ActiveLink href="/literallyanyotherpage">Not Found</ActiveLink>
        </nav>

        {children}
      </body>
    </html>
  );
}

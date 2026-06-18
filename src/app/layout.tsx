import "./globals.css";
import Header from "@/components/storefront/Header";
import Footer from "@/components/storefront/Footer";

export const metadata = {
  title: "LAAM Clone Store",
  description: "Premium Fashion Marketplace"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>

        <Header />

        <main>
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}

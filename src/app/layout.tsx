import "./globals.css";
import Header from "@/components/storefront/Header";
import Footer from "@/components/storefront/Footer";

export const metadata = {
  title: "Product of Pakistan Store",
  description: "Premium Products of Pakistan"
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

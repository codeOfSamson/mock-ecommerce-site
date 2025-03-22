import Navbar from "@/components/Navbar";
import "./globals.css";
import { CartProvider } from "@/app/context/CartContext"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider> 
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}

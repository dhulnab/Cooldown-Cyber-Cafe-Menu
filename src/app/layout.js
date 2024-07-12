import Header from "@/component/header/Header.jsx";
import "./globals.css";
import Footer from "@/component/footer/Footer.jsx";

export const metadata = {
  title: "Cooldown cafe menu",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className="bgColor">
        {children}
        <Footer />
        <Header />
      </body>
    </html>
  );
}

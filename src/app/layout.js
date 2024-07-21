import "./globals.css";

export const metadata = {
  title: "Cooldown cafe menu",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className="bgColor">{children}</body>
    </html>
  );
}

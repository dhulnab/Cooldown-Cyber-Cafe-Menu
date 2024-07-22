import ProductsHeader from "@/component/productsHeader/ProductsHeader";
import Navbar from "@/component/navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <div className="bgColor">
      <ProductsHeader />
      <Navbar />
      {children}
    </div>
  );
}

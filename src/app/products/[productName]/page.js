import ProductsHeader from "@/component/productsHeader/ProductsHeader";
import styles from "./page.module.css";
import Navbar from "@/component/navbar/Navbar";
import ProductsGrid from "@/component/productsGrid/ProductsGrid";
export const metadata = {
  title: "menu",
  description: "",
};
export default function Products({ params }) {
  return (
    <main className={styles.main}>
      <ProductsHeader />
      <Navbar />
      <ProductsGrid productName={params.productName} />
    </main>
  );
}

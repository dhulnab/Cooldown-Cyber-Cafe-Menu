import ProductsHeader from "@/component/productsHeader/ProductsHeader";
import styles from "./page.module.css";
import Container from "@/component/container/Container";
import Navbar from "@/component/navbar/Navbar";
import ProductsGrid from "@/component/productsGrid/ProductsGrid";

export default function Home() {
  return (
    <main className={styles.main}>
      <ProductsHeader />
      <Navbar />
      <ProductsGrid/>
    </main>
  );
}

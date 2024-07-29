import Navbar from "@/component/navbar/Navbar";
import ProductsGrid from "@/component/productsGrid/ProductsGrid";
import ProductsHeader from "@/component/productsHeader/ProductsHeader";


export const metadata = {
  title: "المنيو",
  description: "",
};
const fetchProducts = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}main/products/api`, {
      next: { revalidate: 7200 },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
const Products = async () => {
  const items = await fetchProducts();
  return (
    <div>
      <ProductsHeader />
      <Navbar />
      <ProductsGrid items={items} />
    </div>
  );
};

export default Products;

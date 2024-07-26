import ProductsGrid from "@/component/productsGrid/ProductsGrid";
import EntertainmentNavbar from "../../../component/navbar/EntertainmentNavbar";
import PageNameRedetection from "@/component/PageNameRedetection";
import EntertainmentHeader from "../../../component/entertainmentHeader/EntertainmentHeader";

export const metadata = {
  title: "ترفية",
  description: "",
};
const fetchProducts = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}main/entertainment/api`,
      {
        next: { revalidate: 10 },
      }
    );
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
const Entertainment = async () => {
  const items = await fetchProducts();
  return (
    <div>
      <EntertainmentHeader />
      <PageNameRedetection />
      <EntertainmentNavbar />
      <ProductsGrid entertainment={items} />
    </div>
  );
};

export default Entertainment;

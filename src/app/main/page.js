import Container from "@/component/container/Container";
import styles from "./page.module.css";
import Image from "next/image";
import Categories from "@/component/categories/Categories";
import Banner from "@/component/banner/Banner";
import PageNameRedetection from "@/component/PageNameRedetection";

export const metadata = {
  title: "الرئيسية",
  description: "",
};
export default function Home() {
  return (
    <div className={styles.main}>
      <Container>
        <PageNameRedetection />
        <div className={styles.logo}>
          <Image src="/logo.png" alt="logo" width={100} height={100} />
          <p>
            <span>COOLDOWN</span>
            <br />
            مرحباً بك
          </p>
        </div>
        <Banner />
        <Categories />
      </Container>
    </div>
  );
}

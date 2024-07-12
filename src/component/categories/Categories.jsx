"use client";
import React from "react";
import styles from "./Categories.module.css";
import Container from "../container/Container";
import FiCoffee from "../../../public/hot_drinks.svg";
import crosvg from "../../../public/cro.svg";
import hookah from "../../../public/hookah.svg";
import fraptchino from "../../../public/fraptchino.svg";
import iceCoffee from "../../../public/ice_coffee.svg";
import milkshake from "../../../public/milkshake.svg";
import smoothie from "../../../public/smoothie.svg";
import drink from "../../../public/drink.svg";
import mojito from "../../../public/mojito.svg";
import icedrink from "../../../public/ice-drink.svg";
import Image from "next/image";
import Link from "next/link";
import { useGlobalStates } from "@/globalState";

function Categories() {
  const { setArPageName } = useGlobalStates();
  return (
    <Container>
      <div className={styles.main}>
        <p className={styles.menu}>المنيو:</p>
        <div className={styles.grid}>
          <Link
            href={`/products/drinks`}
            onClick={() => setArPageName("العصائر الطبيعية")}
          >
            <div className={styles.item}>
              <span>
                <Image src={drink} alt="coffee" width={45} height={45} />
              </span>
              <p>العصائر الطبيعية</p>
            </div>
          </Link>
          <Link
            href={`/products/hotdrinks`}
            onClick={() => setArPageName("المشروبات الساخنة")}
          >
            <div className={styles.item}>
              <span>
                <Image src={FiCoffee} alt="coffee" width={45} height={45} />
              </span>
              <p>المشروبات الساخنة</p>
            </div>
          </Link>

          <Link
            href={`/products/mojito`}
            onClick={() => setArPageName("كلاسك موهيتو")}
          >
            <div className={styles.item}>
              <span>
                <Image src={mojito} alt="coffee" width={45} height={45} />
              </span>
              <p>كلاسك موهيتو</p>
            </div>
          </Link>
          <Link
            href={`/products/smoothies`}
            onClick={() => setArPageName("السموذيات")}
          >
            <div className={styles.item}>
              <span>
                <Image src={smoothie} alt="coffee" width={45} height={45} />
              </span>
              <p>السموذيات</p>
            </div>
          </Link>

          <Link
            href={`/products/icedrinks`}
            onClick={() => setArPageName("المشروبات الباردة")}
          >
            <div className={styles.item}>
              <span>
                <Image src={icedrink} alt="coffee" width={45} height={45} />
              </span>
              <p>المشروبات الباردة</p>
            </div>
          </Link>

          <Link
            href={`/products/milkshake`}
            onClick={() => setArPageName("ميلك شيك")}
          >
            <div className={styles.item}>
              <span>
                <Image src={milkshake} alt="coffee" width={45} height={45} />
              </span>
              <p>ميلك شيك</p>
            </div>
          </Link>

          <Link
            href={`/products/icecoffee`}
            onClick={() => setArPageName("القهوة المثلجة")}
          >
            <div className={styles.item}>
              <span>
                <Image src={iceCoffee} alt="coffee" width={45} height={45} />
              </span>
              <p>القهوة المثلجة</p>
            </div>
          </Link>

          <Link
            href={`/products/fraptchino`}
            onClick={() => setArPageName("فرابتشينو")}
          >
            <div className={styles.item}>
              <span>
                <Image src={fraptchino} alt="coffee" width={45} height={45} />
              </span>
              <p>فرابتشينو</p>
            </div>
          </Link>

          <Link
            href={`/products/pastries`}
            onClick={() => setArPageName("المعجنات")}
          >
            <div className={styles.item}>
              <span>
                <Image src={crosvg} alt="cro" width={45} height={45} />
              </span>
              <p>المعجنات</p>
            </div>
          </Link>
          <Link
            href={`/products/hookah`}
            onClick={() => setArPageName("الاراكيل")}
          >
            <div className={styles.item}>
              <span>
                <Image src={hookah} alt="cro" width={45} height={45} />
              </span>
              <p>الاراكيل</p>
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Categories;

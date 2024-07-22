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
import cooldownMojito from "../../../public/cooldownMojito.svg";
import yogurt from "../../../public/yogurt.svg";
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
            href={`/main/products/drinks`}
            onClick={() => setArPageName("العصائر الطبيعية")}
          >
            <div className={styles.item}>
              <span>
                <Image src={drink} alt="coffee" width={45} height={45} priority/>
              </span>
              <p>العصائر الطبيعية</p>
            </div>
          </Link>
          <Link
            href={`/main/products/hotdrinks`}
            onClick={() => setArPageName("المشروبات الساخنة")}
          >
            <div className={styles.item}>
              <span>
                <Image priority src={FiCoffee} alt="coffee" width={45} height={45} />
              </span>
              <p>المشروبات الساخنة</p>
            </div>
          </Link>

          <Link
            href={`/main/products/mojito`}
            onClick={() => setArPageName("كلاسك موهيتو")}
          >
            <div className={styles.item}>
              <span>
                <Image priority src={mojito} alt="coffee" width={45} height={45} />
              </span>
              <p>كلاسك موهيتو</p>
            </div>
          </Link>
          <Link
            href={`/main/products/cooldownMojito`}
            onClick={() => setArPageName("كولداون موهيتو")}
          >
            <div className={styles.item}>
              <span>
                <Image priority
                  src={cooldownMojito}
                  alt="coffee"
                  width={45}
                  height={45}
                />
              </span>
              <p>كولداون موهيتو</p>
            </div>
          </Link>
          <Link
            href={`/main/products/smoothies`}
            onClick={() => setArPageName("السموذيات")}
          >
            <div className={styles.item}>
              <span>
                <Image priority src={smoothie} alt="coffee" width={45} height={45} />
              </span>
              <p>السموذيات</p>
            </div>
          </Link>

          <Link
            href={`/main/products/icedrinks`}
            onClick={() => setArPageName("المشروبات الباردة")}
          >
            <div className={styles.item}>
              <span>
                <Image priority src={icedrink} alt="coffee" width={45} height={45} />
              </span>
              <p>المشروبات الباردة</p>
            </div>
          </Link>

          <Link
            href={`/main/products/milkshake`}
            onClick={() => setArPageName("ميلك شيك")}
          >
            <div className={styles.item}>
              <span>
                <Image priority src={milkshake} alt="coffee" width={45} height={45} />
              </span>
              <p>ميلك شيك</p>
            </div>
          </Link>
          <Link
            href={`/main/products/yogurtShake`}
            onClick={() => setArPageName("يوكرت شيك")}
          >
            <div className={styles.item}>
              <span>
                <Image priority src={yogurt} alt="coffee" width={40} height={40} />
              </span>
              <p>يوكرت شيك</p>
            </div>
          </Link>

          <Link
            href={`/main/products/icecoffee`}
            onClick={() => setArPageName("القهوة المثلجة")}
          >
            <div className={styles.item}>
              <span>
                <Image priority src={iceCoffee} alt="coffee" width={40} height={40} />
              </span>
              <p>القهوة المثلجة</p>
            </div>
          </Link>

          <Link
            href={`/main/products/fraptchino`}
            onClick={() => setArPageName("فرابتشينو")}
          >
            <div className={styles.item}>
              <span>
                <Image priority src={fraptchino} alt="coffee" width={45} height={45} />
              </span>
              <p>فرابتشينو</p>
            </div>
          </Link>

          <Link
            href={`/main/products/pastries`}
            onClick={() => setArPageName("المعجنات")}
          >
            <div className={styles.item}>
              <span>
                <Image priority src={crosvg} alt="cro" width={45} height={45} />
              </span>
              <p>المعجنات</p>
            </div>
          </Link>
          <Link
            href={`/main/products/hookah`}
            onClick={() => setArPageName("الاراكيل")}
          >
            <div className={styles.item}>
              <span>
                <Image priority src={hookah} alt="cro" width={45} height={45} />
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

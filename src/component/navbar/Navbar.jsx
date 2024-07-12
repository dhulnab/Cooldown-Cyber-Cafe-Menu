"use client";
import React from "react";
import styles from "./Navbar.module.css";
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

function Navbar() {
  const { arPageName, setArPageName } = useGlobalStates();
  return (
    <div className={styles.nav}>
      <Link
        href={`/products/drinks`}
        className={arPageName === "العصائر الطبيعية" ? styles.active : null}
        onClick={() => setArPageName("العصائر الطبيعية")}
      >
        <div className={styles.item}>
          <Image src={drink} alt="coffee" width={19} height={19} />
          <p>العصائر الطبيعية</p>
        </div>
      </Link>
      <Link
        href={`/products/hotdrinks`}
        className={arPageName === "المشروبات الساخنة" ? styles.active : null}
        onClick={() => setArPageName("المشروبات الساخنة")}
      >
        <div className={styles.item}>
          <Image src={FiCoffee} alt="coffee" width={19} height={19} />
          <p>المشروبات الساخنة</p>
        </div>
      </Link>
      <Link
        href={`/products/mojito`}
        className={arPageName === "كلاسك موهيتو" ? styles.active : null}
        onClick={() => setArPageName("كلاسك موهيتو")}
      >
        <div className={styles.item}>
          <Image src={mojito} alt="coffee" width={19} height={19} />
          <p>كلاسك موهيتو</p>
        </div>
      </Link>
      <Link
        href={`/products/smoothies`}
        className={arPageName === "السموذيات" ? styles.active : null}
        onClick={() => setArPageName("السموذيات")}
      >
        <div className={styles.item}>
          <Image src={smoothie} alt="coffee" width={19} height={19} />
          <p>السموذيات</p>
        </div>
      </Link>
      <Link
        href={`/products/icedrinks`}
        className={arPageName === "المشروبات الباردة" ? styles.active : null}
        onClick={() => setArPageName("المشروبات الباردة")}
      >
        <div className={styles.item}>
          <Image src={icedrink} alt="coffee" width={19} height={19} />
          <p>المشروبات الباردة</p>
        </div>
      </Link>
      <Link
        href={`/products/milkshake`}
        className={arPageName === "ميلك شيك" ? styles.active : null}
        onClick={() => setArPageName("ميلك شيك")}
      >
        <div className={styles.item}>
          <Image src={milkshake} alt="coffee" width={19} height={19} />
          <p>ميلك شيك</p>
        </div>
      </Link>
      <Link
        href={`/products/icecoffee`}
        className={arPageName === "القهوة المثلجة" ? styles.active : null}
        onClick={() => setArPageName("القهوة المثلجة")}
      >
        <div className={styles.item}>
          <Image src={iceCoffee} alt="coffee" width={19} height={19} />
          <p>القهوة المثلجة</p>
        </div>
      </Link>
      <Link
        href={`/products/fraptchino`}
        className={arPageName === "فرابتشينو" ? styles.active : null}
        onClick={() => setArPageName("فرابتشينو")}
      >
        <div className={styles.item}>
          <Image src={fraptchino} alt="coffee" width={19} height={19} />
          <p>فرابتشينو</p>
        </div>
      </Link>
      <Link
        href={`/products/pastries`}
        className={arPageName === "المعجنات" ? styles.active : null}
        onClick={() => setArPageName("المعجنات")}
      >
        <div className={styles.item}>
          <Image src={crosvg} alt="coffee" width={19} height={19} />
          <p>المعجنات</p>
        </div>
      </Link>
      <Link
        href={`/products/hookah`}
        className={arPageName === "الاراكيل" ? styles.active : null}
        onClick={() => setArPageName("الاراكيل")}
      >
        <div className={styles.item}>
          <Image src={hookah} alt="coffee" width={19} height={19} />
          <p>الاراكيل</p>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;

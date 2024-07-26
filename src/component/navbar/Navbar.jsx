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
import cooldownMojito from "../../../public/cooldownMojito.svg";
import yogurt from "../../../public/yogurt.svg";
import icedrink from "../../../public/ice-drink.svg";
import Image from "next/image";
import Link from "next/link";
import { useGlobalStates } from "@/globalState";

function Navbar() {
  const { arPageName, setArPageName, setProductPage } = useGlobalStates();
  return (
    <div className={styles.nav}>
      <div
        className={arPageName === "العصائر الطبيعية" ? styles.active : null}
        onClick={() => {
          setProductPage("drinks");
          setArPageName("العصائر الطبيعية");
        }}
      >
        <div className={styles.item}>
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={drink}
            alt="coffee"
            width={23}
            height={23}
          />
          <p style={{ marginRight: "0px" }}>العصائر الطبيعية</p>
        </div>
      </div>
      <div
        className={arPageName === "المشروبات الساخنة" ? styles.active : null}
        onClick={() => {
          setProductPage("hotdrinks");
          setArPageName("المشروبات الساخنة");
        }}
      >
        <div className={styles.item}>
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={FiCoffee}
            alt="coffee"
            width={19}
            height={19}
          />
          <p>المشروبات الساخنة</p>
        </div>
      </div>
      <div
        className={arPageName === "كلاسك موهيتو" ? styles.active : null}
        onClick={() => {
          setProductPage("mojito");
          setArPageName("كلاسك موهيتو");
        }}
      >
        <div className={styles.item}>
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={mojito}
            alt="coffee"
            width={19}
            height={19}
          />
          <p>كلاسك موهيتو</p>
        </div>
      </div>
      <div
        className={arPageName === "كولداون موهيتو" ? styles.active : null}
        onClick={() => {
          setProductPage("cooldownMojito");
          setArPageName("كولداون موهيتو");
        }}
      >
        <div className={styles.item}>
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={cooldownMojito}
            alt="coffee"
            width={19}
            height={19}
          />
          <p>كولداون موهيتو</p>
        </div>
      </div>
      <div
        className={arPageName === "السموذيات" ? styles.active : null}
        onClick={() => {
          setProductPage("smoothies");
          setArPageName("السموذيات");
        }}
      >
        <div className={styles.item}>
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={smoothie}
            alt="coffee"
            width={19}
            height={19}
          />
          <p>السموذيات</p>
        </div>
      </div>
      <div
        className={arPageName === "المشروبات الباردة" ? styles.active : null}
        onClick={() => {
          setProductPage("icedrinks");
          setArPageName("المشروبات الباردة");
        }}
      >
        <div className={styles.item}>
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={icedrink}
            alt="coffee"
            width={19}
            height={19}
          />
          <p>المشروبات الباردة</p>
        </div>
      </div>
      <div
        className={arPageName === "ميلك شيك" ? styles.active : null}
        onClick={() => {
          setProductPage("milkshake");
          setArPageName("ميلك شيك");
        }}
      >
        <div className={styles.item}>
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={milkshake}
            alt="coffee"
            width={19}
            height={19}
          />
          <p>ميلك شيك</p>
        </div>
      </div>
      <div
        className={arPageName === "يوكرت شيك" ? styles.active : null}
        onClick={() => {
          setProductPage("yogurtShake");
          setArPageName("يوكرت شيك");
        }}
      >
        <div className={styles.item}>
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={yogurt}
            alt="coffee"
            width={19}
            height={19}
          />
          <p>يوكرت شيك</p>
        </div>
      </div>
      <div
        className={arPageName === "القهوة المثلجة" ? styles.active : null}
        onClick={() => {
          setProductPage("icecoffee");
          setArPageName("القهوة المثلجة");
        }}
      >
        <div className={styles.item}>
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={iceCoffee}
            alt="coffee"
            width={19}
            height={19}
          />
          <p>القهوة المثلجة</p>
        </div>
      </div>
      <div
        className={arPageName === "فرابتشينو" ? styles.active : null}
        onClick={() => {
          setProductPage("fraptchino");
          setArPageName("فرابتشينو");
        }}
      >
        <div className={styles.item}>
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={fraptchino}
            alt="coffee"
            width={19}
            height={19}
          />
          <p>فرابتشينو</p>
        </div>
      </div>
      <div
        className={arPageName === "المعجنات" ? styles.active : null}
        onClick={() => {
          setProductPage("pastries");
          setArPageName("المعجنات");
        }}
      >
        <div className={styles.item}>
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={crosvg}
            alt="coffee"
            width={19}
            height={19}
          />
          <p>المعجنات</p>
        </div>
      </div>
      <div
        className={arPageName === "الاراكيل" ? styles.active : null}
        onClick={() => {
          setProductPage("hookah");
          setArPageName("الاراكيل");
        }}
      >
        <div className={styles.item}>
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={hookah}
            alt="coffee"
            width={19}
            height={19}
          />
          <p>الاراكيل</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

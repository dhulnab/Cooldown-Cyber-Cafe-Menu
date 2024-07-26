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
  const { setArPageName, setProductPage } = useGlobalStates();
  return (
    <Container>
      <div className={styles.main}>
        <p className={styles.menu}>المنيو:</p>
        <div className={styles.grid}>
          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("drinks");
              setArPageName("العصائر الطبيعية");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={drink}
                  alt="coffee"
                  width={45}
                  height={45}
                  priority
                />
              </span>
              <p>العصائر الطبيعية</p>
            </div>
          </Link>
          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("hotdrinks");
              setArPageName("المشروبات الساخنة");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={FiCoffee}
                  alt="coffee"
                  width={45}
                  height={45}
                />
              </span>
              <p>المشروبات الساخنة</p>
            </div>
          </Link>

          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("mojito");
              setArPageName("كلاسك موهيتو");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={mojito}
                  alt="coffee"
                  width={45}
                  height={45}
                />
              </span>
              <p>كلاسك موهيتو</p>
            </div>
          </Link>
          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("cooldownMojito");
              setArPageName("كولداون موهيتو");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
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
            href={`/main/products`}
            onClick={() => {
              setProductPage("smoothies");
              setArPageName("السموذيات");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={smoothie}
                  alt="coffee"
                  width={45}
                  height={45}
                />
              </span>
              <p>السموذيات</p>
            </div>
          </Link>

          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("icedrinks");
              setArPageName("المشروبات الباردة");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={icedrink}
                  alt="coffee"
                  width={45}
                  height={45}
                />
              </span>
              <p>المشروبات الباردة</p>
            </div>
          </Link>

          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("milkshake");
              setArPageName("ميلك شيك");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={milkshake}
                  alt="coffee"
                  width={45}
                  height={45}
                />
              </span>
              <p>ميلك شيك</p>
            </div>
          </Link>
          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("yogurtShake");
              setArPageName("يوكرت شيك");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={yogurt}
                  alt="coffee"
                  width={40}
                  height={40}
                />
              </span>
              <p>يوكرت شيك</p>
            </div>
          </Link>

          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("icecoffee");
              setArPageName("القهوة المثلجة");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={iceCoffee}
                  alt="coffee"
                  width={40}
                  height={40}
                />
              </span>
              <p>القهوة المثلجة</p>
            </div>
          </Link>

          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("fraptchino");
              setArPageName("فرابتشينو");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={fraptchino}
                  alt="coffee"
                  width={45}
                  height={45}
                />
              </span>
              <p>فرابتشينو</p>
            </div>
          </Link>

          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("pastries");
              setArPageName("المعجنات");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={crosvg}
                  alt="cro"
                  width={45}
                  height={45}
                />
              </span>
              <p>المعجنات</p>
            </div>
          </Link>
          <Link
            href={`/main/products`}
            onClick={() => {
              setProductPage("hookah");
              setArPageName("الاراكيل");
            }}
          >
            <div className={styles.item}>
              <span>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={hookah}
                  alt="cro"
                  width={45}
                  height={45}
                />
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

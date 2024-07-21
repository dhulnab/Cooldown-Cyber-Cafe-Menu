"use client";
import React from "react";
import styles from "./Header.module.css";
import Container from "../container/Container";
import menu from "@/../../public/menu.svg";
import game from "@/../../public/game.svg";
import about from "@/../../public/about.svg";
import rating from "@/../../public/rating.svg";
import Image from "next/image";
import Link from "next/link";
import { useGlobalStates } from "@/globalState";

function Header() {
  const { page, setPage } = useGlobalStates();
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.content}>
          <ul>
            <Link href="/main" onClick={() => setPage("Home")}>
              <li className={page === "Home" ? styles.active : null}>
                <p>الرئيسية</p>
                <Image src={menu} alt="menu" width={28} height={28} />
              </li>
            </Link>
            <Link href="/main/gaming" onClick={() => setPage("Gaming")}>
              <li className={page === "Gaming" ? styles.active : null}>
                <p>گيمنگ</p>
                <Image src={game} alt="menu" width={20} height={20} />
              </li>
            </Link>

            <Link href="/main/aboutus" onClick={() => setPage("About")}>
              <li className={page === "About" ? styles.active : null}>
                <p>من نحن</p>
                <Image src={about} alt="menu" width={19} height={19} />
              </li>
            </Link>

            <Link href="/main/rating" onClick={() => setPage("Rating")}>
              <li className={page === "Rating" ? styles.active : null}>
                <p>التقيم</p>
                <Image src={rating} alt="menu" width={18.5} height={18.5} />
              </li>
            </Link>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Header;

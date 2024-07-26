"use client";
import React, { useEffect } from "react";
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
  const { page, setPage, setArPageName, setEntertainmentPage } =
    useGlobalStates();
  useEffect(() => {}, [page]);
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.content}>
          <ul>
            <Link
              href="/main"
              onClick={() => {
                setPage("main");
              }}
            >
              <li className={page === "main" ? styles.active : null}>
                <p>المنيو</p>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={menu}
                  alt="menu"
                  width={28}
                  height={28}
                />
              </li>
            </Link>
            <Link
              href="/main/entertainment"
              onClick={() => {
                setPage("entertainment");
                setArPageName("PC's");
                setEntertainmentPage("PC");
              }}
            >
              <li className={page === "entertainment" ? styles.active : null}>
                <p>ترفية</p>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={game}
                  alt="menu"
                  width={20}
                  height={20}
                />
              </li>
            </Link>

            <Link
              href="/main/aboutus"
              onClick={() => {
                setPage("aboutus");
              }}
            >
              <li className={page === "aboutus" ? styles.active : null}>
                <p>من نحن</p>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={about}
                  alt="menu"
                  width={19}
                  height={19}
                />
              </li>
            </Link>

            <Link
              href="/main/rating"
              onClick={() => {
                setPage("rating");
              }}
            >
              <li className={page === "rating" ? styles.active : null}>
                <p>التقيم</p>
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={rating}
                  alt="menu"
                  width={18.5}
                  height={18.5}
                />
              </li>
            </Link>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Header;

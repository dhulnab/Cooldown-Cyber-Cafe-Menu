"use client";
import React from "react";
import styles from "./Navbar.module.css";
import { useGlobalStates } from "@/globalState";
import Image from "next/image";
import pc from "../../../public/pc.svg";
import ps5 from "../../../public/ps5.svg";
import cinema from "../../../public/cinema.svg";
import Billiard from "../../../public/8.svg";
import vr from "../../../public/vr.svg";

export default function EntertainmentNavbar() {
  const { entertainmentPage, setEntertainmentPage, arPageName, setArPageName } =
    useGlobalStates();
  return (
    <div className={styles.nav}>
      <div
        className={entertainmentPage === "PC" ? styles.active : null}
        onClick={() => {
          setEntertainmentPage("PC");
          setArPageName("PC's");
        }}
      >
        <div className={styles.item}>
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={pc}
            alt="coffee"
            width={23}
            height={23}
          />
          <p style={{ marginRight: "12px" }}>PC&apos;s</p>
        </div>
      </div>
      <div
        className={entertainmentPage === "PS5" ? styles.active : null}
        onClick={() => {
          setEntertainmentPage("PS5");
          setArPageName("Playstation 5");
        }}
      >
        <div className={styles.item}>
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={ps5}
            alt="coffee"
            width={23}
            height={23}
          />
          <p style={{ marginRight: "8px" }}>Playstation 5</p>
        </div>
      </div>
      <div
        className={entertainmentPage === "Cinema" ? styles.active : null}
        onClick={() => {
          setEntertainmentPage("Cinema");
          setArPageName("سينما");
        }}
      >
        <div className={styles.item}>
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={cinema}
            alt="coffee"
            width={23}
            height={23}
          />
          <p style={{ marginRight: "12px" }}>سينما</p>
        </div>
      </div>
      <div
        className={entertainmentPage === "Billiard" ? styles.active : null}
        onClick={() => {
          setEntertainmentPage("Billiard");
          setArPageName("بليارد");
        }}
      >
        <div className={styles.item}>
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={Billiard}
            alt="coffee"
            width={23}
            height={23}
          />
          <p style={{ marginRight: "12px" }}>بليارد</p>
        </div>
      </div>
      <div
        className={entertainmentPage === "VR" ? styles.active : null}
        onClick={() => {
          setEntertainmentPage("VR");
          setArPageName("الواقع الافتراضي");
        }}
      >
        <div className={styles.item}>
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={vr}
            alt="coffee"
            width={23}
            height={23}
          />
          <p style={{ marginRight: "8px" }}>الواقع الافتراضي</p>
        </div>
      </div>
    </div>
  );
}

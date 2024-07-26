import RatingForm from "@/component/ratingForm/RatingForm";
import React from "react";
import styles from "./page.module.css";
import PageNameRedetection from "@/component/PageNameRedetection";

export const metadata = {
  title: "التقييم",
  description: "",
};

export default function ContactUs() {
  return (
    <div className={styles.main}>
      <PageNameRedetection />
      <RatingForm />
    </div>
  );
}

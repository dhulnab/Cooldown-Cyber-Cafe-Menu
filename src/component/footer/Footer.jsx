import React from "react";
import Container from "../container/Container";
import styles from "./Footer.module.css";


function Footer() {
  return (
    <Container>
      <div className={styles.footer}>
        <div className={styles.head2}>Dhulfiqar Ali</div>
        <div className={styles.head3}>964 780 024 4004</div>
      </div>
    </Container>
  );
}

export default Footer;

import React from "react";
import Container from "../container/Container";
import styles from "./Footer.module.css";

function Footer({ Style }) {
  return (
    <Container>
      <div style={Style} className={styles.footer}>
        <div className={styles.head2}>Dhulfiqar Ali</div>
        <div className={styles.head3}>964 780 024 5005</div>
      </div>
    </Container>
  );
}

export default Footer;

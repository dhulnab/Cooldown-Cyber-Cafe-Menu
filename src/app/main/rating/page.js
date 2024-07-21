"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Container from "@/component/container/Container";
import { Rate, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
import er from "../../../../public/error.svg";
import Head from "next/head";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [overallRating, setOverallRating] = useState(0);
  const [serviceRating, setServiceRating] = useState(0);
  const [qualityRating, setQualityRating] = useState(0);
  const [priceRating, setPriceRating] = useState(0);
  const [musicRating, setMusicRating] = useState(0);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_EMAIL_API_URL,
        {
          name,
          email,
          overallRating,
          serviceRating,
          qualityRating,
          priceRating,
          musicRating,
          message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      setError(true);
      console.error(error);
    } finally {
      setLoading(false);
      setName("");
      setEmail("");
      setOverallRating(0);
      setServiceRating(0);
      setQualityRating(0);
      setPriceRating(0);
      setMusicRating(0);
      setMessage("");
    }
  };

  function stateCheck() {
    return (
      name &&
      email &&
      overallRating > 0 &&
      serviceRating > 0 &&
      qualityRating > 0 &&
      priceRating > 0 &&
      musicRating > 0
    );
  }

  return (
    <>
      <head>
        <title>Rating</title>
        <meta name="description" content="Best gaming cafe in town!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      {loading ? (
        <Container>
          <div className={styles.logo}>
            <Image src="/logo.png" alt="logo" width={100} height={100} />
            <p>
              <span>COOLDOWN</span>
              <br />
              اخبرنا عن تجربتك
            </p>
          </div>
          <div className="loading">
            <Spin
              indicator={<LoadingOutlined spin />}
              size="large"
              style={{ color: "#a247dc" }}
            />
          </div>
        </Container>
      ) : (
        <div className={`${styles.main}`}>
          <Container>
            <div className={styles.logo}>
              <Image src="/logo.png" alt="logo" width={100} height={100} />
              <p>
                <span>COOLDOWN</span>
                <br />
                اخبرنا عن تجربتك
              </p>
            </div>
            {error ? (
              <div className={styles.error}>
                <Image src={er} alt="error" width={100} height={100} />
                <p>!.. لقد حدث خطأ ما </p>
              </div>
            ) : (
              <div className={styles.form}>
                <input
                  type="text"
                  placeholder="الاسم"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="البريد الالكتروني"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>بشكل عام</p>
                <Rate
                  value={overallRating}
                  required
                  className={styles.rate}
                  onChange={setOverallRating}
                />
                <p>الخدمة</p>
                <Rate
                  value={serviceRating}
                  required
                  className={styles.rate}
                  onChange={setServiceRating}
                />
                <p>الجودة</p>
                <Rate
                  value={qualityRating}
                  required
                  className={styles.rate}
                  onChange={setQualityRating}
                />
                <p>الاسعار</p>
                <Rate
                  value={priceRating}
                  required
                  className={styles.rate}
                  onChange={setPriceRating}
                />
                <p>الموسيقى</p>
                <Rate
                  value={musicRating}
                  required
                  className={styles.rate}
                  onChange={setMusicRating}
                />
                <textarea
                  placeholder="اخبرنا بالمزيد(اختياري)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button
                  style={stateCheck() ? null : { backgroundColor: "#a347dc69" }}
                  onClick={stateCheck() ? () => sendEmail() : null}
                >
                  إرسال
                </button>
              </div>
            )}
          </Container>
        </div>
      )}
    </>
  );
};

export default ContactUs;

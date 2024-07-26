import Container from "@/component/container/Container";
import styles from "./page.module.css";
import Image from "next/image";
import about1 from "../../../../public/about1.jpg";
import about2 from "../../../../public/about2.jpg";
import PageNameRedetection from "@/component/PageNameRedetection";
export const metadata = {
  title: "من نحن",
  description: "",
};
const AboutUs = () => {
  return (
    <>
      <Container>
        <PageNameRedetection />
        <div className={styles.logo}>
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
          />
          <p>
            <span>COOLDOWN</span>
            <br />
            من نحن؟
          </p>
        </div>
        <div className={styles.textBox}>
          <h1>من نحن</h1>
          <p>
            مرحبًا بكم في Cooldown Cyber Cafe، وجهتكم المثالية للاستمتاع بأفضل
            التجارب الإلكترونية والترفيهية. نحن هنا لنقدم لكم مزيجًا فريدًا من
            أحدث ألعاب الفيديو، والأجواء الودية، والمشروبات اللذيذة.
          </p>
          <div className={styles.img1}>
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              src={about1}
              alt="about"
              fill
            />
          </div>
          <h2>رؤيتنا</h2>
          <p>
            نطمح لأن نكون المركز الأول لعشاق الألعاب في المنطقة، حيث يجتمع
            الأصدقاء والعائلات للاستمتاع بالألعاب المثيرة وتجربة تكنولوجية
            حديثة.
          </p>

          <h2>ما الذي يجعلنا مميزين؟</h2>
          <h3>1. أحدث الألعاب والتكنولوجيا</h3>
          <p>
            نحن نوفر أحدث الإصدارات من ألعاب الفيديو وأحدث الأجهزة، لنضمن لكم
            تجربة لعب ممتعة وسلسة.
          </p>
          <div className={styles.img2}>
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              src={about2}
              alt="about"
              fill
            />
          </div>

          <h3>2. بيئة مريحة وممتعة</h3>
          <p>
            تصميم مقهانا يعكس طابعًا عصريًا ووديًا، حيث يمكن للجميع الاسترخاء
            وقضاء وقت ممتع سواء كانوا يلعبون أو يتحدثون مع الأصدقاء.
          </p>

          <h3>3. فريق عمل ودود ومحترف</h3>
          <p>
            فريقنا مكون من محترفين يحبون الألعاب بقدر ما تحبونها أنتم. نحن هنا
            لمساعدتكم في كل ما تحتاجونه وضمان حصولكم على تجربة مميزة.
          </p>

          <h3>4. مناسب للجميع</h3>
          <p>
            سواء كنت لاعبًا محترفًا تبحث عن تحديات جديدة، أو مجرد هاوٍ يريد
            الاستمتاع ببعض الوقت مع الأصدقاء، فإن Cooldown Cyber Cafe هو المكان
            المثالي لك.
          </p>

          <h2>تواصل معنا</h2>
          <p>للحجز والاستفسار تواصل معنا عبر وسائط التواصل الاتية: </p>
          <div className={styles.contactBox}>
            <Image src="/call.svg" alt="call" width={20} height={20} />
            <p>+964 783 711 5788</p>
          </div>
          <div className={styles.contactBox}>
            <Image src="/location.svg" alt="call" width={25} height={25} />
            <a
              href="https://maps.app.goo.gl/yBvx1TNV6bttcynd6"
              style={{
                marginRight: "-4px",
                textDecoration: "none",
                color: "#fff",
              }}
            >
              بغداد, اليرموك, اربع شوارع
            </a>
          </div>
        </div>
      </Container>
      <div className={styles.social}>
        <a
          href="https://www.facebook.com/CooldownCC/"
          style={{
            marginRight: "-4px",
            textDecoration: "none",
            color: "#fff",
          }}
        >
          <Image src="/facebook.svg" alt="call" width={30} height={30} />
        </a>
        <a
          href="https://www.instagram.com/cooldowncc/"
          style={{
            marginRight: "-4px",
            textDecoration: "none",
            color: "#fff",
          }}
        >
          <Image src="/instagram.svg" alt="call" width={30} height={30} />
        </a>
        <a
          href="https://www.youtube.com/@cooldowncc"
          style={{
            marginRight: "-4px",
            textDecoration: "none",
            color: "#fff",
          }}
        >
          <Image src="/youtube.svg" alt="call" width={30} height={30} />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=9647837115788"
          style={{
            marginRight: "-4px",
            textDecoration: "none",
            color: "#fff",
          }}
        >
          <Image src="/whatsapp.svg" alt="call" width={30} height={30} />
        </a>
      </div>
    </>
  );
};

export default AboutUs;

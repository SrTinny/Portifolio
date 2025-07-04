// src/components/Portfolio/Portfolio.jsx
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import styles from "./Portfolio.module.css";

const projetos = [
  {
    titulo: "DevHub",
    imagem: "/assets/devhub.png",
    descricao:
      "Site da minha startup.",
    link: "https://devhub-lake.vercel.app/",
  },
  {
    titulo: "HidroWatts",
    imagem: "/assets/hidrowatts.png",
    descricao:
      "Projeto desenvolvido.",
    link: "https://viatopic.netlify.app/",
  },
  {
    titulo: "Tela de Login | lol",
    imagem: "/assets/teladeloginlol.png",
    descricao: "Modelo de tela de login inspirado no LoL.",
    link: "https://portifolio-self-ten-43.vercel.app/",
  },
  {
    titulo: "Imovi",
    imagem: "/assets/imovi.png",
    descricao: "Site de aluguel e venda de imóveis.",
    link: "https://bootstrap-modelo.vercel.app/",
  },
];

export default function CarrosselProjetos() {
  const swiperRef = useRef(null);

  return (
    <section className={styles.portfolioSection} id="portfolio">
      <h2 className={styles.titulo}>
        MEUS <span>SITES.</span>
      </h2>

      <div
        className={styles.interface}
        onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay?.start()}
      >
        <button
          className={styles.arrowLeft}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <i className="bi bi-caret-left" />
        </button>
        <button
          className={styles.arrowRight}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <i className="bi bi-caret-right" />
        </button>

        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 5000 }}
          speed={1000}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1100: { slidesPerView: 4 },
          }}
          className={styles.carousel}
        >
          {projetos.map((projeto, idx) => (
            <SwiperSlide key={idx}>
              <a href={projeto.link} target="_blank" rel="noreferrer">
                <div
                  className={styles.imgPort}
                  style={{ backgroundImage: `url(${projeto.imagem})` }}
                >
                  <div className={styles.overlay}>
                    <div className={styles.projectDetails}>
                      <h2>{projeto.titulo}</h2>
                      <p>{projeto.descricao}</p>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

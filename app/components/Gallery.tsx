"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { BASE_PATH } from "../config";

const photos = [
  { src: `${BASE_PATH}/images/1.jpg`, alt: "Event Photo 1", caption: "Behind the scenes", grid: "g1" },
  { src: `${BASE_PATH}/images/2.jpg`, alt: "Event Photo 2", caption: "On stage", grid: "g2" },
  { src: `${BASE_PATH}/images/3.jpg`, alt: "Event Photo 3", caption: "Audience engagement", grid: "g3" },
  { src: `${BASE_PATH}/images/4.jpg`, alt: "Event Photo 4", caption: "Speaker moment", grid: "g4" },
  { src: `${BASE_PATH}/images/5.jpg`, alt: "Event Photo 5", caption: "Event highlights", grid: "g5" },
  { src: `${BASE_PATH}/images/6.jpg`, alt: "Event Photo 6", caption: "The audience", grid: "g6" },
  { src: `${BASE_PATH}/images/7.jpg`, alt: "Event Photo 7", caption: "Networking", grid: "g7" },
  { src: `${BASE_PATH}/images/8.jpg`, alt: "Event Photo 8", caption: "Making waves", grid: "g8" },
  { src: `${BASE_PATH}/images/9.jpg`, alt: "Event Photo 9", caption: "Ideas worth spreading", grid: "g9" },
  { src: `${BASE_PATH}/images/10.jpg`, alt: "Event Photo 10", caption: "The Team", grid: "g10" },
  { src: `${BASE_PATH}/images/11.jpg`, alt: "Event Photo 11", caption: "Community", grid: "g11" },
  { src: `${BASE_PATH}/images/12.jpg`, alt: "Event Photo 12", caption: "La Fin", grid: "g12" },
];

export default function Gallery() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const closeLightbox = useCallback(() => {
    setLightboxSrc(null);
    document.body.style.overflow = "";
  }, []);

  const openLightbox = (src: string) => {
    setLightboxSrc(src);
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [closeLightbox]);

  return (
    <section id="gallery">
      <ScrollReveal>
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 1rem" }}>
          <div className="section-label">Gallery</div>
          <h2 className="section-title">Moments that matter</h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            A glimpse into the energy, emotion, and connection that defined our maiden edition.
          </p>
        </div>
      </ScrollReveal>

      <div className="gallery-grid">
        {photos.map((photo) => (
          <ScrollReveal key={photo.grid}>
            <div
              className={`gallery-item ${photo.grid}`}
              onClick={() => openLightbox(photo.src)}
              style={{ height: "100%" }}
            >
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 900px) 50vw, 33vw" />
              <div className="gallery-overlay">
                <span className="gallery-caption">{photo.caption}</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {lightboxSrc && (
        <div className="lightbox active" onClick={closeLightbox}>
          <button className="lightbox-close">&times;</button>
          <Image
            src={lightboxSrc}
            alt="Lightbox image"
            width={1200}
            height={800}
            style={{ maxWidth: "90vw", maxHeight: "85vh", width: "auto", height: "auto", objectFit: "contain" }}
          />
        </div>
      )}
    </section>
  );
}

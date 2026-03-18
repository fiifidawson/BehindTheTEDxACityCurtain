import Image from "next/image";
import Navbar from "./components/Navbar";
import ScrollReveal from "./components/ScrollReveal";
import Gallery from "./components/Gallery";
import { BASE_PATH } from "./config";

const videos = [
  {
    src: "https://www.youtube.com/embed/BBXrJGwT4Wk",
    title: "From Personal Growth to National Influence",
    speaker: "Eve Asante",
  },
  {
    src: "https://www.youtube.com/embed/1nrBO5bi3TQ",
    title: "Catalytic Power of Cheerleading",
    speaker: "Elinam Horgli",
  },
  {
    src: "https://www.youtube.com/embed/pInJEdXNnpA",
    title: "How to Build a Movement for Community-Led Education",
    speaker: "Cat Davison",
  },
  {
    src: "https://www.youtube.com/embed/Dihq5GGVlxM",
    title: "Inventing You",
    speaker: "Eugene Ewusi-Annan",
  },
  {
    src: "https://www.youtube.com/embed/SxFtSlSK85c",
    title: "Financial Literacy for Long-Term Prosperity",
    speaker: "Emmanuel Anti",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero" id="home">
        <Image
          src={`${BASE_PATH}/images/tedx-logo.jpg`}
          alt="TEDx Logo"
          width={120}
          height={120}
          className="hero-logo"
          priority
        />
        <div className="hero-tag">TEDx Independently Organized Event</div>
        <h1>
          From Ripples
          <br />
          to <em>Waves</em>
        </h1>
        <p className="hero-sub">Making an Impact — Ideas Worth Spreading</p>
        <div className="hero-meta">
          <span>January 25, 2025</span>
          <span>Academic City University</span>
          <span>Maiden Edition</span>
        </div>
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="about">
          <ScrollReveal>
            <div className="about-image">
              <Image
                src={`${BASE_PATH}/images/background.jpg`}
                alt="TEDxAcademicCity event"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div>
              <div className="section-label">About the Event</div>
              <h2 className="section-title">Where bold ideas take the stage</h2>
              <p className="section-desc">
                As the Lead Organizer and Licensee, I took the initiative along with an amazing team
                to bring TEDx to Academic City University as a way to climax my undergraduate
                journey. It was a representation of my growth from my first year to my final year and
                a testament to the impact the school had made in a short time. This vision was
                reflected in our theme: From Ripples to Waves — Making an Impact. Our maiden edition
                was a resounding success!
              </p>
              <div className="stats">
                <div>
                  <div className="stat-number">100</div>
                  <div className="stat-label">Attendees</div>
                </div>
                <div>
                  <div className="stat-number">5</div>
                  <div className="stat-label">Speakers</div>
                </div>
                <div>
                  <div className="stat-number">24</div>
                  <div className="stat-label">Team Members</div>
                </div>
              </div>
              <a
                href="https://www.ted.com"
                className="tedx-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Official TEDx Page
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TEAM */}
      <section className="team-section" id="team">
        <ScrollReveal>
          <div className="team-header">
            <div className="section-label">Our Team</div>
            <h2 className="section-title">The people behind the magic</h2>
            <p className="section-desc">
              A passionate crew of 24 organizers who brought TEDxAcademicCityUniversity to life.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="team-photo-wrap">
            <Image
              src={`${BASE_PATH}/images/team-photo.jpg`}
              alt="Full Team Photo"
              width={900}
              height={600}
              sizes="(max-width: 900px) 100vw, 900px"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </ScrollReveal>
      </section>

      {/* GALLERY */}
      <Gallery />

      {/* VIDEOS */}
      <section className="videos-section" id="videos">
        <ScrollReveal>
          <div className="videos-header">
            <div className="section-label">Speaker Talks</div>
            <h2 className="section-title">Watch the talks</h2>
            <p className="section-desc">
              Revisit the ideas that sparked conversations at our maiden edition.
            </p>
          </div>
        </ScrollReveal>
        <div className="videos-grid">
          {videos.map((video) => (
            <ScrollReveal key={video.src}>
              <div className="video-card">
                <iframe
                  src={video.src}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
                <div className="video-info">
                  <div className="video-title">{video.title}</div>
                  <div className="video-speaker">{video.speaker}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* PRESS */}
      <section className="press-section" id="press">
        <ScrollReveal>
          <div className="press-header">
            <div className="section-label">Press & Recognition</div>
            <h2 className="section-title">In the news</h2>
            <p className="section-desc">
              Coverage of our maiden TEDx event at Academic City University.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="press-card">
            <p>Read about our event in the news:</p>
            <a
              href="https://www.graphic.com.gh/news/education/ghana-news-academic-city-university-holds-maiden-tedx-event.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Academic City University holds Maiden TEDx Event
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          TEDx<span>AcademicCity</span>
        </div>
        <p className="footer-text">
          This independent TEDx event was operated under license from TED. Organized by Fiifi
          Dawson as Lead Organizer & Licensee (2025).
        </p>
        <div className="footer-links">
          <a href="https://github.com/fiifidawson" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/edem-dawson/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="https://x.com/FiifiDawson_" target="_blank" rel="noopener noreferrer">
            Twitter (X)
          </a>
        </div>
        <p className="footer-copy">&copy; 2025 TEDxAcademicCityUniversity. All rights reserved.</p>
      </footer>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";

const instagram = "https://www.instagram.com/dazed.n.beautiful/";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className={menuOpen ? "header menu-open" : "header"}>
        <a href="#home" className="logo" onClick={closeMenu}>
          DAZED
          <span>N BEAUTIFUL</span>
        </a>

        <nav className="desktop-nav">
          <a href="#about">Daisy</a>
          <a href="#blonde">Blonde</a>
          <a href="#travel">Travel</a>
          <a href="#instagram">Instagram</a>
          <a href="#book">Book</a>
        </nav>

        <a
          href={instagram}
          target="_blank"
          rel="noreferrer"
          className="header-cta"
        >
          DM TO BOOK <span>↗</span>
        </a>

        <button
          type="button"
          className={menuOpen ? "menu active" : "menu"}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

        <div className={menuOpen ? "mobile-menu active" : "mobile-menu"}>
          <div className="mobile-meta">
            <span>TRAVELING BLONDE SPECIALIST</span>
            <span>KC / O&apos;AHU</span>
          </div>

          <nav>
            <a href="#about" onClick={closeMenu}>
              <span>01</span> Daisy
            </a>
            <a href="#blonde" onClick={closeMenu}>
              <span>02</span> Blonde
            </a>
            <a href="#travel" onClick={closeMenu}>
              <span>03</span> Travel
            </a>
            <a href="#instagram" onClick={closeMenu}>
              <span>04</span> Instagram
            </a>
            <a href="#book" onClick={closeMenu}>
              <span>05</span> Book
            </a>
          </nav>

          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="mobile-cta"
          >
            @DAZED.N.BEAUTIFUL ↗
          </a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-meta">
          <span>DAISY GOWIN</span>
          <span>TRAVELING BLONDE SPECIALIST</span>
          <span>KANSAS CITY / O&apos;AHU</span>
        </div>

        <div className="hero-main">
          <div className="hero-copy">
            <p className="eyebrow">DAZED N BEAUTIFUL</p>

            <h1>
              MANES
              <br />
              DESIGNED
              <br />
              FOR <em>ADVENTURE.</em>
            </h1>

            <div className="hero-intro">
              <p>
                Blonde artistry by Daisy Gowin — made for a life that
                doesn&apos;t stay in one place.
              </p>

              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                DM TO BOOK <span>↗</span>
              </a>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="sun">
              <span>DN</span>
            </div>

            <div className="ocean ocean-one" />
            <div className="ocean ocean-two" />
            <div className="ocean ocean-three" />

            <div className="hair-shape">
              <div className="hair-line line-one" />
              <div className="hair-line line-two" />
              <div className="hair-line line-three" />
              <div className="hair-line line-four" />
              <div className="hair-line line-five" />
            </div>

            <div className="art-caption">
              <span>BLONDE</span>
              <span>BEAUTY</span>
              <span>BEYOND BORDERS</span>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>01 / DAZED N BEAUTIFUL</span>
          <span>SCROLL FOR THE JOURNEY ↓</span>
        </div>
      </section>

      <section className="ticker">
        <div>
          <span>BLONDE</span>
          <i>✦</i>
          <span>TRAVEL</span>
          <i>✦</i>
          <span>ADVENTURE</span>
          <i>✦</i>
          <span>KANSAS CITY</span>
          <i>✦</i>
          <span>O&apos;AHU</span>
          <i>✦</i>
          <span>DAZED N BEAUTIFUL</span>
        </div>
      </section>

      <section className="about" id="about">
        <div className="section-index">
          <span>01</span>
          <p>MEET DAISY</p>
        </div>

        <div className="about-main">
          <p className="micro-label">THE WOMAN BEHIND THE MANES</p>

          <h2>
            HAIR WITH
            <br />
            SOMEWHERE
            <br />
            <em>TO GO.</em>
          </h2>

          <div className="about-copy">
            <p className="lead">
              Daisy Gowin is the artist behind Dazed N Beautiful.
            </p>

            <p>
              Her public profile describes her as a traveling blonde
              specialist, with a beauty identity that moves between Kansas City
              and O&apos;ahu.
            </p>

            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              FOLLOW DAISY <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="blonde" id="blonde">
        <div className="blonde-art" aria-hidden="true">
          <div className="blonde-top">
            <span>02</span>
            <span>BLONDE / DAZED</span>
          </div>

          <div className="strand strand-one" />
          <div className="strand strand-two" />
          <div className="strand strand-three" />
          <div className="strand strand-four" />
          <div className="strand strand-five" />

          <div className="blonde-sun" />

          <p>GOLDEN</p>
        </div>

        <div className="blonde-copy">
          <span>02 / THE SPECIALTY</span>

          <p className="micro-label">BLONDE SPECIALIST</p>

          <h2>
            CHASING
            <br />
            THE <em>LIGHT.</em>
          </h2>

          <p className="body-copy">
            Blonde sits at the centre of the Dazed N Beautiful identity, with
            Daisy positioning herself publicly as a traveling blonde
            specialist.
          </p>

          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            SEE THE WORK <span>↗</span>
          </a>
        </div>
      </section>

      <section className="adventure">
        <div className="adventure-meta">
          <span>03 / PHILOSOPHY</span>
          <span>MANES DESIGNED FOR ADVENTURE</span>
        </div>

        <div className="adventure-main">
          <p>NOT JUST A DESTINATION.</p>

          <h2>
            MADE FOR
            <br />
            THE <em>JOURNEY.</em>
          </h2>

          <div className="adventure-foot">
            <p>
              Dazed N Beautiful brings together Daisy&apos;s blonde specialty
              and a travel-led identity that feels at home wherever the next
              adventure goes.
            </p>

            <div className="compass" aria-hidden="true">
              <span>N</span>
              <span>E</span>
              <span>S</span>
              <span>W</span>
              <i>✦</i>
            </div>
          </div>
        </div>
      </section>

      <section className="travel" id="travel">
        <div className="travel-heading">
          <div className="section-index">
            <span>04</span>
            <p>ON THE MAP</p>
          </div>

          <div>
            <p className="micro-label">TWO PLACES / ONE BEAUTY IDENTITY</p>

            <h2>
              FROM THE
              <br />
              MIDWEST TO
              <br />
              <em>THE ISLANDS.</em>
            </h2>
          </div>
        </div>

        <div className="locations">
          <article className="kc-card">
            <div className="location-number">01</div>

            <div className="city-art" aria-hidden="true">
              <div className="kc-sun" />
              <div className="kc-line line-a" />
              <div className="kc-line line-b" />
              <div className="kc-line line-c" />
            </div>

            <div className="location-info">
              <span>MISSOURI</span>
              <h3>KANSAS CITY</h3>
              <p>KC</p>
            </div>
          </article>

          <article className="oahu-card">
            <div className="location-number">02</div>

            <div className="island-art" aria-hidden="true">
              <div className="island-sun" />
              <div className="island" />
              <div className="island-wave wave-a" />
              <div className="island-wave wave-b" />
            </div>

            <div className="location-info">
              <span>HAWAI&apos;I</span>
              <h3>O&apos;AHU</h3>
              <p>HI</p>
            </div>
          </article>
        </div>

        <p className="travel-note">
          Daisy&apos;s current public profile identifies her as Kansas City /
          O&apos;ahu based. Connect directly for current appointment
          availability.
        </p>
      </section>

      <section className="road">
        <div className="road-copy">
          <span>05 / TRAVELING ARTIST</span>

          <h2>
            BEAUTY
            <br />
            WITHOUT
            <br />
            <em>BORDERS.</em>
          </h2>

          <p>
            The traveling identity is part of what makes Dazed N Beautiful
            distinctive — blonde artistry paired with movement, place and
            adventure.
          </p>

          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="text-link light-link"
          >
            CONNECT WITH DAISY <span>↗</span>
          </a>
        </div>

        <div className="road-art" aria-hidden="true">
          <div className="road-sky">
            <div className="road-sun" />
          </div>

          <div className="mountain mountain-one" />
          <div className="mountain mountain-two" />

          <div className="highway">
            <span />
          </div>

          <p>GO.</p>
        </div>
      </section>

      <section className="instagram" id="instagram">
        <div className="instagram-top">
          <span>06 / FOLLOW ALONG</span>
          <span>@DAZED.N.BEAUTIFUL</span>
        </div>

        <div className="instagram-main">
          <div>
            <p className="micro-label">HAIR / TRAVEL / ADVENTURE</p>

            <h2>
              SEE WHERE
              <br />
              DAISY GOES
              <br />
              <em>NEXT.</em>
            </h2>
          </div>

          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="instagram-card"
          >
            <span>@</span>

            <div>
              <small>INSTAGRAM</small>
              <strong>dazed.n.beautiful</strong>
            </div>

            <i>↗</i>
          </a>
        </div>
      </section>

      <section className="booking" id="book">
        <div className="booking-meta">
          <span>07 / BOOKING</span>
          <span>DM TO CONNECT</span>
        </div>

        <div className="booking-main">
          <p>READY FOR YOUR NEXT HAIR CHAPTER?</p>

          <h2>
            STAY DAZED.
            <br />
            STAY <em>BEAUTIFUL.</em>
          </h2>

          <p className="booking-copy">
            For current appointments and availability, connect with Daisy
            directly through Instagram.
          </p>

          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="booking-button"
          >
            <span>DM @DAZED.N.BEAUTIFUL</span>
            <i>↗</i>
          </a>
        </div>

        <div className="booking-sun" aria-hidden="true" />
      </section>

      <footer>
        <a href="#home" className="footer-logo">
          DAZED
          <span>N BEAUTIFUL</span>
        </a>

        <p>MANES DESIGNED FOR ADVENTURE</p>

        <a href={instagram} target="_blank" rel="noreferrer">
          INSTAGRAM ↗
        </a>
      </footer>
    </main>
  );
}
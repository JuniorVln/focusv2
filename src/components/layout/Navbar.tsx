"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navInner}>
        {/* Logo Pill */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo-focus.png"
            alt="Focus Network"
            width={180}
            height={48}
            priority
            style={{ objectFit: "contain" }}
          />
        </Link>

        {/* Right side */}
        <div className={styles.navRight}>
          {/* Profile & Contact Pill */}
          <div className={styles.profileContactPill}>
            <div className={styles.profileSection}>
              <div className={styles.avatarWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://i.pravatar.cc/150?img=47" 
                  alt="Lauren Bennett"
                  className={styles.avatarImage}
                />
                <span className={styles.statusBadge} />
              </div>
              <div className={styles.profileInfo}>
                <span className={styles.profileName}>Lauren Bennett</span>
                <span className={styles.profileStatus}>Disponível agora</span>
              </div>
            </div>

            <Link href="/contato" className={styles.contactBtn}>
              Contato
              <div className={styles.contactDots}>
                <span /><span /><span />
              </div>
            </Link>
          </div>

          {/* Hamburger */}
          <button className={styles.hamburger} aria-label="Menu">
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}

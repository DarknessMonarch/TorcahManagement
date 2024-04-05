"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/style/splash.module.css";
import splashLogo from "@/public/assets/splashLogo.png";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/authentication/login");
    }, 1000);
  }, [router]);

  return (
    <div className={styles.splashScreen}>
      <Image
        className={styles.aboutImg}
        src={splashLogo}
        alt="splash Image"
        height={200}
        priority
      />
    </div>
  );
}

import React, { useEffect, useState, CSSProperties } from "react";

import background from "../assets/night.jpg";
import { HomeSceneProps } from "./home-scene.interface";

export const HomeScene = (props: HomeSceneProps) => {
  const [countdown, setCountdown] = useState();

  const { name } = props;

  useEffect(() => {
    const countDownDate: any = new Date("Dec 31, 2019 06:15:00");

    const currentTime = new Date().getTime();
    const distance: number = countDownDate - currentTime;

    setTimeout(() => setCountdown(distance));
  }, []);

  useEffect(() => {
    setInterval(() => {
      const countDownDate: any = new Date("Dec 31, 2019 20:00:00");

      const currentTime = new Date().getTime();
      const distance: number = countDownDate - currentTime;

      setCountdown(distance);
    }, 1000);
  }, []);

  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));

  return (
    <div style={styles.wrapper}>
      <img alt="night sky" src={background} style={styles.image}></img>
      <div style={styles.container}>
        {days > 0 ? <h1 style={styles.title}>{`${days} days`}</h1> : null}

        {days === 0 ? (
          <h2 style={styles.subtitle}>{`${hours} hrs ${minutes} mins`}</h2>
        ) : null}

        {days >= 0 ? (
          <p style={styles.description}>
            Until it begins{name ? `, ${name}.` : "."}
          </p>
        ) : (
          <h1 style={styles.title}>Until next time.</h1>
        )}
      </div>
    </div>
  );
};

interface HomeSceneStyles {
  wrapper: CSSProperties;
  container: CSSProperties;
  image: CSSProperties;
  title: CSSProperties;
  subtitle: CSSProperties;
  description: CSSProperties;
}

const styles: HomeSceneStyles = {
  wrapper: {
    height: "100%",
    width: "auto",
    maxWidth: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    textAlign: "center",
    position: "absolute",
    left: 0,
    width: "100%"
  },
  image: {
    height: "100vh",
    width: "100vw",
    objectFit: "cover"
  },
  title: {
    fontSize: 100,
    margin: "0 0 -2px 0",
    color: "#fff"
  },
  subtitle: {
    fontSize: 60,
    margin: 0,
    color: "#fff"
  },
  description: {
    fontSize: 40,
    margin: "8px 0 0 0",
    color: "#fff"
  }
};

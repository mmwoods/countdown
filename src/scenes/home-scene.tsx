import React, { useEffect, useState, CSSProperties } from "react";

import background from "../assets/night.jpg";
import { HomeSceneProps } from "./home-scene.interface";

export const HomeScene = (props: HomeSceneProps) => {
  const { name } = props;
  const [minutes, setMinutes] = useState();

  const hours = new Date().getHours();

  const timeOfDay = hours > 12 ? "pm" : "am";
  const hoursConverted = timeOfDay === "pm" ? hours - 12 : hours;

  const minutesConverted = minutes < 10 ? `0${minutes}` : minutes;

  useEffect(() => {
    setInterval(() => {
      setMinutes(new Date().getMinutes());
    });
  }, []);

  return (
    <div style={styles.wrapper}>
      <img alt="night sky" src={background} style={styles.image}></img>
      <div style={styles.container}>
        <h1 style={styles.title}>{`${hoursConverted}:${minutesConverted}`}</h1>
        <p style={styles.subtitle}>
          We've been expecting you{name ? `, ${name}.` : "."}
        </p>
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
}

const styles: HomeSceneStyles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    textAlign: "center",
    padding: 8,
    position: "absolute"
  },
  image: {
    height: "100vh",
    width: "100vw",
    objectFit: "cover"
  },
  title: {
    fontSize: 150,
    margin: 0,
    color: "#fff"
  },
  subtitle: {
    fontSize: 50,
    margin: 0,
    color: "#fff"
  }
};

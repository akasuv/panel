"use client";
import React from "react";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

export const revalidate = 1;

const getRes = async () => {
  const res = await fetch("http://localhost:4200/").then((res) => res.json());

  return res;
};
export default function Home() {
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    (async () => {
      const res = await getRes();
      console.log("res", res);
      setValue(res);
    })();
  }, []);

  const handleSave = () => {
    fetch("http://localhost:4200/save", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: value,
    });
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <textarea value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={handleSave}>save</button>
      </div>
    </main>
  );
}

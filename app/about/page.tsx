import { title } from "@/components/primitives";

import React from "react";

import IconImage from "@/components/iconImage";
import ImageAndTextList from "@/components/imageAndText";

import Image from "next/image";
import { Button } from "@nextui-org/button";

import aboutContent from "@/public/aboutContent.json";
import satay from "@/public/images/satay.jpg";

import styles from "@/app/about/layouts.module.css";
import dinner from "@/public/images/platter-2009590_1280.jpg";

//import layout from "./layouts.module.css";

export default function AboutPage() {
  const listItems = [
    "✓ Order 'No Cook Necessary' Meals",
    "✓ Nutritious, Delicious, and Affordable for All Families",
    "✓ High Quality Ingredients Straight From the Farm",
    "✓ Family Friendly and Kid Approved",
    "✓ Vegetarian/Vegan Options",
  ];
  return (
    <>
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Food is about family and community.</h1>
      </div>
      <Image alt="banner" className="fitScreen" src={dinner} />
      <section>
        <div className={styles["cards-container"]}>
          {aboutContent.map((contentObj, idx) => {
            return (
              <>
                <div className={styles.card}>
                  <IconImage
                    key={`"icon"` + idx}
                    contentObj={contentObj}
                    styles={styles}
                  />
                </div>
              </>
            );
          })}
        </div>
      </section>
      <div className={styles.aboutParagraphs}>
        <p>Family owned, from our Kitchen.</p>
      </div>
      <section>
        <ImageAndTextList
          heading={"This Means:"}
          imageSrc={satay}
          listItems={listItems}
          styles={styles}
        />
      </section>
    </>
  );
}

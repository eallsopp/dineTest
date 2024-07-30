import React from "react";

import Image from "next/image";
import TextList from "./textList";
import { Button } from "@nextui-org/button";

const ImageAndTextList = ({
  imageSrc,
  listItems,
  styles,
  heading,
}: {
  imageSrc: string;
  listItems: Array<string>;
  styles: any;
  heading: string;
}) => {
  return (
    <>
      <div className={styles.imageText}>
        <div>
          <Image src={imageSrc} alt={"familyMeal"} />
        </div>
        <div>
          <div className={styles.listAndButton}>
            <TextList heading={heading} items={listItems} styles={styles} />
            <a href="/menu">
              <Button color={"primary"}>Choose a Day to Try!</Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageAndTextList;

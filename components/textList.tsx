import React from "react";

const TextList = ({
  items,
  heading,
  styles,
}: {
  items: Array<string>;
  heading: string;
  styles: any;
}) => {
  return (
    <>
      <div className={styles.textList}>
        <h1>{heading}</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TextList;

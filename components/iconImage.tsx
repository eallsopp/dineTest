import React from "react";

import { GiWaterRecycling, GiKnifeFork, GiAlarmClock } from "react-icons/gi";
import { IoLeaf } from "react-icons/io5";
import { GoSmiley } from "react-icons/go";
import { SiHomeassistantcommunitystore } from "react-icons/si";

const iconMapping = {
  GiKnifeFork,
  GiWaterRecycling,
  IoLeaf,
  GiAlarmClock,
  GoSmiley,
  SiHomeassistantcommunitystore,
};

const IconImage = ({
  contentObj,
  styles,
}: {
  contentObj: any;
  styles: any;
}) => {
  const { id, title, content, size, icon } = contentObj;
  const IconComponent = iconMapping[icon];
  return (
    <>
      <div className={styles.cardIcon}>
        {IconComponent && <IconComponent size={size} />}
      </div>
      <div className={styles.cardTitle}>
        <h3>{title}</h3>
      </div>
      <div className={styles.cardContent}>
        <p>{content}</p>
      </div>
    </>
  );
};

export default IconImage;

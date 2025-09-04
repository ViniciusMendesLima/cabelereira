import styles from "./styles/Slider.module.css";
import { motion } from "motion/react";
import standardImage from "../assets/imagesSlider/standard_image.webp";

import { useEffect, useRef, useState } from "react";

interface ServiceType {
    imageUrl?: string | null;
    alt: string;
}

type ImageCardProps = {
    images_Slider: ServiceType[];
}

const Slider = ({images_Slider}: ImageCardProps) => {
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carousel.current) {
      const scrollWidth = carousel.current.scrollWidth;
      const offsetWidth = carousel.current.offsetWidth;
      setWidth(scrollWidth - offsetWidth);
    }
  }, []);
  return (
    <div className={styles.Container}>
      <motion.div
        ref={carousel}
        className={styles.Carousel}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div className={styles.Inner} drag="x"
        dragConstraints={{right:0, left: -width}}
        initial={{x: 100}}
        animate={{x: 0}}
        transition={{duration: 0.8}}
        >
          {images_Slider.map((image) => (
            <motion.div className={styles.Item} key={image.imageUrl}>
              <img src={image.imageUrl || standardImage} alt={image.alt} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export { Slider };

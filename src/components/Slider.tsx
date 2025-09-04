import styles from "./styles/Slider.module.css";
import { motion } from "motion/react";

import slider_image_1 from "../assets/imagesSlider/img_1.jpg";
import slider_image_2 from "../assets/imagesSlider/img_2.jpg";
import slider_image_3 from "../assets/imagesSlider/img_3.jpg";
import slider_image_4 from "../assets/imagesSlider/img_4.jpg";
import slider_image_5 from "../assets/imagesSlider/img_5.jpg";
import slider_image_6 from "../assets/imagesSlider/img_6.jpg";
import slider_image_7 from "../assets/imagesSlider/img_7.jpg";
import { useEffect, useRef, useState } from "react";

const images_slider = [
  slider_image_1,
  slider_image_2,
  slider_image_3,
  slider_image_4,
  slider_image_5,
  slider_image_6,
  slider_image_7,
];

const Slider = () => {
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
          {images_slider.map((image) => (
            <motion.div className={styles.Item} key={image}>
              <img src={image} alt="Text alt" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export { Slider };

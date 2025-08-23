import { useEffect, useState } from "react";
import arrowup from "../assets/arrow-up.svg";
import "./styles/arrowTop.css";

const ArrowTop = () => {
    const [isVisible, SetIsVisible] = useState(false);

    const taggleVisibility = () => {
        if(window.pageYOffset > 100) {
            SetIsVisible(true);
        } else {
            SetIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", taggleVisibility);
        return () => window.removeEventListener("scroll", taggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }
  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="arrow"
          aria-label="Voltar ao Topo"
        >
          <img src={arrowup} alt="Top" />
        </button>
      )}
    </>
  );
};

export { ArrowTop };

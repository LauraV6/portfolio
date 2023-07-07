import { useEffect } from "react";
import gsap, { Power1, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapDown = (arr, delay) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: "-45px",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: .7,
        stagger: .2,
        delay: delay,
        ease: Power1.easeIn,
      }
    );
  }, [arr, delay]);
};

export const useGsapHamb = (arr, delay) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: "-45px",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: .7,
        stagger: .2,
        delay: delay,
        ease: Power1.easeIn,
      }
    );
  }, [arr, delay]);
};

export const useGsapUpward = (arr, delay) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: "45px",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: .7,
        stagger: .2,
        delay: delay,
        ease: Power1.easeIn,
      }
    );
  }, [arr, delay]);
};

export const useGsapHeroButton = (arr, delay) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        x: "-100px",
        opacity: 0,
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 1,
        delay: delay,
        ease: Power4.easeIn,
      }
    );
  }, [arr, delay]);
};
import { useEffect } from "react";
import gsap, { Power1, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapDown = (arr, delay = 0) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: "-30px",
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
  }, []);
};

export const useGsapHamb = (arr, delay = 0) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: "-30px",
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
  }, []);
};

export const useGsapUpward = (arr, delay = 0) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: "30px",
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
  }, []);
};

export const useGsapHeroButton = (arr, delay = 0) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        x: "-30px",
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
  }, []);
};
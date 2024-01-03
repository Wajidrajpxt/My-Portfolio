import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import { useImageReveal, useHeadlineReveal } from "../hooks/gsap";
import img1 from "../assets/images/IMG-20240102-WA0004.jpg";
import img2 from "../assets/images/IMG-20240102-WA0002.jpg";

const data = {
  img1: {img1} | "",
  img2: {img2} | "",
};

const Hero = () => {
  const heroImageRef = useRef(null);
  const heroHeadlineRef = useRef(null);
  const heroHeadline2Ref = useRef(null);

  const headlines = [heroHeadlineRef, heroHeadline2Ref];

  useHoverEffect(heroImageRef, data.img1, data.img2);
  useImageReveal(heroImageRef, 0.5);
  useHeadlineReveal(headlines, 1.5);
  return (
    <div className="hero container mx-auto mt-20 flex justify-center items-center overflow-hidden">
      <div className="hero-img" ref={heroImageRef}></div>
      <div className="shutter shutter-left overflow-hidden">
        <h1 ref={heroHeadlineRef}> Front-End </h1>
      </div>
      <div className="shutter shutter-right overflow-hidden">
        <h1 ref={heroHeadline2Ref}>Developer</h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;

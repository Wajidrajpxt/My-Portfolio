import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import { useImageReveal, useHeadlineReveal } from "../hooks/gsap";
// import img1 from "../assets/images/IMG-20240102-WA0004.jpg";
// import img2 from "../assets/images/IMG-20240102-WA0002.jpg";

// const data = {
//   img1: {img1} | "",
//   img2: {img2} | "",
// };
const data = {
  img1: "https://lh3.googleusercontent.com/a/ACg8ocKuNCh63U4GU6UMrspMNNAtokgSPN-38vOugF96qSNyxBg=s288-c-no",
  img2: "https://scontent.flhe3-1.fna.fbcdn.net/v/t39.30808-6/275847267_153769180363073_550442368970575186_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeF7PjSsa1IZMFeISH4TF3yXj4y9RlXKDWCPjL1GVcoNYA_XULGWc99J1uM3i00lg6U3XxUDXFA36S1D66P0GHOE&_nc_ohc=OsLVScj8MkgAX_mD9Uz&_nc_ht=scontent.flhe3-1.fna&oh=00_AfCoxxzaZ_wX44EKgI4xc0JXX40hvjyr0WFHIN3ekgxq6A&oe=659A9210",
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

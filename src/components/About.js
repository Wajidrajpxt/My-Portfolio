import { useRef } from "react";
import { useProjectLeftRightReveal } from "../hooks/gsap";
import useHoverEffect from "../hooks/useHoverEffect";
import SectionTitle from "./SectionTitle";
import img1 from "../assets/images/IMG-20240102-WA0004.jpg";
console.log(img1, "img1");

const data = {
  img1: "https://lh3.googleusercontent.com/a/ACg8ocKuNCh63U4GU6UMrspMNNAtokgSPN-38vOugF96qSNyxBg=s288-c-no",
  img2: "https://scontent.flhe3-1.fna.fbcdn.net/v/t39.30808-6/275847267_153769180363073_550442368970575186_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeF7PjSsa1IZMFeISH4TF3yXj4y9RlXKDWCPjL1GVcoNYA_XULGWc99J1uM3i00lg6U3XxUDXFA36S1D66P0GHOE&_nc_ohc=OsLVScj8MkgAX_mD9Uz&_nc_ht=scontent.flhe3-1.fna&oh=00_AfCoxxzaZ_wX44EKgI4xc0JXX40hvjyr0WFHIN3ekgxq6A&oe=659A9210",
};

const About = () => {
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);

  const abouts = [aboutLeftRef, aboutRightRef];

  useHoverEffect(aboutLeftRef, data.img1, data.img2);
  useProjectLeftRightReveal(abouts);

  return (
    <div
      className="about container mx-auto mt-40 border-2 border-[white] "
      id="about"
    >
      <SectionTitle title={"About"} />

      <div className="about-wrapper mt-40 grid grid-cols-1 lg:grid-cols-2 gap-20 overflow-hidden">
        <div
          className="about-left border-2 border-[white]"
          ref={aboutLeftRef}
        ></div>
        <div
          className="about-right border-2 border-[white]"
          ref={aboutRightRef}
        >
          <p className="mb-10">
            I am a Front-End developer with a passion for creating user-friendly
            and visually appealing websites. I have expertise in HTML, CSS,
            JavaScript, React, Next.js, TypeScript and have a strong
            understanding of responsive design and cross-browser compatibility.
            I stay up-to-date with the latest development trends and techniques
            to ensure that my projects are up to industry standards. My goal is
            to deliver a seamless user experience that meets and exceeds the
            needs of my clients and their users.
          </p>
          <p>
            I stay up-to-date with the latest development trends and techniques
            to ensure that my projects are up to industry standards. My goal is
            to deliver a seamless user experience that meets and exceeds the
            needs of my clients and their users.
          </p>
          <a
            href=""
            target="_blank"
            rel="noreferrrer"
            className="inline-block mt-10 uppercase py-8 px-14 border border-white/20 rounded-full hover:border-cyan-400/20 hover:bg-cyan-400/20 duration-500"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

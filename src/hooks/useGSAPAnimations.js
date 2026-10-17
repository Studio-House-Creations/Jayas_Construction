import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function useGSAPAnimations(ref) {
  useGSAP(() => {
    gsap.from(ref.current, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
    });
  }, [ref]);
}
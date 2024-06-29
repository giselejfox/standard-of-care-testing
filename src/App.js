import { useRef } from "react";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  
  gsap.registerPlugin(ScrollTrigger);
  const svgRef = useRef();
  const dotRef = useRef();
  const pinContainerRef = useRef();

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        pin: true,
        trigger: pinContainerRef.current,
        start: "50% 50%",
        endTrigger: ".scroll-and-pin-end",
        end: "bottom 50%",
      },
    });

    tl.to(svgRef.current, {
      scale: 2,
      transformOrigin: "center center",
      ease: "none",
    });

    tl.to(dotRef.current, {
      fill: "#000000",
      ease: "none"
    })
    
    tl.to(dotRef.current, {
      y: -100,  // Move the dot up by changing its 'cy' attribute
      ease: "none"
    });
    
    tl.to(dotRef.current, {
      x: 100,  // Move the dot up by changing its 'cy' attribute
      ease: "none"
    });


    // Base seeing the waiting room

    // Change color of two patients

    // Text -> 2 patients are here for potential heart attacks

    // Text -> But doctors have only been trained to recognize symptoms in one of them

    // AMA



  })

  return (
    <div className="App container">
      <div className="big-spacer"></div>
      <div className="row pin-container" ref={pinContainerRef}>
        <div className="col">
          <svg ref={svgRef} className="pin-svg"width="207" height="206" viewBox="0 0 207 206" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="206" height="205" fill="white" stroke="black"/>
            <ellipse cx="84" cy="180" rx="19" ry="20" fill="#96ED48"/>
            <path ref={dotRef} d="M52.5 180C52.5 191.046 43.9934 200 33.5 200C23.0066 200 14.5 191.046 14.5 180C14.5 168.954 23.0066 160 33.5 160C43.9934 160 52.5 168.954 52.5 180Z" fill="#FF5454"/>
            <path d="M153 180C153 191.046 144.493 200 134 200C123.507 200 115 191.046 115 180C115 168.954 123.507 160 134 160C144.493 160 153 168.954 153 180Z" fill="#54A3FF"/>
          </svg>
        </div>
        <div className="col">
          <h1>Test</h1>
        </div>
      </div>

      <div className="big-spacer scroll-and-pin-end"></div>
    </div>
  );
}



export default App;

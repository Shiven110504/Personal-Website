import { useCallback, useEffect } from "react";
import Typewriter from 'typewriter-effect';

const Hero = () => {
    useEffect(() => {
        const scrollAnimElements = document.querySelectorAll(
          "[data-animate-on-scroll]"
        );
        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting || entry.intersectionRatio > 0) {
                const targetElement = entry.target;
                targetElement.classList.add("animate");
                observer.unobserve(targetElement);
              }
            }
          },
          {
            threshold: 0.15,
          }
        );
    
        for (let i = 0; i < scrollAnimElements.length; i++) {
          observer.observe(scrollAnimElements[i]);
        }
    
        return () => {
          for (let i = 0; i < scrollAnimElements.length; i++) {
            observer.unobserve(scrollAnimElements[i]);
          }
        };
      }, []);

      const onLinkedInClick = useCallback(() => {
        window.open("https://www.linkedin.com/in/sp1105/");
      }, []);
    
      const onGithubClick = useCallback(() => {
        window.open("https://github.com/Shiven110504");
      }, []);
    
      const onTwitterClick = useCallback(() => {
        window.open("https://twitter.com/Shiven_Patel11");
      }, []);
    
      const onInstagramClick = useCallback(() => {
        window.open("https://www.instagram.com/shiven.patel11/?hl=en");
      }, []);
    return (
        <section className="self-stretch overflow-hidden flex flex-row items-center justify-center py-[60px] px-[69px] box-border max-w-full text-left text-29xl text-primary-black font-heading-h6-semibold mq825:py-[39px] mq825:px-[34px] mq825:box-border">
        <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-0 px-[30px] box-border gap-[92px] max-w-full lg:flex-wrap mq825:gap-[46px] mq450:gap-[23px]">
          <div className="flex-1 overflow-hidden flex flex-col items-start justify-start py-5 px-0 box-border gap-[40px] min-w-[513px] min-h-[510px] max-w-full lg:min-h-[auto] mq825:min-w-full mq450:gap-[20px]">
            <div className="self-stretch flex flex-col items-center justify-center gap-[32px] max-w-full mq450:gap-[16px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
                <div
                  className="flex flex-row items-start justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] max-w-full"
                  data-animate-on-scroll
                >
                  <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
                    <span>{`Hello I’am `}</span>
                    <b>Shiven Patel</b>
                  </h1>
                </div>
                <div
                  className="flex flex-row items-start justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] max-w-full"
                  data-animate-on-scroll
                >
                <Typewriter
                    options={{
                        strings: ['Software Engineer', 'Robotics Researcher', 'Entrepreneur', 'Problem Solver'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                </div>
                <div
                  className="flex flex-row items-start justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] max-w-full"
                  data-animate-on-scroll
                >
                  <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
                    <span>{`UMass `}</span>
                    <b>Amherst</b>
                  </h1>
                </div>
              </div>
              <div
                className="self-stretch relative text-base tracking-[0.02em] leading-[24px] text-zinc-500 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-top] opacity-[0]"
                data-animate-on-scroll
              >
                <p className="m-0">{`I am a Computer Science major with a Business minor and a Commonwealth Honors College student at the University of Massachusetts Amherst. `}</p>
                <p className="m-0">
                  I am passionate about solving problems and creating positive
                  impact through technology and innovation.
                </p>
              </div>
            </div>
            <div
              className="self-stretch h-14 flex flex-row items-start justify-start gap-[32px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-top] opacity-[0] mq450:gap-[16px]"
              data-animate-on-scroll
            >
              <button
                className="cursor-pointer [border:none] p-4 bg-primary-black self-stretch rounded w-14 flex flex-row items-center justify-center box-border active:animate-[1s_ease_0s_infinite_normal_none_shadow-pop-tr] active:opacity-[1] hover:bg-darkslategray"
                onClick={onLinkedInClick}
              >
                <img
                  className="relative w-5 h-5"
                  alt=""
                  src="/Linkedin.svg"
                />
              </button>
              <button
                className="cursor-pointer p-4 bg-[transparent] rounded box-border w-[58px] h-[58px] flex flex-row items-center justify-center border-[2px] border-solid border-primary-black active:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] active:opacity-[1]"
                onClick={onGithubClick}
              >
                <img
                  className="relative w-5 h-5"
                  alt=""
                  src="/Github.svg"
                />
              </button>
              <button
                className="cursor-pointer p-4 bg-[transparent] rounded box-border w-[58px] h-[58px] flex flex-row items-center justify-center border-[2px] border-solid border-primary-black active:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] active:opacity-[1]"
                onClick={onTwitterClick}
              >
                <img
                  className="relative w-5 h-5"
                  alt=""
                  src="/Twitter.svg"
                />
              </button>
              <button
                className="cursor-pointer p-4 bg-[transparent] rounded box-border w-[58px] h-[58px] flex flex-row items-center justify-center border-[2px] border-solid border-primary-black active:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] active:opacity-[1]"
                onClick={onInstagramClick}
              >
                <img
                  className="relative w-5 h-5"
                  alt=""
                  src="/Insta.svg"
                />
              </button>
            </div>
          </div>
          <div className="bg-primary-white w-[377px] h-[510px] overflow-hidden shrink-0 flex flex-col items-center justify-center min-w-[377px] max-w-full lg:flex-1 mq825:min-w-full">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-bottom] opacity-[0] lg:self-stretch lg:w-auto"
              loading="eager"
              alt=""
              src="/peep46@2x.png"
              data-animate-on-scroll
            />
          </div>
        </div>
      </section>
    )};

export default Hero;
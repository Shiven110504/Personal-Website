import { useCallback, useEffect } from "react";
import Typewriter from 'typewriter-effect';

const ContactForm = () => {
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

  const onEmailClick = useCallback(() => {
    window.location.href = "mailto:shiven110504@gmail.com";
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
    <section
      className="self-stretch bg-primary-white overflow-hidden flex flex-col items-start justify-start py-[60px] pr-[97px] pl-20 box-border max-w-full text-left text-29xl text-primary-black font-heading-h6-semibold mq825:py-[39px] mq825:pr-12 mq825:pl-10 mq825:box-border mq450:pr-5 mq450:box-border"
      data-scroll-to="contactForm"
    >
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-0 px-8 box-border min-h-[481px] gap-[20px] max-w-full">
        <div className="w-[1216px] flex flex-col items-start justify-start py-5 px-0 box-border max-w-full">
          <div
            className="self-stretch flex flex-col items-start justify-center gap-[25px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-bottom] opacity-[0] min-h-[321px]"
            data-animate-on-scroll
          >
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
                    <span className="font-extrabold">{`Let’s `}</span>
                    <span>{`talk `}</span>
                    <span className="font-extrabold">about</span>
                  </h1>
                </div>
                <Typewriter
                    options={{
                        strings: ['Tech', 'Robotics', 'Startups'],
                        autoStart: true,
                        loop: true,
                    }}
                />
              </div>
              <div className="self-stretch relative text-base tracking-[0.02em] leading-[24px] text-zinc-500">
                I seek to push the limits of creativity to create high-engaging,
                user-friendly, and memorable interactive experiences.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-9xl">
              <div className="self-stretch relative tracking-[-0.02em] leading-[32px] font-semibold whitespace-nowrap mq450:text-3xl mq450:leading-[26px]">
                shiven110504@gmail.com
              </div>
              <div className="self-stretch relative tracking-[-0.02em] leading-[32px] font-semibold mq450:text-3xl mq450:leading-[26px]">
                +1 (404) 232-0349
              </div>
            </div>
          </div>
          <div
            className="h-14 flex flex-row items-start justify-start gap-[24px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-bottom] opacity-[0] max-w-full"
            data-animate-on-scroll
          >
            <button
              className="cursor-pointer [border:none] py-4 px-[18px] bg-primary-black rounded flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkslategray"
              onClick={onEmailClick}
            >
              <div className="relative text-xl tracking-[0.02em] leading-[24px] font-semibold font-heading-h6-semibold text-primary-white text-left">
                Get In Touch
              </div>
            </button>
            <button
              className="cursor-pointer [border:none] p-4 bg-primary-black self-stretch rounded w-14 flex flex-row items-center justify-center box-border"
              onClick={onLinkedInClick}
            >
              <img className="relative w-5 h-5" alt="" src="/LinkedIn.svg" />
            </button>
            <button
              className="cursor-pointer p-4 bg-[transparent] rounded box-border w-[58px] h-[58px] flex flex-row items-center justify-center border-[2px] border-solid border-primary-black"
              onClick={onGithubClick}
            >
              <img
                className="relative w-5 h-5"
                alt=""
                src="/Github.svg"
              />
            </button>
            <button
              className="cursor-pointer p-4 bg-[transparent] rounded box-border w-[58px] h-[58px] flex flex-row items-center justify-center border-[2px] border-solid border-primary-black"
              onClick={onTwitterClick}
            >
              <img
                className="relative w-5 h-5"
                alt=""
                src="/Twitter.svg"
              />
            </button>
            <button
              className="cursor-pointer p-4 bg-[transparent] rounded box-border w-[58px] h-[58px] flex flex-row items-center justify-center border-[2px] border-solid border-primary-black"
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
      </div>
    </section>
  );
};

export default ContactForm;

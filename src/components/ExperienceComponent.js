import { useEffect } from "react";

const ExperienceComponent = ({
  leadSoftwareEngineerAtGoo,
  dec2023Present,
  ledTheDevelopmentOfANewWe,
  collaboratedInADynamicTea,
}) => {
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

  return (
    <div
      className={`self-stretch rounded-3xs box-border flex flex-col items-start justify-start py-[30px] pr-[25px] pl-[23px] gap-[28px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-top] opacity-[0] max-w-full text-center text-5xl text-primary-white font-heading-h6-semibold border-[1px] border-solid border-zinc-500`}
      data-animate-on-scroll
    >
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] max-w-full lg:flex-wrap">
        <div className="flex flex-row items-center justify-start gap-[30px] max-w-full">
          <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[28px] font-semibold font-inherit mq450:text-lgi mq450:leading-[22px]">
            {leadSoftwareEngineerAtGoo}
          </h3>
        </div>
        <div className="relative text-base tracking-[-0.02em] leading-[20px] font-semibold text-zinc-300 flex items-center justify-center">
          {dec2023Present}
        </div>
      </div>
      <div className="self-stretch relative text-base tracking-[0.02em] leading-[24px] text-zinc-300 text-left">
        <p className="m-0">{ledTheDevelopmentOfANewWe}</p>
        <p className="m-0">{collaboratedInADynamicTea}</p>
      </div>
    </div>
  );
};

export default ExperienceComponent;

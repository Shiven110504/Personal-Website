import { useEffect } from "react";

const Skills = () => {
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
    <section
      className="self-stretch overflow-hidden flex flex-col items-center justify-center py-[60px] px-20 text-left text-29xl text-primary-black font-heading-h6-semibold mq825:py-[39px] mq825:px-10 mq825:box-border"
      data-scroll-to="skills"
    >
      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-0 pr-[41px] pl-10 gap-[20px]">
        <div
          className="self-stretch overflow-hidden flex flex-row items-center justify-center py-5 px-0 gap-[16px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-top] opacity-[0] mq450:flex-wrap"
          data-animate-on-scroll
        >
          <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-normal font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
            My
          </h1>
          <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-extrabold font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
            Skills
          </h1>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-5 px-0 box-border gap-[71px] min-h-[492px] text-center text-xl mq825:gap-[35px] mq450:gap-[18px]">
          <div
            className="rounded bg-primary-white box-border w-[186px] h-[186px] flex flex-col items-center justify-center py-6 px-[22px] gap-[32px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] border-[2px] border-solid border-primary-black"
            data-animate-on-scroll
          >
            <img
              className="relative w-14 h-14 overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/python.svg"
            />
            <b className="self-stretch relative tracking-[-0.02em] leading-[24px] capitalize mq450:text-base mq450:leading-[19px]">
              Python
            </b>
          </div>
          <div
            className="rounded bg-primary-white box-border w-[186px] h-[186px] flex flex-col items-center justify-center py-6 px-[22px] gap-[32px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] border-[2px] border-solid border-primary-black"
            data-animate-on-scroll
          >
            <img
              className="relative w-14 h-14"
              loading="eager"
              alt=""
              src="/iconjavscript.svg"
            />
            <b className="self-stretch relative tracking-[-0.02em] leading-[24px] capitalize mq450:text-base mq450:leading-[19px]">
              javascript
            </b>
          </div>
          <div
            className="rounded bg-primary-white box-border w-[186px] h-[186px] flex flex-col items-center justify-center py-6 px-[22px] gap-[32px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] border-[2px] border-solid border-primary-black"
            data-animate-on-scroll
          >
            <img
              className="relative w-14 h-14 overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/html5.svg"
            />
            <b className="self-stretch relative tracking-[-0.02em] leading-[24px] capitalize mq450:text-base mq450:leading-[19px]">
              HTML
            </b>
          </div>
          <div
            className="rounded bg-primary-white box-border w-[186px] h-[186px] flex flex-col items-center justify-center py-6 px-[22px] gap-[32px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] border-[2px] border-solid border-primary-black"
            data-animate-on-scroll
          >
            <img
              className="relative w-14 h-14"
              loading="eager"
              alt=""
              src="/css3.svg"
            />
            <b className="self-stretch relative tracking-[-0.02em] leading-[24px] capitalize mq450:text-base mq450:leading-[19px]">
              CSS
            </b>
          </div>
          <div
            className="rounded bg-primary-white box-border w-[186px] h-[186px] flex flex-col items-center justify-center py-6 px-[22px] gap-[32px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] border-[2px] border-solid border-primary-black"
            data-animate-on-scroll
          >
            <img
              className="relative w-14 h-14 overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/react.svg"
            />
            <b className="self-stretch relative tracking-[-0.02em] leading-[24px] capitalize mq450:text-base mq450:leading-[19px]">
              React.js
            </b>
          </div>
          <div
            className="rounded bg-primary-white box-border w-[186px] h-[186px] flex flex-col items-center justify-center py-6 px-[22px] gap-[32px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] border-[2px] border-solid border-primary-black"
            data-animate-on-scroll
          >
            <img
              className="relative w-14 h-14"
              loading="eager"
              alt=""
              src="/tailwindcss.svg"
            />
            <b className="self-stretch relative tracking-[-0.02em] leading-[24px] capitalize mq450:text-base mq450:leading-[19px]">
              Tailwind
            </b>
          </div>
          <div
            className="rounded bg-primary-white box-border w-[186px] h-[186px] flex flex-col items-center justify-center py-6 px-[22px] gap-[32px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] border-[2px] border-solid border-primary-black"
            data-animate-on-scroll
          >
            <img
              className="relative w-14 h-14 overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/nodejs.svg"
            />
            <b className="self-stretch relative tracking-[-0.02em] leading-[24px] capitalize mq450:text-base mq450:leading-[19px]">
              Node.js
            </b>
          </div>
          <div
            className="rounded bg-primary-white box-border w-[186px] h-[186px] flex flex-col items-center justify-center py-6 px-[22px] gap-[32px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] border-[2px] border-solid border-primary-black"
            data-animate-on-scroll
          >
            <img
              className="relative w-14 h-14"
              loading="eager"
              alt=""
              src="/nextjs.svg"
            />
            <b className="self-stretch relative tracking-[-0.02em] leading-[24px] capitalize mq450:text-base mq450:leading-[19px]">
              Next.js
            </b>
          </div>
          <div
            className="rounded bg-primary-white box-border w-[186px] h-[186px] flex flex-col items-center justify-center py-6 px-[22px] gap-[32px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] border-[2px] border-solid border-primary-black"
            data-animate-on-scroll
          >
            <img
              className="relative w-14 h-14 overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/java.svg"
            />
            <b className="self-stretch relative tracking-[-0.02em] leading-[24px] capitalize mq450:text-base mq450:leading-[19px]">
              Java
            </b>
          </div>
          <div
            className="rounded bg-primary-white box-border w-[186px] h-[186px] flex flex-col items-center justify-center py-6 px-[22px] gap-[32px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] border-[2px] border-solid border-primary-black"
            data-animate-on-scroll
          >
            <img
              className="relative w-14 h-14 overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/icongit.svg"
            />
            <b className="self-stretch relative tracking-[-0.02em] leading-[24px] capitalize mq450:text-base mq450:leading-[19px]">
              Git/Github
            </b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

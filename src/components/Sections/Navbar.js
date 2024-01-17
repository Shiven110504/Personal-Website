import { useCallback, useEffect } from "react";

const Navbar = () => {
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

  const onAboutMeClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='experience']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSkillsClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='skills']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onProjectsClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='project']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='contactForm']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onResumeClick = useCallback(() => {
    window.open("https://shivenpatel.me/Shiven_Patel_Resume.pdf");
  }, []);

  return (
    <header className="self-stretch overflow-hidden flex flex-row items-center justify-center py-6 px-20 box-border max-w-full mq825:pl-10 mq825:pr-10 mq825:box-border">
      <div
        className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 px-8 box-border [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] gap-[20px] max-w-full mq825:hidden"
        data-animate-on-scroll
      >
        <button className="cursor-pointer [border:none] py-0 pr-[17px] pl-0 bg-[transparent] flex flex-row items-center justify-start gap-[11px]">
          <img
            className="relative w-[22px] h-[22px]"
            loading="eager"
            alt=""
            src="/icon.svg"
          />
          <b className="relative text-xl tracking-[-0.02em] leading-[24px] capitalize font-heading-h6-semibold text-primary-black text-left whitespace-nowrap">{`Shiven `}</b>
        </button>
        <div className="w-[466px] flex flex-row items-center justify-center gap-[32px] max-w-full mq825:gap-[16px]">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 flex flex-row items-center justify-center"
            onClick={onAboutMeClick}
          >
            <div className="relative text-xl tracking-[-0.02em] leading-[24px] capitalize font-semibold font-heading-h6-semibold text-primary-black text-left">
              Experience
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center"
            onClick={onSkillsClick}
          >
            <div className="relative text-xl tracking-[-0.02em] leading-[24px] capitalize font-semibold font-heading-h6-semibold text-primary-black text-left">
              Skills
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center"
            onClick={onProjectsClick}
          >
            <div className="relative text-xl tracking-[-0.02em] leading-[24px] capitalize font-semibold font-heading-h6-semibold text-primary-black text-left">
              Projects
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 flex flex-row items-center justify-center"
            onClick={onContactClick}
          >
            <div className="relative text-xl tracking-[-0.02em] leading-[24px] capitalize font-semibold font-heading-h6-semibold text-primary-black text-left whitespace-nowrap">
              Contact me
            </div>
          </button>
        </div>
        <button
          className="cursor-pointer [border:none] py-4 px-5 bg-primary-black rounded flex flex-row items-center justify-center gap-[8px] hover:bg-darkslategray"
          onClick={onResumeClick}
        >
          <div className="relative text-xl tracking-[0.02em] leading-[24px] font-semibold font-heading-h6-semibold text-primary-white text-left">
            Resume
          </div>
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0"
            alt=""
            src="/download.svg"
          />
        </button>
        <img
          className="relative w-9 h-9 overflow-hidden shrink-0 hidden"
          alt=""
          src="/materialsymbolsmenu.svg"
        />
      </div>
    </header>
  );
};

export default Navbar;

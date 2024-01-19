import { useEffect } from "react";
import ProjectComponent from "../ProjectComponent";

const Projects = () => {
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
        className="self-stretch bg-primary-black overflow-hidden flex flex-col items-start justify-start py-[60px] pr-[97px] pl-20 box-border max-w-full text-left text-29xl text-primary-white font-heading-h6-semibold lg:pt-[25px] lg:pb-[25px] lg:box-border mq825:py-5 mq825:pr-12 mq825:pl-10 mq825:box-border mq450:pr-5 mq450:box-border mq1425:pt-[39px] mq1425:pb-[39px] mq1425:box-border"
        data-scroll-to="project"
      >
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-0 px-8 box-border gap-[20px] max-w-full">
          <div
            className="self-stretch overflow-hidden flex flex-row items-center justify-center py-5 px-0 gap-[16px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-top] opacity-[0] mq450:flex-wrap"
            data-animate-on-scroll
          >
            <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-normal font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
              My
            </h1>
            <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-extrabold font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
              Projects
            </h1>
          </div>
          <ProjectComponent
            Image="/Personal-Website.png"
            Number="01"
            Title="Personal Website"
            ImageLink="https://github.com/Shiven110504/Shiven110504.github.io"
            Text1="My portfolio is a single-page application featuring a clean, modern design that highlights my experience and projects. The navigation bar allows easy access to different sections: Experience, Skills, Projects, and a Contact form. There's also a downloadable version of my resume for a more detailed look at my professional background."
            Text2="This website was built using React.js, Tailwind CSS. It is hosted at shivenpatel.me and is fully responsive."
          />
          <ProjectComponent
            Image="/DailyDose.png"
            Number="02"
            Title="Daily D.O.S.E"
            ImageLink="https://github.com/Shiven110504/Daily-D.O.S.E"
            Text1="Daily D.O.S.E understands that the journey to optimal health is about consistent, incremental steps. Tailored to your unique health profile, it suggests achievable goals, nudging you towards slightly more challenging targets as you progress."
            Text2="Developed a user-friendly end to end application using Next.js backend framework and MongoDB database, resulting in a seamless and efficient tracking experience for users. Implemented a reinforcement learning model that analyzes user feedback to design personalized health goals, resulting in consistent progress towards optimal health for each individual user."
          />
          <ProjectComponent
            Image="/HackUMass.png"
            Number="03"
            Title="HackUMass XI "
            ImageLink="https://hackumass.com/"
            Text1="Updated the frontend for HackUMass XI, to create a visually appealing and user-friendly interface. "
            Text2="Deployed and maintaining the Docker instance of fuse-umass dashboard to smoothly intake registrations, manage emailing, increasing initial participation by around 7%."
          />
          <ProjectComponent
            Image="/EClub.png"
            Number="04"
            Title="UMass Entrepreneurship Club"
            ImageLink="https://github.com/UMass-Amherst-Entrepreneurship-Club/Website-2.0"
            Text1="As the Director of Technology leading a team to build and maintain the website of Entrepreneurship Club built using React.js, Node.js, CSS, Three.js, HTML."
            Text2=""
          />
          <ProjectComponent
            Image="/FutureHacks.png"
            Number="05"
            Title="FutureHacks 4"
            ImageLink="https://github.com/Shiven110504/FutureHacks-4"
            Text1="FutureHacks Four 2022 is an annual Online Free to Attend International hackathon organized by AiGoLearning."
            Text2="As the Director, I manage a team of 7 students, handle sponsorships, arrange workshops, preside meetings, set up deadlines, etc. As the Technical Lead, I have coded the website, supervised the designing of all social media posts, and set up the other required infrastructure for hosting an online hackathon."
            />
        </div>
      </section>
    )};

    export default Projects;
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
            image771="/image-771@2x.png"
            prop="01"
            dailyDOSE="Daily D.O.S.E"
            imageClick="https://github.com/Shiven110504/Daily-D.O.S.E"
            dailyDOSEUnderstandsThatT="Daily D.O.S.E understands that the journey to optimal health is about consistent, incremental steps. Tailored to your unique health profile, it suggests achievable goals, nudging you towards slightly more challenging targets as you progress."
            developedAUserFriendlyEnd="Developed a user-friendly end to end application using Next.js backend framework and MongoDB database, resulting in a seamless and efficient tracking experience for users. Implemented a reinforcement learning model that analyzes user feedback to design personalized health goals, resulting in consistent progress towards optimal health for each individual user."
          />
          <ProjectComponent
            image771="/image-770@2x.png"
            prop="02"
            dailyDOSE="HackUMass XI "
            imageClick="https://hackumass.com/"
            dailyDOSEUnderstandsThatT="Updated the frontend for HackUMass XI, to create a visually appealing and user-friendly interface. "
            developedAUserFriendlyEnd="Deployed and maintaining the Docker instance of fuse-umass dashboard to smoothly intake registrations, manage emailing, increasing initial participation by around 7%."
          />
          <ProjectComponent
            image771="/image-770-1@2x.png"
            prop="03"
            dailyDOSE="UMass Entrepreneurship Club"
            dailyDOSEUnderstandsThatT="As the Director of Technology leading a team to build and maintain the website of Entrepreneurship Club built using React.js, Node.js, CSS, Three.js, HTML."
            developedAUserFriendlyEnd=""
            imageClick="https://github.com/UMass-Amherst-Entrepreneurship-Club/Website-2.0"
          />
          <ProjectComponent
            image771="/image-770-2@2x.png"
            prop="04"
            dailyDOSE="FutureHacks 4"
            dailyDOSEUnderstandsThatT="FutureHacks Four 2022 is an annual Online Free to Attend International hackathon organized by AiGoLearning."
            developedAUserFriendlyEnd="As the Director, I manage a team of 7 students, handle sponsorships, arrange workshops, preside meetings, set up deadlines, etc. As the Technical Lead, I have coded the website, supervised the designing of all social media posts, and set up the other required infrastructure for hosting an online hackathon."
            imageClick="https://github.com/Shiven110504/FutureHacks-4"
            />
        </div>
      </section>
    )};

    export default Projects;
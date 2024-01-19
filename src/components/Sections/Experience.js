import { useEffect } from "react";
import ExperienceComponent from "../ExperienceComponent";

const Experience = () => {
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
      className="self-stretch bg-primary-black overflow-hidden flex flex-row items-start justify-start py-[60px] pr-[97px] pl-20 box-border max-w-full text-left text-29xl text-primary-white font-heading-h6-semibold mq825:py-[25px] mq825:pr-12 mq825:pl-10 mq825:box-border mq450:pt-5 mq450:pr-0 mq450:pl-0 mq450:pb-5 mq450:box-border mq1425:pt-[39px] mq1425:pb-[39px] mq1425:box-border"
      data-scroll-to="experience"
    >
      <div className="flex-1 overflow-hidden flex flex-col items-center justify-center py-0 px-8 box-border  gap-[20px] max-w-full">
        <div
          className="self-stretch overflow-hidden flex flex-row items-center justify-center py-5 px-0 gap-[16px]  [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-top] opacity-[0] mq450:flex-wrap"
          data-animate-on-scroll
        >
          <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-normal font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
            My
          </h1>
          <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-extrabold font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
            Experience
          </h1>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-10 px-6 box-border gap-[32px] max-w-full text-center text-5xl mq825:gap-[16px] mq825:pt-5 mq825:pb-5 mq450:pl-0 mq450:pr-0 mq825:box-border mq1425:pt-[26px] mq1425:pb-[26px] mq1425:box-border">
          
          <ExperienceComponent
            Title="Software Engineer Intern @ UMass IT"
            Date="Jan 2023 - Present"
            Text1=" Improved site reliability and retention rate by deploying a new production version of the SPIRE homepage, resulting in a 10% decrease in downtime and an increase in user engagement."
            Text2="Improved security by deploying multi-factor authentication on SPIRE that led to more convenient SSO for over 30,000 daily users"
          />
          <ExperienceComponent
            Title="Frontend Software Engineer @ IIAM Health"
            Date="Dec 2023 - Present"
            Text1="Led the development of a new web platform at IIAM Health, leveraging React.js, Tailwind CSS, and HTML to revolutionize medical record sharing among healthcare providers."
            Text2="Collaborated in a dynamic team environment to design a user-friendly interface, ensuring responsive and accessible web experiences while aligning with the startup's vision for transforming healthcare record management."

          />
          <ExperienceComponent
            Title="Research Assistant @ Robotic Systems Lab"
            Date="Sep 2023 - Present"
            Text1="Utilized an isometric microphone array and DOA estimation algorithm to enhance auditory input for the guide dog robot project, enabling it to accurately map environmental threats in 3D space improving accuracy rate by 5.3%."
            Text2="Led data collection efforts for the visual data, implementing a semantic aware local path planner that improved navigation decision-making by 30%, resulting in more efficient and safer routes."

          />
          <ExperienceComponent
            Title="President @ CICSoft"
            Date="Dec 2023 - Present"
            Text1=" CICSoft aims to provide a collaborative environment for students to enhance their technical skills while developing applications! We strive to reduce the gap between school and industry by enriching the students with job ready skills in CS."
            Text2="As the President of the club, I overlook the  a team of 6 in optimizing logistics, outreach, teaching, and development.  The club has 100+ active members marching towards a fulfilling career in CS."

          />
          <ExperienceComponent
            Title="Undergraduate Course Assistant @ CICS"
            Date="Feb 2023 - Present"
            Text1=" COMPSCI 240: Reasoning Under Uncertainty, a Probability and Statistics for Computer Science course.Coordinated with faculty and teaching assistants to streamline course operations, resulting in a 20% reduction in grading time for exams and assignments."
            Text2="Led interactive lab sessions and small group discussions, fostering an engaging learning environment that led to a increase in student participation and comprehension."
          />
          
        </div>
      </div>
    </section>
  );
};

export default Experience;

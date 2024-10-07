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
            Title="Robotics Software Engineer Intern @ MOLG.Inc"
            Date="June 2024 – Present"
            Text1="Designed and implemented an end-to-end custom collision detection framework for ABB IRB-1300 arm system, successfully integrating it into the v2.0 customer facing software package, by utilizing PyBullet, OpenGL3, ROS/2, and Websockets."
            Text2="Enhanced collision detection speed to 0.134 milliseconds per position for an 18-linked robotic system by applying multithreading techniques and following a microservice architecture, thereby significantly improving the system’s performance and responsiveness."
            Text3="Developed a sophisticated volume reservation system for multi-arm coordination using the Octree data structure, optimizing information retrieval processes and ensuring real-time coordination and operation of robotic arms in complex environments."
          />
          <ExperienceComponent
            Title="Research Assistant @ Robotic Systems Lab"
            Date="September 2023 – Present"
            Text1="Enhanced guide dog robot’s 3D auditory mapping by 15.3% using isometric mic array, DOA estimation algorithm, and signal processing with pyaudio, librosa, scipy, resulting in increased planning confidence against occlusions for navigating a visually impaired user."
            Text2="Developed a convolutional recurrent neural network for sound source distance estimation to improve obstacle avoidance, leveraging sklearn, tensorflow, and keras for automated signal processing."
            Text3="Led audio/visual data collection and integration with a semantic-aware path planner, enhancing navigation safety by 10%."
          />
          <ExperienceComponent
            Title="Software Engineer Intern @ UMass Information Technology"
            Date="January 2023 – Present"
            Text1="Led the configuration and deployment of Grouper for Canvas admin management, integrating attestation features which resulted in a 20% reduction in unauthorized admin additions, utilizing Agile methodologies with Scrum and Jira to streamline the project."
            Text2="Engineered a robust ETL process using Boomi to synchronize Active Directory group members with Canvas via RESTful APIs, achieving a 98% data synchronization accuracy rate and significantly enhancing data integrity and consistency across platforms."
            Text3="Developed and implemented a subprocess for NetID collision resolution utilizing SSMS and PostgreSQL, which reduced manual account management efforts by 30% and improved efficiency through the application of Test Driven Development (TDD) practices."
          />
          <ExperienceComponent
            Title="Undergraduate Course Assistant @ CICS"
            Date="January 2023 – Present"
            Text1="Accomplished a 10% reduction in grading time for exams by coordinating with faculty to implement efficient grading workflows."
            Text2="Enhanced student participation by leading engaging discussion sessions, as measured by a 20% increase in student performance."
            Text3="Developed and maintained course materials, including interactive exercises, practice exams reinforcing key concepts."
          />
          <ExperienceComponent
            Title="President @ CICSoft Student Organization"
            Date="August 2022 – Present"
            Text1="CICSoft aims to bridge the gap between school and industry by enriching the students with skills in AI/ML, DSA, Systems etc."
            Text2="Leading a board of 6, steering 400+ members with events focused on technical/behavioural interview prep, system design."
            Text3="Fostered a robust tech community, cultivating a platform for networking, skill development, and career advancement for members."
          />
          
        </div>
      </div>
    </section>
  );
};

export default Experience;

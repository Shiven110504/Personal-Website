import React from 'react';

const Skill = ({ src, label, animateOnScroll }) => {
  return (
    <div className={`rounded bg-primary-white box-border w-[186px] h-[186px] flex flex-col items-center justify-center py-6 px-[22px] gap-[32px] ${animateOnScroll ? 'animate-[1s_ease_0s_1_normal_forwards_scale-up]' : ''} opacity-[1] border-[2px] border-solid border-primary-black`}
         data-animate-on-scroll={animateOnScroll}>
      <img className="relative w-14 h-14 overflow-hidden shrink-0" loading="eager" alt={label} src={src} />
      <b className="self-stretch relative tracking-[-0.02em] leading-[24px] capitalize mq450:text-base mq450:leading-[19px]">
        {label}
      </b>
    </div>
  );
}

export default Skill;
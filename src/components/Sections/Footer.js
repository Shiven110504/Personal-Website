const Footer = () => {
    return (
        <footer className="self-stretch bg-primary-black overflow-hidden flex flex-row items-start justify-start py-6 pr-[97px] pl-20 box-border max-w-full text-right text-base text-primary-white font-heading-h6-semibold mq825:pl-10 mq825:pr-12 mq825:box-border mq450:pr-5 mq450:box-border">
        <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 px-8 box-border gap-[20px] max-w-full mq825:flex-wrap">
          <img
            className="relative w-[122px] h-6"
            loading="eager"
            alt=""
            src="/logo.svg"
          />
          <div className="flex flex-col items-end justify-start gap-[12px]">
            <div className="relative tracking-[-0.02em] leading-[20px] font-semibold">
              @2024 Shiven
            </div>
            <div className="relative tracking-[-0.02em] leading-[20px] font-semibold">{`Made with Love and Coffee `}</div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
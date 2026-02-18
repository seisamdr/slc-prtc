import "../../app/globals.css";

const Works = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="font-bold text-4xl text-natural">How It Works</h2>
      <h3 className="text-[28px] text-natural mt-2.5">
        Turn complexity into simplicity in just 3 easy steps.
      </h3>

      <div className="flex items-center gap-[100px] mt-[50px]">
        <div className="relative flex flex-col items-center">
          {/* Bullet */}
          <div className="flex items-start z-10">
            <div className="shrink-0 grid place-items-center w-[64px] h-[64px] rounded-full bg-primary">
              <span className="text-testimonial text-[28px] font-bold">1</span>
            </div>
          </div>

          {/* Content */}
          <div className="mt-5 text-center">
            <h3 className="text-natural text-[28px] font-bold">
              Connect Your Apps
            </h3>
            <p className="text-natural text-base mt-2.5 w-[346px]">
              Seamlessly link the tools you already use—no hassle, no friction.
            </p>
          </div>

          {/* Connector */}
          <div className="hidden md:block absolute top-[32px] left-[calc(50%+32px)] w-[calc(100%+100px)] h-1 bg-primary"></div>
        </div>

        <div className="relative flex flex-col items-center">
          {/* Bullet */}
          <div className="flex items-start z-10">
            <div className="shrink-0 grid place-items-center w-[64px] h-[64px] rounded-full bg-primary">
              <span className="text-testimonial text-[28px] font-bold">2</span>
            </div>
          </div>

          {/* Content */}
          <div className="mt-5 text-center">
            <h3 className="text-natural text-[28px] font-bold">
              Build Your Automation
            </h3>
            <p className="text-natural text-base mt-2.5 w-[346px]">
              Design workflows with our drag-and-drop builder in minutes.
            </p>
          </div>

          {/* Connector */}
          <div className="hidden md:block absolute top-[32px] left-[calc(50%+32px)] w-[calc(100%+100px)] h-1 bg-primary"></div>
        </div>

        <div className="relative flex flex-col items-center">
          {/* Bullet */}
          <div className="flex items-start z-10">
            <div className="shrink-0 grid place-items-center w-[64px] h-[64px] rounded-full bg-primary">
              <span className="text-testimonial text-[28px] font-bold">3</span>
            </div>
          </div>

          {/* Content */}
          <div className="mt-5 text-center">
            <h3 className="text-natural text-[28px] font-bold">Run & Relax</h3>
            <p className="text-natural text-base mt-2.5 w-[346px]">
              Let automation do the heavy lifting while you focus on what
              matters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;

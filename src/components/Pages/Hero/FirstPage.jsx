import React from "react";
import personImg from "../../../assets/person2.png";

const FirstPage = () => {
  return (
    <div className="h-full">
      <main className="h-full w-full bg-secondary page-shadow">
        <div className="p-10  space-y-4">
          {/* image-container */}
          <div>
            <img src={personImg} alt="" className="w-[300px] mx-auto" />
          </div>
          {/* text-container */}
          <div>
            <div className="space-y-3">
              <p className="uppercase">Hello</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80">
                I'm AMR
              </p>
              <p className="text-black/75 text-left">Full Stack Developer</p>
              <p className="text-black/75">
              Fullstack Developer with a passion for building innovative applications. I enjoy tackling challenges across the entire stack from frontend to backend.
              </p>
              <a
                className="inline-block primary-btn "href="file:///C:/Users/Infotech/Downloads/Amr%20Tammam.pdf">
                {" "}
                Hire me
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;
import React from "react";
import ServicesBox from "./ServicesBox.jsx";
import Heading from "../../HelperComp/Heading.jsx";

const Services = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading
        title="MY story"
        subtitle="For years, Amr had a successful career in business management and operation. He worked with large corporate , managed product launches, and led sales teams to exceed their targets. His days were filled with negotiations. Amr enjoyed the excitement and challenge of his work but felt there was something missing. Despite his success, he yearned for a career where he could create, solve problems, and see the impact of his work in a more tangible way.

        One day, during a project that required coordination with the IT team, Amr found himself fascinated by the technical side of the process. He watched as developers coded solutions, and transformed ideas into functional software. His curiosity was piqued—he wanted to know how it all worked. Soon after, he started learning coding basics on weekends, beginning with HTML and CSS, and quickly moving on to JavaScript. He found himself spending more and more time on platforms like freeCodeCamp and Codecademy, devouring every tutorial he could find.

        As Amr delved deeper into programming, he realized this was the creative outlet he had been searching for. He loved the problem-solving aspect, the feeling of accomplishment when his code ran correctly, and the endless potential to build anything he could imagine. After months of self-study, he decided to take a leap and enroll in a part-time coding bootcamp. Juggling work and classes was challenging, but Amr was determined to make a meaningful transition. He built small projects on weekends, created a personal website, and networked with developers online.

        Finally, after a year of relentless learning, Ahmed felt ready to make the career shift. He updated his resume and portfolio with the projects he’d built during the bootcamp, and applied for junior developer roles. Although he had no formal tech background."
      />

      {/* Services Card  */}
      <div>
        {/* <ServicesBox /> */}
      </div>
    </div>
  );
};

export default Services;
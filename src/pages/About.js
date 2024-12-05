import React from "react";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";
import accordionData from "../components/aboutInfoArray";


function About() {
  return (
    <div className="App">
        {accordionData.map((item, index) => (
          <div>
            <Accordion
              key={index}
              title={item.title}
              content={item.content}
           />
          </div>
        ))}
      <Footer />
    </div>
  );
}

export default About;
import React from "react";

const aboutText: string[] = [
  "I'm one of those clichéd somebodies who has been completely absorbed by games ever since they can remember.",
  "Half way through my first year of law school in 2014, I remember sitting in front of a contract law textbook and deeply wishing I was \"doing something with computers\" instead. It took me three and a half years to work up the courage to break away from law and actually go for that 'something'.",
  "I never thought I could be a game developer, even though the idea had always been appealing. \"Programming? I'm not smart enough.\" But after firmly deciding a legal career wasn't for me, I determined that it didn't matter how difficult it would be, or how long it would take, to learn how to make games; I was going to do it anyway.",
  "Now, 10 years on from that initial spark of interest, I am about to graduate from my local university's Computer Games Design degree, with a number of games under my belt (and a slightly better understanding of programming).",
  "The goal for my career now is to end up working on a game that I can be well a truly proud of. When I play games and experience the incredible range and depth of emotions they have to offer, it gives me an insatiable desire to create something of my own that could have that same, deep emotional effect on someone else. And so, I am looking to work at a studio that can help me achieve that end.",
  "Until then, this train doesn't stop! I will be working on an independent project called Scrimshaw (see the page for it here) in an effort to hone my skills and improve in rusty areas, not to mention simply having fun creating a game within my favourite genre (turn-based combat!).",
];

const About: React.FC = () => {
  return (
    <section id="about" className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-[#FEF8EE] mb-4 pt-2">About Me</h2>
      {aboutText.map((paragraph, index) => (
        <p
          key={index}
          className={`text-lg ${index > 0 ? "pt-2" : ""} text-[#FEF8EE]`}
        >
          {paragraph}
        </p>
      ))}
    </section>
  );
};

export default About;

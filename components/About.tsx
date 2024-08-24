import React from "react";

const aboutText: string[] = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet tellus efficitur, sodales tortor vitae, suscipit nisl. Nunc sapien lorem, semper nec maximus eu, semper at ipsum. Etiam vitae sagittis magna. Sed vitae cursus massa. Vivamus nibh sem, pulvinar aliquet urna vitae, faucibus volutpat enim. Phasellus nec efficitur odio. Phasellus et ullamcorper neque, eget mattis enim. Integer at lorem suscipit, ornare risus efficitur, congue dolor. Etiam accumsan tellus at tortor sagittis, eget facilisis ipsum egestas. Sed egestas a sapien et hendrerit. Sed nec pulvinar est. ",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet tellus efficitur, sodales tortor vitae, suscipit nisl. Nunc sapien lorem, semper nec maximus eu, semper at ipsum. Etiam vitae sagittis magna. Sed vitae cursus massa. Vivamus nibh sem, pulvinar aliquet urna vitae, faucibus volutpat enim. Phasellus nec efficitur odio. Phasellus et ullamcorper neque, eget mattis enim. Integer at lorem suscipit, ornare risus efficitur, congue dolor. Etiam accumsan tellus at tortor sagittis, eget facilisis ipsum egestas. Sed egestas a sapien et hendrerit. Sed nec pulvinar est. ",
];

const About: React.FC = () => {
  return (
    <section id="about" className="max-w-4xl mx-auto ">
      <h2 className="text-4xl text-[#FEF8EE] mb-4 pt-2">About Me</h2>
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

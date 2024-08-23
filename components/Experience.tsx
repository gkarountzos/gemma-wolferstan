import React from "react";

const experienceText: string[] = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet tellus efficitur, sodales tortor vitae, suscipit nisl. Nunc sapien lorem, semper nec maximus eu, semper at ipsum. Etiam vitae sagittis magna. Sed vitae cursus massa. Vivamus nibh sem, pulvinar aliquet urna vitae, faucibus volutpat enim. Phasellus nec efficitur odio. Phasellus et ullamcorper neque, eget mattis enim. Integer at lorem suscipit, ornare risus efficitur, congue dolor. Etiam accumsan tellus at tortor sagittis, eget facilisis ipsum egestas. Sed egestas a sapien et hendrerit. Sed nec pulvinar est.",
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-[#FEF8EE] mb-4">Experience</h2>
      {experienceText.map((paragraph, index) => (
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

export default Experience;

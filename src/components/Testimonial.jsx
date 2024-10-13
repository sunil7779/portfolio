import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Bill Gates"}
          feedback={"Your Project is good"}
        />

        <TestimonialCard
          name={"Ratan Tata"}
          feedback={
            "Wow what a portfolio, doesn't expect from a fresher !"
          }
        />

        <TestimonialCard
          name={"Sundar Pichai"}
          feedback={"Amazing keep it up"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;

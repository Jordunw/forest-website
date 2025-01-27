import React from "react";

const FadeInSection = (props) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(`entry`, entry, `is = ${entry.isIntersecting}`);
        setVisible(entry.isIntersecting);
      });
    });
    const { current } = domRef;
    observer.observe(current);

    return () => observer.unobserve(current);
  }, []);

  return (
    <div
      className={`fade-in__content ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

export default FadeInSection;

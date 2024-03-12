const animated = document.querySelectorAll(".animated");
const section = document.querySelectorAll(".mission-section");

const classMap = {
  "mission-section": "mission-section-after",
  "mission-banner": "mission-banner-after",
  "mission-body": "mission-body-after",
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const targetElement = entry.target;
      const className = classMap[targetElement.id];
      if (entry.isIntersecting) {
        targetElement.classList.add(className);
      } else {
        targetElement.classList.remove(className);
      }
      console.log(targetElement.isIntersecting);
    });
  },
  { threshold: 0.8 }
);

animated.forEach((animated) => {
  observer.observe(animated);
});

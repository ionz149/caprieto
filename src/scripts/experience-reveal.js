const experiences = document.querySelectorAll(".work");

const isMobile = window.matchMedia("(max-width: 767px)").matches;
const sectionOffset = isMobile ? "-100px" : "-120px";

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        });
    },
    {
        rootMargin: `0px 0px ${sectionOffset} 0px`,
        threshold: 0,
    }
);

experiences.forEach((experience) => observer.observe(experience));
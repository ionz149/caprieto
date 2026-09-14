const reveals = document.querySelectorAll(".reveal");

const isMobile = window.matchMedia("(max-width: 767px)").matches;
const sectionOffset = isMobile ? "-100px" : "-220px";

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

reveals.forEach((reveal) => observer.observe(reveal));
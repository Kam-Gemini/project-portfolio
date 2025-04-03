const skillsLink = document.querySelector('#skills');
const skillsSection = document.querySelector('.skills-section');
const homeButton = document.querySelector('#home');
const landingPage = document.querySelector('.landing-page');
const aboutLink = document.querySelector('#about');
const aboutSection = document.querySelector('.about-section');
const projectsLink = document.querySelector('#projects');
const projectsSection = document.querySelector('.projects-section');
const contactLink = document.querySelector('#contact');
const contactSection = document.querySelector('.contact-section');

skillsLink.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    if (skillsSection.style.display === "none" || skillsSection.style.display === "") {
        skillsSection.style.display = "flex"; // Show the skills section
        landingPage.style.display = "none"; // Hide the landing page
        aboutSection.style.display = "none";
        projectsSection.style.display = "none";
        contactSection.style.display = "none"; // Hide the contact section
    } else {
        skillsSection.style.display = "none"; // Hide the section
        landingPage.style.display = "flex"; // Show the landing page
    }
});

homeButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    if (landingPage.style.display === "none" || landingPage.style.display === "") {
        landingPage.style.display = "flex"; // Show the landing page
        skillsSection.style.display = "none"; // Hide the skills section
        aboutSection.style.display = "none";
        projectsSection.style.display = "none";
        contactSection.style.display = "none"; // Hide the contact section
    }
});

aboutLink.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    if (aboutSection.style.display === "none" || aboutSection.style.display === "") {
        aboutSection.style.display = "flex"; // Show the about section
        landingPage.style.display = "none"; // Hide the landing page
        skillsSection.style.display = "none"; // Hide the skills section
        contactSection.style.display = "none"; // Hide the contact section
        projectsSection.style.display = "none";
    } else {
        aboutSection.style.display = "none"; // Hide the section
        landingPage.style.display = "flex"; // Show the landing page
    }
});

projectsLink.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    if (projectsSection.style.display === "none" || projectsSection.style.display === "") {
        aboutSection.style.display = "none"; // hide the about section
        landingPage.style.display = "none"; // Hide the landing page
        skillsSection.style.display = "none"; // Hide the skills section
        contactSection.style.display = "none"; // Hide the contact section
        projectsSection.style.display = "flex"; // Show the projects section
    } else {
        projectsSection.style.display = "none"; // Hide the section
        landingPage.style.display = "flex"; // Show the landing page
    }
});

contactLink.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    if (contactSection.style.display === "none" || contactSection.style.display === "") {
        aboutSection.style.display = "none"; // hide the about section
        landingPage.style.display = "none"; // Hide the landing page
        skillsSection.style.display = "none"; // Hide the skills section
        projectsSection.style.display = "none"; // Hide the projects section
        contactSection.style.display = "flex"; // Show the contact section
    } else {
        contactSection.style.display = "none"; // Hide the section
        landingPage.style.display = "flex"; // Show the landing page
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const carouselContainer = document.querySelector(".carousel-container");
    const projects = document.querySelectorAll(".project");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100; // Calculate the offset for sliding
        carouselContainer.style.transform = `translateX(${offset}%)`;
    }

    leftArrow.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : projects.length - 1;
        updateCarousel();
    });

    rightArrow.addEventListener("click", () => {
        currentIndex = (currentIndex < projects.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });
});
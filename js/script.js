document.addEventListener("DOMContentLoaded", () => {
  /* Navigation */

  const nav = document.querySelector("nav");
  document.getElementById("menu-open").addEventListener("click", () => {
    nav.style.display = "flex";
    document.body.style.overflow = "hidden";
  });

  document.getElementById("menu-close").addEventListener("click", () => {
    nav.style.display = "none";
    document.body.style.overflow = "auto";
  });

  const links = document.querySelectorAll("nav a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      nav.style.display = "none";
      document.body.style.overflow = "auto";
    });
  });

  /* Work Experience */

  const experiences = {
    jobcom: {
      title: "Jobcom GmbH",
      position: "Secretary/Receptionist (12/2019 – present)",
      details: [
        "Customer service and inquiries",
        "Data entry and updating customer information",
        "Course preparation and follow-up",
        "Other administrative tasks",
        "Coordination tasks",
      ],
    },
    mercedes: {
      title: "Mercedes Benz Schweiz AG",
      position: "Direct Sales Intern (01/2019 – 11/2019)",
      details: [
        "Administrative support in Direct Sales (remarketing, rental business, exclusive customer business, employee business)",
        "Creation of reports, statistics, and presentations",
        "Handling customer inquiries",
        "Participation in internal projects",
      ],
    },
    personaloffice: {
      title: "Personnel Office of the Canton of Bern",
      position: "Internship in Course Administration (08/2017 – 07/2018)",
      details: [
        "Organization and management of courses",
        "Handling customer inquiries",
        "Data management",
        "Other administrative tasks",
      ],
    },
  };
  const workExperiencePopup = document.getElementById("work-experience-popup");
  const modalText = document.getElementById("modal-text");
  const worksClose = document.querySelector("#works-close");
  document.querySelectorAll(".work-experience").forEach((experience) => {
    experience.addEventListener("click", () => {
      const info = experiences[experience.getAttribute("data-info")];
      while (modalText.firstChild) {
        modalText.removeChild(modalText.firstChild);
      }
      const titleElement = document.createElement("h3");
      titleElement.textContent = info.title;
      const positionElement = document.createElement("h4");
      positionElement.textContent = info.position;
      const listElement = document.createElement("ul");
      info.details.forEach((detail) => {
        const listItem = document.createElement("li");
        listItem.textContent = detail;
        listElement.appendChild(listItem);
      });
      modalText.appendChild(titleElement);
      modalText.appendChild(positionElement);
      modalText.appendChild(listElement);
      workExperiencePopup.classList.add("work-open");
    });
  });
  worksClose.addEventListener("click", () =>
    workExperiencePopup.classList.remove("work-open")
  );

  /* Education */

  document.querySelectorAll(".education").forEach((education) => {
    education.addEventListener("click", () => {
      education
        .querySelector(".education-info")
        .classList.toggle("education-info-visible");
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -100px 0px" }
  );
  document
    .querySelectorAll(".work-experience, .education")
    .forEach((experience) => {
      observer.observe(experience);
    });

  /* Projects */

  const projects = {
    CommunityCenterWebsite: {
      title: "Community Center Website",
      subtitle: "Text",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, fuga optio. Nam fugit quis quia assumenda illum optio asperiores cumque, ab beatae est facere laudantium fuga. Id nam molestiae fugit!",
    },
    ITInfrastructureAnalysis: {
      title: "IT Infrastructure Analysis",
      subtitle: "Text",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, fuga optio. Nam fugit quis quia assumenda illum optio asperiores cumque, ab beatae est facere laudantium fuga. Id nam molestiae fugit!",
    },
  };
  const projectPopup = document.getElementById("project-popup");
  const projectDesc = document.getElementById("project-desc");
  const closeProject = document.querySelector("#project-close");
  document.querySelectorAll(".project-overlay .btn-blue").forEach((project) => {
    project.addEventListener("click", () => {
      const info = projects[project.getAttribute("data-info")];
      while (projectDesc.firstChild) {
        projectDesc.removeChild(projectDesc.firstChild);
      }
      const titleElement = document.createElement("h3");
      titleElement.textContent = info.title;
      const subtitleElement = document.createElement("h4");
      subtitleElement.textContent = info.subtitle;
      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = info.description;
      projectDesc.appendChild(titleElement);
      projectDesc.appendChild(subtitleElement);
      projectDesc.appendChild(descriptionElement);
      projectPopup.classList.add("project-open");
    });
  });
  closeProject.addEventListener("click", () =>
    projectPopup.classList.remove("project-open")
  );
});

function openContactForm() {
  document.querySelector(".contact-popup").style.opacity = "1";
  document.querySelector(".contact-popup").style.pointerEvents = "all";
}

document.getElementById("contact-close").addEventListener("click", () => {
  document.querySelector(".contact-popup").style.opacity = "0";
  document.querySelector(".contact-popup").style.pointerEvents = "none";
});


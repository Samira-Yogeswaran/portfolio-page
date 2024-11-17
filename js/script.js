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


  
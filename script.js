/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }

    });


    /* Close mobile menu after clicking a link */

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        });

    });

}


/* =========================================================
   CURRENT YEAR
========================================================= */

const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* =========================================================
   PROFILE IMAGE CHECK
========================================================= */

const profileImage = document.querySelector(".profile-circle img");

if (profileImage) {

    profileImage.addEventListener("error", () => {
        console.log("Profile image could not be loaded.");
    });

}


/* =========================================================
   CERTIFICATE IMAGE CHECK
========================================================= */

const certificateImage = document.querySelector(".certificate-link img");

if (certificateImage) {

    certificateImage.addEventListener("error", () => {
        console.log("ALP certificate image could not be loaded.");
    });

}


/* =========================================================
   LANGUAGE BAR ANIMATION
========================================================= */

const languageSection = document.querySelector("#languages");

if (languageSection) {

    const languageProgressBars =
        languageSection.querySelectorAll(".language-progress");

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    languageProgressBars.forEach(bar => {

                        const targetWidth = bar.style.width;

                        bar.style.width = "0";

                        setTimeout(() => {
                            bar.style.width = targetWidth;
                        }, 100);

                    });

                    observer.disconnect();
                }

            });

        },
        {
            threshold: 0.2
        }
    );

    observer.observe(languageSection);

}
const menu = document.querySelector(".optionPopup");
      const menuBtn = document.querySelector(".menu-open");
      const closeBtn = document.querySelector(".menu-close");

      menuBtn.addEventListener("click", () => {
        menu.classList.add("open");
      });

      closeBtn.addEventListener("click", () => {
        menu.classList.remove("open");
      });
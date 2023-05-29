const select_category = document.querySelector(".brand_nav ul li .bi");
const hamburgerOpen = document.querySelector(
  "header nav .hamburger .bi-list-nested"
);
const hidden_hamburger = document.querySelector("header nav ul");
const hamburgerClose = document.querySelector("header nav .hamburger .bi-x");
const select_box = document.querySelector(".select_box");
const shoes_sort_list = document.querySelector(
  "section .shoes_boxes .shoes_filter .sort ul"
);
const shoes_sort = document.querySelector(
  "section .shoes_boxes .shoes_filter i"
);

const offToggle = document.querySelectorAll(".bi-toggle2-off");

const toggleOn = document.querySelectorAll(".bi-toggle2-on");
select_category.addEventListener("click", () => {
  select_box.classList.toggle("hidden_box");
});

hamburgerOpen.addEventListener("click", () => {
  hamburgerClose.classList.toggle("bi-remove");
  hamburgerOpen.classList.toggle("bi-list-nested");
  hidden_hamburger.classList.toggle("hidden_nav_hamburger");
});

hamburgerClose.addEventListener("click", () => {
  hamburgerClose.classList.toggle("bi-remove");
  hamburgerOpen.classList.toggle("bi-list-nested");

  hidden_hamburger.classList.toggle("hidden_nav_hamburger");
});

shoes_sort.addEventListener("click", () => {
  shoes_sort_list.classList.toggle("sorted_list");
});

offToggle.forEach((toggles) => {
  toggles.addEventListener("click", () => {
    toggles.classList.replace("bi-toggle2-off", "bi-toggle2-on");
  });
});

// toggleOn.forEach((togglesOn) => {
//   togglesOn.addEventListener("click", () => {
//     toggles.classList.replace("bi-toggle2-off", "bi-toggle2-on");
//   });
// });

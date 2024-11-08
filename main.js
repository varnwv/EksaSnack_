 let unlockInspect = false;

// Mencegah klik kanan dan shortcut developer tools
document.addEventListener("contextmenu", function (e) {
    if (!unlockInspect) e.preventDefault();
});

 document.addEventListener("keydown", function (e) {
     // Blokir F12 dan shortcut Developer Tools jika unlockInspect masih false
     if (!unlockInspect) {
         if (e.keyCode === 123 || // F12
             (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || // Ctrl+Shift+I atau Ctrl+Shift+J
             (e.ctrlKey && e.keyCode === 85) // Ctrl+U
         ) {
             e.preventDefault();
         }
     }

   
     if (e.ctrlKey && e.altKey && e.shiftKey && e.keyCode === 81) { // Ctrl + Alt + Shift + Q
         unlockInspect = !unlockInspect;
         if (unlockInspect) {
             alert("Developer tools unlocked. You can now use Inspect Element.");
         } else {
             alert("Developer tools locked. Inspect Element access disabled.");
         }
     }
 });

 if (window.innerWidth > 1024) { // Ukuran desktop biasanya lebih besar dari 1024px
  // Redirect ke halaman lain
  // window.location.href = "URL_tujuan";
  
  // Atau tampilkan pesan kesalahan
  alert("Maaf, website ini hanya dapat diakses melalui perangkat mobile.");
  document.body.innerHTML = '<h1>Website ini hanya tersedia untuk perangkat mobile.</h1>'; // Menampilkan pesan di body
  }

 



// let searchForm = document.querySelector(".search-form");

// // Wait for the page to fully load.
// window.addEventListener("load", () => {
//   const preloader = document.querySelector(".preloader");
//   preloader.classList.add("hide");
//   document.body.classList.add("loaded");
// });

// document.querySelector("#search-btn").onclick = () => {
//   searchForm.classList.toggle("active");
//   shoppingCart.classList.remove("active");
//   loginForm.classList.remove("active");
//   navbar.classList.remove("active");
// };

// let shoppingCart = document.querySelector(".shopping-cart");

// document.querySelector("#cart-btn").onclick = () => {
//   shoppingCart.classList.toggle("active");
//   searchForm.classList.remove("active");
//   loginForm.classList.remove("active");
//   navbar.classList.remove("active");
// };

// let loginForm = document.querySelector(".login-form");

// document.querySelector("#login-btn").onclick = () => {
//   loginForm.classList.toggle("active");
//   searchForm.classList.remove("active");
//   shoppingCart.classList.remove("active");
//   navbar.classList.remove("active");
// };

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

// Initialize Swiper
var swiper = new Swiper('.review-slider', {
  // Enable loop, optional if you want infinite sliding
  loop: true,

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
  },

  // Optionally, you can set autoplay if you want it to slide automatically
  autoplay: {
      delay: 2500, // 2.5 seconds
      disableOnInteraction: false, // Allow autoplay even if user interacts
  },
  
  // Optional pagination if you want dots for page numbers
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
});


var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
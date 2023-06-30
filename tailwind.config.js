/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/modules/auth/register/register.component.html",
    "./src/app/modules/auth/login/login.component.html",
    "./src/app/modules/auth/recover-pass/recover-pass.component.html",
    "./src/app/modules/auth/auth.component.html",
    "./src/app/shared/components/primary-button/primary-button.component.html",
    "./src/app/modules/home/components/sidebar/sidebar.component.html",
    "./src/app/modules/home/home.component.html",
    "./src/app/shared/components/header/header.component.html",
    "./src/app/shared/components/card-container/card-container.component.html",
    "./src/app/modules/home/pages/deputies/deputies.component.html",
    "./src/app/modules/home/pages/introduction/introduction.component.html",
    "./src/app/modules/home/components/deputy-card/deputy-card.component.html"
  ],
  theme: {
    extend: {
      colors: {
        primary : "#01589B",
        bluedark : "#013F7D",
        graydark : "#343A40",
        gray : "#6C757D",
        whitebg : "#F5F5F5"
      }
    },
  },
  plugins: [],
  important : true
}
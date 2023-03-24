/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/modules/home/register/register.component.html",
    "./src/app/modules/home/login/login.component.html",
    "./src/app/modules/home/recover-pass/recover-pass.component.html",
    "./src/app/modules/home/home.component.html",
    "./src/app/shared/components/primary-button/primary-button.component.html"
  ],
  theme: {
    extend: {},
    colors: {
      primary : "#01589B",
      bluedark : "#013F7D",
      graydark : "#343A40",
      gray : "#6C757D",
      whitebg : "#F5F5F5"
    }
  },
  plugins: [],
  important : true
}
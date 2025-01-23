/** @type {import('tailwindcss').Config} */
module.exports = {

  content:['./index.html','login.html','landing-page.html','porto.html'],
  darkMode:'class',
  theme: {
    extend: {
      spacing:{
       '13' : "3.25rem", 
      },
      backgroundImage:{
        'custom-bg' : "url(/asset/4.png)",
        'bike-bg' :"url(/asset/sepeda.jpg)",
      },
    },
    
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        "error-404" :"url('/src/assets/images/error-404.jpg')",
        "footer" : "url('/src/assets/images/footer.jpeg')"
      }
      ,
      colors:{
        "primary" :"rgb(9,16,62)", 
        "gold" :"rgb(194,134,26)", 
      },

      animation:{
        "imageAni" :"imageAni 600ms ease-in-out",
        "titleAni" :"titleAni 700ms ease-in-out",
      },
      keyframes:{
        imageAni:{
          "0%":{
            transform:"translateX(-100%)",
            opacity:"0"
          },
          "100%":{
            transform:"translateX(0%)",
            opacity:"1"

          },
        },
        titleAni:{
          "0%":{
            opacity:"0"
          },
          "100%":{
            opacity:"1"

          },
        },
      },
    },
  },
  plugins: [],
}

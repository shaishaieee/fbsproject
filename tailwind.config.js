module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes:{
        'wave':{
          '0% , 100%':{
            transform: 'translateX(0px)'
          },
          '50%': {
            transform: 'translateX(10px)'
          }
        }
      },

      animation:{
        'wave': 'wave 1.5s ease-in-out ininite'
      },
      backgroundImage:
      {
          offerImg: "url(../dist/img/what-we-offer-bg-scaled.jpg)",
          banner: "url(../dist/img/bg3.svg)",
        },

      colors: {
       
        dark: '#000000',
        light: '#ffffff',
        violet:'#6A103F',
        lpink:'#BE2A76',
        lgray:'#DDDDDD',
        lbrown: '#F5F5F5',
        ldark: '#2B2B2B',

      },

      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },

    },
    
  },
  plugins: [],
}
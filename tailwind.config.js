/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    
    extend: {
      fontFamily: {
        IRANYekanBold: ["IRANYekan-Bold"],
        IRANYekanExtraBold: ["IRANYekan-ExtraBold"],
        IRANYekanWebMedium: ["IRANYekanWeb-Medium"],
        IRANYekanWebRegular: ["IRANYekanWeb-regular"],
      },
    },
    screens:{
        'phone':{'max': '450'},
        'Tablet': {'max': '1023px'},
        'DeskTop': {'min': '1024px'},
        'box':{'min':'550px'},
        'box2':{'min':'900px'},
        'lg':{'min':'1024px'},
        'xl':{'max':'1280px'},
        'story':{'min':'1336px'},
        '2xl':{'min':'1536px'}
    }
  },
  plugins: [],
};

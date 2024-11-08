  // /** @type {import('tailwindcss').Config} */
  // export default {
  //   content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  //   theme: {
  //     extend: {
  //       maxWidth: {
  //         200: '78rem'
  //       },
  //       width: {
  //         20: '6rem'
  //       }
  //     },
  //   },
  //   plugins: [
  //     require('flowbite/plugin')
  //   ],
  // }

  /** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      maxWidth: {
            200: '78rem'
              },
              width: {
              20: '6rem'
          }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}




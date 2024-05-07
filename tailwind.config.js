/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { animation: {
      'slow-fade-in': 'slow-fade-in 2s ease-out forwards', // 'forwards' makes sure it holds the final state

    }
  },
  },
  plugins: [],
}


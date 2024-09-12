module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      colors: {
        "new-blue": "#5391ec",
        "new-purple": "#191ca0",
        "new-red": "#d53460",
        "new-white": "#f5f7f7",
        "new-gray": "#E0E0E0",
        col1: "#4F9EC9",
        col2: "#505AB9",
        col3: "#EE49BB",
        col4: "#1f1c2c",
        col5: "#928dab",
      },
    },
  },
  plugins: [],
};

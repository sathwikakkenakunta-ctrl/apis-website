module.exports = {
  content: ["./index.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        navy: "#0B1F3A",
        medical: "#2563EB",
        aqua: "#06B6D4",
        mint: "#D1FAE5",
        slateText: "#334155",
        muted: "#64748B",
        emerald: "#10B981",
        softPurple: "#8B5CF6",
      },
    },
  },
};

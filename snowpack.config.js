module.exports = {
  mount: {
    public: "/",
    src: "/dist",
  },
  packageOptions: {
    knownEntrypoints: ["react"],
  },
  plugins: [["@snowpack/plugin-babel"]],
}

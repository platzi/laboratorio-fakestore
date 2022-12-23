import path from "path";

export default {
  root: path.join(__dirname, "public"),
  build: {
    outDir: path.join(__dirname, "dist"),
  },
};

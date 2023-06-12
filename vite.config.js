module.exports = {
  build: {
    target: 'es2018',
    outDir: 'dist',
    minify: true,
    rollupOptions: {
      input: {
        main:'/public/index.html',
      },
    },
  },
};
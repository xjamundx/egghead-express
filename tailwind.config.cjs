// tailwind.config.js
module.exports = {
  purge: {
    enabled: true,
    content: ['./public/*.html'],
    options: {
      whitelist: ['bg-blue-300', 'block'],
    }
  }
}

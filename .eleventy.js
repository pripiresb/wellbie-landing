module.exports = function (eleventyConfig) {
  // Copia as imagens/vídeos como estão
  eleventyConfig.addPassthroughCopy("src/assets");

  // Domínio próprio do GitHub Pages (gera _site/CNAME).
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });

  return {
    // Com domínio próprio (www.wellbie.com.br) o site serve na raiz.
    pathPrefix: "/",
    dir: {
      input: "src",
      output: "_site",
      data: "_data",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};

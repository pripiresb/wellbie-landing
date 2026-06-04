module.exports = function (eleventyConfig) {
  // Copia as imagens/vídeos como estão
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    // No GitHub Pages o site fica em /wellbie-landing/.
    // (Quando ligar o domínio próprio wellbie.com.br, trocar para "/".)
    pathPrefix: "/wellbie-landing/",
    dir: {
      input: "src",
      output: "_site",
      data: "_data",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};

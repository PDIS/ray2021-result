hexo.extend.helper.register("page_url", function (path, options) {
  return this.url_for(path, options).replace(/index\.html$/, "");
});

hexo.extend.filter.register("after_generate", function () {
  hexo.locals
    .get("pages")
    .filter((page) => page.layout == "false")
    .forEach((page) => {
      hexo.route.remove(page.path);
    });
});

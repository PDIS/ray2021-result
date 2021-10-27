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

hexo.extend.helper.register("__", function (link) {
  var lang = this.page.lang;
  var target = link.split(".");
  var find = hexo.locals.get("pages").filter(function (p) {
    return p.id == target[0] && p.lang == lang;
  }).data;

  if (find.length == 0) return null;

  var result = find[0];
  target.shift();
  target.forEach((i) => {
    result = result[i];
  });
  if (result == undefined) return null;

  return result;
});

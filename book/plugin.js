require(["gitbook", "jquery"], function(gitbook, $) {
  gitbook.events.bind("page.change", function(e, config) {
    (function() {
			$("a").each(function(link){
				if(link.href && link.href.match(/jsbin.com\/.*embed/))
					$(link).addClass("jsbin-embed");
			});
      var jsbin = document.createElement('script'); jsbin.type = 'text/javascript'; jsbin.async = true;
      jsbin.src = '//static.jsbin.com/js/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(jsbin);
    })();
  });
});

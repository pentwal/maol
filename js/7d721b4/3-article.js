Sydney.article=function(){function I(a,b,d){var c,e;if(h==a)Sydney.sidebars.hideSidebarsIfNeededToShowContent();else if(b=_.isUndefined(b)?!0:b,d=_.isUndefined(d)?!0:d,c=Sydney.data.getArticleDataById(a),_.isArray(c))if(b){var g={"\u00e4":"a","\u00f6":"o","\u00fc":"u","\u00c4":"A","\u00d6":"O","\u00dc":"U","\u00e1":"a","\u00e0":"a","\u00e2":"a","\u00e9":"e","\u00e8":"e","\u00ea":"e","\u00fa":"u","\u00f9":"u","\u00fb":"u","\u00f3":"o","\u00f2":"o","\u00f4":"o","\u00c1":"A","\u00c0":"A","\u00c2":"A",
"\u00c9":"E","\u00c8":"E","\u00ca":"E","\u00da":"U","\u00d9":"U","\u00db":"U","\u00d3":"O","\u00d2":"O","\u00d4":"O","\u00df":"s"};Sydney.data.getItemMenuTitle(a).toLowerCase().replace(/[\u00f6\u00e4\u00fc\u00d6\u00c4\u00dc\u00e1\u00e0\u00e2\u00e9\u00e8\u00ea\u00fa\u00f9\u00fb\u00f3\u00f2\u00f4\u00c1\u00c0\u00c2\u00c9\u00c8\u00ca\u00da\u00d9\u00db\u00d3\u00d2\u00d4\u00df]/g,function(a){return g[a]||a}).replace(/ /g,"-").replace(/<.*?>/g,"");Sydney.routes.triggerRoute("/artikkeli/"+parseInt(a+"",10).toString(36)+
"/")}else Sydney.events.trigger("article","beforeArticleOpen",{previousArticleId:h,articleId:a}),d&&null!==h&&(M[h]=f.scrollTop()),e=Sydney.data.getRootItemId(a),null!==h&&(b=Sydney.data.getRootItemId(h),e!==b&&Sydney.globals.$htmlEl.removeClass("root-cat-"+b)),Sydney.globals.$htmlEl.addClass("root-cat-"+e),h=a,N(c),d&&(d=M[h],null!==h&&!_.isUndefined(d)&&f.scrollTop(d)),Sydney.events.trigger("article","afterArticleOpen",a)}function N(a){var b="",d,c,A,g=v.html(),L="";if(_.isArray(a)&&0!==a.length){d=
!1;"header1"===a[0].type?(L=a[0].data,v.html(a[0].data),a[0].attributes.pagenum&&(d=t("article.page")+" "+a[0].attributes.pagenum,v.append('<span class="title-pagenum">'+d+"</span>")),d=!0):v.html("Ei otsikkoa tai elementti ei ensimm\u00e4isen\u00e4?");for(A=d?1:0;A<a.length;A++)if(d=U[a[A].type],!_.isUndefined(d)){a:{c=a[A];var j=void 0,l=void 0,h=void 0,w=void 0,p=void 0,m=void 0,k=void 0,u=void 0,s=void 0;switch(d){case "article-el-header-1":j={data:c.data};if(c=c.attributes.pagenum?c.attributes.pagenum:
"")j.pagenum={string:t("article.page"),value:c};break;case "article-el-header-2":j={data:c.data};if(c=c.attributes.pagenum?c.attributes.pagenum:"")j.pagenum={string:t("article.page"),value:c};break;case "article-el-header-3":j={data:c.data};if(c=c.attributes.pagenum?c.attributes.pagenum:"")j.pagenum={string:t("article.page"),value:c};break;case "article-el-ordered-list":j=[];l=c.attributes.element_meta?c.attributes.element_meta:"";for(k=0;k<c.children.length;k++)j.push(c.children[k].data);j={children:j,
elementMeta:l};break;case "article-el-unordered-list":j=[];l=c.attributes.element_meta?c.attributes.element_meta:"";for(k=0;k<c.children.length;k++)j.push(c.children[k].data);j={children:j,elementMeta:l};break;case "article-el-table":if(_.isUndefined(c.children)){c=void 0;break a}j={bodyRows:[],headerRows:[],columnCount:null,elementMeta:null,highlightFirstColumn:!1};l=1;for(k=0;k<c.children.length;k++)if(!_.isUndefined(c.children[k].children)&&1<c.children[k].children.length){l=c.children[k].children.length;
break}j.columnCount=l;j.elementMeta=c.attributes.element_meta?c.attributes.element_meta:null;h=1;_.isObject(c.attributes)&&!_.isUndefined(c.attributes.n_of_header_rows)&&(h=parseInt(c.attributes.n_of_header_rows,10));0===h&&delete j.headerRows;s=[];D=!1;for(k=0;k<c.children.length;k++)if(w=c.children[k],p=[],!_.isUndefined(w.children)){for(u=0;u<w.children.length;u++)if(-1===_.indexOf(s,k+" "+u)){m={data:w.children[u].data};1===w.children.length&&1!==l&&(m.colspan=l);if(_.isObject(w.children[u].attributes)){var q=
w.children[u].attributes,y=!1;_.isUndefined(q.cell_meta)||(m.cellMeta=q.cell_meta);_.isUndefined(q.colspan)||(m.colspan=parseInt(q.colspan,10),y=!0);_.isUndefined(q.rowspan)||(m.rowspan=parseInt(q.rowspan,10),y=!0);if(y){q=1<m.colspan?m.colspan:1;y=1<m.rowspan?m.rowspan:1;if((1<q||1<y)&&k>=h&&!1===D)D=!0;Array.prototype.push.apply(s,V(k,u,y,q))}}p.push(m)}k+1<=h&&1!==c.children.length?j.headerRows.push(p):j.bodyRows.push(p)}break;case "article-el-text-block":l=c.attributes.element_meta?c.attributes.element_meta:
"",j={data:c.data,elementMeta:l}}c=j}b+=Sydney.templates.renderTpl("article",d,c)}f.html(b);x.prepend('<div class="metadata-box-container">        <div class="metadata-box">        <div class="metadata-box__header">        <h3>Lis\u00e4tietoja</h3>        <span class="metadata-box__close"></span>        </div>        <div class="metadata-box__content"></div>        </div>        </div>');O();var B;if(Sydney.globals.overthrowIsEnabled)if(e.addClass("hidden"),e.empty(),n=[],a=$(".article-table"),r=
-1,0<a.length){a.each(function(){B=$(this);if(2===B.children().length)if($headerTableEl=$("<table class='article-table' style='left: 0px; top: 0px;'></table>").append($(this).children().eq(0).clone()),e.append($headerTableEl),n.push({$tableEl:B,$headerEl:$headerTableEl,shouldSyncWidths:!0}),"continuous"===z){var a=$headerTableEl[0];B.parent().scroll(function(){a.style.left=-$(this).scrollLeft()+"px"})}else B.parent().scroll(J)});e.children().addClass("hidden");e.removeClass("hidden");if(!K){if("continuous"===
z)f.on("scroll.sydneyStickyHeader",E);$(window).on("resize.sydneyStickyHeader",F);Sydney.events.on("settings","textSizeChanged.sydneyStickyHeader",F);Sydney.events.on("sidebars","sidebarsStateChanged.sydneyStickyHeader",F);"hide-when-scrolling"===z&&(f.on("scroll.sydneyStickyHeader",function(){J()}),f.hammer().on("doubletap.sydneyStickyHeader",P));K=!0}E()}else f.off("scroll.sydneyStickyHeader"),$(window).off("resize.sydneyStickyHeader"),Sydney.events.off("settings","textSizeChanged.sydneyStickyHeader"),
Sydney.events.off("sidebars","sidebarsStateChanged.sydneyStickyHeader"),"hide-when-scrolling"===z&&f.hammer().off("doubletap.sydneyStickyHeader",P),K=!1;if(!Sydney.globals.isTouchDevice&&Sydney.globals.overthrowIsEnabled)f.on("mousedown",".overthrow-x",W);f.scrollTop(0);G();g+=L;if(-1!==g.indexOf("\u00c4")||-1!==g.indexOf("\u00d6"))C.hide(),setTimeout(function(){C.show()},0);Q();g=x.find('svg[aria-labelledby="MathJax-SVG-1-Title"]');g.off("click.mathjaxClick");g.on("click.mathjaxClick",function(a){var b=
$(this),c=b.children("#MathJax-SVG-1-Title");if(c.length){var d=c.text(),c=document.createElement("img");c.setAttribute("alt",d);d="/math.svg?latex="+encodeURIComponent(d);c.setAttribute("src",d);document.body.appendChild(c);d=document.createRange();d.selectNode(c);var g=window.getSelection();g.removeAllRanges();g.addRange(d);document.execCommand("copy");document.body.removeChild(c);d=t("article.tooltip")+"!";c=a.pageX;a=a.pageY;d=$('<span class="tooltip">'+d+"</span>");a-=15;var e=$('<div class="tooltip-wrapper not-visible">').css({top:a+
"px"}).append(d).appendTo(document.body);a=c-(Math.round(d.outerWidth()/2)-1);e.css({left:a+"px"});e.removeClass("not-visible");setTimeout(function(){e.animate({opacity:0},{duration:500,queue:!1})},700);e.animate({top:"-=20"},{duration:1200,queue:!1,complete:function(){e.remove()}});b.addClass("tap-color");Sydney.globals.$htmlEl.hasClass("root-cat-13730001018472")?b.css("color","#7921ed"):Sydney.globals.$htmlEl.hasClass("root-cat-13730004029344")?b.css("color","#3232fe"):b.css("color","#30d230");
setTimeout(function(){b.css("color","#223")},700);setTimeout(function(){b.removeClass("tap-color");b.css("color","")},1400)}})}}function R(){var a=$(this);1!==a.parent().children().size()&&(p=setTimeout(function(){"THEAD"!==a.parent().prop("tagName")&&(a.hasClass("highlight")?(a.prev().removeClass("row-before-highlight"),a.removeClass("highlight")):(a.parent().children().removeClass("highlight").removeClass("row-before-highlight"),a.prev().addClass("row-before-highlight"),a.addClass("highlight")),
p=null)},Sydney["platform-ios"].getIsIOS()?300:0))}function X(){null!==p&&(clearTimeout(p),p=null)}function S(){if(!D){var a=$(this),b=$(this).closest("table"),a=a.index()+1,d=_.find(n,function(a){return a.$tableEl[0]===b[0]||a.$headerEl[0]===b[0]});d&&($stickyHeaderCell=d.$headerEl.find("th:nth-child("+a+")"),$tableCells=d.$tableEl.find("td:nth-child("+a+"), th:nth-child("+a+")"),console.log($stickyHeaderCell),$tableCells.first().hasClass("column-highlight")?($tableCells.removeClass("column-highlight").prev().removeClass("before-column-highlight"),
$stickyHeaderCell.removeClass("column-highlight").prev().removeClass("before-column-highlight"),H=null):(null!==H&&H.removeClass("column-highlight").prev().removeClass("before-column-highlight"),$tableCells.addClass("column-highlight").prev().addClass("before-column-highlight"),$stickyHeaderCell.addClass("column-highlight").prev().addClass("before-column-highlight"),H=$tableCells.add($stickyHeaderCell)),F())}}function Y(){var a=x.find(".metadata-box-container"),b=$(this).parent().attr("data-cell-meta");
a.length&&b&&(a.find(".metadata-box .metadata-box__content").html("<p>"+b+"</p>"),a.hasClass("metadata-box-container_show")||a.toggleClass("metadata-box-container_show"))}function Z(){var a=x.find(".metadata-box-container");a.hasClass("metadata-box-container_show")&&a.toggleClass("metadata-box-container_show")}function P(){e.hasClass("fade-visually-hidden")?(null!==s&&clearTimeout(s),e.removeClass("hidden"),E(),setTimeout(function(){e.removeClass("fade-visually-hidden")},0)):J()}function J(){null!==
s&&clearTimeout(s);e.addClass("fade-visually-hidden");s=setTimeout(function(){e.addClass("hidden")},150)}function F(){var a;for(a=0;a<n.length;a++)n[a].shouldSyncWidths=!0;E()}function E(){var a=!1;-1!==r&&(a=T(r));if(!a)for(var b=0;b<n.length;b++)if(b!==r&&T(b)){r=b;a=!0;break}a||(-1!==r&&e.children().addClass("hidden"),r=-1)}function T(a){var b=n[a].$tableEl,d=n[a].$headerEl,c=n[a].shouldSyncWidths,f=b.position().top,g=f+b.height();if(0>=f&&0<=g){if(c){var c=b.children(":first").children(":first").children(),
f=d.children(":first").children(":first").children(),h;for(h=0;h<f.length;h++)f.eq(h).css("min-width",c.eq(h).width()+"px");n[a].shouldSyncWidths=!1}r!==a&&(-1!==r&&e.children().addClass("hidden"),e.children().eq(a).removeClass("hidden"));e.children()[a].style.left=-b.parent().scrollLeft()+"px";b=d.height();if(0.4<b/$(window).height())return e.children().eq(a).addClass("hidden"),!1;0<g&&g<=b?e.children()[a].style.top=-(b-g)+"px":e.children()[a].style.top="0px";return!0}return!1}function W(a){var b=
$(this),d=a.clientX,c=b.scrollLeft(),e=b[0].scrollWidth-b.innerWidth(),g;$(document).on("mousemove.dragScroller",function(a){g=c+(d-a.clientX);g=Math.max(0,Math.min(g,e));b.scrollLeft()!==g&&b.scrollLeft(g)});$(document).on("mouseup.dragScroller",function(){$(document).off(".dragScroller")});a.preventDefault()}function Q(){var a=f.width();f.find(".article-table").each(function(){var b=$(this).parent(),d=$(this).width();a>d+50?b.hasClass("table-container-widescreen")||b.addClass("table-container-widescreen"):
b.hasClass("table-container-widescreen")&&b.removeClass("table-container-widescreen")})}function V(a,b,d,c){for(var e=[],g=a;g<a+d;g++)for(var f=b;f<b+c;f++)(g!==a||f!==b)&&e.push(g+" "+f);return e}function G(){if(Sydney.globals.overthrowIsEnabled){var a=v.outerHeight();C.height()!==a&&(C.height(a),e.css("top",a),f.css("top",a))}}function O(){var a=1;Sydney.globals.$htmlEl.hasClass("text-size-small")&&(a=0.8);Sydney.globals.$htmlEl.hasClass("text-size-large")&&(a=1.3);f.add(e).find("img").each(function(){var b=
$(this);b.width(a*b.attr("data-width"));b.height(a*b.attr("data-height"))})}var x,C,v,f,e,h=null,M={},U={header1:"article-el-header-1",header2:"article-el-header-2",header3:"article-el-header-3",ordered_list:"article-el-ordered-list",unordered_list:"article-el-unordered-list",table:"article-el-table",textblock:"article-el-text-block",codeblock:"article-el-text-block"},z="continuous",K=!1,n=[],r=-1,s,p=null,H=null,D=!1;return{init:function(){x=$("#article");C=$("#article-title-container");v=$("#article-title");
f=$("#article-content");$(document.getElementById("main"));e=$("#article-sticky-headers")},start:function(){Sydney["platform-ios"].getIsIOS()&&!Sydney.globals.$htmlEl.hasClass("force-overthrow-polyfill")&&(z="hide-when-scrolling");if("hide-when-scrolling"===z)f.hammer().on("tap","tr",R),f.hammer().on("doubletap","tr",X);else f.on("click","tr",R);f.on("mousedown",function(a){a.shiftKey&&a.preventDefault()});f.on("click","th",S);e.on("click","th",S);f.on("click",".cell-metadata-open",Y);x.on("click",
".metadata-box__close",Z);$(document).on("mouseup",function(a){var d=x.find(".metadata-box-container");!d.is(a.target)&&0===d.has(a.target).length&&d.hasClass("metadata-box-container_show")&&d.toggleClass("metadata-box-container_show")});$(window).resize(_.debounce(G,100));$(window).resize(_.debounce(Q,300));Sydney.events.on("sidebars","sidebarsStateChanged",_.debounce(function(){G()},10));Sydney.events.on("settings","textSizeChanged",function(){G();O()});var a=!1;Sydney.routes.onRoute("/artikkeli/:id/*",
function(b){var d=!0;$("#search-results").is(":visible")&&(d=!1);b=parseInt(b+"",36).toString(10);Sydney.globals.updateBrowserTitle(t("article.article-browser-title",{articletitle:Sydney.data.getPlainTextItemMenuTitle(b)}));I(b,!1,d);a=!0});a||Sydney["recent-articles"].getIdOfMostRecentArticle(function(a){null!==a&&I(a)})},openArticle:N,openArticleById:I,getActiveArticleId:function(){return h},getActiveArticleTitle:function(){return v.html()}}}();
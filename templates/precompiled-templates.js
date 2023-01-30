this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["article-el-header-1"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "<span class=\"title-pagenum\">";
  stack2 = ((stack1 = ((stack1 = depth0.pagenum),stack1 == null || stack1 === false ? stack1 : stack1.string)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = ((stack1 = ((stack1 = depth0.pagenum),stack1 == null || stack1 === false ? stack1 : stack1.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</span>";
  return buffer;
  }

  buffer += "<h1>";
  if (stack1 = helpers.data) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.data; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, depth0.pagenum, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>";
  return buffer;
  });

this["Handlebars"]["templates"]["article-el-header-2"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "<span class=\"title-pagenum\">";
  stack2 = ((stack1 = ((stack1 = depth0.pagenum),stack1 == null || stack1 === false ? stack1 : stack1.string)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = ((stack1 = ((stack1 = depth0.pagenum),stack1 == null || stack1 === false ? stack1 : stack1.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</span>";
  return buffer;
  }

  buffer += "<h2>";
  if (stack1 = helpers.data) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.data; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, depth0.pagenum, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>";
  return buffer;
  });

this["Handlebars"]["templates"]["article-el-header-3"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "<span class=\"title-pagenum\">";
  stack2 = ((stack1 = ((stack1 = depth0.pagenum),stack1 == null || stack1 === false ? stack1 : stack1.string)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = ((stack1 = ((stack1 = depth0.pagenum),stack1 == null || stack1 === false ? stack1 : stack1.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</span>";
  return buffer;
  }

  buffer += "<h3>";
  if (stack1 = helpers.data) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.data; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, depth0.pagenum, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h3>";
  return buffer;
  });

this["Handlebars"]["templates"]["article-el-ordered-list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "data-element-meta=\"";
  if (stack1 = helpers.elementMeta) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.elementMeta; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<li>";
  stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n	";
  return buffer;
  }

  buffer += "<ol class=\"overthrow-x\" ";
  stack1 = helpers['if'].call(depth0, depth0.elementMeta, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n	";
  stack1 = helpers.each.call(depth0, depth0.children, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ol>";
  return buffer;
  });

this["Handlebars"]["templates"]["article-el-table"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "highlight-first-column";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "data-element-meta=\"";
  if (stack1 = helpers.elementMeta) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.elementMeta; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<thead>\n			";
  stack1 = helpers.each.call(depth0, depth0.headerRows, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</thead>\n		";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <tr>\n        ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n			";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <th \n          ";
  stack1 = helpers['if'].call(depth0, depth0.cellMeta, {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n          ";
  stack1 = helpers['if'].call(depth0, depth0.colspan, {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  stack1 = helpers['if'].call(depth0, depth0.rowspan, {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n          ";
  if (stack1 = helpers.data) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.data; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  stack1 = helpers['if'].call(depth0, depth0.cellMeta, {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </th>\n        ";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            class=\"has-metadata\"\n            data-cell-meta=\"";
  if (stack1 = helpers.cellMeta) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cellMeta; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n          ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            colspan=\"";
  if (stack1 = helpers.colspan) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colspan; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"\n          ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " \n            rowspan=\"";
  if (stack1 = helpers.rowspan) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rowspan; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"\n          ";
  return buffer;
  }

function program14(depth0,data) {
  
  
  return "\n            <span class=\"cell-metadata-open\">+</span>\n          ";
  }

function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <tr>\n      ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </tr>\n		";
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <td \n        ";
  stack1 = helpers['if'].call(depth0, depth0.cellMeta, {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n        ";
  stack1 = helpers['if'].call(depth0, depth0.colspan, {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, depth0.rowspan, {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n        ";
  if (stack1 = helpers.data) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.data; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, depth0.cellMeta, {hash:{},inverse:self.noop,fn:self.program(24, program24, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </td>\n      ";
  return buffer;
  }
function program18(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          class=\"has-metadata\"\n          data-cell-meta=\"";
  if (stack1 = helpers.cellMeta) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cellMeta; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n        ";
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          colspan=\"";
  if (stack1 = helpers.colspan) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colspan; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"\n        ";
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " \n          rowspan=\"";
  if (stack1 = helpers.rowspan) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rowspan; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"\n        ";
  return buffer;
  }

function program24(depth0,data) {
  
  
  return "\n          <span class=\"cell-metadata-open\">+</span>\n        ";
  }

  buffer += "<div class=\"article-table-container overthrow-xy\">\n	<table class=\"article-table ";
  stack1 = helpers['if'].call(depth0, depth0.highlightFirstColumn, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"";
  stack1 = helpers['if'].call(depth0, depth0.elementMeta, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n		";
  stack1 = helpers['if'].call(depth0, depth0.headerRows, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n		<tbody>\n		";
  stack1 = helpers.each.call(depth0, depth0.bodyRows, {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</tbody>\n	</table>\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["article-el-text-block"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "data-element-meta=\"";
  if (stack1 = helpers.elementMeta) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.elementMeta; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"";
  return buffer;
  }

  buffer += "<p class=\"article-text-block overthrow-x\" ";
  stack1 = helpers['if'].call(depth0, depth0.elementMeta, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  if (stack1 = helpers.data) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.data; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>";
  return buffer;
  });

this["Handlebars"]["templates"]["article-el-unordered-list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "data-element-meta=\"";
  if (stack1 = helpers.elementMeta) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.elementMeta; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<li>";
  stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n	";
  return buffer;
  }

  buffer += "<ul class=\"overthrow-x\" ";
  stack1 = helpers['if'].call(depth0, depth0.elementMeta, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n	";
  stack1 = helpers.each.call(depth0, depth0.children, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>";
  return buffer;
  });

this["Handlebars"]["templates"]["help-splash-phases"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"help-splash-phase hidden\">\n    <div class=\"maol-text\">\n        <strong data-transl=\"help_splash.maol_text_word_1\"></strong> \n        <span data-transl=\"help_splash.maol_text_word_2\"></span>\n    </div>\n    <div class=\"help-splash-list-container\">\n        <h2 data-transl=\"help_splash.language_title\"></h2>\n        <ul id=\"help-splash-language-list\" class=\"list-navigation\"></ul>\n        <p class=\"help-splash-help-text-small\" style=\"margin-bottom: 0; padding-left: 30px;\"data-transl=\"help_splash.language_description\"></p>\n        <div style=\"text-align: right;\">\n            <div class=\"help-splash-proceed-button-container\">\n                <button class=\"help-splash-proceed-button\" data-transl=\"help_splash.language_button_text\"></button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"help-splash-phase hidden\">\n    <div class=\"maol-text\">\n        <strong data-transl=\"help_splash.maol_text_word_1\"></strong> \n        <span data-transl=\"help_splash.maol_text_word_2\"></span>\n    </div>\n    <img class=\"help-splash-help-img\" src=\"img/retina/help-left-topbar-LANG.png\" />\n    <p class=\"help-splash-help-text-big\" data-transl=\"help_splash.left_topbar_help_text_header\"></p>\n    <p class=\"help-splash-help-text-small\" data-transl=\"help_splash.left_topbar_help_text_footer\"></p>\n    <div class=\"help-splash-button-aligner\">\n        <div class=\"help-splash-proceed-button-container\">\n            <button class=\"help-splash-proceed-button\" data-transl=\"help_splash.left_topbar_help_button_text\"></button>\n        </div>\n    </div>\n</div>\n\n<div class=\"help-splash-phase hidden\">\n    <div class=\"maol-text\">\n        <strong data-transl=\"help_splash.maol_text_word_1\"></strong> \n        <span data-transl=\"help_splash.maol_text_word_2\"></span>\n    </div>\n    <img class=\"help-splash-help-img\" src=\"img/retina/help-right-topbar-LANG.png\" />\n    <p class=\"help-splash-help-text-big\" data-transl=\"help_splash.right_topbar_help_text_header\"></p>\n    <p class=\"help-splash-help-text-small\" data-transl=\"help_splash.right_topbar_help_text_footer\"></p>\n    <div class=\"help-splash-button-aligner\">\n        <div class=\"help-splash-proceed-button-container\">\n            <button class=\"help-splash-proceed-button\" data-transl=\"help_splash.right_topbar_help_button_text\"></button>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"help-splash-phase hidden\">\n    <div class=\"maol-text\">\n        <strong data-transl=\"help_splash.maol_text_word_1\"></strong> \n        <span data-transl=\"help_splash.maol_text_word_2\"></span>\n    </div>\n\n    <img class=\"help-splash-help-img\" src=\"img/retina/help-nav-LANG.png\" />\n    <p class=\"help-splash-help-text-big\" data-transl=\"help_splash.nav_help_text_header\"></p>\n    <p class=\"help-splash-help-text-small\" data-transl=\"help_splash.nav_help_text_footer\"></p>\n\n    <div class=\"help-splash-button-aligner\">\n        <div class=\"help-splash-proceed-button-container\">\n            <button class=\"help-splash-proceed-button\" data-transl=\"help_splash.nav_help_button_text\"></button>\n        </div>\n    </div>\n</div>";
  });

this["Handlebars"]["templates"]["info-splash-content-default"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n<div class=\"info-splash-content\">\n\n    <div class=\"maol-text\">\n        <strong data-transl=\"help_splash.maol_text_word_1\"></strong> \n        <span data-transl=\"help_splash.maol_text_word_2\"></span>\n    </div>\n	<p>© 2019 Matemaattisten Aineiden Opettajien Liitto MAOL ry. ja<br/>Kustannusosakeyhtiö Otava</p>\n\n	<p>Toimitus: Sanna Niemelä ja Olli Räty<br/>Toteutus: Aste Helsinki Oy</p>\n\n	<h1>Kopiointiehdot</h1>\n	<p>Teos on suojattu tekijänoikeuslailla (404/61). Kopioston digilupa ei koske oikeudenhaltijan lisensoimia verkkoaineistoja. Tämän verkkoaineiston käyttö edellyttää oikeudenomistajalta hankittua lisenssiä. Lisätietoja luvista <a href=\"http://www.kopiosto.fi\" target=\"_blank\">kopiosto.fi</a></p>\n\n	<p>ISBN 978-951-1-35656-1</p>\n\n\n<p>&nbsp;</p>\n\n\n<p>MAOL-taulukot ilmestyi ensimmäisen kerran painettuna 2019 Kustannusosakeyhtiö Otavan kustantamana.</p>\n\n<p>\nToimitus: Johanna Eronen ja Sanna Niemelä <br/>\nPiirrokset: Marvegraf Oy / Marja Venäläinen, Sami Suvanne ja<br/>\nOlli-Matti Hallikainen<br/>\nValokuvat: SKOY (liekkivärit), Printel ja Shutterstock (perustyövälineet)<br/>\nGraafinen suunnittelu ja kansi: Anna Väänänen<br/>\nTaitto: Aste Kirjat Oy\n</p>\n\n	<div style=\"text-align: center;\"><div class=\"info-splash-close-button-container\"><button class=\"info-splash-close-button\" data-transl=\"info_splash.close_button_text\"></button></div></div>\n</div>";
  });

this["Handlebars"]["templates"]["info-splash-content-swedish"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n<div class=\"info-splash-content\">\n\n    <div class=\"maol-text\">\n        <strong data-transl=\"help_splash.maol_text_word_1\"></strong> \n        <span data-transl=\"help_splash.maol_text_word_2\"></span>\n    </div>\n	<p>© MAOL r.f. och Förlagsaktiebolaget Otava</p>\n\n	<p>Redaktion: Sanna Niemelä och Olli Räty<br/>Tekniskt förverkligande: Aste Helsinki Oy</p>\n\n	<p>Utbildningsstyrelsen har beviljat statsunderstöd för produktionen av den digitala versionen av detta läromedel.</p> \n	<h1>Kopieringsvillkor</h1>\n	<p>Verket är skyddat av upphovsrättslagen (404/61). Kopiostos digilicens omfattar inte rättsinnehavarens licenser. För att använda detta digitala material eller delar av det krävs rättighetshavarens licens. Mer information om licenser lämnas av Kopiosto r.f. <a href=\"http://www.kopiosto.fi\" target=\"_blank\">www.kopiosto.fi.</a></p>\n\n	<p>ISBN 978-951-1-35656-1</p>\n\n\n<p>&nbsp;</p>\n\n\n<p>Förlagsaktiebolaget Otava gav ut Maols tabeller första gången på 2019.</p>\n\n<p>\nOriginalets titel: MAOL-taulukot<br/>\nSvensk översättning: Niklas Palmberg<br/>\nGranskning av den svenska versionen: Niklas Palmberg (matematik),<br/>\nLeif Ekrem (fysik), Triin Gyllenberg (kemi)<br/>\nRedaktion: Johanna Eronen och Sanna Niemelä (finska originalet),<br/>\nCilla Heinonen (svenska versionen)<br/>\nIllustrationer: Marvegraf Oy /Marja Venäläinen, Sami Suvanne och<br/>\nOlli-Matti Hallikainen<br/>\nFotografier: SKOY (lågors färg), Printel och Shutterstock (laborationsutrustning)<br/>\nLayout och omslag: Anna Väänänen<br/>\nOmbrytning: Aste Kirjat Oy<br/>\n</p>\n\n	<div style=\"text-align: center;\"><div class=\"info-splash-close-button-container\"><button class=\"info-splash-close-button\" data-transl=\"info_splash.close_button_text\"></button></div></div>\n</div>";
  });

this["Handlebars"]["templates"]["list-nav-item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return " active";
  }

function program3(depth0,data) {
  
  
  return " hidden";
  }

function program5(depth0,data) {
  
  
  return " removable";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "data-"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\"";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<div class=\"list-item-sidetext\"> ";
  if (stack1 = helpers.sidetext) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.sidetext; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>";
  return buffer;
  }

function program11(depth0,data) {
  
  
  return "<button class=\"children-delete-button hidden\"></button>";
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<ul class=\"expanded-list-items";
  stack1 = helpers.unless.call(depth0, depth0.isActive, {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n		";
  stack1 = helpers.each.call(depth0, depth0.children, {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</ul>\n	";
  return buffer;
  }
function program14(depth0,data) {
  
  
  return " list-hidden";
  }

function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		";
  stack1 = self.invokePartial(partials['list-nav-item'], 'list-nav-item', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	";
  stack1 = helpers['if'].call(depth0, depth0.placeholder, {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  return buffer;
  }
function program19(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<ul class=\"expanded-list-items placeholder";
  stack1 = helpers.unless.call(depth0, depth0.isActive, {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n	";
  stack1 = helpers['with'].call(depth0, depth0.placeholder, {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</ul>\n	";
  return buffer;
  }
function program20(depth0,data) {
  
  var stack1;
  stack1 = self.invokePartial(partials['list-nav-item'], 'list-nav-item', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

  buffer += "<li class=\"list-item ";
  if (stack1 = helpers['class']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['class']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  stack1 = helpers['if'].call(depth0, depth0.isActive, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, depth0.isHidden, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, depth0.isRemovable, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" ";
  stack1 = helpers.each.call(depth0, depth0.props, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n	<div class=\"list-item-button\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, depth0.sidetext, {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, depth0.childrenAreRemovable, {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n	";
  stack1 = helpers['if'].call(depth0, depth0.children, {hash:{},inverse:self.program(18, program18, data),fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</li>";
  return buffer;
  });
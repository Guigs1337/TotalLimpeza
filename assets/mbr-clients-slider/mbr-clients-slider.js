
Element.prototype.parents=function(a){for(var b=[],c=this,f=void 0!==a;null!==(c=c.parentElement);)c.nodeType===Node.ELEMENT_NODE&&(f&&!c.matches(a)||b.push(c));return b};function setActiveCarouselItem(a){var b=a.querySelector(".carousel-item");a=a.querySelector(".carousel-indicators > li");b.classList.add("active");a&&a.classList.add("active")}
function initTestimonialsCarousel(a){var b=a.getAttribute("id")+"-carousel",c="5"===a.getAttribute("data-bs-version");a.querySelectorAll(".carousel").forEach(function(a){return a.setAttribute("id",b)});a.querySelector(".carousel-controls")&&a.querySelectorAll(".carousel-controls").forEach(function(a){a.querySelectorAll("a").forEach(function(a){a.setAttribute("href","#"+b);c?a.setAttribute("data-bs-target","#"+b):a.setAttribute("data-target","#"+b)})});a.querySelectorAll(".carousel-indicators > li").forEach(function(a){c?
a.setAttribute("data-bs-target","#"+b):a.setAttribute("data-target","#"+b)});setActiveCarouselItem(a)}
function initClientCarousel(a){var b=a.querySelectorAll(".carousel-item").length,c=a.querySelector(".carousel-inner").getAttribute("data-visible");b<c&&(c=b);a.querySelectorAll(".carousel-inner").forEach(function(a){return a.setAttribute("class","carousel-inner slides"+c)});a.querySelectorAll(".clonedCol").forEach(function(a){return a.remove()});a.querySelectorAll(".carousel-item .col-md-12").forEach(function(a){2>c?a.setAttribute("class","col-md-12"):"5"==c?a.setAttribute("class","col-md-12 col-lg-15"):
a.setAttribute("class","col-md-12 col-lg-"+12/c)});a.querySelectorAll(".carousel-item .row").forEach(function(a){a.setAttribute("style","-webkit-flex-grow: 1; flex-grow: 1; margin: 0;")});a.querySelectorAll(".carousel-item").forEach(function(a){for(var b=a,d=1;d<c;d++){(b=b.nextElementSibling)||(b=a.parentNode.children[0]===a?a.nextElementSibling:a.parentNode.children[0]);var g=getIndex(b),e=b.querySelector(".col-md-12").cloneNode(!0);e.classList.add("cloneditem-"+d);e.classList.add("clonedCol");
e.setAttribute("data-cloned-index",g);a.children[0].appendChild(e)}})}function getIndex(a){if(!a)return-1;var b=0;do b++;while(a=a.previousElementSibling);return b}
function updateClientCarousel(a){a=$(a);var b=a.find(".carousel-item").length,c=a.find(".carousel-inner").attr("data-visible");b<c&&(c=b);a.find(".clonedCol").remove();a.find(".carousel-item").each(function(){for(var a=$(this),b=1;b<c;b++){a=a.next();a.length||(a=$(this).siblings(":first"));var d=a.index();a.find(".col-md-12:first").clone().addClass("cloneditem-"+b).addClass("clonedCol").attr("data-cloned-index",d).appendTo($(this).children().eq(0))}})}
function clickHandler(a){a.stopPropagation();a.preventDefault();a=a.target;var b;a.closest(".clonedCol").length?(b=a.closest(".clonedCol"),b=b.getAttribute("data-cloned-index")):(b=a.closest(".carousel-item"),b=getIndex(b));b=a.closest(".carousel-inner").querySelectorAll(".carousel-item")[b].querySelector("img");0<a.parents(".clonedCol").length&&b.dispatchEvent(new CustomEvent("click"))}var $,isJQuery="function"==typeof jQuery;isJQuery&&($=jQuery);var isBuilder=document.querySelector("html").classList.contains("is-builder");
if(isBuilder)$(document).on("add.cards",function(a){if($(a.target).hasClass("clients")){initTestimonialsCarousel(a.target);initClientCarousel(a.target);if("add"===a.type)$(a.target).on("slide.bs.carousel",function(){updateClientCarousel(a.target)});$(a.target).find(".carousel-item [mbr-media]").on("click",function(a){clickHandler(a)});$(a.target).on("slide.bs.carousel",function(){$(a.target).find(".carousel-item .clonedCol [mbr-media]").off("click").on("click",function(a){clickHandler(a)})})}}).on("changeParameter.cards",
function(a,b,c){$(a.target).hasClass("clients")&&("slidesCount"==b&&0==$(a.target).find(".carousel-item.active").length&&setActiveCarouselItem(a.target),initClientCarousel(a.target),updateClientCarousel(a.target),$(a.target).find(".carousel-item [mbr-media]").on("click",function(a){clickHandler(a)}),$(a.target).on("slide.bs.carousel",function(){$(a.target).find(".carousel-item .clonedCol [mbr-media]").off("click").on("click",function(a){clickHandler(a)})}))}).on("changeContent.cards",function(a,b){if($(a.target).hasClass("clients")){updateClientCarousel(a.target);
try{$(a.target).closest(".carousel").carousel("next")}catch(c){}}});else"undefined"===typeof window.initClientPlugin&&(window.initClientPlugin=!0,document.body.querySelectorAll(".clients").forEach(function(a){a.getAttribute("data-isinit")||(initTestimonialsCarousel(a),initClientCarousel(a))}));

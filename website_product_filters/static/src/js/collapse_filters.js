(function(){
  'use strict';

  var website = openerp.website;
  website.snippet.animationRegistry.collapseFilters = website.snippet.Animation.extend({
    selector : ".js_attributes",
    start: function(){
      this.redrow();
    },

    redrow: function(debug){
      this.build(debug);
    },

      /* this method hides and shows all lists of attributes that are longer
         than 4 lines. */
    build: function(debug){
      var $show_more = this.$(".show-more");
      this.$(".show-more").click(function(){
        var parent = $show_more.parent(),
            button = $show_more,
            hidden_elements = parent.find(".hidden");
        if (button.hasClass("clicked")){
          var shown_elements = parent.find(".un-hidden");
          shown_elements.addClass("hidden");
          shown_elements.removeClass("un-hidden");
          button.html('<a class="show-more"><span class="fa fa-caret-down"></span> Voir plus</a>');
          button.removeClass("clicked");
        }
        else {
          hidden_elements.removeClass("hidden");
          hidden_elements.addClass("un-hidden");
          button.html('<a class="show-more"><span class="fa fa-caret-up"></span> Réduire</a>');
          button.addClass("clicked");
        }
        });
    },

  })

})();

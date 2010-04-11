var VISIBLE = "ld-state-visible";
  
jQuery(".ld-hud li.js-property-add").live("click", function(e) {
  
  var _this = $(this),
  _target = $($(e.target).attr("data-target"));
  
  if (!_target.length) {
    return false;
  };
  
  var _source = _this.find(".js-type-source");
  _target.find('.'+_source.val()).addClass(VISIBLE);
  
  return false;
  
});

jQuery(".ld-hud li.ld-properties").live("click", function(e) {
  
  var _this = $(this),
  _destination = $(_this.attr("data-target")),
  _preprocess_function = _destination.attr("data-preprocess"),
  _trigger = $(e.target),
  _type = _trigger.attr("data-type") || "toggle";
    
  switch(_type) {
    case "remove":
      
      _this.find("*[data-type=toggle]").click();
      _this.removeClass(VISIBLE);
      _this.removeClass("ld-state-active");
      _destination.removeClass(VISIBLE);
      var properties = PREPROCESS[_preprocess_function](_destination, "remove");
      MODEL.remove(properties);
      
    break;
    
    case "toggle":
    
      _this.siblings(".ld-state-active").find('*[data-type=toggle]').click();
      _this.toggleClass("ld-state-active");
      _destination.toggleClass(VISIBLE);
      
    break;
    
  }
  
  return false;
  
});

jQuery(".ld-hud .js-type-target").live("keyup", function(e) {
  
  var _this = jQuery(this);
  
  var preprocess_function = _this.attr("data-preprocess");
  
  if (preprocess_function) {
    var properties = PREPROCESS[preprocess_function](_this);
    MODEL.add(properties);
  };

});

jQuery(".ld-hud .js-type-export").live("click", function(e) {
  MODEL.export_styles();
  return false;
});

// Inspector  
var _inspector_top = jQuery("#ld-hud-inspector-top")[0].style,
    _inspector_right = jQuery("#ld-hud-inspector-right")[0].style,
    _inspector_bottom = jQuery("#ld-hud-inspector-bottom")[0].style,
    _inspector_left = jQuery("#ld-hud-inspector-left")[0].style,

_inspector_over = function() {
  
  var offset  = jQuery(this).offset(),
      width   = this.clientWidth,
      height  = this.clientHeight;

  _inspector_top.left   = offset.left          + "px";
  _inspector_top.top    = offset.top           + "px";
  _inspector_top.width  = width                + "px";

  _inspector_right.left = offset.left + width  + "px";
  _inspector_right.top  = offset.top           + "px";
  _inspector_right.height = height             + "px";

  _inspector_bottom.left = offset.left         + "px";
  _inspector_bottom.width = width              + "px";
  _inspector_bottom.top = offset.top + height  + "px";

  _inspector_left.left = offset.left           + "px";
  _inspector_left.height = height              + "px";
  _inspector_left.top = offset.top             + "px";

  return false;

};

var _inspector_click = function() {
  jQuery("*").die("mouseover", _inspector_over).die("click", _inspector_click);
  jQuery("body").removeClass("ld-hud-inspector-active");
  
  MODEL.set_active(this);
  
  return false;
};
  
jQuery(".ld-hud .js-type-inspect").live("click", function(e) {    
  jQuery("*").live("mouseover", _inspector_over).live("click", _inspector_click);
  jQuery("body").addClass("ld-hud-inspector-active");
});

jQuery(".ld-hud").submit(function(){
  return false;
});
var DRAGGING = false;

var hud = jQuery(".ld-hud");
var hud_offset = hud.offset();
var hud_header = hud.find("header")[0];
var mouse_offset = {};
hud.bind("mousedown", function(event) {
  if (jQuery.contains(hud_header, event.target)) {
    DRAGGING = true;
    mouse_offset.left = event.clientX - hud_offset.left;
    mouse_offset.top  = event.clientY - hud_offset.top;
    
  };
}).bind("mouseup", function() {
  if (DRAGGING) {
    DRAGGING = false;
    hud_offset = hud.offset();
  };
});

jQuery(document).bind("mousemove", function(event) {
  if (DRAGGING) {
    hud[0].style.left = (event.clientX - mouse_offset.left) + "px";
    hud[0].style.top = (event.clientY - mouse_offset.top) + "px";
    return false;
  };
});

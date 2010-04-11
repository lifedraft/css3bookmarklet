var MODEL = new (function() {
  
  var style = jQuery('<style type="text/css"></style>');
  jQuery("body").append(style);
  style = style[0];
  
  var mapping = {};
      index   = undefined;
  
  this.add = function(properties) {
    
    for (var i=0; i < properties.length; i++) {
      
      var property = properties[i];
      style.sheet.cssRules[index].style[property.property] = property.value;
      
    };
    
  };
  
  this.remove = function(properties) {
    
    for (var i=0; i < properties.length; i++) {
      
      var property = properties[i];
      style.sheet.cssRules[index].style[property.property] = "";
      
    };
    
  };
  
  this.export_styles = function() {
    
    var styles = LIFEDRAFT_CSS_UNITE.unite(style.sheet.cssRules[0].style);
    var properties = LIFEDRAFT_CSS_UNITE.toString(styles);
    
    console.log(properties);
    
  };
  
  this.set_active  = function(element) {
    
    if (!element.id) {
      element.id = "LIFEDRAFT_"+(+(new Date()));
    };

    var id = element.id;
    
    if (!(id in mapping)) {
      mapping[id] = style.sheet.insertRule("#"+id + "{}");
    };
    
    index = mapping[id];
    
  };
  
})();
LIFEDRAFT_CSS_UNITE = (function() {
  
  var get_computed = function(element) {
    var tmp = {},
    styles = window.getComputedStyle(element, null);
    for (var i=0; i < styles.length; i++) {
      tmp[styles[i]] = styles.getPropertyValue(styles[i]);
    };  
    return tmp;
  };
  
  var TAG = document.createElement("LIFEDRAFT_CSS_UNITE");
  document.body.appendChild(TAG);
  var defaults = get_computed(TAG);
  document.body.removeChild(TAG);
  
 
  var diff_defaults_against = function(source) {
    
    var diff = {};

    for (var prop in source) {
      if (prop in defaults && source[prop] != defaults[prop]) {
        diff[prop] = source[prop];
      };
    };
    
    return diff;
    
  };
  
  return {
    get_computed: get_computed,
    
    unite: function(style) {
      
      var current = {};
      
      for (var i=0; i < style.length; i++) {
        current[style[i]] = style[style[i]];
      };
      
      return diff_defaults_against(current);
       
    },
    
    toString: function(styles) {
      var output = [];
      
      for (var prop in styles) {
        output.push(prop + ": " +  styles[prop] +";");
      };
      
      return output.join("\n");
    }
    
  };
  
})();
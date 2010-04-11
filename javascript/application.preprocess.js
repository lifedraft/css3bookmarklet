var PREPROCESS = {
  
  "border-radius": function(element, type) {
    
    if (!type) {
      type = "update";
    };
    
    var element = jQuery(element);
    
    var bottomLeft = element.find('*[name=border-bottom-left-radius]'),
        bottomRight = element.find('*[name=border-bottom-right-radius]'),
        topLeft = element.find('*[name=border-top-left-radius]'),
        topRight = element.find('*[name=border-top-right-radius]');
    
    switch(type) {
      case "update":
        
        return [{
          'property': '-webkit-border-radius',
          'value': (topLeft.val() || 0) + " " + (topRight.val() || 0) + " " + (bottomRight.val() || 0) + " " + (bottomLeft.val() || 0)
        }];
        
      break;
      case "remove":
        
        bottomLeft.val("");
        bottomRight.val("");
        topLeft.val("");
        topRight.val("");
        
        return [{
          'property': '-webkit-border-radius'
        }];
        
      break;
    }
    
  },
  
  "box-shadow": function(element, type) {
    
    if (!type) {
      type = "update";
    };
    
    var element = jQuery(element);
    
    var shadowHorizontal =  element.find('*[name=box-shadow-horizontal]'),
        shadowVertical = element.find('*[name=box-shadow-vertical]'),
        shadowBlur = element.find('*[name=box-shadow-blur]'),
        shadowColor = element.find('*[name=box-shadow-color]');
    
    switch(type) {
      case "update":
      
        return [{
          property: '-webkit-box-shadow',
          value: (shadowHorizontal.val() || 0) + " " + (shadowVertical.val() || 0) + " " + (shadowBlur.val() || 0) + (shadowColor.val() || '')
        }];
      
      break;
      case "remove":
      
        shadowHorizontal.val('');
        shadowVertical.val('');
        shadowBlur.val('');
        shadowColor.val('');
        
        return [{
          property: '-webkit-box-shadow'
        }];
      
      break;
    }
    
  },
  
  "text-shadow": function(element, type) {
    
    if (!type) {
      type = "update";
    };
    
    var element = jQuery(element);
    
    var shadowHorizontal =  element.find('*[name=text-shadow-horizontal]'),
        shadowVertical = element.find('*[name=text-shadow-vertical]'),
        shadowBlur = element.find('*[name=text-shadow-blur]'),
        shadowColor = element.find('*[name=text-shadow-color]');
    
    switch(type) {
      case "update":
      
        return [{
          property: 'text-shadow',
          value: (shadowHorizontal.val() || 0) + " " + (shadowVertical.val() || 0) + " " + (shadowBlur.val() || 0) + (shadowColor.val() || '')
        }];
      
      break;
      case "remove":
      
        shadowHorizontal.val('');
        shadowVertical.val('');
        shadowBlur.val('');
        shadowColor.val('');
        
        return [{
          property: 'text-shadow'
        }];
      
      break;
    }
    
  },
  
  column: function(element, type) {
    
    if (!type) {
      type = "update";
    };
    
    var element = jQuery(element);
    
    var columnCount =  element.find('*[name=column-count]'),
        columnGap = element.find('*[name=column-gap]');
    
    
    switch(type) {
      case "update":
        
        return [{
          property: '-webkit-column-count',
          value: (columnCount.val() || 0)
        }, {
          property: '-webkit-column-gap',
          value: (columnGap.val() || '')
        }];
      
      break;
      case "remove":
        
        columnCount.val('');
        columnGap.val('');
        
        return [{
          property: '-webkit-column-count'
        }, {
          property: '-webkit-column-gap'
        }];
      
      break;
    }
    
  }
};
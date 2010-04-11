var PROPERTIES = {
  'border-radius': {
    'type':     'js-type-label-remove-more',
    'target':   'js-type-border-radius',
    'children': {
      
      'border-bottom-left-radius': {
        'type':   'js-type-text',
        'title':  'bottom-left'
      },
      'border-bottom-right-radius': {
        'type':   'js-type-text',
        'title':  'bottom-right'
      },
      'border-top-left-radius': {
        'type':   'js-type-text',
        'title':  'top-left'
      },
      'border-top-right-radius': {
        'type':   'js-type-text',
        'title':  'top-right'
      }
    
    }
  },
  'box-shadow': {
    'type':     'js-type-label-remove-more',
    'target':   'js-type-box-shadow',
    'children': {
      
      'box-shadow-horizontal': {
        'type': 'js-type-text',
        'title': 'horizontal length'
      },
      
      'box-shadow-vertical': {
        'type': 'js-type-text',
        'title': 'vertical length'
      },
      
      'box-shadow-blur': {
        'type': 'js-type-text',
        'title': 'blur'
      },
      
      'box-shadow-color': {
        'type': 'js-type-text',
        'title': 'color'
      },
      
    }
  },
  // 'text-shadow': {},
  // 'columns': {}
};

var select = jQuery(".ld-hud .ld-layout-column-0 select");
var column_1 = jQuery(".ld-hud .ld-layout-column-1");
var templates = jQuery(".ld-hud .js-templates");

for (var property in PROPERTIES) {
  
  select.append("<option value='property-"+ property +"'>"+property+"</option>");
  
  var column_1_template = templates.find("."+PROPERTIES[property].type).clone()
    .addClass("property-"+property);

  column_1_template.find(".js-type-title").html(property);
  column_1.append(column_1_template);
  
  if (PROPERTIES[property].children) {
    
    column_1_template.attr("data-target", '.ld-layout-column-2.js-type-' + property);
    
    var column_2 = jQuery(".ld-hud .js-template.ld-layout-column-2")
      .clone()
      .attr("data-preprocess", property)
      .addClass("js-type-"+property)
      .removeClass("js-template");
    
    column_1.after(column_2);
    
    var children = PROPERTIES[property].children;
    
    for (var child in children) {
      
      var title = children[child].title || child;
      
      var element = templates.find("." + children[child].type).clone();
      
      element.find(".js-type-title").html(title);
      element.find(".js-type-name").attr("name", child);
      
      column_2.append(element);
      
    };
    
  };
  
};
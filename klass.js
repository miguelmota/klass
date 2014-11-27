(function(){
  function klass(Parent, props) {
    var Child, F, i;

    Child = function() {
      if (Child._super && Child._super.hasOwnProperty('_construct'))  {
        Child._super._construct.apply(this, arguments);
      }
      if (Child.hasOwnProperty('_construct'))  {
        Child._construct.apply(this, arguments);
      }
    };

    Parent = Parent || {};
    F = function() {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child._super = Parent.prototype;
    Child.prototype.constructor = Child;

    for (i in props) {
      if (props.hasOwnProperty(i)) {
        Child.prototype[i] = props[i];
      }
    }

    return Child;
  };

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = klass;
  } else {
    window.klass = klass;
  }

})();

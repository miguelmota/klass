# klass

Classical classes in JavaScript.

# Install

```bash
npm install klassjs
```

# Usage

```javascript
var klass = require('klassjs');

var Robot = klass(null, {
  _construct: function(v) {
    this.weapon = v;
  },
  fireWeapon: function() {
    return this.weapon;
  }
});

var Cyborg = klass(Robot, {
  fireWeapon: function() {
    var weapon = Cyborg._super.fireWeapon.call(this);
    return 'Firing ' + weapon;
  }
});

var zog = new Cyborg('Lasers');

console.log(zog.fireWeapon()); // Firing Lasers
```

# License

MIT

var test = require('tape');
var klass = require('../klass');

test('klass', function (t) {
  t.plan(2);

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

  t.equal(zog.weapon, 'Lasers');
  t.equal(zog.fireWeapon(), 'Firing Lasers');
});

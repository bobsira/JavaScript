const util = require('util');

function Sweetheart() {
  this.firstname ='Tiffany';
  this.lastname = 'Orangi';
}

Sweetheart.prototype.greet = function () {
  console.log('I miss you ' + this.firstname + ' ' + this.lastname);
};

function Sirasira() {
  Sweetheart.call(this);
  this.name = 'Bob';
}

util.inherits(Sirasira,Sweetheart);
var lover = new Sirasira();
lover.greet();

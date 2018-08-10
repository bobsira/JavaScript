exports.area = function (width) {
  return width * width;
};
exports.perimeter = function (width) {
  return 4 * width;
};

// also allowed
module.exports =  {
  // body...
  area : function (width) {
    return width * width;
  },

  perimeter : function (width) {
    return 4 * width;
  }
};

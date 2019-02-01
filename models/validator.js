module.exports = {

  check : function(init) {
    this.data = init;
    return this;
  },

  isString : function() {
    if (typeof this.data === 'string')
      return this;
  },

  min : function(min) {
    if (this.data.lenght >= min)
      return this;
  },

  max : function(max) {
    if (this.data.lenght <= max)
      return this;
  }
}

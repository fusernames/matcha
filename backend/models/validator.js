validator = function (data, type) {

  let errors = [];

  this.getErrors = function() {
    return errors;
  }

  this.isString = function() {
    if (typeof data !== 'string')
      errors.push('string');
    return this;
  }

  this.min = function(n) {
    if (data.length < n)
      errors.push('Votre '+ type +' est trop court.');
    return this;
  }

  this.max = function(n) {
    if (data.length > n)
      errors.push('max');
    return this;
  }

  return this;
}

module.exports = validator;

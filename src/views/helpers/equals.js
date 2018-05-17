module.exports = (lvalue, rvalue, options) => {
  if (arguments.length < 3) { throw new Error('Handlebars Helper equal needs 2 parameters'); }
  return (lvalue === rvalue) ? options.fn(this) : options.inverse(this);
};

module.exports = (lvalue, rvalue, options) => (
  (lvalue === rvalue) ? options.fn(this) : options.inverse(this)
);

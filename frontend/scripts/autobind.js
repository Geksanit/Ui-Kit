const autobind = function autobind(self) {
  Object.getOwnPropertyNames(self.constructor.prototype).forEach((key) => {
    const val = self[key];
    if (key !== 'constructor' && typeof val === 'function') self[key] = val.bind(self);
  });
  return self;
};
export default autobind;

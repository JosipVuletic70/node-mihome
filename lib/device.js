const models = require('./models');

module.exports = function createDevice(options) {
  if (!options.model) {
    throw new Error('Missing model config');
  }
  if (!models[options.model]) {
    throw new Error(`Model ${options.model} is not supported`);
  }
  console.log('uslo u device funkciju');
  const D = models[options.model];
  console.log('THE D', D, 'OPTIONS', options, 'THE D WITH OPTIONS', D(options));
  return new D(options);
};

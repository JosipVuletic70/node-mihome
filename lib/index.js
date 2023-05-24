const Utils = require('./utils');
const MiioProtocol = require('./protocol-miio');
const MiCloudProtocol = require('./protocol-micloud');
const AqaraProtocol = require('./protocol-aqara');
const device = require('./device');
const Models = require('./models');

class Mihome {

  constructor() {
    this.utils = Utils;
    this.miioProtocol = new MiioProtocol();
    this.miCloudProtocol = new MiCloudProtocol();
    this.aqaraProtocol = new AqaraProtocol();
    // this.device = Device;
    this.models = Models;
  }

  createDevice(options) {
    console.log('CREATE DEVICE CLASS FUNCTION', options);
    const result = device(options);
    console.log('CLASS RESULT', result);
    return result;
  }

}

module.exports = Mihome;

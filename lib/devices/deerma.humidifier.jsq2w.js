const Device = require('../device-miio');

module.exports = class extends Device {

  static model = 'deerma.humidifier.jsq2w';
  static name = 'Xiaomi Smart Humidifier 2';
  static image = 'https://cdn.awsde0.fds.api.mi-img.com/miio.files/developer_1584598944z7vf4g16.png';

  constructor(opts) {
    super(opts);

    this._miotSpecType = 'urn:miot-spec-v2:device:humidifier:0000A00E:deerma-jsq2w:1';
    this._propertiesToMonitor = [
      'humidifier:on',
      'humidifier:fault',
      'humidifier:fan-level',
      'humidifier:target-humidity',
      'humidifier:status',
      'humidifier:mode',
      'environment:relative-humidity',
      'environment:temperature',
      'alarm:alarm',
      'indicator-light:on',
    ];
  }

  getPower() {
    return this.properties['humidifier:on'];
  }

  getMode() {
    return this.properties['humidifier:mode'];
  }

  getTargetHumidity() {
    return this.properties['humidifier:target-humidity'];
  }

  getHumidity() {
    return this.properties['environment:relative-humidity'];
  }

  getTemperature() {
    return this.properties['environment:temperature'];
  }

  getBuzzer() {
    return this.properties['alarm:alarm'];
  }

  getLed() {
    return this.properties['indicator-light:on'];
  }

  getWaterTankFull() {
    return this.properties['event-service:water-tank-status'];
  }

  setPower(v) {
    return this.miotSetProperty('humidifier:on', v);
  }

  setMode(v) {
    return this.miotSetProperty('humidifier:mode', v);
  }

  setTargetHumidity(v) {
    return this.miotSetProperty('humidifier:target-humidity', v);
  }

  setFanLevel(v) {
    return this.miotSetProperty('humidifier:fan-level', v);
  }

  // getPower() {
  //   const { power } = this.properties;
  //   if (power === 'on') return true;
  //   if (power === 'off') return false;
  //   return undefined;
  // }
  //
  // getFanLevel() {
  //   const fanLevel = parseInt(this.properties['mode'], 10);
  //   if (fanLevel >= 0) return fanLevel;
  //   return undefined;
  // }
  //
  // getTargetHumidity() {
  //   return this.properties['limit_hum'];
  // }
  //
  // getWaterLevel() {
  //   return this.properties['depth'];
  // }
  //
  // getTemperature() {
  //   return this.properties['temperature'];
  // }
  //
  // getHumidity() {
  //   return this.properties['humidity'];
  // }
  //
  // getMode() {
  //   const { dry } = this.properties;
  //   if (dry === 'on') return 'dry';
  //   if (dry === 'off') return 'humidify';
  //   return undefined;
  // }
  //
  // getChildLock() {
  //   const childLock = this.properties['child_lock'];
  //   if (childLock === 'on') return true;
  //   if (childLock === 'off') return false;
  //   return undefined;
  // }
  //
  // getLedBrightness() {
  //   const led = this.properties['led_b'];
  //   if (led >= 0) return led;
  //   return undefined;
  // }
  //
  // getBuzzer() {
  //   const { buzzer } = this.properties;
  //   if (buzzer === 'on') return true;
  //   if (buzzer === 'off') return false;
  //   return undefined;
  // }
  //
  // setPower(v) {
  //   return this.miioCall('set_power', [v ? 'on' : 'off']);
  // }
  //
  // setBuzzer(v) {
  //   return this.miioCall('set_buzzer', [v]);
  // }
  //
  // setFanLevel(v) {
  //   return this.miioCall('set_mode', [v]);
  // }
  //
  // setTargetHumidity(v) {
  //   if ([30, 40, 50, 60, 70, 80].includes(v)) {
  //     return this.miioCall('set_limit_hum', [v]);
  //   }
  //   return Promise.reject(new Error(`Invalid target humidity: ${v}`));
  // }
  //
  // setLedBrightness(v) {
  //   return this.miioCall('set_led_b', [String(v)]);
  // }
  //
  // setChildLock(v) {
  //   return this.miioCall('set_child_lock', [v ? 'on' : 'off']);
  // }
  //
  // setMode(v) {
  //   if (v === 'dry') {
  //     return this.miioCall('set_dry', ['on']);
  //   }
  //   if (v === 'humidify') {
  //     return this.miioCall('set_dry', ['off']);
  //   }
  //   return Promise.reject(new Error(`Invalid mode: ${v}`));
  // }

};

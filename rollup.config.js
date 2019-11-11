var pkg = require('./package.json');

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg['main'],
      format: 'umd',
      name: 'QrCode',
      sourcemap: true
    }
  ]
};

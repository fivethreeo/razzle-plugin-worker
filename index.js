'use strict';


function modify(defaultConfig, { target, dev }, webpack) {
  const config = defaultConfig;
    
  config.module.rules.push(
    {
      test: /\.worker\.js$/,
      use: { loader: 'worker-loader' }
    }
  )

  return config;
}

module.exports = modify;

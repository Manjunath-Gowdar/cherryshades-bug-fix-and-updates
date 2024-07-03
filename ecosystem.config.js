const path = require('path')

module.exports = {
  apps: [
    {
      name: 'cherryshades-pm2',
      script: './backend/server.js',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',

      // More configuration options as needed
    },
  ],
}

module.exports = {
    apps: [
        {
            name: 'Api-Sms-Hotel',
            script: 'src/server.ts',
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: 'production',
            },
            env_development: {
                NODE_ENV: 'development',
            },
        },
    ],
};
module.exports = {
    webpackDevkMiddleware: config => {
        config.watchOptions.poll = 300;
        return config;
    }
};
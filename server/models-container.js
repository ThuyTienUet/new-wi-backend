module.exports = function() {
    if (process.appMode == 'auto-models')
        return require('./new-models');
    return require('./models');
}
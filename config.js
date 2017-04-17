var config = [];

config['dev'] = {
    mongoUrl: 'mongodb://localhost:27017/eduwizz'

};

config['production'] = {
    mongoUrl: 'mongodb://localhost/eduwizz'
};

module.exports = config;
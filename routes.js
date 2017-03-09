var routes = {};
var index = require('./controllers/index');

routes.add = function (app) {
	app.use('/', index);
};

module.exports = routes;
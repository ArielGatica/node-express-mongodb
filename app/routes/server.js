const express = require('express');
const apiRoutes = express.Router();
const Cars = require('../controllers/car.controller');

//Cars
apiRoutes.route('/cars/age').get(Cars.getCarsAge);
apiRoutes.route('/cars/list').get(Cars.listCars);
apiRoutes.route('/cars/:_id').get(Cars.findOne);
apiRoutes.route('/cars/add').post(Cars.addCars);
apiRoutes.route('/cars/edit').put(Cars.editCars);
apiRoutes.route('/cars/remove/:_id').delete(Cars.removeCars);


module.exports = apiRoutes;
const Cars = require('../models/car');

exports.listCars = async (req, res) =>{
    await Cars.find((err, cars) =>{
        if(!err)
            res.status(200).json(cars);
        else
            res.status(400).json({ message: 'Error al intentar listar Cars' });
    })
};

exports.findOne = async (req, res) =>{
    await Cars.findById(req.params._id, (err, car) =>{
        if(!err)
            res.status(200).json(car);
        else
            res.status(404).json({ message: 'Error Cars no encontrado' });
    })
};

exports.addCars = async (req, res) =>{
    let newCar =  new Cars({
        mark: req.body.mark,
        model: req.body.model,
        age: req.body.age,
        price: req.body.price
    })
    await newCar.save((err) =>{
        if(!err)
            res.status(200).json({ message: 'Cars agregado correctamente' });
        else
            res.status(400).json({ message: 'Error al intentar agregar Cars' });
    })
};

exports.getCarsAge = async (req, res) => {
    await Cars.find((err, cars) => {
        if (!err) {
            const getOnlyCars = cars.filter((dataCars) => {
                return dataCars.age == 2016
            }).map((getData) => {
                return getData.mark + ' ' + getData.model
            });
            
            res.status(200).json(getOnlyCars);
        } else
            res.status(404).json({ message: 'Error no existen datos relacionados' });
    })
};

exports.removeCars = async (req, res) =>{
    await Cars.findByIdAndDelete(req.params._id, (err, cars) =>{
        if(!err){
            cars.remove((err) =>{
                if(!err)
                    res.status(200).json({ message: 'Cars eliminado correctamente' });
                else
                    res.status(400).json({ message: 'No se ha podido eliminar Car, inténtelo nuevamente ', err });
            })
        }else
            res.status(404).json({ message: 'Cars no encontrado para eliminar' });
    })
};

exports.editCars = async (req, res) =>{
    await Cars.findById(req.body._id, (err, cars) =>{
        if(err)
            res.status(404).json({ message: 'No se ha encontrado Cars a editar' });
    
        let carEdited = {
            mark: req.body.mark,
            model: req.body.model,
            age: req.body.age,
            price: req.body.price
        };        
        Cars.findByIdAndUpdate(req.body._id, {$set: carEdited}, (err) =>{
            if(!err)
                res.status(200).json({ message: 'Cars editado correctamnte' });
            else
                res.status(400).json({ message: 'Error al intentar editar Cars ', err});
        })
    })
};
mongoose = require('mongoose')
empModal = require('../models/empModel')


//read all Employee
function readAllEmp(req, res){
   empModal.find()
        .select('_id name designation salary')
        .then((allEmp) => {
            return res.status(200).json({
                success : true,
                message : 'Successfully get all the Employee details from db',
               empDetails : allEmp
            })
        })
        .catch((err) => {
            res.status(500).json({
                success : false,
                message : 'Internal server error occur',
                error : err
            })
        })
}
//delete Employee
function deleteEmployee(req, res){
    const Id = req.params.empId
   empModal.findByIdAndRemove(Id)
        .exec()
        .then(() => {
            return res.status(200).json({
                success : true,
                message : `Employee details with id = ${Id} is deleted sussfully`
            })
        })
        .catch((err) => {
            res.status(500).json({
                success : false,
                message : 'some internal server error occurs',
                error : err
            })
        })
}

//update Employee 
function updateEmployee(req, res){
    const Id = req.params.empId
    const EmpObj = req.body
   empModal.update({_id : Id}, {$set : EmpObj})
        .exec()
        .then(() => {
            return res.status(200).json({
                success : true,
                message : 'employee info is updated',
                updatedInfo : EmpObj 
            })
        })    
        .catch((err) => {
            res.status(500).json({
                success : false,
                message : 'Internal server error occur',
                error: err
            })
        }) 
}

//create cause
function createNewEmployee (req, res){
    const empObj = new empModal({
        _id : mongoose.Types.ObjectId(),
        name : req.body.name,
        designation : req.body.designation,
        salary : req.body.salary || '2L'
    })
    
    return empObj 
        .save()
        .then((newEmp) => {
            return res.status(200).json({
                success : true,
                message : 'New data added successfully',
                details : newEmp
            })
        }) 
        .catch((err) => {
            res.status(500).json({
                success : false,
                message : 'Internal server error',
                error : err.message
            })
        })
}

module.exports = {createNewEmployee, readAllEmp, updateEmployee, deleteEmployee}
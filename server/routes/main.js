express = require('express')
controller = require('../controllers/empController')

const route = express.Router()

route.post('/newemp', controller.createNewEmployee)
route.get('/readAllEmp', controller.readAllEmp)
route.patch('/update/:empId', controller.updateEmployee)
route.delete('/del/:empId', controller.deleteEmployee)

module.exports = route
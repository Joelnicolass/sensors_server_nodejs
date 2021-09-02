const express = require("express");
const router = express.Router();
const sensorsController = require("../controllers/sensorsController");

/*
 * Path -> /sensors
 */

/*
 * POST '/sensors/create'
 *   recibe: {nombre:string}
 */
router.post("/create", sensorsController.createSensors);

/*
 * GET '/sensors/list'
 * devuelve: [{id: int, nombre:string}]
 */
router.get("/list", sensorsController.getSensors);

/*
 * GET '/sensors/getsensor'
 * devuelve: [{id: int, nombre:string}]
 */
router.get("/getsensor/:id", sensorsController.getSensorById);

/*
 * PUT '/sensors/upd/:id'
 * recibe: {id: int, nombre:string}
 */
router.put("/upd", sensorsController.updateSensorName);

/*
 * DELETE '/sensors/del'
 * recibe: {id:int}
 */
router.delete("/del", sensorsController.deleteSensor);

//////////////////////////////////////////////////////

/*
 * POST '/sensors/insertinfo'
 *   recibe: {id:int, temperatura:int}
 */
router.post("/insertinfo", sensorsController.insertInfoSensor);

/*
 * GET '/sensors/getinfo'
 * devuelve: [{id: int, nombre:string}]
 */
router.get("/getinfo/:id", sensorsController.getInfoSensorById);

/*
 * DELETE '/sensors/del'
 * recibe: {id:int}
 */
router.delete("/delinfo", sensorsController.deleteInfoSensor);

module.exports = router;

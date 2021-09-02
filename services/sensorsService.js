const {
  insertSensor,
  getSensors,
  getSensorById,
  getSensorByName,
  updateSensorName,
  deleteSensor,
  insertInfoSensor,
  getInfoSensorById,
  deleteInfoSensor,
} = require("../models/sensorsModels");

module.exports = {
  insertSensor: async (sensor) => {
    //verifico que no exista.
    const resSensor = await getSensorByName(sensor.nombre);
    if (resSensor.length > 0) {
      throw new Error("El Sensor " + sensor.nombre + " ya existe.");
    }

    //Ingreso el nuevo sensor a la base de datos.
    const insertId = await insertSensor(sensor);
    sensor.id = insertId;
    return sensor;
  },
  getSensors: async () => {
    const resSensor = await getSensors();
    if (resSensor.length <= 0) {
      throw new Error("No hay sensores en la base de datos");
    }
    return resSensor;
  },
  getSensorById: async (id) => {
    const resSensor = await getSensorById(id);
    if (resSensor.length <= 0) {
      throw new Error("No se encuentra el sensor");
    }
    return resSensor[0];
  },
  updateSensorName: async (sensor) => {
    //valido si existe el sensor.

    const resSensor = await getSensorById(sensor.id);
    if (resSensor <= 0) {
      throw new Error("No se encuentra el sensor");
    }

    //realizo la modificación del registro.
    await updateSensorName(sensor);
    return sensor.id;
  },
  deleteSensor: async (id) => {
    //valido si existe el sensor.
    const resSensor = await getSensorById(id);
    if (resSensor <= 0) {
      throw new Error("No se encuentra el sensor");
    }
    //validar si tiene informacion.
    const resInfoSensor = await getInfoSensorById(id);
    if (resInfoSensor <= 0) {
      //si no hay informacion vinculada, eliminar el sensor.
      await deleteSensor(id);
      return;
    }
    //si hay información vinculada, eliminarla. Luego eliminar el sensor correspondiente.
    await deleteInfoSensor(id);
    await deleteSensor(id);
    return;
  },
  insertInfoSensor: async (sensor) => {
    //validando que el id exista en la base de datos.
    const resSensorId = await getSensorById(sensor.id);
    if (resSensorId <= 0) {
      throw new Error("Id no encontrado");
    }

    //persistencia de los datos.
    const insertInfo = await insertInfoSensor(sensor);
    sensor.id = insertInfo;
    return sensor;
  },
  getInfoSensorById: async (id) => {
    const resSensor = await getInfoSensorById(id);
    if (resSensor.length <= 0) {
      throw new Error("No se encuentra el sensor");
    }
    return resSensor;
  },
  deleteInfoSensor: async (id) => {
    //valido si existe el sensor.
    const resSensor = await getSensorById(id);
    if (resSensor <= 0) {
      throw new Error("No se encuentra el sensor");
    }
    //validar si tiene informacion.
    const resInfoSensor = await getInfoSensorById(id);
    if (resSensorId <= 0) {
      throw new Error("El sesnor no tiene información asociada");
    }
    await deleteInfoSensor(id);
    return;
  },
};

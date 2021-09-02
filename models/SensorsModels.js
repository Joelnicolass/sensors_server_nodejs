const qy = require("../db/connection");

module.exports = {
  insertSensor: async (sensor) => {
    const query = "INSERT INTO sensors (id_sensor, nombre) VALUES (DEFAULT, ?)";
    const result = await qy(query, [sensor.nombre]);
    return result.insertId;
  },
  getSensors: async () => {
    const query = "SELECT * FROM sensors";
    return await qy(query);
  },
  getSensorById: async (id) => {
    const query = "SELECT * FROM sensors WHERE id_sensor = ?";
    return await qy(query, [id]);
  },
  getSensorByName: async (name) => {
    const query = "SELECT * FROM sensors WHERE nombre = ?";
    return await qy(query, [name]);
  },
  updateSensorName: async (sensor) => {
    const query = "UPDATE sensors SET nombre = ? WHERE id_sensor = ?";
    const result = await qy(query, [sensor.nombre, sensor.id]);
    return result.affectedRows;
  },
  deleteSensor: async (id) => {
    const query = "DELETE FROM sensors WHERE id_sensor = ?";
    const result = await qy(query, [id]);
    return result.affectedRows;
  },
  insertInfoSensor: async (sensor) => {
    const query =
      "INSERT INTO infosensors (sensor_id, fecha, hora, temperatura) VALUES (?, ?, ?, ?)";
    const result = await qy(query, [
      sensor.id,
      sensor.fecha,
      sensor.hora,
      sensor.temp,
    ]);
    return result.insertId;
  },
  getInfoSensorById: async (id) => {
    const query =
      "SELECT * FROM infosensors WHERE sensor_id = ? ORDER BY fecha, hora";
    return await qy(query, [id]);
  },
  deleteInfoSensor: async (id) => {
    const query = "DELETE FROM infosensors WHERE sensor_id = ?";
    const result = await qy(query, [id]);
    return result.affectedRows;
  },
};

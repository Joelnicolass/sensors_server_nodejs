const {
  insertSensor,
  getSensors,
  getSensorById,
  updateSensorName,
  deleteSensor,
  insertInfoSensor,
  getInfoSensorById,
  deleteInfoSensor,
} = require("../services/sensorsService");

module.exports = {
  createSensors: async (req, res) => {
    try {
      //Valido la recepcion de todos los datos.
      if (!req.body.nombre || req.body.nombre === "") {
        throw new Error("Nombre obligatorio");
      }

      let sensor = {
        nombre: req.body.nombre.toUpperCase(),
      };

      sensor = await insertSensor(sensor);
      res.status(200).send(sensor);
    } catch (e) {
      console.error(e.message);
      res.status(413).send({ mensaje: e.message });
    }
  },
  getSensors: async (req, res) => {
    try {
      const sensors = await getSensors();
      res.status(200).send(sensors);
    } catch (e) {
      console.error(e.message);
      res.status(413).send({ mensaje: e.message });
    }
  },
  getSensorById: async (req, res) => {
    try {
      if (!req.params.id) {
        throw new Error("Faltan datos");
      }
      const id = req.params.id;
      const sensor = await getSensorById(id);
      res.status(200).send(sensor);
    } catch (e) {
      console.error(e.message);
      res.status(413).send({ mensaje: e.message });
    }
  },
  updateSensorName: async (req, res) => {
    try {
      //Valido la recepcion de todos los datos.
      if (!req.body.nombre || req.body.nombre === "") {
        throw new Error("Nombre obligatorio");
      }
      let sensor = {
        id: req.body.id,
        nombre: req.body.nombre.toUpperCase(),
      };
      const sensorUpdated = await updateSensorName(sensor);
      res.sendStatus(200);
    } catch (e) {
      console.error(e.message);
    }
  },
  deleteSensor: async (req, res) => {
    try {
      if (!req.body.id) {
        throw new Error("Id no encontrado");
      }
      const idSensor = req.body.id;
      await deleteSensor(idSensor);
      res.status(200).send({ mensaje: "se borro correctamente" });
    } catch (e) {
      console.error(e.message);
      res.status(413).send({ mensaje: e.message });
    }
  },
  insertInfoSensor: async (req, res) => {
    try {
      //validaciones.
      if (!req.body.id) {
        throw new Error("Id no encontrado");
      }

      //obteniendo fecha, huso horario Argentina.
      const dateArg = new Date().toLocaleString("en-US", {
        timeZone: "America/Argentina/Buenos_Aires",
      });

      //fecha a formato compatible con mysql.
      const dateToMYSQL = (datx) => {
        let d = new Date(datx),
          month = "" + (d.getMonth() + 1),
          day = d.getDate().toString(),
          year = d.getFullYear();
        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;
        return [year, month, day].join("-");
      };

      //hora compatible con mysql.
      const dateTimeToMYSQL = (datx) => {
        let d = new Date(datx),
          hours = d.getHours().toString(),
          minutes = d.getMinutes().toString(),
          secs = d.getSeconds().toString();
        if (hours.length < 2) hours = "0" + hours;
        if (minutes.length < 2) minutes = "0" + minutes;
        if (secs.length < 2) secs = "0" + secs;
        return [hours, minutes, secs].join(":");
      };

      const dateDB = dateToMYSQL(dateArg);
      const dateTimeDB = dateTimeToMYSQL(dateArg);

      //creación de objeto con los datos.
      let sensor = {
        id: req.body.id,
        fecha: dateDB,
        hora: dateTimeDB,
        temp: req.body.temp,
      };
      await insertInfoSensor(sensor);
      res
        .status(200)
        .send({ mensaje: "se guardaron los valores correctamente" });
    } catch (e) {
      console.error(e.message);
      res.status(413).send({ mensaje: e.message });
    }
  },
  getInfoSensorById: async (req, res) => {
    try {
      if (!req.params.id) {
        throw new Error("Faltan datos");
      }
      const id = req.params.id;
      const sensor = await getInfoSensorById(id);
      res.status(200).send(sensor);
    } catch (e) {
      console.error(e.message);
      res.status(413).send({ mensaje: e.message });
    }
  },
  deleteInfoSensor: async (req, res) => {
    try {
      if (!req.body.id) {
        throw new Error("Id no encontrado");
      }
      const idSensor = req.body.id;
      await deleteInfoSensor(idSensor);
      res.status(200).send({ mensaje: "se borro correctamente" });
    } catch (e) {
      console.error(e.message);
      res.status(413).send({ mensaje: e.message });
    }
  },
};

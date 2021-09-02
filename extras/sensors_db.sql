-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-09-2021 a las 09:39:07
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sensors_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `infosensors`
--

CREATE TABLE `infosensors` (
  `sensor_id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `temperatura` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `infosensors`
--

INSERT INTO `infosensors` (`sensor_id`, `fecha`, `hora`, `temperatura`) VALUES
(2, '2021-09-01', '00:17:52', 35),
(2, '2021-09-01', '00:19:36', 35),
(2, '2021-09-01', '00:19:44', 45),
(2, '2021-09-01', '00:38:51', 20),
(3, '2021-09-01', '00:44:39', 6),
(3, '2021-09-01', '00:45:04', 3),
(3, '2021-09-01', '00:45:07', 0),
(3, '2021-09-01', '00:45:11', -7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sensors`
--

CREATE TABLE `sensors` (
  `id_sensor` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sensors`
--

INSERT INTO `sensors` (`id_sensor`, `nombre`) VALUES
(2, 'TERMÓMETRO_UNO'),
(3, 'TERMÓMETRO_DOS'),
(30, 'ASD');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `infosensors`
--
ALTER TABLE `infosensors`
  ADD KEY `sensor_id` (`sensor_id`);

--
-- Indices de la tabla `sensors`
--
ALTER TABLE `sensors`
  ADD PRIMARY KEY (`id_sensor`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `sensors`
--
ALTER TABLE `sensors`
  MODIFY `id_sensor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `infosensors`
--
ALTER TABLE `infosensors`
  ADD CONSTRAINT `infosensors_ibfk_1` FOREIGN KEY (`sensor_id`) REFERENCES `sensors` (`id_sensor`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

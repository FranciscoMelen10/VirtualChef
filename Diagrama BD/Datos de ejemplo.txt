-- Insertar datos de ejemplo en la tabla Rol
INSERT INTO Rol (nombre) VALUES
('Administrador'),
('Usuario Regular');

-- Insertar datos de ejemplo en la tabla Usuario
INSERT INTO Usuario (idRol, nombre, apellido, username, clave) VALUES
(1, 'Admin', 'Admin', 'admin', 'admin123'),
(2, 'Juan', 'Pérez', 'juanperez', 'clave123'),
(2, 'María', 'Gómez', 'mariagomez', 'contraseña');

-- Insertar datos de ejemplo en la tabla Receta
INSERT INTO Receta (idUsuario, nombre, descripcion, tiempo, imagen) VALUES
(2, 'Tarta de Manzana', 'Deliciosa tarta de manzana con base de masa quebrada y relleno de manzanas caramelizadas.', 60, 0x), -- Imagen en formato VARBINARY(MAX)
(3, 'Pollo al Horno', 'Receta simple y sabrosa de pollo al horno con hierbas aromáticas y verduras asadas.', 90, 0x), -- Imagen en formato VARBINARY(MAX)
(2, 'Ensalada César', 'Ensalada clásica con lechuga, pollo a la parrilla, picatostes, queso parmesano y aderezo César.', 20, 0x); -- Imagen en formato VARBINARY(MAX)

-- Insertar datos de ejemplo en la tabla Pasos
INSERT INTO Pasos (idReceta, nombre) VALUES
(1, 'Preparar la masa'),
(1, 'Cortar las manzanas'),
(1, 'Hornear durante 45 minutos a 180°C'),
(2, 'Condimentar el pollo con sal, pimienta y romero'),
(2, 'Cortar las verduras en trozos'),
(2, 'Hornear durante 60 minutos a 200°C'),
(3, 'Lavar y cortar la lechuga'),
(3, 'Cocinar el pollo a la parrilla'),
(3, 'Preparar el aderezo César');

-- Insertar datos de ejemplo en la tabla Ingredientes
INSERT INTO Ingredientes (idReceta, nombre) VALUES
(1, 'Masa quebrada'),
(1, 'Manzanas'),
(1, 'Azúcar'),
(2, 'Pollo'),
(2, 'Pimiento rojo'),
(2, 'Cebolla'),
(3, 'Lechuga'),
(3, 'Pollo'),
(3, 'Picatostes'),
(3, 'Queso parmesano'),
(3, 'Aderezo César');

-- Insertar datos de ejemplo en la tabla Horario
INSERT INTO Horario (idReceta, nombre) VALUES
(1, 'Merienda'),
(2, 'Almuerzo'),
(3, 'Cena');

-- Insertar datos de ejemplo en la tabla Favoritos
INSERT INTO Favoritos (idReceta, idUsuario) VALUES
(1, 2),
(2, 3),
(3, 2);

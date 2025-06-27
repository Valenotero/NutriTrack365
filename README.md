# NutriTrack365 - Sistema de Gestión de Salud y Nutrición

## 📋 Descripción

NutriTrack365 es una aplicación web moderna diseñada para gestionar usuarios, profesionales de la salud, ejercicios físicos, nutrición y seguimiento médico. El sistema está basado en una base de datos SQL Server que maneja todas las relaciones entre las diferentes entidades del sistema de salud.

## 🎯 Características Principales

### 👥 Gestión de Usuarios
- Registro y gestión de usuarios con datos personales
- Seguimiento de peso, altura, género y edad
- Historial de actividades y objetivos de salud
- Perfiles detallados con estadísticas

### 👨‍⚕️ Profesionales de la Salud
- Gestión de especialistas (nutricionistas, entrenadores, médicos)
- Sistema de calificaciones y reseñas
- Asignación de pacientes a profesionales
- Comunicación entre usuarios y profesionales

### 💪 Ejercicios Físicos
- Catálogo de ejercicios con diferentes tipos (Cardio, Fuerza, Flexibilidad)
- Registro de actividades físicas realizadas
- Seguimiento de músculos trabajados
- Cálculo de calorías quemadas

### 🍎 Nutrición y Alimentación
- Base de datos de alimentos con información nutricional
- Creación y gestión de recetas
- Seguimiento de consumo diario
- Cálculo automático de calorías

### 🏥 Gestión de Salud
- Registro de síntomas y su frecuencia
- Historial de enfermedades
- Control de medicación y dosis
- Gestión de alergias con niveles de gravedad

## 🗄️ Estructura de la Base de Datos

### Tablas Principales
-**usuario**: Contiene la información personal de los usuarios, como nombre, apellido, email, peso, altura, género, fecha de registro y fecha de nacimiento.
-**profesional**: Almacena datos de los profesionales de la salud, incluyendo nombre, apellido, email y especialidad.
-**fichaMedica**: Registra datos médicos generales de los usuarios, como grupo sanguíneo y observaciones.
-**objetivoDeSalud**: Define los objetivos de salud de los usuarios con descripción, fechas de inicio y fin, y estado.
-**ejercicioFisico**: Contiene información sobre los ejercicios disponibles, tipo y calorías quemadas.
-**musculo**: Lista de músculos que se pueden relacionar con los ejercicios.
-**sintomas**: Catálogo de síntomas con nombre y descripción.
-**enfermedades**: Registro de enfermedades con nombre y descripción.
-**medicacion**: Información sobre medicaciones disponibles, con nombre y descripción.
-**alergias**: Catálogo de alergias posibles.
-**alimento**: Contiene datos nutricionales de alimentos, incluyendo grasas, proteínas, carbohidratos y calorías.
-**receta**: Guarda recetas con nombre, ingredientes y calorías totales.

### Tablas Intermedias
-**recetaIngrediente**: Relaciona recetas con los ingredientes utilizados en ellas.
-**recetaPaso**: Asocia cada receta con los pasos para su preparación.
-**profesionalConsejo**: Relaciona consejos con el profesional que los creó.
-**consejoAlimento**: Asocia alimentos con los consejos relacionados.

## 🎨 Características de la Interfaz

### Diseño Responsivo
- Adaptable a dispositivos móviles y tablets
- Navegación intuitiva con menú lateral
- Diseño moderno con gradientes y efectos visuales

### Dashboard Principal
- Estadísticas en tiempo real
- Actividad reciente de usuarios
- Alertas de salud importantes
- Gráficos de progreso

### Gestión de Datos
- Tablas interactivas con búsqueda y filtros
- Formularios de entrada con validación
- Modales para edición rápida
- Sistema de notificaciones

## 📊 Funcionalidades Destacadas

### Sistema de Alertas
- Detección de síntomas frecuentes
- Recordatorios de medicación
- Alertas de citas programadas
- Notificaciones de objetivos completados

### Reportes y Estadísticas
- Resumen de salud por usuario
- Top ejercicios más realizados
- Calorías consumidas por día
- Progreso de objetivos de salud

### Integración de Datos
- Relación automática entre entidades
- Cálculos automáticos de calorías
- Triggers para mantener consistencia
- Vistas para consultas complejas

## 🔧 Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con Flexbox y Grid
- **JavaScript**: Interactividad y funcionalidad
- **Font Awesome**: Iconografía
- **Google Fonts**: Tipografía Inter

### Backend (Base de Datos)
- **SQL Server**: Sistema de gestión de base de datos
- **Triggers**: Automatización de cálculos
- **Vistas**: Consultas optimizadas

## 📱 Responsive Design

La aplicación está completamente optimizada para:
- **Desktop**: Pantallas grandes con navegación completa
- **Tablet**: Diseño adaptado con menús colapsables
- **Mobile**: Interfaz táctil optimizada

## 🎯 Casos de Uso

### Para Usuarios
1. **Registro**: Crear cuenta con datos personales
2. **Perfil**: Actualizar información de salud
3. **Ejercicios**: Registrar actividades físicas
4. **Nutrición**: Seguir plan alimenticio
5. **Salud**: Reportar síntomas y condiciones

### Para Profesionales
1. **Pacientes**: Gestionar lista de pacientes
2. **Seguimiento**: Monitorear progreso
3. **Comunicación**: Interactuar con usuarios
4. **Reportes**: Generar informes de salud

### Para Administradores
1. **Usuarios**: Gestión completa de usuarios
2. **Profesionales**: Administrar especialistas
3. **Contenido**: Mantener catálogos
4. **Estadísticas**: Análisis del sistema

## 🔒 Seguridad y Privacidad

- Datos médicos protegidos
- Acceso basado en roles
- Encriptación de información sensible
- Cumplimiento de normativas de salud

## 🚀 Próximas Funcionalidades

- [ ] Integración con wearables
- [ ] Chat en tiempo real
- [ ] Notificaciones push
- [ ] API REST completa
- [ ] Aplicación móvil nativa
- [ ] Inteligencia artificial para recomendaciones


## 📄 Licencia

Este proyecto es para fines academicos y hecho por estudiantes para Diseñar la Interfaz de Usuario dentro de la aplicacion.

---

**NutriTrack365** - Transformando la gestión de salud digital 🏥💪 

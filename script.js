// Global data storage
let appData = {
    users: [
        {
            id: 1,
            nombre: 'María González',
            apellido: 'González',
            email: 'maria@email.com',
            peso: 65,
            altura: 165,
            genero: 'F',
            fechaNacimiento: '1996-05-15',
            edad: 28
        },
        {
            id: 2,
            nombre: 'Carlos Rodríguez',
            apellido: 'Rodríguez',
            email: 'carlos@email.com',
            peso: 78,
            altura: 175,
            genero: 'M',
            fechaNacimiento: '1992-03-22',
            edad: 32
        },
        {
            id: 3,
            nombre: 'Ana Martínez',
            apellido: 'Martínez',
            email: 'ana@email.com',
            peso: 68.5,
            altura: 160,
            genero: 'F',
            fechaNacimiento: '1999-08-10',
            edad: 25
        }
    ],
    professionals: [
        {
            id: 1,
            nombre: 'Laura',
            apellido: 'Sánchez',
            email: 'laura.sanchez@nutritrack.com',
            especialidad: 'Nutricionista',
            pacientes: 45,
            rating: 4.8
        },
        {
            id: 2,
            nombre: 'Roberto',
            apellido: 'Torres',
            email: 'roberto.torres@nutritrack.com',
            especialidad: 'Entrenador Personal',
            pacientes: 32,
            rating: 4.9
        },
        {
            id: 3,
            nombre: 'Patricia',
            apellido: 'López',
            email: 'patricia.lopez@nutritrack.com',
            especialidad: 'Médico General',
            pacientes: 67,
            rating: 4.7
        }
    ],
    exercises: [
        {
            id: 1,
            nombre: 'Correr',
            tipo: 'Cardio',
            calorias: '300-600 kcal/hora',
            musculos: 'Piernas, Glúteos',
            dificultad: 'Intermedia'
        },
        {
            id: 2,
            nombre: 'Sentadillas',
            tipo: 'Fuerza',
            calorias: '100-200 kcal/hora',
            musculos: 'Cuádriceps, Glúteos',
            dificultad: 'Básica'
        },
        {
            id: 3,
            nombre: 'Yoga',
            tipo: 'Flexibilidad',
            calorias: '150-300 kcal/hora',
            musculos: 'Todo el cuerpo',
            dificultad: 'Variable'
        }
    ],
    foods: [
        {
            id: 1,
            nombre: 'Pollo',
            categoria: 'Proteína',
            calorias: 165,
            proteinas: 31,
            grasas: 3.6,
            carbohidratos: 0
        },
        {
            id: 2,
            nombre: 'Arroz Integral',
            categoria: 'Cereal',
            calorias: 111,
            proteinas: 2.6,
            grasas: 0.9,
            carbohidratos: 23
        }
    ],
    recipes: [
        {
            id: 1,
            nombre: 'Ensalada César',
            calorias: 320,
            ingredientes: ['Lechuga romana', 'Pollo a la plancha', 'Crutones', 'Parmesano', 'Aderezo César']
        }
    ],
    symptoms: [
        {
            id: 1,
            nombre: 'Dolor de Cabeza',
            descripcion: 'Dolor intenso en la región temporal',
            usuario: 'María González',
            fecha: '2024-12-15',
            apariciones: 5,
            frecuencia: 'Frecuente'
        }
    ]
};

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Navigation menu
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Initialize forms
    initializeForms();
    
    // Initialize search and filters
    initializeSearchAndFilters();
    
    // Update statistics
    updateStatistics();
});

// Initialize all forms
function initializeForms() {
    // User form
    const userForm = document.querySelector('#addUserModal form');
    if (userForm) {
        userForm.addEventListener('submit', function(e) {
            e.preventDefault();
            addNewUser(this);
        });
    }

    // Professional form
    const professionalForm = document.querySelector('#addProfessionalModal form');
    if (professionalForm) {
        professionalForm.addEventListener('submit', function(e) {
            e.preventDefault();
            addNewProfessional(this);
        });
    }

    // Exercise form
    const exerciseForm = document.querySelector('#addExerciseModal form');
    if (exerciseForm) {
        exerciseForm.addEventListener('submit', function(e) {
            e.preventDefault();
            addNewExercise(this);
        });
    }

    // Food form
    const foodForm = document.querySelector('#addFoodModal form');
    if (foodForm) {
        foodForm.addEventListener('submit', function(e) {
            e.preventDefault();
            addNewFood(this);
        });
    }

    // Recipe form
    const recipeForm = document.querySelector('#addRecipeModal form');
    if (recipeForm) {
        recipeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            addNewRecipe(this);
        });
    }

    // Symptom form
    const symptomForm = document.querySelector('#addSymptomModal form');
    if (symptomForm) {
        symptomForm.addEventListener('submit', function(e) {
            e.preventDefault();
            addNewSymptom(this);
        });
    }
}

// Add new user
function addNewUser(form) {
    const formData = new FormData(form);
    const newUser = {
        id: appData.users.length + 1,
        nombre: form.querySelector('input[name="nombre"]').value,
        apellido: form.querySelector('input[name="apellido"]').value,
        email: form.querySelector('input[name="email"]').value,
        peso: parseInt(form.querySelector('input[name="peso"]').value),
        altura: parseInt(form.querySelector('input[name="altura"]').value),
        genero: form.querySelector('select[name="genero"]').value,
        fechaNacimiento: form.querySelector('input[name="fechaNacimiento"]').value,
        edad: calculateAge(form.querySelector('input[name="fechaNacimiento"]').value)
    };

    appData.users.push(newUser);
    updateUsersTable();
    updateStatistics();
    closeModal('addUserModal');
    form.reset();
    showNotification('Usuario agregado exitosamente', 'success');
}

// Add new professional
function addNewProfessional(form) {
    const newProfessional = {
        id: appData.professionals.length + 1,
        nombre: form.querySelector('input[name="nombre"]').value,
        apellido: form.querySelector('input[name="apellido"]').value,
        email: form.querySelector('input[name="email"]').value,
        especialidad: form.querySelector('select[name="especialidad"]').value,
        pacientes: 0,
        rating: 5.0
    };

    appData.professionals.push(newProfessional);
    updateProfessionalsGrid();
    updateStatistics();
    closeModal('addProfessionalModal');
    form.reset();
    showNotification('Profesional agregado exitosamente', 'success');
}

// Add new exercise
function addNewExercise(form) {
    const newExercise = {
        id: appData.exercises.length + 1,
        nombre: form.querySelector('input[name="nombre"]').value,
        tipo: form.querySelector('select[name="tipo"]').value,
        calorias: form.querySelector('input[name="calorias"]').value,
        musculos: form.querySelector('input[name="musculos"]').value,
        dificultad: form.querySelector('select[name="dificultad"]').value
    };

    appData.exercises.push(newExercise);
    updateExercisesGrid();
    closeModal('addExerciseModal');
    form.reset();
    showNotification('Ejercicio agregado exitosamente', 'success');
}

// Add new food
function addNewFood(form) {
    const newFood = {
        id: appData.foods.length + 1,
        nombre: form.querySelector('input[name="nombre"]').value,
        categoria: form.querySelector('select[name="categoria"]').value,
        calorias: parseInt(form.querySelector('input[name="calorias"]').value),
        proteinas: parseInt(form.querySelector('input[name="proteinas"]').value),
        grasas: parseInt(form.querySelector('input[name="grasas"]').value),
        carbohidratos: parseInt(form.querySelector('input[name="carbohidratos"]').value)
    };

    appData.foods.push(newFood);
    updateFoodsGrid();
    closeModal('addFoodModal');
    form.reset();
    showNotification('Alimento agregado exitosamente', 'success');
}

// Add new recipe
function addNewRecipe(form) {
    const ingredientes = form.querySelector('textarea[name="ingredientes"]').value
        .split('\n')
        .filter(item => item.trim() !== '');
    
    const newRecipe = {
        id: appData.recipes.length + 1,
        nombre: form.querySelector('input[name="nombre"]').value,
        calorias: parseInt(form.querySelector('input[name="calorias"]').value),
        ingredientes: ingredientes
    };

    appData.recipes.push(newRecipe);
    updateRecipesGrid();
    closeModal('addRecipeModal');
    form.reset();
    showNotification('Receta agregada exitosamente', 'success');
}

// Add new symptom
function addNewSymptom(form) {
    const newSymptom = {
        id: appData.symptoms.length + 1,
        nombre: form.querySelector('input[name="nombre"]').value,
        descripcion: form.querySelector('textarea[name="descripcion"]').value,
        usuario: form.querySelector('select[name="usuario"]').value,
        fecha: new Date().toISOString().split('T')[0],
        apariciones: parseInt(form.querySelector('input[name="apariciones"]').value),
        frecuencia: getFrecuencia(parseInt(form.querySelector('input[name="apariciones"]').value))
    };

    appData.symptoms.push(newSymptom);
    updateSymptomsGrid();
    closeModal('addSymptomModal');
    form.reset();
    showNotification('Síntoma registrado exitosamente', 'success');
}

// Helper functions
function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
}

function getFrecuencia(apariciones) {
    if (apariciones >= 5) return 'Muy Frecuente';
    if (apariciones >= 3) return 'Frecuente';
    if (apariciones >= 2) return 'Ocasional';
    return 'Raro';
}

// Update tables and grids
function updateUsersTable() {
    const tbody = document.querySelector('.data-table tbody');
    if (!tbody) return;

    tbody.innerHTML = '';
    appData.users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.nombre} ${user.apellido}</td>
            <td>${user.email}</td>
            <td>${user.peso}</td>
            <td>${user.altura}</td>
            <td>${user.genero}</td>
            <td>${user.edad}</td>
            <td>
                <button class="btn-icon" title="Editar" onclick="editUser(${user.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon" title="Ver perfil" onclick="viewUser(${user.id})">
                    <i class="fas fa-eye"></i>
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function updateProfessionalsGrid() {
    const grid = document.querySelector('.professionals-grid');
    if (!grid) return;

    grid.innerHTML = '';
    appData.professionals.forEach(professional => {
        const card = document.createElement('div');
        card.className = 'professional-card';
        card.innerHTML = `
            <div class="professional-avatar">
                <i class="fas fa-user-md"></i>
            </div>
            <div class="professional-info">
                <h3>${professional.nombre} ${professional.apellido}</h3>
                <p class="specialty">${professional.especialidad}</p>
                <p class="email">${professional.email}</p>
                <div class="professional-stats">
                    <span>${professional.pacientes} pacientes</span>
                    <span>${professional.rating} ★</span>
                </div>
            </div>
            <div class="professional-actions">
                <button class="btn btn-outline" onclick="viewProfessional(${professional.id})">Ver perfil</button>
                <button class="btn btn-primary" onclick="contactProfessional(${professional.id})">Contactar</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function updateExercisesGrid() {
    const grid = document.querySelector('.exercises-grid');
    if (!grid) return;

    grid.innerHTML = '';
    appData.exercises.forEach(exercise => {
        const card = document.createElement('div');
        card.className = 'exercise-card';
        card.innerHTML = `
            <div class="exercise-header">
                <h3>${exercise.nombre}</h3>
                <span class="exercise-type ${exercise.tipo.toLowerCase()}">${exercise.tipo}</span>
            </div>
            <div class="exercise-details">
                <p><strong>Calorías:</strong> ${exercise.calorias}</p>
                <p><strong>Músculos:</strong> ${exercise.musculos}</p>
                <p><strong>Dificultad:</strong> ${exercise.dificultad}</p>
            </div>
            <div class="exercise-actions">
                <button class="btn btn-outline" onclick="viewExercise(${exercise.id})">Ver detalles</button>
                <button class="btn btn-primary" onclick="registerExercise(${exercise.id})">Registrar actividad</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function updateFoodsGrid() {
    const grid = document.querySelector('.foods-grid');
    if (!grid) return;

    grid.innerHTML = '';
    appData.foods.forEach(food => {
        const card = document.createElement('div');
        card.className = 'food-card';
        card.innerHTML = `
            <div class="food-header">
                <h3>${food.nombre}</h3>
                <span class="food-category">${food.categoria}</span>
            </div>
            <div class="nutrition-info">
                <div class="nutrition-item">
                    <span>Calorías:</span>
                    <span>${food.calorias} kcal/100g</span>
                </div>
                <div class="nutrition-item">
                    <span>Proteínas:</span>
                    <span>${food.proteinas}g</span>
                </div>
                <div class="nutrition-item">
                    <span>Grasas:</span>
                    <span>${food.grasas}g</span>
                </div>
                <div class="nutrition-item">
                    <span>Carbohidratos:</span>
                    <span>${food.carbohidratos}g</span>
                </div>
            </div>
            <button class="btn btn-primary" onclick="addToRecipe(${food.id})">Agregar a receta</button>
        `;
        grid.appendChild(card);
    });
}

function updateRecipesGrid() {
    const grid = document.querySelector('.recipes-grid');
    if (!grid) return;

    grid.innerHTML = '';
    appData.recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <div class="recipe-header">
                <h3>${recipe.nombre}</h3>
                <span class="calories">${recipe.calorias} kcal</span>
            </div>
            <div class="recipe-ingredients">
                <h4>Ingredientes:</h4>
                <ul>
                    ${recipe.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}
                </ul>
            </div>
            <div class="recipe-actions">
                <button class="btn btn-outline" onclick="viewRecipe(${recipe.id})">Ver receta completa</button>
                <button class="btn btn-primary" onclick="registerConsumption(${recipe.id})">Registrar consumo</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function updateSymptomsGrid() {
    const grid = document.querySelector('.symptoms-grid');
    if (!grid) return;

    grid.innerHTML = '';
    appData.symptoms.forEach(symptom => {
        const card = document.createElement('div');
        card.className = 'symptom-card';
        card.innerHTML = `
            <div class="symptom-header">
                <h3>${symptom.nombre}</h3>
                <span class="frequency">${symptom.frecuencia}</span>
            </div>
            <p>${symptom.descripcion}</p>
            <div class="symptom-details">
                <span><strong>Usuario:</strong> ${symptom.usuario}</span>
                <span><strong>Fecha:</strong> ${symptom.fecha}</span>
                <span><strong>Apariciones:</strong> ${symptom.apariciones}</span>
            </div>
            <button class="btn btn-outline" onclick="viewSymptomHistory(${symptom.id})">Ver historial</button>
        `;
        grid.appendChild(card);
    });
}

// Update statistics
function updateStatistics() {
    const stats = document.querySelectorAll('.stat-content h3');
    if (stats.length >= 4) {
        stats[0].textContent = appData.users.length;
        stats[1].textContent = appData.professionals.length;
        stats[2].textContent = appData.exercises.length * 10; // Simulated exercise count
        stats[3].textContent = appData.recipes.length * 5; // Simulated recipe consumption
    }
}

// Initialize search and filters
function initializeSearchAndFilters() {
    // User search
    const userSearch = document.getElementById('userSearch');
    if (userSearch) {
        userSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const tableRows = document.querySelectorAll('.data-table tbody tr');
            
            tableRows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(searchTerm) ? '' : 'none';
            });
        });
    }

    // Food search
    const foodSearch = document.getElementById('foodSearch');
    if (foodSearch) {
        foodSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const foodCards = document.querySelectorAll('.food-card');
            
            foodCards.forEach(card => {
                const text = card.textContent.toLowerCase();
                card.style.display = text.includes(searchTerm) ? '' : 'none';
            });
        });
    }

    // Specialty filter
    const specialtyFilter = document.getElementById('specialtyFilter');
    if (specialtyFilter) {
        specialtyFilter.addEventListener('change', function() {
            const selectedSpecialty = this.value;
            const professionalCards = document.querySelectorAll('.professional-card');
            
            professionalCards.forEach(card => {
                const specialty = card.querySelector('.specialty').textContent;
                card.style.display = !selectedSpecialty || specialty === selectedSpecialty ? '' : 'none';
            });
        });
    }

    // Exercise type filter
    const exerciseTypeFilter = document.getElementById('exerciseTypeFilter');
    if (exerciseTypeFilter) {
        exerciseTypeFilter.addEventListener('change', function() {
            const selectedType = this.value;
            const exerciseCards = document.querySelectorAll('.exercise-card');
            
            exerciseCards.forEach(card => {
                const type = card.querySelector('.exercise-type').textContent;
                card.style.display = !selectedType || type === selectedType ? '' : 'none';
            });
        });
    }
}

// Modal functionality
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Populate user select for symptoms if needed
        if (modalId === 'addSymptomModal') {
            const userSelect = modal.querySelector('select[name="usuario"]');
            if (userSelect) {
                userSelect.innerHTML = '<option value="">Seleccionar usuario</option>';
                appData.users.forEach(user => {
                    userSelect.innerHTML += `<option value="${user.nombre} ${user.apellido}">${user.nombre} ${user.apellido}</option>`;
                });
            }
        }
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// Tab functionality for nutrition section
function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.nutrition-tabs .tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));
    
    // Show selected tab content
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// Tab functionality for health section
function showHealthTab(tabName) {
    // Hide all health tab contents
    const healthTabContents = document.querySelectorAll('.health-tab-content');
    healthTabContents.forEach(content => content.classList.remove('active'));
    
    // Remove active class from all health tab buttons
    const healthTabButtons = document.querySelectorAll('.health-tabs .tab-btn');
    healthTabButtons.forEach(btn => btn.classList.remove('active'));
    
    // Show selected tab content
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// Action functions
function editUser(id) {
    showNotification('Función de edición en desarrollo', 'info');
}

function viewUser(id) {
    showNotification('Vista de perfil en desarrollo', 'info');
}

function viewProfessional(id) {
    showNotification('Vista de profesional en desarrollo', 'info');
}

function contactProfessional(id) {
    showNotification('Función de contacto en desarrollo', 'info');
}

function viewExercise(id) {
    showNotification('Vista de ejercicio en desarrollo', 'info');
}

function registerExercise(id) {
    showNotification('Ejercicio registrado exitosamente', 'success');
}

function addToRecipe(id) {
    showNotification('Alimento agregado a receta', 'success');
}

function viewRecipe(id) {
    showNotification('Vista de receta en desarrollo', 'info');
}

function registerConsumption(id) {
    showNotification('Consumo registrado exitosamente', 'success');
}

function viewSymptomHistory(id) {
    showNotification('Historial de síntomas en desarrollo', 'info');
}

// Notification system
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'fa-check-circle';
        case 'error': return 'fa-exclamation-circle';
        case 'warning': return 'fa-exclamation-triangle';
        default: return 'fa-info-circle';
    }
}

function getNotificationColor(type) {
    switch (type) {
        case 'success': return '#43e97b';
        case 'error': return '#e74c3c';
        case 'warning': return '#f39c12';
        default: return '#667eea';
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + N for new user
    if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
        e.preventDefault();
        showModal('addUserModal');
    }
    
    // Escape to close modals
    if (e.key === 'Escape') {
        const openModals = document.querySelectorAll('.modal[style*="block"]');
        openModals.forEach(modal => {
            closeModal(modal.id);
        });
    }
}); 
// Функция для отображения и скрытия секций
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });

    // Скрываем загрузку после того, как показывается первая секция
    hideLoading();
}

// Функция для показа загрузки
function showLoading() {
    document.querySelector('.loading').style.display = 'flex';
}

// Функция для скрытия загрузки
function hideLoading() {
    document.querySelector('.loading').style.display = 'none';
}

// Изначально показываем секцию турниры
showSection('tournaments');

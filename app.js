document.addEventListener("DOMContentLoaded", function () {
    // Получаем элемент, в котором будут отображаться события
    const promoPlanElement = document.getElementById("promoPlan");

    // Пример данных промоплана
    const promoData = [
        {
            title: "Рассылка игрового бонуса",
            startDate: "01/01/2024",
            endDate: "05/01/2024",
            countries: "Россия, Казахстан",
            segment: "VIP",
            responsible: "Иванов Иван",
            reminders: true,
            color: "#4CAF50", // Зеленый цвет
        },
        // Добавьте еще событий по аналогии
    ];

    // Отображаем промоплан на странице
    displayPromoPlan(promoData);

    function displayPromoPlan(promoData) {
        promoPlanElement.innerHTML = ""; // Очищаем предыдущие данные

        promoData.forEach(event => {
            const eventElement = document.createElement("div");
            eventElement.classList.add("event");

            // Проверяем, прошло ли событие, и применяем стиль
            const currentDate = new Date();
            const endDate = new Date(event.endDate);
            if (endDate < currentDate) {
                eventElement.classList.add("pastEvent");
            }

            // Формируем HTML для каждого события
            eventElement.innerHTML = `
                <strong>${event.title}</strong><br>
                Дата: ${event.startDate} - ${event.endDate}<br>
                Страны: ${event.countries}<br>
                Сегмент: ${event.segment}<br>
                Ответственный: ${event.responsible}<br>
                Напоминания: ${event.reminders ? "Да" : "Нет"}<br>
            `;

            // Устанавливаем цвет фона
            eventElement.style.backgroundColor = event.color;

            promoPlanElement.appendChild(eventElement);
        });
    }
});

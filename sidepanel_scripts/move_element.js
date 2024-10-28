'use strict'

let picked_element = document.querySelector('.movable_element')

let offset_y = 0;
let offset_x = 0;

picked_element.addEventListener('mousedown', (event) => {
    // Сохраняем начальные координаты курсора относительно элемента
    offset_x = event.clientX - picked_element.offsetLeft;
    offset_y = event.clientY - picked_element.offsetTop;
    console.log(offset_x);

    picked_element.style.cursor = 'grabbing'
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp);
})

function onMouseMove(event) {
    picked_element.style.left = event.clientX - offset_x + 'px';
    picked_element.style.top = event.clientY - offset_y + 'px';
}

function onMouseUp() {
    // Убираем обработчики для остановки перетаскивания
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    
    // Восстанавливаем курсор
    draggableElement.style.cursor = 'grab';
  }
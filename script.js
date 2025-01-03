const input = document.querySelector('#input');
const itemsContainer = document.querySelector('#items');
  
input.addEventListener('keydown', function(event) {
  const text = input.value;

  const newItem = document.createElement('div');
  newItem.textContent = text;

  if(event.key == 'Enter' && text != '') {
    itemsContainer.append(newItem);
  }

  newItem.addEventListener('click', function() {
    newItem.classList.toggle('done');
  })

  input.value = '';
})


  
  
/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

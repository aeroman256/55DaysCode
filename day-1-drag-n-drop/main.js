const list_items = document.querySelectorAll('.list-item');
const lists =   document.querySelectorAll('.list');

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
    const item = list_items[i];
    
    item.addEventListener('dragstart', function(e) {
        draggedItem = item;
        setTimeout(function() {
            item.style.display = 'none';
        }, 0)
    })

    item.addEventListener('dragend', function(e) {
        setTimeout(function() {
            draggedItem.style.display = 'block';
            draggedItem = null;
        }, 0)
    })

    for(let k = 0; k < lists.length; k++) {
        const list = lists[k];
        list.addEventListener('dragover', function(e) {
            e.preventDefault();
        })

        list.addEventListener('dragenter', function(e) {
            e.preventDefault();
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        })

        list.addEventListener('dragleave', function(e) {
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        })

        list.addEventListener('drop', function(e) {
            this.append(draggedItem);
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        })
    }
}
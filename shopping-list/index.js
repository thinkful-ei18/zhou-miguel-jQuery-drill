
$('#js-shopping-list-form').submit( e=> {
    e.preventDefault()
    const grossary = $(e.target).find('.js-shopping-list-entry').val()
    const myList = 
        `<li>
            <span class="shopping-item">${grossary}</span>
            <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
                <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
            </div>
        </li>`
    $(".shopping-list").append(myList)
})
$('.shopping-list').on('click','.shopping-item-toggle', e => {
    $(e.target).parent().parent().parent().find('.shopping-item').toggleClass('shopping-item__checked')
})
$('.shopping-list').on('click','.shopping-item-delete', e=> {
    $(e.target).parent().parent().parent().remove()
})
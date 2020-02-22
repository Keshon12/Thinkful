function addItems() {
  $('#js-shopping-list-form').submit( event => {
    event.preventDefault();

    const listFood = $('#shopping-list-entry').val();

    if (listFood !== "") {
      $('.shopping-list').append(`<li>
        <span class="shopping-item">${listFood}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
      $('#shopping-list-entry').val("");
    }
  });

  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
  });

  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  });
}

$(addItems);
$(document).ready(function() {


function addAnother(){
  value=$('#new-item-text').val();
  newItem='<li class="list-item"> <span><span class="x">&times;</span>' + value + '</span> <input type="checkbox" /></li>';
  if(value){
    $('#list').append(newItem);
    $('#new-item-text').val('');
  }
}

$(document).on('click', '#add-button',
  function(){
  addAnother();
});

$("#new-item-text").keypress(function( event ) {
  if( event.which == 13 ){
    addAnother();
  }
});

$(document).on('click', '.list-item input', function() {
  $(this).parent().toggleClass('finished');
});

$(document).on('click', '.x', function(){
  $(this).parent().parent().fadeOut(900);
}); 


});

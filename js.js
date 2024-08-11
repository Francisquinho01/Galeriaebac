$(document).ready(function() {
  
   $('#Bu').click(function() {
       $('form div').slideDown();
   });

   
   $('#canc').click(function() {
       $('form div').slideUp();
   });

  
   $('form').on('submit', function(e) {
       e.preventDefault();

      
       const url = $('#Url').val();

     
       const novourl = $('<li class="Res"></li>');

    
       const img = $('<img>').attr('src', url);
       img.appendTo(novourl);

     
       const link = $('<div class="Res1"></div>');
       $('<a>').attr({
           href: url,
           title: 'Ver imagem em tamanho real',
           target: '_blank'
       }).text('Ver imagem em tamanho real').appendTo(link);

       link.appendTo(novourl);

   
       $('ul').append(novourl);

    
       $('#Url').val('');
       $('form div').slideUp();
   });
});

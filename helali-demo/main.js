$(document).ready(function(){
      $('.list').click(function(){
          const value = $(this).attr('data-filter');
          if (value == 'all'){
              $('.itemBox').show('500');
          }
          else{
              $('.itemBox').not('.'+value).hide('500');
              $('.itemBox').filter('.'+value).show('500');
          }
      })
    // add active class on selected item
        
    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active'); 
    })
});



// meanmenu for mobile navigation ...

$(document).ready(function(){
    $('.nav').meanmenu({
        meanMenuContainer:'#mobile_menu',
        meanScreenWidth:480,
    });
    });

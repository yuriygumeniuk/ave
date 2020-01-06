$(document).ready(function () {
/////////////////////////////////// 
  $('.header-navigation__item a').click(function(){
    $(this).parents('.header-navigation__list').find('.header-navigation__item').removeClass('active');
    $(this).parent().addClass('active');
    return false
  });

  $('.popular-navigation__item a').click(function(){
    $(this).parents('.popular-navigation__list').find('.popular-navigation__item').removeClass('active');
    $(this).parent().addClass('active');
    return false
  });

/////////////////////////////////  
});
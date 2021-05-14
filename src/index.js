//import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import '@laylazi/bootstrap-rtl-scss/scss/bootstrap-rtl.scss';
import './css/custom.css';
import './scss/style.scss';
import './css/style.css';

import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/js/all.min';



$(function () {

  $('[data-toggle="tooltip"]').tooltip();



  $('.counter').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });




  $('#copyright').text("جميع الحقوق محفوظة لسنة " + new Date().getFullYear());



  $('[data-remove-from-cart]').on("click", function () {
    $(this).parents('[data-product-info]').remove();

    calculateTotalPrice();
  });


  $('[data-product-quantity]').on("change", function () {


    var newQuantity = $(this).val();


    var $parent = $(this).parents('[data-product-info]');

    var pricePerUnit = $parent.attr('data-product-price');

    var totalPriceForProduct = newQuantity * pricePerUnit;


    $parent.find('.total-price-for-product').text(totalPriceForProduct + '$');

    calculateTotalPrice();
  });

  function calculateTotalPrice() {


    var totalPriceForAllProducts = 0;


    $('[data-product-info]').each(function () {


      var pricePerUnit = $(this).attr('data-product-price');


      var quantity = $(this).find('[data-product-quantity]').val();

      var totalPriceForProduct = pricePerUnit * quantity;


      totalPriceForAllProducts = totalPriceForAllProducts + (totalPriceForProduct);
    });


    $('#total-price-for-all-products').text(totalPriceForAllProducts + '$');
  }





});



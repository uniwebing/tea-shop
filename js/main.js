
window.onload = function () {

  $('.slider-item').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $("#accordion").accordion();
  




  $(document).ready(function () {
    $("#formValidation").validate({
      rules: {
        name: {
          minlength: 2,
        },
        surname: {
          minlength: 2,
        },
        phone: {
          number: true,
          minlength: 10,
          maxlength: 10
        },
        country: {
          minlength: 2
        },
        zip: {
          minlength: 6,
          maxlength: 6
        },
        
      },
      messages: {
        name: {
          required: "Please enter you name",
          minlength: "Name, at list 2 characters"
        },
        surname: {
          required: "Please enter you name",
          minlength: "Surname, at list 2 characters"
        },
        phone: {
          required: "Please enter you phone"
        },
        country: {
          required: "Please enter you country"
        },
        zip: {
          required: "Please enter you index"
        },
        adress: {
          required: "Please enter you adress"
        }

      },
   
      submitHandler: function (form) {
        form.submit();
        alert('спасибо за заказ!')
      }
  
    });


    // $(function hideForm() {
    // const tagH = $('#title').text('Спасибо за заказ!');
    // const tagInput = $('#formValidation').hide();
    // });

    // $('button').on('click', function () {
    //     $(function hideForm() {
    //     const tagH = $('#title').text('Спасибо за заказ!');
    //     const tagInput = $('#formValidation').hide();
    //     });

  
    // });

    $('#form').on('submit', function (e) {
      if (e.isDefaultPrevented()) {
        return
      } else {
        $('#title').text('Спасибо за заказ!');
        $('#formValidation').hide();
      }
    });
  });



  ///////  W O W ////////////////

  new WOW().init();

  $('.open-popup-link').magnificPopup({
    type:'image',
    
  });



  







};



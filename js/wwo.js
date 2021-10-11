
/////////////////////////////////////
// To Top Button
/////////////////////////////////////

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


//////////////////////////////////////////

/////////////////////////////////////////////
//          Slick Slider                   //
/////////////////////////////////////////////

$(document).ready(function(){
  $('.forecast-card').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 4,
    prevArrow: "<img src='../img/green-arrow.svg' class='prev' alt='1'>",
    nextArrow: "<img src='../img/green-arrow.svg' class='next' alt='2'>",
    responsive: [
      {
	      breakpoint: 769,
	      settings: {
	        slidesToShow: 5,
          slidesToScroll: 5,
          
	      }
	    },
	    {
	      breakpoint: 577,
	      settings: {
	        slidesToShow: 4,
          slidesToScroll: 4,
          arrows: false,
	      }
	    },
      {
	      breakpoint: 400,
	      settings: {
	        slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
	      }
	    }
    ]
  });
});

$(document).ready(function(){
  $('.forecast-graph').slick({
    infinite: false,
    slidesToShow: 12,
    slidesToScroll: 12,
    prevArrow: "<img src='../img/green-arrow.svg' class='prev' alt='1'>",
    nextArrow: "<img src='../img/green-arrow.svg' class='next' alt='2'>",

    responsive: [
      {
	      breakpoint: 769,
	      settings: {
	        slidesToShow: 12,
          slidesToScroll: 12,
          

	      }
	    },
	    {
	      breakpoint: 577,
	      settings: {
	        slidesToShow: 10,
          slidesToScroll: 10,
          arrows: false,

	      }
	    },
      {
	      breakpoint: 400,
	      settings: {
	        slidesToShow: 6,
          slidesToScroll: 6,
          arrows: false,

	      }
	    }
    ]
  });
});

$(document).ready(function(){
  $('.weather-hour-table').slick({
    infinite: false,
    slidesToShow: 8,
    slidesToScroll: 8,
    prevArrow: "<img src='../img/green-back.svg' class='prev' alt='1'>",
    nextArrow: "<img src='../img/moredetails.svg' class='next' alt='2'>",
    responsive: [
      {
	      breakpoint: 769,
	      settings: {
	        slidesToShow: 8,
          slidesToScroll: 8,
          
	      }
	    },
	    {
	      breakpoint: 577,
	      settings: {
	        slidesToShow: 6,
          slidesToScroll: 6,
          arrows: false,
	      }
	    },
      {
	      breakpoint: 400,
	      settings: {
	        slidesToShow: 4,
          slidesToScroll: 4,
          arrows: false,
	      }
	    }
    ]
  });
});


///////////////////////////////////
// Удаление городов из 2-го меню
////////////////////////////////////

$(document).ready(function(){
    $(".close-icon1").click(function(){
      $(".weather-menu-item1").hide();
    });
    $(".close-icon2").click(function(){
      $(".weather-menu-item2").hide();
    });
    $(".close-icon3").click(function(){
      $(".weather-menu-item3").hide();
    });
    $(".close-icon4").click(function(){
      $(".weather-menu-item4").hide();
    });
    $(".close-icon5").click(function(){
      $(".weather-menu-item5").hide();
    });   
    
    $(".forecast-link").click(function() {
      $(".forecast-link").siblings(".current").removeClass("current"); 
      $(this).addClass("current");
    });
  });
/////////////////////////////////////////



////////////////////////////////////
// Стилизация select/option
/////////////////////////////////////


/*
  $('.select').each(function() {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 450; // длительность анимации 

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function() {
        if ( !$(this).hasClass('on') ) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function() {
                let chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text( $(this).find('span').text() );

                selectList.slideUp(duration);
                selectHead.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });
});*/
/////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////
//              Settings Modal                      //
//////////////////////////////////////////////////////

$(function () {
  $('#settings').click(function () {
    $('.modal-settings').addClass('modal-settings_active');
  });
 
  $('.modal-settings__close-button').click(function () {
    $('.modal-settings').removeClass('modal-settings_active');
  });
});

$('.modal-settings').mouseup(function (e) {
  let modalContent = $(".modal-settings__content");
  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
    $(this).removeClass('modal-settings_active');
  }
});



///////////////////////////////////////////////////////
//                 Alert Modal                       //
///////////////////////////////////////////////////////

$(function () {
  $('#alert').click(function () {
    $('.modal-alert').addClass('modal-alert_active');
  });
 
  $('.modal-alert__close-button').click(function () {
    $('.modal-alert').removeClass('modal-alert_active');
  });
});

$('.modal-alert').mouseup(function (e) {
  let modalContent = $(".modal-alert__content");
  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
    $(this).removeClass('modal-alert_active');
  }
});
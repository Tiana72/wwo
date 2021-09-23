
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
    prevArrow: "<img src='../img/green-arrow-round.svg' class='prev' alt='1'>",
    nextArrow: "<img src='../img/green-arrow-round.svg' class='next' alt='2'>",
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
	      breakpoint: 321,
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
    prevArrow: "<img src='../img/green-arrow-round.svg' class='prev' alt='1'>",
    nextArrow: "<img src='../img/green-arrow-round.svg' class='next' alt='2'>",

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
	      breakpoint: 321,
	      settings: {
	        slidesToShow: 6,
          slidesToScroll: 6,
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



///////////////////////////////////////////////////////
//                 HighCharts                        //
///////////////////////////////////////////////////////

// A point click event that uses the Renderer to draw a label next to the point
// On subsequent clicks, move the existing label instead of creating a new one.
Highcharts.addEvent(Highcharts.Point, 'click', function () {
  if (this.series.options.className.indexOf('popup-on-click') !== -1) {
    const chart = this.series.chart;
    const date = Highcharts.dateFormat('%A, %b %e, %Y', this.x);
    const text = `<b>${date}</b><br/>${this.y} ${this.series.name}`;

    const anchorX = this.plotX + this.series.xAxis.pos;
    const anchorY = this.plotY + this.series.yAxis.pos;
    const align = anchorX < chart.chartWidth - 200 ? 'left' : 'right';
    const x = align === 'left' ? anchorX + 10 : anchorX - 10;
    const y = anchorY - 30;
    if (!chart.sticky) {
      chart.sticky = chart.renderer
        .label(text, x, y, 'callout',  anchorX, anchorY)
        .attr({
          align,
          fill: 'rgba(0, 0, 0, 0.5)',
          padding: 10,
          zIndex: 7 // Above series, below tooltip
        })
        .css({
          color: 'white'
        })
        .on('click', function () {
          chart.sticky = chart.sticky.destroy();
        })
        .add();
    } else {
      chart.sticky
        .attr({ align, text })
        .animate({ anchorX, anchorY, x, y }, { duration: 250 });
    }
  }
}); 


Highcharts.chart('chart-container', {

  chart: {
    scrollablePlotArea: {
      minWidth: 700
    },
    style: {
      fontFamily: 'Open Sans'
  }
  },

  data: {
    csvURL: '../analytics.csv',
    beforeParse: function (csv) {
      return csv.replace(/\n\n/g, '\n');
    }
  },

  title: {
    text: '',
  },

  subtitle: {
    text: ''
  },

  xAxis: {
    tickInterval: 24 * 3600 * 1000, // one day
    tickWidth: 0,
    gridLineWidth: 1,
    labels: {
      align: 'left',
      x: -15,
      y: 20
    }
  },

  yAxis: [{ // left y axis
    title: {
      text: null
    },
    labels: {
      align: 'left',
      x: 3,
      y: 16,
      format: '{value:.,0f}'
    },
    showFirstLabel: false
  }, { // right y axis
    linkedTo: 0,
    gridLineWidth: 0,
    opposite: true,
    title: {
      text: null
    },
    labels: {
      align: 'right',
      x: -3,
      y: 16,
      format: '{value:.,0f}'
    },
    showFirstLabel: false
  }],

  legend: {
    align: 'right',
    verticalAlign: 'top',
    y: 25,
    borderWidth: 0
  },

  tooltip: {
    shared: true,
    crosshairs: true
  },

  plotOptions: {
    series: {
      cursor: 'pointer',
      className: 'popup-on-click',
      marker: {
        lineWidth: 1
      }
    }
  },

  series: [{
    name: 'All sessions',
    lineWidth: 2,
    marker: {
      radius: 4
    }
  }]
});




Highcharts.chart('chart2-container', {

  chart: {
    // styledMode: true,
    scrollablePlotArea: {
      minWidth: 700
    },
    style: {
      fontFamily: 'Open Sans'
  }
  },

  data: {
    csvURL: '../analytics-avg.csv',
    beforeParse: function (csv) {
      return csv.replace(/\n\n/g, '\n');
    }
  },

  title: {
    text: '',
  },

  subtitle: {
    text: ''
  },

  xAxis: {
    tickInterval: 24 * 3600 * 1000, // one week
    tickWidth: 0,
    gridLineWidth: 1,
    labels: {
      align: 'left',
      x: -15,
      y: 20
    }
  },

  yAxis: [{ // left y axis
    title: {
      text: null
    },
    labels: {
      align: 'left',
      x: 3,
      y: 16,
      format: '{value:.,0f}'
    },
    showFirstLabel: false
  }, { // right y axis
    linkedTo: 0,
    gridLineWidth: 0,
    opposite: true,
    title: {
      text: null
    },
    labels: {
      align: 'right',
      x: -3,
      y: 16,
      format: '{value:.,0f}'
    },
    showFirstLabel: false
  }],

  legend: {
    align: 'right',
    verticalAlign: 'top',
    y: 25,
    borderWidth: 0
  },

  tooltip: {
    shared: true,
    crosshairs: true
  },

  plotOptions: {
    series: {
      cursor: 'pointer',
      className: 'popup-on-click',
      marker: {
        lineWidth: 1
      }
    }
  },

  series: [{
    name: 'All sessions',
    lineWidth: 2,
    marker: {
      radius: 4
    }
  }, {
    name: 'New users'
  }]
});
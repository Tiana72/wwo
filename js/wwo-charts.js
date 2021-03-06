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
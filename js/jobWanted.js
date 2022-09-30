$(document).ready(function() {
  function init() {
    // 左上图
    var LT = $('#leftTop')[0];
    var mychartLT = echarts.init(LT);

    var optionLT = {
      title: {
        top: '4%',
        left: '4%',
        text: '企业规模',
        textStyle: { fontSize: 12, color: '#fff' }
      },
      grid: {
        left: '-8%',
        right: '2%',
        bottom: '5%',
        top: '22%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['0-50', '50-100', '100-500', '500-2000', '2000以上'],
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          show: true,
          fontSize: 10,
          color: '#fff',
        },
      },
      yAxis: {
        show: false,
      },
      series: [
        {
          data: [
            {
              value: 500,
              itemStyle: {
                color: '#8080FF'
              }
            },
            {
              value: 200,
              itemStyle: {
                color: '#02A7F0'
              }
            },
            {
              value: 400,
              itemStyle: {
                color: '#FFFF80'
              }
            },
            {
              value: 260,
              itemStyle: {
                color: '#EC808D'
              }
            },
            {
              value: 250,
              itemStyle: {
                color: '#81D3F8'
              }
            }
          ],
          type: 'bar',
          barWidth: '30%',
          barMinAngle: 30,
        }
      ]
    };
    mychartLT.setOption(optionLT);

    // function changePieData(){
    //   var option =  mychartLT.getOption();
    //   mychartLT.setOption(option);
    // }
    // changePieData();

    // 左下图
    var LB = $("#leftBottom")[0];
    var mayChartLB = echarts.init(LB);
    var optionLB = {
      grid: {
        top: 10,
        bottom: 10,
        left: 80,
        right: 80
      },
      xAxis: {
        show: false,
      },
      yAxis: {
        type: 'category',
        splitLine: { show: false },
        data: [
          '清洁工',
          '清洁工',
          '清洁工',
          '清洁工',
          '清洁工',
          '清洁工',
          '清洁工',
          '清洁工',
          '清洁工',
          '保姆',
        ],
        axisLabel: {
          show: true,
          fontSize: 14,
          color: '#fff',
        },
        axisLine: { show: false },
        axisTick: { show: false },
      },
      series: [{ 
        type: 'bar',
        data: [
          {
            value: 3000.30,
            itemStyle: {
              color: '#8080FF'
            }
          },
          {
            value: 3000.30,
            itemStyle: {
              color: '#02A7F0'
            }
          },
          {
            value: 3000.30,
            itemStyle: {
              color: '#FFFF80'
            }
          },
          {
            value: 3000.30,
            itemStyle: {
              color: '#EC808D'
            }
          },
          {
            value: 3000.30,
            itemStyle: {
              color: '#81D3F8'
            }
          },
          {
            value: 3000.30,
            itemStyle: {
              color: '#81D3F8'
            }
          },
          {
            value: 3000.30,
            itemStyle: {
              color: '#80FFEF'
            }
          },
          {
            value: 2700.30,
            itemStyle: {
              color: '#02F002'
            }
          },
          {
            value: 2800.30,
            itemStyle: {
              color: '#00E7A1'
            }
          },
          {
            value: 2900.30,
            itemStyle: {
              color: '#F05602'
            }
          },
        ],
        label: {
          show: true,
          precision: 1,
          position: 'right',
          valueAnimation: true,
          fontFamily: 'monospace'
        }
      }]
    };
    mayChartLB.setOption(optionLB);

    // 右下图
    var RB = $("#rightBottom")[0];
    var mayChartRB = echarts.init(RB);
    var optionRB = {
      grid: {
        top: 10,
        bottom: 10,
        left: 110,
        right: 80
      },
      xAxis: {
        show: false,
      },
      yAxis: {
        type: 'category',
        splitLine: { show: false },
        data: [
          '保姆.家政师',
          '月嫂',
          '办公室保洁',
          '收纳整理师',
          '高级家政服务师',
          '清洁工1',
          '清洁工2',
          '清洁工3',
          '清洁工4',
        ],
        axisLabel: {
          show: true,
          fontSize: 14,
          color: '#fff',
        },
        axisLine: { show: false },
        axisTick: { show: false },
      },
      series: [{ 
        type: 'bar',
        data: [
          {
            value: 10000,
            itemStyle: {
              color: '#E1CA98'
            }
          },
          {
            value: 5000,
            itemStyle: {
              color: '#E6F788'
            }
          },
          {
            value: 3000,
            itemStyle: {
              color: '#AF85FA'
            }
          },
          {
            value: 5000,
            itemStyle: {
              color: '#03A8ED'
            }
          },
          {
            value: 10000,
            itemStyle: {
              color: '#D403ED'
            }
          },
          {
            value: 3000,
            itemStyle: {
              color: '#7485FA'
            }
          },
          {
            value: 3000,
            itemStyle: {
              color: '#AF85FA'
            }
          },
          {
            value: 2700,
            itemStyle: {
              color: '#7712FA'
            }
          },
          {
            value: 2800,
            itemStyle: {
              color: '#87EB19'
            }
          },
        ],
        label: {
          show: true,
          precision: 1,
          position: 'right',
          valueAnimation: true,
          fontFamily: 'monospace'
        }
      }]
    };
    mayChartRB.setOption(optionRB);

    $('#mainMap').initEcharts({
      ulClass: '.ul-box',//模糊搜索盒子类名 (非必须)
      inputClass: '.form-group',//input输入盒子类名 (非必须)
      addressClass: '.address',//地址盒子类名 (非必须)
      btnClass: '.btn-box',//按钮盒子类名 (非必须)
      showClass: '.iShow'//控制按钮盒子类名 (非必须)
    });
  }
  init();
  // 重新渲染
  window.onresize = function() {
    var LTE = echarts.getInstanceByDom($('#leftTop')[0]);
    if (!!LTE) {
      LTE.dispose();
    }
    var LBE = echarts.getInstanceByDom($("#leftBottom")[0]);
    if (!!LBE) {
      LBE.dispose();
    }
    var RBE = echarts.getInstanceByDom($("#rightBottom")[0]);
    if (!!RBE) {
      RBE.dispose();
    }
    var MIE = echarts.getInstanceByDom($('#mainMap')[0]);
    if (!!MIE) {
      MIE.dispose();
    }
    init();
  };
});
$(document).ready(function() {
  function init() {
    // 左上图
    var LT = $('#leftTop')[0];
    var mychartLT = echarts.init(LT);

    var optionLT = {
      title: {
        left: 'center',
        text: '订购时间段',
        textStyle: { color: '#fff' }
      },
      grid: {
        left: '8%',
        right: '8%',
        bottom: '5%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [0.0, 2.0, 4.0, 6.0, 8.0, 10.0, 12.0, 14.0, 16.0, 18.0, 20.0, 22.0, 24.0],
        name: '数量',
        nameLocation: 'center',
        nameGap: '50',
        axisLine: {
          lineStyle: { color: '#fff' },
        }
      },
      yAxis: {
        type: 'value',
        splitLine: { show: false },
        name: '数量',
        nameLocation: 'center',
        nameGap: '28',
        axisLine: {
          show: true,
          lineStyle: { color: '#fff' },
        },
        axisLabel: { color: '#fff' },
      },
      series: [
        {
          type: 'line',
          areaStyle: {},
          data: [0, 9, 10, 5, 20, 30, 50, 49, 25, 10, 8, 6, 4],
          lineStyle: { color: '#0bdda0' },
          areaStyle: { color: '#b8cfff'},
          itemStyle: { opacity: 0 },
        }
      ]
    };
    mychartLT.setOption(optionLT);

    function changePieData(){
      var option =  mychartLT.getOption();
      mychartLT.setOption(option);
    }
    changePieData();

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
          '保洁服务',
          '住家服务',
          '钟点服务',
          '养老服务',
          '育婴服务',
          '环境服务',
          '疾患服务',
          '月嫂服务',
          '月子服务',
          '养老服务',
          '托育服务',
          '月子会所',
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
          2000.30,
          2100.30,
          2200.30,
          2300.30,
          2400.30,
          2500.30,
          2600.30,
          2700.30,
          2800.30,
          2900.30,
          3000.30,
          3100.30,
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

    $('#mainMap').initEcharts({
      ulClass: '.ul-box',//模糊搜索盒子类名 (非必须)
      inputClass: '.form-group',//input输入盒子类名 (非必须)
      addressClass: '.address',//地址盒子类名 (非必须)
      btnClass: '.btn-box',//按钮盒子类名 (非必须)
      showClass: '.iShow'//控制按钮盒子类名 (非必须)
    });
    var str = '';
    for(let i = 0; i < 10; i++) {
      str += `
        <div class="d-flex f-white just-around mt-2">
          <div>谢***</div>
          <div>158****1013</div>
          <div>订购</div>
          <div>保洁服务</div>
        </div>
      `
    }
    $('#rightBottom').html(str);
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
    var MIE = echarts.getInstanceByDom($('#mainMap')[0]);
    if (!!MIE) {
      MIE.dispose();
    }
    init();
  };
});
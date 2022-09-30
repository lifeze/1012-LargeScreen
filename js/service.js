$(document).ready(function() {
  function init() {
    var MI = $("#mainMap")[0];
    var mayChartMI = echarts.init(MI);
    var option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['45%', '60%'],
          labelLine: {
            length: 30
          },
          label: {
            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
            backgroundColor: '#F6F8FC',
            borderColor: '#8C8D8E',
            borderWidth: 1,
            borderRadius: 4,
            rich: {
              a: {
                color: '#6E7079',
                lineHeight: 22,
                align: 'center'
              },
              hr: {
                borderColor: '#8C8D8E',
                width: '100%',
                borderWidth: 1,
                height: 0
              },
              b: {
                color: '#4C5058',
                fontSize: 14,
                fontWeight: 'bold',
                lineHeight: 33
              },
              per: {
                color: '#fff',
                backgroundColor: '#4C5058',
                padding: [3, 4],
                borderRadius: 4
              }
            }
          },
          data: [
            { value: 1048, name: 'Baidu' },
            { value: 335, name: 'Direct' },
            { value: 310, name: 'Email' },
            { value: 251, name: 'Google' },
            { value: 234, name: 'Union Ads' },
            { value: 147, name: 'Bing' },
            { value: 135, name: 'Video Ads' },
            { value: 102, name: 'Others' }
          ]
        }
      ]
    };
    mayChartMI.setOption(option);

    var strLB = '';
    for(let i = 0; i < 15; i++) {
      strLB += `
        <div class="d-flex f-white just-around mt-2">
          <div>线上心理咨询特惠</div>
          <div>2022年7月29日 18:00</div>
        </div>
      `
    }
    $('#leftBottom').html(strLB);

    var strRB = '';
    for(let i = 0; i < 15; i++) {
      strRB += `
        <div class="d-flex f-white just-around mt-2">
          <div>谢***</div>
          <div>158****1013</div>
          <div>报名了</div>
          <div>保洁培训活动</div>
        </div>
      `
    }
    $('#rightBottom').html(strRB);
  }
  init();
  // 重新渲染
  window.onresize = function() {
    var MIE = echarts.getInstanceByDom($('#mainMap')[0]);
    if (!!MIE) {
      MIE.dispose();
    }
    init();
  };
});
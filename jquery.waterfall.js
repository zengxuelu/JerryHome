/**
 * Created by Jerry on 2017/6/27.
 */


$.fn.waterfall = function () {
  
  var gap = 10;
  var $item = $("#box").find(".item");
  //可视区的宽度
  var pageWidth = $(window).width();
  //每个盒子的宽度,width+padding+border
  var boxWidth = $item.outerWidth();
  //一列可以摆多少
  var coloums = parseInt((pageWidth + 10) / (boxWidth + gap));
  //创建一个数组,存放每张图片的高度
  var array = [];
  
  //先摆第一列
  for (var i = 0; i < coloums; i++) {
    array.push(0);
  }
  
  $item.each(function () {
    //找最小高和最小高度所在的位置(index)
    var min = array[0];
    var index = 0;
    for (var i = 0; i < array.length; i++) {
      if (min > array[i]) {
        min = array[i];
        index = i;
      }
    }
    $(this).css({
      top: min,
      left: index * (boxWidth + gap)
    });
    //更新最小高度
    array[index] = min + $(this).outerHeight();
  })
}

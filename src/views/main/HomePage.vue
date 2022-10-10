<template>
<div class="background" :style="background">
   <div class='homepage'>
      <div class="content">
        <!-- 中间的文字和文字周围的局部依靠的是p标签和四个div去实现的。 -->
          <div class='box' id='box1'></div>
          <div class='box' id='box2'> </div>
          <p>{{sign}}</p>
          <div class='box' id='box3'></div>
          <div class='box' id='box4'></div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name :'HomePage',
  data() {
    return{
      sign:'欢迎来到我的主页',
      background: {
      //动态绑定背景图
      //require要用到拼接。
      //某些时候，../assets可能会失效，改成~@/assets试试
      backgroundImage: "url(" + require("../../assets/homebackg.jpg") + ")",
      backgroundRepeat: "no-repeat",
      position: "fixed",
      backgroundSize: "cover",
      }
    }
  }
}
</script>

<style scoped>
.homepage{
    height: 550px;
    background-size: 100% ;
    color: #fff;
    font-size: 28px;
    margin-top: 10px;
    margin-left: 520px;
  }

/* 设置四个div元素为行内块级元素：display:inline-block  
 行内块元素   使元素在一行上显示 ，能改变元素的height，width的值.
  使用padding，margin的top，left，bottom，right都能够撑开元素。 */
  .content{
    display: inline-block;
    position: relative;
    top: 40%;
  }
  p{
    text-shadow: 0px 0px 10px rgba(255,255,255,0.5);
    /* letter-spacing属性是增加（值为正）或减少（值为负）字符间距 */
    text-align:center;
  }
  /* 使用相对定位将四个边框的top/bottom/left/right位置进行调整 */
  .box{
    display: inline-block;
    width: 100px;
    height: 20px;
  }
  /* 最后就是将对应的border边框进行修改
  比如：左上角的div#box1只设置border--top和border-left
  左下角的div#box3只设置border-left和border-bottom。 */
  #box1{
    border-left:8px solid;
    border-top: 8px solid;
    position: relative;
    right: 150px;
    bottom: 20px;
  }
  #box2{
    border-top: 8px solid;
    border-right: 8px solid;
    position: relative;
    left: 150px;
    bottom: 20px;
  }
   #box3{
    border-left: 8px solid;
    border-bottom: 8px solid;
    position: relative;
    right: 150px;
    top: 20px;
  }
   #box4{
    border-right: 8px solid;
    border-bottom: 8px solid;
    position: relative;
    left: 150px;
    top: 20px;
  }
  .background {
  padding: 0px;
  margin: 0px;
  height: 100%;
  width: 100%;
  animation: bg infinite 8s linear normal;  
  /*animation: bg infinite 100s linear alternate;
  bg:名字  name
  infinite:指定动画应该播放无限次（永远） timing-function
  100s:定义动画完成一个周期需要多少秒或毫秒   duration
  linear:动画从头到尾的速度是相同的   timing-function
  alternate:动画在奇数次（1、3、5…）正向播放，在偶数次（2、4、6…）反向播放。  timing-function */
  }
 @keyframes bg { 
    /* transform属性取值为translate（x，y）时，表示元素的平移。
属性取值：数值、百分比，x轴取负值表示向左移动，y轴取负值表示向上移动  */
  from{
          background-size: 100% 100%;
      }
      to{
          background-size: 100% 130%;
      }
  }
</style>

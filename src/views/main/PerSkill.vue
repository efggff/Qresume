<template>
  <div class="securityresearch">
      <div class="title">
        <el-divider content-position="center">个人技能</el-divider>
        <p>熟悉前端基础的三大语言HTML,CSS,Javescript<br>
        熟悉Vue2,Element-ui<br>
        学习了解过BOMDOM,ES6,AJAX</p>
      </div>
      <div class="skill">
        <span class='vue'>Vue</span>
        <span class='js'>JS</span>
        <span class='css'>CSS</span>
        <span class='HTML'>HTML</span>
        <span class='BOMDOM'>BOMDOM</span>
        <span class='ES6'>ES6</span>
        <span class='AJAX'>AJAX</span>
      </div>
  </div>
</template>

<style scoped>
  div .el-divider--horizontal{
    height: 2px;
    margin-top:100px;
    background-color: rgb(84, 92, 100);
  }
   div .el-divider__text{
    font-size: 26px;
    color: #545c64;
  }
  .securityresearch{
    font-size: 14px;
    padding: 0px 100px;
    position: relative;
  }
  .title p{
    color: #8c8888;
    font-size: 15px;
    margin-bottom: 80px;
    text-align: center;
  }
   .skill{
     /* 从上面开始顺时针转圈 */
    margin: 100px 100px;
    position: relative;
    text-align: center;
  } 
  .skill span{
    display: inline-block;
    color: rgb(39, 37, 37);
    border-radius: 50%;
  }
 span.vue{
    background-color: rgba(102,153,204,1) ;
    width: 100px;
    height: 100px;
    line-height: 100px;
    font-size: 28px;
    /* z-index属性，默认值为0，值设置越大，则层级关系越大 */
    z-index: 100; 
  }
    span.js{
    background-color: rgba(255,153,102,0.5);
    width: 200px;
    height: 200px;
    line-height: 200px;
    font-size: 26px;
    position: absolute;
    left: 50%;
    z-index: 0;
  }
  span.css{
    background-color: rgba(102,204,204,0.8);
    width: 90px;
    height: 90px;
    font-size: 26px;
    line-height: 90px;
    font-size: 26px;
    position: absolute;
    left: 30%;
    top: 130px;
    z-index: 0;
  }
  span.HTML{
    background-color: rgba(255,153,153,0.7) ;
    width: 80px;
    height: 80px;
    line-height: 80px;
    font-size: 24px;
    position: absolute;
    left: 75%;
    bottom: -50px;
    z-index: 0; 
  }
  span.BOMDOM{
    background-color: rgba(255,204,51,0.8);
    width: 70px;
    height: 70px;
    line-height: 70px;
    font-size: 13px;
    position: absolute;
    left: 20%;
    bottom: 80px;
    z-index: 0; 
  }
  span.ES6{
    background-color: rgba(204,102,102,0.5) ;
    width: 60px;
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    position: absolute;
    left: 10%;
    bottom: -10px;
    /* z-index: 0;  */
  }
  span.AJAX{
    background-color: rgba(153,153,255,0.8) ;
    width: 60px;
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    position: absolute;
    left: 80%;
    top: -50px;
    /* z-index: 0;  */
  } 
</style>
<script>
export default {
  name: 'SecurityResearch'
}
</script>


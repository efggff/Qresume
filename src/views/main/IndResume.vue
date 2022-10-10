/* 个人简介这个组件中，主要包含三个内容：
分割线标题、
分割线标题下的蓝色标签、
内容部分和文字上方半透明圆形/方形阴影 */

<template>
  <div class="aboutme">
    <div class="title">
      <!-- 分割线使用了element的 Divider 分割线组件，并且在分割线上面添加子自定义的文字内容。 -->
      <el-divider content-position="center">个人简介</el-divider>
    </div>
    <!-- 使用element的 card 卡片组件 -->
    <el-card class="box-card" style="margin-bottom: 20px;">
      <div class="text item">
        <!-- 在PC端，设置的这个gutter值为该单元格左右的padding之和 -->
        <el-row :gutter="110">
          <!-- 内容部分使用了element的 layout24分栏布局，
          总共分为三列，每一栏占据的列数为8列：el-col的span属性设置为8（同一行的span设置数组相加不能超过24，否则会换行） -->
          <el-col :span="8">
            <div >
              <p>姓名：曲陆</p>
              <p>性别：女</p>
              <p>年龄：26</p>
              <p>电话：15905196964</p>
              <p>邮箱：q1590519@163.com</p>

            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <p>2015-2019年就读于盐城工学院酒店管理专业</p>
              <p>2019-2022年就读于南京理工大学土木工程专业</p>
              <p>2020-2022.8于南京软通动力工作</p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
                工作中比较耐心，对待工作认真负责，有较好的自学能力，希望能通过自己的学习来获得不断进步和成长，从而拥有更强的竞争力和个人价值。
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 文字上方有两个阴影：蓝色方形半透明阴影和橙色圆形半透明阴影
      这两个也比较简单，代码位于分栏布局下方，设置了两个div -->
      <div class='topMask square'></div><div class='topMask circular'></div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'IndResume'
}
</script>
<style>
/* 个人简介的分割线 */
  /* .aboutme .grid-content.line{
    border-right: 1px solid #ddd;
    height: 150px;
  } */
  div .el-divider--horizontal{
    height: 2px;
    margin-top:100px;
    background-color: rgb(84, 92, 100);
  }
   div .el-divider__text{
    font-size: 26px;
    color: #545c64;
  }
  /* .aboutme .el-card__header{
    background: #545c64;
  }
  .aboutme .el-card__body{
    padding: 50px 20px;
  }
  .aboutme .el-timeline-item__wrapper{
    top: -8px;
  } */
 
</style>
<style scoped>
  .aboutme{
    font-size: 14px;
    text-align: left;
    padding: 0px 100px;
  }
  .info{
    width: 200px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .text {
    font-size: 14px;
    text-align: left;
    line-height: 30px;
    text-indent: 2em;
  }
  .box-card{
    position: relative;
  }
  .item {
    display: inline-block;
    margin: 30px 50px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .clearfix span{
    color: #fff;
    font-weight: bold;
  }
  .title p{
    color: #8c8888;
    font-size: 15px;
    margin-bottom: 80px;
    text-align: center;
  }
  .grid-content .large{
    font-size: 16px;
    color: #409EFF;
    font-weight: bold;
  }
  /* 对这两个div都设置为100*100的大小，
  两个阴影的颜色和透明度可以自行修改，两个阴影的位置通过设置两个元素的定位为absolute，
  并且设置相应的偏移量（top、bottom、left、right）即可。 */
  .topMask{
    width: 100px;
    height: 100px;
    background-color: rgba(47, 173, 127, 0.299);
    /* transform:rotate(angle)
    角度为正时，顺时针，负时，为逆时针
    默认旋转的中心点是元素的中心点 */
    transform: rotate(45deg);
    position: absolute;
  }
  /* 菱形形状通过将div进行2d的旋转45度即可实现。 */
  .square{
    border-radius: 5px;
    bottom: -8px;
    left: 640px;
  }
  /* 圆形形状的实现通过设置圆角属性border-radius为50%； */
  .circular{
    border-radius: 50%;
    top:80px;
    left:-10px;
    background-color: rgba(236, 182, 33, 0.406);
  }
</style>

<template>
<!-- 工作经历组件主要包含两个部分：时间轴、项目介绍、点击项目打开详情 -->
  <div class="productpage">
    <div class="title">
      <el-divider content-position="center">练手项目</el-divider>
    </div>
    <div class='experience'>
      <!-- Timeline 可拆分成多个按照时间戳正序或倒序排列的 activity，
      时间戳是其区分于其他控件的重要特征，
      使⽤时注意与 Steps 步骤条等区分。 -->
      <el-timeline>
        <el-timeline-item  timestamp="2022" placement="top">
          <el-card>
            <h4>电商网页</h4>
            <br>
            <p>练习过以HTML和CSS为主的电商网站</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2022" placement="top">
          <el-card>
            <h4>个人简历</h4>
            <br>
            <p>基于Vue ,VueRouter , Axios , ElementUI的个人简历网站</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2022" placement="top">
          <el-card>
            <h4>echarts可视化图表</h4>
            <br>
            <p>利用echarts对数据进行了可视化图表的分析制作</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>    
</template>

<script>
export default {
  name: 'RelExperience',
}
</script>

<style scoped>
/* Divider 分割线   horizontal 水平 */
  div .el-divider--horizontal{
    height: 2px;
    margin-top:100px;
    background-color: rgb(84, 92, 100);
  }
  /* 练手项目 */
  div .el-divider__text{
    font-size: 26px;
    color: #545c64;
  }
  .productpage{
    padding: 0px 100px 0px 100px;
  }
  .productpage .project{
    /* display:flex 意思是弹性布局，
    它能够扩展和收缩 flex 容器内的元素，以最大限度地填充可用空间 */
    display: flex;
    /* justify-content属性用于描述弹性盒子容器的对齐方式。
    它包含沿着分布在浏览器中的 flex 容器的主轴的内容项之间和周围的空间。
    space-around：弹性项目以相等的间距放置，
    即在彼此之间和角落之前，之间和之后。 */
    justify-content:space-around;
  }
  /* .ifns{
    width:85%;
    display: inline-block;
    outline: 1px dashed rgba(84, 92, 100, 0.1);
  } */
  /* 框内内容 */
  .experience{
    text-align: left;
  }

</style>

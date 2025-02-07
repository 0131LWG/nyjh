<!-- 解决方案详情 -->
<template>
    <div class="detail">
        <div class="home">
            <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img class="swiper-slide-img"
                        src="../assets/tab1/banner.png" />
                    </div>
                </div>
            </div>
        </div>
        <div v-if="info" class="info">
            <div class="content1">
                <div style="padding:10px;background-color: #2648A3;color: #fff;">产品分类</div>
                <div v-for="(item, index) in list" :key="index" class="tabs" @click="goLink('/center')">{{ item.title }}
                </div>
                <div style="padding:10px;background-color: #2648A3;color: #fff;">联系我们</div>
                <div class="news">东莞市南粤净化科技有限公司</div>
                <div class="news">工厂地址:广东省东莞市麻涌镇新基北街9号</div>
                <div class="news">售前电话:13925787528&emsp;13416783698</div>
                <div class="news">售后电话:15916750164</div>
                <div class="news">邮箱:fy686@126.com</div>
            </div>
            <div class="content2">
                <div class="between">
                    <div>{{ list[info.x].title }}</div>
                    <div>
                        <span>您的当前位置：</span>
                        <span style="cursor:pointer" @click="goLink('/')">首页</span>
                        <span style="padding:4px 20px 0 20px">/</span>
                        <span style="cursor:pointer" @click="goLink('/center')">产品中心</span>
                        <span style="padding:4px 20px 0 20px">/</span>
                        <span style="cursor:pointer">{{ list[info.x].list[info.y].name }}</span>
                    </div>
                </div>
                <div>
                    <div class="title">{{ list[info.x].title }}</div>
                    <div class="betweens">
                        <img :src="list[info.x].list[info.y].url" />
                        <div style="margin:30px 20px;">
                            <div style="border-bottom:1px dotted #777;padding-bottom: 10px;">所属分类：{{
                                list[info.x].list[info.y].name }}</div>
                            <div class="button" @click="goLink('/service')">立即询价</div>
                        </div>
                    </div>
                </div>
                <div class="title" style="text-align:left;padding:10px 0 10px 0;">详细介绍</div>
                <div style="padding:10px 0 0 0;font-size:14px;">
                    <div v-html="list[info.x].list[info.y].detail"></div>
                </div>
                <div style="border-top:1px solid #ccc;padding: 10px 0;font-size:14px;" v-if="info.y == 0">上一篇：无</div>
                <div style="border-top:1px solid #ccc;padding: 10px 0;font-size:14px;cursor: pointer;" v-else
                    @click="change('reduce')">上一篇：{{ list[info.x].list[Number(info.y) - 1].name }}</div>
                <div style="border-top:1px solid #ccc;padding: 10px 0;font-size:14px;cursor: pointer;"
                    v-if="info.y < list[info.x].list.length - 1" @click="change('add')">下一篇：{{
                        list[info.x].list[Number(info.y) + 1].name }}</div>
                <div style="border-top:1px solid #ccc;padding: 10px 0;font-size:14px;" v-else>下一篇：无</div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data: () => ({
        info: 0,
        list: [{
            title: '介质过滤器',
            list: [
                {
                    name: '平板型覆网式初效过滤器',
                    url: require('../assets/tab3/list1.jpg'),
                    detail:'<div class="content"><p><span style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px;">设计特点：</span><br style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; white-space: normal;"><span style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px;">●&nbsp;捕集5um以上的颗粒尘埃及各种悬浮物</span><br style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; white-space: normal;"><span style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px;">●&nbsp;风量大</span><br style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; white-space: normal;"><span style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px;">●&nbsp;阻力小</span><br style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; white-space: normal;"><span style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px;">●&nbsp;容尘高</span><br style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; white-space: normal;"><span style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px;">●&nbsp;使用寿命长</span><br style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; white-space: normal;"><span style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px;">Features:</span><br style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; white-space: normal;"><span style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px;">●&nbsp;G4 coarse filter is available in efficiency of 90% on 5 micron particles</span><br style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; white-space: normal;"><span style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px;">●&nbsp;Large airflow</span><br style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; white-space: normal;"><span style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px;">●&nbsp;Low resistance&nbsp;</span><br style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; white-space: normal;"><span style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px;">●&nbsp;High dust holding capacity</span><br style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; white-space: normal;"><span style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px;">●&nbsp;Long service life</span><br style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; white-space: normal;"><span style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px;">一般应用:</span><br style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; white-space: normal;"><span style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px;">●&nbsp;空调系统的初级过滤</span><br style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; white-space: normal;"><span style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px;">●&nbsp;多级过滤系统的预过滤</span><br style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; white-space: normal;"><span style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px;">Application:</span><br style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; white-space: normal;"><span style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px;">● Used as first stage filters in air condition system and as pre-filters in multilevel filtering system.&nbsp;</span></p><p><br style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; white-space: normal;"><strong style="color: rgb(102, 102, 102); font-family: &quot;Microsoft YaHei&quot;, arial, 宋体, sans-serif; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; border: 0px; font-size: 16px;"><span style="margin: 0px; padding: 0px; border: 0px; font-family: 宋体;">&nbsp; &nbsp; &nbsp; &nbsp;型号、尺寸及其他参数：（★我公司为生产厂家，可按客户要求订做各种非标尺寸）</span></span></strong></p><p><strong style="color: rgb(102, 102, 102); font-family: &quot;Microsoft YaHei&quot;, arial, 宋体, sans-serif; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; border: 0px; font-size: 16px;"><span style="margin: 0px; padding: 0px; border: 0px; font-family: 宋体;"><img src="http://www.vitefilter.cn/data/upload/image/20171205/1512454130220234.jpg" title="1512454130220234.jpg" alt="G4初效.jpg"></span></span></strong></p><p><span style="margin: 0px; padding: 0px; border: 0px; font-size: 16px;"><span style="margin: 0px; padding: 0px; border: 0px; font-family: 宋体;"></span></span></p><div class="para-title level-2" label-module="para-title" data-pid="18" style="clear: both; border-left: 12px solid rgb(79, 156, 238); line-height: 24px; font-size: 22px; font-family: &quot;Microsoft YaHei&quot;, SimHei, Verdana; margin: 35px 0px 15px -30px; background: url(&quot;https://bkssl.bdimg.com/static/wiki-lemma/normal/resource/img/paraTitle-line_743dba1.png&quot;) rgb(255, 255, 255); position: relative; color: rgb(51, 51, 51); white-space: normal;"><h2 class="title-text" style="margin: 0px; padding: 0px 8px 0px 18px; font-size: 22px; color: rgb(0, 0, 0); float: left; line-height: 24px; font-weight: 400; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 宋体, SimSun;">G4级平铺式<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>初效过滤器</strong></font></a></span>维修保养</h2><a class="audio-play part-audio-play J-part-audio-play" style="color: rgb(136, 136, 136); display: block; float: right; height: 22px; line-height: 22px; padding-left: 24px; font-size: 12px; font-family: SimSun; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; outline: 0px;">&nbsp;</a></div><p style="margin-bottom: 15px; font-size: 14px; overflow-wrap: break-word; color: rgb(51, 51, 51); text-indent: 2em; line-height: 24px; zoom: 1; font-family: arial, 宋体, sans-serif; white-space: normal; background-color: rgb(255, 255, 255);"><br></p><p style="margin-bottom: 15px; font-size: 14px; overflow-wrap: break-word; color: rgb(51, 51, 51); text-indent: 2em; line-height: 24px; zoom: 1; font-family: arial, 宋体, sans-serif; white-space: normal; background-color: rgb(255, 255, 255);">1、根据环境的洁净度，定期（<span style="font-family: 宋体, SimSun;">G4级平铺式初效过滤器</span>一般为1~6个月）更换。</p><div class="para" label-module="para" data-pid="20" style="font-size: 14px; overflow-wrap: break-word; color: rgb(51, 51, 51); margin-bottom: 15px; text-indent: 2em; line-height: 24px; zoom: 1; font-family: arial, 宋体, sans-serif; white-space: normal; background-color: rgb(255, 255, 255);">2、定期（一般每两个月一次）用尘埃粒子计数器测定用本产品实施净化的洁净度区域的洁净度，当实测的洁净度与要求的洁净度不符时，应查明原因（是否有泄漏、高效是否有失效等）若<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>高效过滤器</strong></font></a>已失效，则应更换新的高效过滤器。</div><p style="margin-bottom: 15px; font-size: 14px; overflow-wrap: break-word; color: rgb(51, 51, 51); text-indent: 2em; line-height: 24px; zoom: 1; font-family: arial, 宋体, sans-serif; white-space: normal; background-color: rgb(255, 255, 255);">3、更换G4初效过滤器时应停机才能进行更换。</p><h2 class="title-text" style="font-family: &quot;Microsoft YaHei&quot;, SimHei, Verdana; white-space: normal; margin: 0px; padding: 0px 8px 0px 18px; font-size: 22px; line-height: 24px; font-weight: 400; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 宋体, SimSun;">G4级平铺式初效过滤器清洗说明</span></h2><div class="para" label-module="para" data-pid="25" style="font-size: 14px; overflow-wrap: break-word; color: rgb(51, 51, 51); margin-bottom: 15px; text-indent: 2em; line-height: 24px; zoom: 1; font-family: arial, 宋体, sans-serif; white-space: normal; background-color: rgb(255, 255, 255);">1、打开设备中的吸入格栅，按住两边的按钮轻轻往下拉;</div><div class="para" label-module="para" data-pid="26" style="font-size: 14px; overflow-wrap: break-word; color: rgb(51, 51, 51); margin-bottom: 15px; text-indent: 2em; line-height: 24px; zoom: 1; font-family: arial, 宋体, sans-serif; white-space: normal; background-color: rgb(255, 255, 255);">2、拖住空气过滤器上的钩子向斜下方拉出设备;</div><div class="para" label-module="para" data-pid="27" style="font-size: 14px; overflow-wrap: break-word; color: rgb(51, 51, 51); margin-bottom: 15px; text-indent: 2em; line-height: 24px; zoom: 1; font-family: arial, 宋体, sans-serif; white-space: normal; background-color: rgb(255, 255, 255);">3、用类似真空吸尘器的设备清除其中的灰尘，或者用温水冲洗;</div><div class="para" label-module="para" data-pid="28" style="font-size: 14px; overflow-wrap: break-word; color: rgb(51, 51, 51); margin-bottom: 15px; text-indent: 2em; line-height: 24px; zoom: 1; font-family: arial, 宋体, sans-serif; white-space: normal; background-color: rgb(255, 255, 255);">4、如果遇到灰尘过多的话可以用软毛刷子加中性洗涤剂进行清洗，清洗干净之后把水甩干，放置于阴凉处晒干;</div><div class="para" label-module="para" data-pid="29" style="font-size: 14px; overflow-wrap: break-word; color: rgb(51, 51, 51); margin-bottom: 15px; text-indent: 2em; line-height: 24px; zoom: 1; font-family: arial, 宋体, sans-serif; white-space: normal; background-color: rgb(255, 255, 255);">5、千万不要使用50℃以上的热水进行清洗，以免出现设备掉色或变形的现象，也不要在火上烤干;</div><div class="para" label-module="para" data-pid="30" style="font-size: 14px; overflow-wrap: break-word; color: rgb(51, 51, 51); margin-bottom: 15px; text-indent: 2em; line-height: 24px; zoom: 1; font-family: arial, 宋体, sans-serif; white-space: normal; background-color: rgb(255, 255, 255);">6、在清洗完成之后务必及时装上设备，安装的时候将设备挂在吸入格栅上部突起的部分上，然后固定于吸入格栅之上，将吸入格栅的背面凸柄向内慢慢滑动，直至将整个设备推入格栅;</div><div class="para" label-module="para" data-pid="31" style="font-size: 14px; overflow-wrap: break-word; color: rgb(51, 51, 51); margin-bottom: 15px; text-indent: 2em; line-height: 24px; zoom: 1; font-family: arial, 宋体, sans-serif; white-space: normal; background-color: rgb(255, 255, 255);">7、最后一步是关闭吸入格栅，这和第一步恰好是相反的，按住控制盘上的过滤器信号复位键，这时候清洗的提醒标志就会消失;</div><div class="para" label-module="para" data-pid="32" style="font-size: 14px; overflow-wrap: break-word; color: rgb(51, 51, 51); margin-bottom: 15px; text-indent: 2em; line-height: 24px; zoom: 1; font-family: arial, 宋体, sans-serif; white-space: normal; background-color: rgb(255, 255, 255);">8、另外提醒大家，如果G4初效过滤器使用的环境中灰尘过多，那么清洗的次数应该视情况增加，一般是半年一次为宜。</div><p><span style="text-indent: 28px; background-color: rgb(255, 255, 255); color: rgb(102, 102, 102); font-family: &quot;Microsoft yahei&quot;; font-size: 18px;"><span style="color: rgb(89, 89, 89); font-family: 微软雅黑, &quot;Microsoft Yahei&quot;;">以上</span></span><a href="https://www.nyjh.cc/" target="_self" style="font-size: 14px; text-indent: 28px; white-space: normal; font-family: 宋体, Arial, sans-serif;"><span style="color: rgb(102, 102, 102); font-family: &quot;Microsoft yahei&quot;; background-color: rgb(255, 255, 255); font-size: 18px;"><span style="color: rgb(25, 25, 25); font-family: &quot;PingFang SC&quot;, Arial, 微软雅黑, 宋体, simsun, sans-serif; font-weight: 700;">G4平铺式初效过滤器</span></span></a><span style="color: rgb(51, 51, 51); font-size: 14px; text-indent: 28px; font-family: 宋体, Arial, sans-serif;"></span><span style="text-indent: 28px; background-color: rgb(255, 255, 255); color: rgb(102, 102, 102); font-family: &quot;Microsoft yahei&quot;; font-size: 18px;"><span style="color: rgb(89, 89, 89); font-family: 微软雅黑, &quot;Microsoft Yahei&quot;;">产品是由南粤净化空气净化厂家提供，如果有初效过滤器需求可以拔打南粤净化热线</span>：0769-22427609</span></p><p><span style="margin: 0px; padding: 0px; border: 0px; font-size: 16px;"><span style="margin: 0px; padding: 0px; border: 0px; font-family: 宋体;"></span></span><strong style="color: rgb(102, 102, 102); font-family: &quot;Microsoft YaHei&quot;, arial, 宋体, sans-serif; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; border: 0px; font-size: 16px;"><span style="margin: 0px; padding: 0px; border: 0px; font-family: 宋体;"><br></span></span></strong><br></p></div>'
                },
                {
                    name: '平板型龙骨式初效过滤器',
                    url: require('../assets/tab3/list2.jpg'),
                    detail:'<div class="content"><pre style="margin-top: 0px; margin-bottom: 0px; padding: 0px; background-color: rgb(255, 255, 255); font-family: 微软雅黑; list-style: none; white-space: pre-wrap; overflow-wrap: break-word; color: rgb(51, 51, 51); font-size: 14px;">G4子母架<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>初效过滤器</strong></font></a>G4子母架初效过滤器产品特点1、可拆卸板式铝合金框架，配合铝合金角或塑料直角固定，结构坚固平稳、确保过滤器在较差的工作环境下亦不至于变形或损坏；2、外框采用可拆卸设计，方便更换滤料以达到框架重复利用的目的；3、子母架过滤网加强筋，进一步增强了过滤器的坚固性，较小阻力达到较大的容尘量；4、无纺布，聚酯合成纤维，可多次清洗再利用，使用寿命长；5、蓬松渐密的纤维结构，有效延长其后端<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>中效过滤器</strong></font></a>的使用寿命。应用领域办公室、会议室、医院、商场、机场的等大型建筑通风空调系统、普通工业厂房或洁净室的集中通风空调系统的预过滤。</pre><p style="white-space: normal;"><br></p><p style="white-space: normal;"><strong style="font-family: 宋体, Arial, sans-serif; font-size: 12px;"><span style="font-size: 14px;"><strong>G4子母架初效过滤器,过滤网</strong></span></strong><span style="font-family: 宋体, Arial, sans-serif; font-size: 14px;"><strong>制做材料及运行条件描述:</strong><br data-filtered="filtered">滤料：无纺布过滤棉<br data-filtered="filtered">密封胶：万能胶<br data-filtered="filtered">框材：铝型材、纸框、铝板、镀锌、<br data-filtered="filtered">过滤效率：G1、G2、G3、G4<br data-filtered="filtered">使用最高温度：80℃<br data-filtered="filtered">使用最高湿度：纸框：80% 金属框：100%</span></p><p style="white-space: normal;"><strong style="font-family: 宋体, Arial, sans-serif; font-size: 14px;"><strong style="font-size: 12px;"><span style="font-size: 14px;"><strong>G4子母架初效过滤器</strong></span></strong>的维护与保养：</strong><br data-filtered="filtered" style="font-family: 宋体, Arial, sans-serif; font-size: 14px;"><span style="font-family: 宋体, Arial, sans-serif; font-size: 14px;">1、各类过滤器在安装前，不允许打开包装袋或包装膜；并按包装箱上标注的方向存放过滤器；在搬运过程中，应轻拿、轻放，避免剧烈的振动和碰撞。</span><br data-filtered="filtered" style="font-family: 宋体, Arial, sans-serif; font-size: 14px;"><span style="font-family: 宋体, Arial, sans-serif; font-size: 14px;">2、对于<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>高效过滤器</strong></font></a>，安装方向必须正确：用波纹板组合过滤器在竖向安装时，波纹板必须垂直于地面；过滤器在竖向与框架之间的连接，严禁渗漏、变形、破损和漏胶等，安装后必须保证内壁清洁，无浮尘、油污、锈蚀及杂物等。</span><br data-filtered="filtered" style="font-family: 宋体, Arial, sans-serif; font-size: 14px;"><span style="font-family: 宋体, Arial, sans-serif; font-size: 14px;">3、检验方法：观察或白绸布擦拭检查。</span><br data-filtered="filtered" style="font-family: 宋体, Arial, sans-serif; font-size: 14px;"><span style="font-family: 宋体, Arial, sans-serif; font-size: 14px;">4、高效过滤器安装前，必须对洁净室进行全面清扫、擦净，净化空调系统内部如有积尘，应再次清扫、擦净，达到清洁要求。如在技术夹层或吊顶内安装高效过滤器，则技术层或吊顶内也应进行全面清扫、擦净。</span><br data-filtered="filtered" style="font-family: 宋体, Arial, sans-serif; font-size: 14px;"><span style="font-family: 宋体, Arial, sans-serif; font-size: 14px;">5、高效过滤器的运输和存放应按照生产厂标志的方向搁置。在运输过程中，应轻拿轻放，防止剧烈振动和碰撞，不允许野蛮装卸。</span><br data-filtered="filtered" style="font-family: 宋体, Arial, sans-serif; font-size: 14px;"><span style="font-family: 宋体, Arial, sans-serif; font-size: 14px;">6、高效过滤器安装前，必须在安装现场拆开包装进行外观检查，内容包括：滤纸、密封胶和框架有无损坏；边长、对角线和厚度尺寸是否符合要求；框架有无毛刺和锈斑（金属框）；有无产品合格证，技术性能是否符合设计要求。然后按照标准《洁净室施工及验收规范》〔 JGJ71-90 〕的规定的方法进行检查，合格的应立即安装。</span><br data-filtered="filtered" style="font-family: 宋体, Arial, sans-serif; font-size: 14px;"><span style="font-family: 宋体, Arial, sans-serif; font-size: 14px;">7、洁净度级别等于和高于１００级洁净室用的高效过滤器，安装前应按《洁净室施工及验收规范》 （JGJ71-90 〕的规定的方法检漏，并符合规定的要求。</span><br data-filtered="filtered" style="font-family: 宋体, Arial, sans-serif; font-size: 14px;"><span style="font-family: 宋体, Arial, sans-serif; font-size: 14px;">8、安装高效过滤器时，外框上箭头应和气流方向*；当其垂直安装时，滤纸折痕方向应垂直于地面。</span></p><p style="white-space: normal;"><span style="font-family: 宋体, Arial, sans-serif; font-size: 14px;">9、安装粗效平板式或折叠式过滤器，应使镀锌网面在出风背面方向。 安装袋式过滤器，则应使滤袋长度方向垂直于地面，不可使滤袋方向平行于地面安装；</span><br></p><p style="white-space: normal;"><span style="font-family: 宋体, Arial, sans-serif; font-size: 14px;">10、在正常使用条件下，平板、折叠式粗效或中效过滤器，一般 1—2 月更换一次，将滤料更换下来后可以用含有清洁剂的清水浸泡、冲洗，然后凉干再换上；一般冲洗 1-2 次后，必须更换新的过滤器，以保证过滤效率。</span><br data-filtered="filtered" style="font-family: 宋体, Arial, sans-serif; font-size: 14px;"><span style="font-family: 宋体, Arial, sans-serif; font-size: 14px;">11、对于袋式粗效或中效过滤器，在正常使用条件下（平均每天8小时，连续运转），一般使用3-4 个月即应更换新的；</span><br data-filtered="filtered" style="font-family: 宋体, Arial, sans-serif; font-size: 14px;"><span style="font-family: 宋体, Arial, sans-serif; font-size: 14px;">12、对于亚高效过滤器，在正常使用条件下（平均每天8小时，连续运转），一般使用5–6个月，也应加以更换。</span><br data-filtered="filtered" style="font-family: 宋体, Arial, sans-serif; font-size: 14px;"><span style="font-family: 宋体, Arial, sans-serif; font-size: 14px;">13、对于以上的过滤器，如果过滤器前后有压差表或压差传感器，则对粗效过滤器，当压差值大于 250Pa 时，必须加以更换；对中效过滤器，则压差大于 330Pa 时，必须加以更换；对于亚高效过滤器，则当压差值大于 400Pa 时，必须加以更换，且原过滤器不可再利用。</span></p><p style="white-space: normal;"><span style="font-family: 宋体, Arial, sans-serif; font-size: 14px;"><span style="color: rgb(102, 102, 102); font-family: &quot;Microsoft yahei&quot;; background-color: rgb(255, 255, 255); font-size: 18px;"><span style="color: rgb(89, 89, 89); font-family: 微软雅黑, &quot;Microsoft Yahei&quot;;">以上</span></span><a href="http://www.vitefilter.cn" target="_self"><span style="color: rgb(102, 102, 102); font-family: &quot;Microsoft yahei&quot;; background-color: rgb(255, 255, 255); font-size: 18px;"><span style="color: rgb(25, 25, 25); font-family: &quot;PingFang SC&quot;, Arial, 微软雅黑, 宋体, simsun, sans-serif; font-weight: 700;">G4子母架初效过滤器</span></span></a><span style="color: rgb(102, 102, 102); font-family: &quot;Microsoft yahei&quot;; background-color: rgb(255, 255, 255); font-size: 18px;"><span style="color: rgb(89, 89, 89); font-family: 微软雅黑, &quot;Microsoft Yahei&quot;;">产品是由南粤净化空气净化厂家提供，如果有初效过滤器需求可以拔打南粤净化热线</span>：0769-22427609</span></span></p><p><br></p></div>'
                },
                {
                    name: '袋式过滤器（初效/中效）',
                    url: require('../assets/tab3/list3.jpg'),
                    detail:'<div class="content"><p><strong style="color: rgb(51, 51, 51); font-family: &quot;Microsoft YaHei&quot;, tahoma, Arial, Helvetica, sans-serif; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255);"><span deep="5" style="font-size: 16px;">袋式<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>初效过滤器</strong></font></a>产品特性:<br data-filtered="filtered">* 专用于袋式过滤器的合成纤维与微纤维材料，利用逐级加密技术制成，过滤性能好，容尘量高;<br data-filtered="filtered">* 滤料可线缝、也可采用用防爆裂高频焊接结构，高周波热熔封边，增加结构刚性，保证运行的可靠性，杜绝二次产尘;<br data-filtered="filtered">* 各组袋均有定位风道，配以薄气动分隔袋结构和顺应气流的标准V字型结构，很大程度的稳定气流，保证过滤介质的利用，确保良好过滤效果;<br data-filtered="filtered">* 不含硅设计过滤器，特别适用于喷漆车间;<br data-filtered="filtered">* 阻力低，过滤面积大，耐湿度强，可达；常温100℃;<br data-filtered="filtered">* 符合防火分类欧洲标准DIN53438-F1及美国UL900-CLASS2.<br data-filtered="filtered">* 过滤级别：G3、G4、F5、F6<br data-filtered="filtered">用途:<br data-filtered="filtered">空调通风系统过滤；粗尘过滤（G3、G4）过滤系统预过滤；<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>中效过滤器</strong></font></a>前道过滤；细尘过滤（F5、F6）过滤器预过滤.<br data-filtered="filtered">Rigid pocket filter<br data-filtered="filtered">Specialty:<br data-filtered="filtered">* Rigid pocket filter is processed by anti-break high performance fiber with heat fusion method in gradual structure and featured with excellent filter effect and high dust holding.<br data-filtered="filtered">* The border of the media is sewed to assure the performance.<br data-filtered="filtered">* There is fixed airflow channel to assure best filter effect.<br data-filtered="filtered">* The media don’t contain silicon which is especially suitable for painting room.<br data-filtered="filtered">* The relative humidity can reach to , Temperature resistance: 80℃.<br data-filtered="filtered">* Rigid pocket filter conforms to the fire resistant standard and classification of European DIN53438-F1 and American UL900-Class2.<br data-filtered="filtered">Application:<br data-filtered="filtered">Rigid pocket filter is used for pre-filter in air conditioning ventilation system and filtration system.<br data-filtered="filtered">技术参数: Specification<br data-filtered="filtered">&nbsp;</span></strong><br style="color: rgb(51, 51, 51); font-family: &quot;Microsoft YaHei&quot;, tahoma, Arial, Helvetica, sans-serif; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255);"></p><table align="left" cellpadding="0" cellspacing="0"><tbody><tr class="firstRow"><td style="margin: 0px; padding: 0px;" width="91"><strong><span style="font-size: 16px;">型号<br>Type</span></strong></td><td style="margin: 0px; padding: 0px;" width="123"><strong><span style="font-size: 16px;">尺寸Size(mm)<br>宽x高 x深</span></strong></td><td style="margin: 0px; padding: 0px;" width="70"><strong><span style="font-size: 16px;">袋数Pockets</span></strong></td><td style="margin: 0px; padding: 0px;" width="79"><strong><span style="font-size: 16px;">过滤面积Filtet</span></strong></td><td style="margin: 0px; padding: 0px;" width="107"><strong><span style="font-size: 16px;">额定风量Rated Airflow(m<sup>3</sup>/h)</span></strong></td><td style="margin: 0px; padding: 0px;" width="130"><strong><span style="font-size: 16px;">初阻力Initial Pressure Drop(Pa)</span></strong></td></tr><tr><td rowspan="2" style="margin: 0px; padding: 0px;" width="91"><strong><span style="font-size: 16px;">FX-HD-G3</span></strong></td><td style="margin: 0px; padding: 0px;" width="123"><strong><span style="font-size: 16px;">287x592x600</span></strong></td><td style="margin: 0px; padding: 0px;" width="70"><strong><span style="font-size: 16px;">3</span></strong></td><td style="margin: 0px; padding: 0px;" width="79"><strong><span style="font-size: 16px;">2.3</span></strong></td><td style="margin: 0px; padding: 0px;" width="107"><strong><span style="font-size: 16px;">1700</span></strong></td><td style="margin: 0px; padding: 0px;" width="130"><strong><span style="font-size: 16px;">15</span></strong></td></tr><tr><td style="margin: 0px; padding: 0px;" width="123"><strong><span style="font-size: 16px;">592x592x600</span></strong></td><td style="margin: 0px; padding: 0px;" width="70"><strong><span style="font-size: 16px;">6</span></strong></td><td style="margin: 0px; padding: 0px;" width="79"><strong><span style="font-size: 16px;">4.5</span></strong></td><td style="margin: 0px; padding: 0px;" width="107"><strong><span style="font-size: 16px;">3400</span></strong></td><td style="margin: 0px; padding: 0px;" width="130"><strong><span style="font-size: 16px;">15</span></strong></td></tr><tr><td rowspan="2" style="margin: 0px; padding: 0px;" width="91"><strong><span style="font-size: 16px;">FX-HD-G4<br>&nbsp;</span></strong></td><td style="margin: 0px; padding: 0px;" width="123"><strong><span style="font-size: 16px;">287x592x600</span></strong></td><td style="margin: 0px; padding: 0px;" width="70"><strong><span style="font-size: 16px;">3</span></strong></td><td style="margin: 0px; padding: 0px;" width="79"><strong><span style="font-size: 16px;">2.3</span></strong></td><td style="margin: 0px; padding: 0px;" width="107"><strong><span style="font-size: 16px;">1900</span></strong></td><td style="margin: 0px; padding: 0px;" width="130"><strong><span style="font-size: 16px;">45</span></strong></td></tr><tr><td style="margin: 0px; padding: 0px;" width="123"><strong><span style="font-size: 16px;">592x592x600</span></strong></td><td style="margin: 0px; padding: 0px;" width="70"><strong><span style="font-size: 16px;">6</span></strong></td><td style="margin: 0px; padding: 0px;" width="79"><strong><span style="font-size: 16px;">4.5</span></strong></td><td style="margin: 0px; padding: 0px;" width="107"><strong><span style="font-size: 16px;">3600</span></strong></td><td style="margin: 0px; padding: 0px;" width="130"><strong><span style="font-size: 16px;">45</span></strong></td></tr><tr><td rowspan="2" style="margin: 0px; padding: 0px;" width="91"><strong><span style="font-size: 16px;">FX-HD-F5<br>&nbsp;</span></strong></td><td style="margin: 0px; padding: 0px;" width="123"><strong><span style="font-size: 16px;">287x592x600</span></strong></td><td style="margin: 0px; padding: 0px;" width="70"><strong><span style="font-size: 16px;">3</span></strong></td><td style="margin: 0px; padding: 0px;" width="79"><strong><span style="font-size: 16px;">2.3</span></strong></td><td style="margin: 0px; padding: 0px;" width="107"><strong><span style="font-size: 16px;">2100</span></strong></td><td style="margin: 0px; padding: 0px;" width="130"><strong><span style="font-size: 16px;">55</span></strong></td></tr><tr><td style="margin: 0px; padding: 0px;" width="123"><strong><span style="font-size: 16px;">592x592x600</span></strong></td><td style="margin: 0px; padding: 0px;" width="70"><strong><span style="font-size: 16px;">6</span></strong></td><td style="margin: 0px; padding: 0px;" width="79"><strong><span style="font-size: 16px;">4.5</span></strong></td><td style="margin: 0px; padding: 0px;" width="107"><strong><span style="font-size: 16px;">4250</span></strong></td><td style="margin: 0px; padding: 0px;" width="130"><strong><span style="font-size: 16px;">55</span></strong></td></tr><tr><td rowspan="2" style="margin: 0px; padding: 0px;" width="91"><strong><span style="font-size: 16px;">FX-HD-F6<br>&nbsp;</span></strong></td><td style="margin: 0px; padding: 0px;" width="123"><strong><span style="font-size: 16px;">287x592x600</span></strong></td><td style="margin: 0px; padding: 0px;" width="70"><strong><span style="font-size: 16px;">3</span></strong></td><td style="margin: 0px; padding: 0px;" width="79"><strong><span style="font-size: 16px;">2.3</span></strong></td><td style="margin: 0px; padding: 0px;" width="107"><strong><span style="font-size: 16px;">2100</span></strong></td><td style="margin: 0px; padding: 0px;" width="130"><strong><span style="font-size: 16px;">60</span></strong></td></tr><tr><td style="margin: 0px; padding: 0px;" width="123"><strong><span style="font-size: 16px;">592x592x600</span></strong></td><td style="margin: 0px; padding: 0px;" width="70"><strong><span style="font-size: 16px;">6</span></strong></td><td style="margin: 0px; padding: 0px;" width="79"><strong><span style="font-size: 16px;">4.5</span></strong></td><td style="margin: 0px; padding: 0px;" width="107"><strong><span style="font-size: 16px;">4250</span></strong></td><td style="margin: 0px; padding: 0px;" width="130"><strong><span style="font-size: 16px;">60</span></strong></td></tr></tbody></table><p><strong style="color: rgb(51, 51, 51); font-family: &quot;Microsoft YaHei&quot;, tahoma, Arial, Helvetica, sans-serif; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255);"><span style="font-size: 16px;">&nbsp;<br>&nbsp;<br>&nbsp;<br>&nbsp;<br>&nbsp;<br>&nbsp;<br>&nbsp;<br>&nbsp;<br>&nbsp;<br>&nbsp;<br>注:可根据需要定制不同规格.</span></strong></p><p><br></p></div>'
                },
                {
                    name: '金属网过滤器',
                    url: require('../assets/tab3/list4.jpg'),
                    detail:'<div class="content"><div class="xxnrbox_font" style="padding: 15px; margin: 0px; font-size: 14px; font-family: &quot;Microsoft yahei&quot;; line-height: 30px; overflow: hidden; color: rgb(102, 102, 102); white-space: normal; background-color: rgb(255, 255, 255);"><p style="padding: 0px; margin-top: 0px; margin-bottom: 0px; line-height: 30px;">GH金属孔网<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>初效过滤器</strong></font></a><br data-filtered="filtered" style="padding: 0px; margin: 0px;">一、GH金属孔网初效空气过滤器简介：&nbsp; GH金属孔网初效空气过滤器适用于空调系统的初级过滤。由尼龙网滤材制成，外框是由坚固镀锌框、铝合金外框制成。在正常的操作环境下不会变形、破裂、扭曲。其特点是风量大、阻力小、可重复清洗使用、结构轻巧，易于安装。</p><p style="padding: 0px; margin-top: 0px; margin-bottom: 0px; line-height: 30px;">二、GH金属孔网初效空气过滤器特点：价廉、重量轻、通用性好、结构紧凑。</p><p style="padding: 0px; margin-top: 0px; margin-bottom: 0px; line-height: 30px;">三、GH金属孔网初效空气过滤器用途：GH金属孔网初效空气过滤器适用于中央空调和集中通风系统过滤；大型空压机过滤；洁净回风系统；中效、高效过滤装置的前置预过滤系统；中央空调和集中通风系统预过滤；大型空压机预过滤；洁净回风系统；局部高效过滤装置的预过滤。</p><p><span style="font-size: 18px;">金属孔网初效过滤器产品特点&nbsp;</span></p><p><span style="font-size: 18px;">1、由不同规格的波折滤网组成，交错放置于内框，减少铝框空隙，提供过滤器效果；&nbsp;</span></p><p><span style="font-size: 18px;">2、对于酸碱及耐高温的环境，可选用不锈钢外框及不锈钢波折网制作；&nbsp;</span></p><p><span style="font-size: 18px;">3、产品具有风量大、阻力小，可清洗重复使用及使用寿命长的特点。&nbsp;</span></p><p><span style="font-size: 18px;">应用领域&nbsp;应用于中央空调除油烟机及初效过滤，特殊耐酸、碱、或耐高温之通风过滤。</span></p><p><span style="font-size: 18px;"><span style="color: rgb(89, 89, 89); font-family: 微软雅黑, &quot;Microsoft Yahei&quot;;">以上</span></span><span style="font-size: 18px;">GH金属孔网初效过滤器</span><span style="font-size: 18px;"><span style="color: rgb(89, 89, 89); font-family: 微软雅黑, &quot;Microsoft Yahei&quot;;">产品是由南粤净化空气净化厂家提供，如果有初效过滤器需求可以拔打南粤净化热线</span>：0769-22427609</span></p><br><p><br></p></div><br><p><br></p></div>'
                },
                {
                    name: 'V型密褶式过滤器（高效/亚高效/中效）',
                    url: require('../assets/tab3/list5.jpg'),
                    detail:'<div class="content"><p style="line-height: 2em;"><strong style="font-family: 宋体, SimSun;">FV组合式亚<a href="/" target="_self"></a><a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>高效过滤器</strong></font></a>产品特点：</strong></p><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun;">能承受大的风量，特有的外框V型结构，可以限度的降低结构阻力；</span></p><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun;">结构紧凑，带安装法兰，安装维护方便，可以与常用的袋式过滤器互换；</span></p><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun;">风量大，阻力低，使用寿命长；</span></p><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun;">采用聚丙乙烯塑料外框，环保美观。</span></p><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun;">应用领域：</span></p><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun;">航空航天、电子、半导体、晶片、生物制药、医院、食品加工等高洁净度场所。</span></p><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun;">型号、尺寸及其他参数：（★我公司为生产厂家，可按客户要求订做各种非标尺寸）</span></p><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun;"><img src="http://www.vitefilter.cn/data/upload/image/20170918/1505731189646499.jpg" title="家用空气过滤器" alt="家用空气过滤器" width="671" height="193" border="0" vspace="0" style="width: 671px; height: 193px;"></span></p><p><br></p></div>'
                },
                {
                    name: '有隔板过滤器（高效/亚高效/中效）',
                    url: require('../assets/tab3/list6.jpg'),
                    detail:'<div class="content"><p style="white-space: normal;"><strong style="line-height: 2em;">&nbsp;铝框纸隔板<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>高效过滤器</strong></font></a>产品特点：</strong></p><p style="white-space: normal; line-height: 2em;"><span style="font-family: 宋体, SimSun;">　　采用波纹形纸隔板，精确保持密褶层间距，支撑可靠，稳定性好；</span></p><p style="white-space: normal; line-height: 2em;"><span style="font-family: 宋体, SimSun;">　　滤材两侧180褶翻形成，防止滤料损坏；</span></p><p style="white-space: normal; line-height: 2em;"><span style="font-family: 宋体, SimSun;">　　特有的无缝发泡密封技术，弹性好，不变形，不脱落，安装使用不会泄漏；</span></p><p style="white-space: normal; line-height: 2em;"><span style="font-family: 宋体, SimSun;">　　阻力小，容尘量大，风速均匀性好。</span></p><p style="white-space: normal; line-height: 2em;"><span style="font-family: 宋体, SimSun;">　　应用领域</span></p><p style="white-space: normal; line-height: 2em;"><span style="font-family: 宋体, SimSun;">　　高等级净化设备，净化系统末端过滤，局部净化设备和洁净厂房。</span></p><p style="white-space: normal; line-height: 2em;"><span style="font-family: 宋体, SimSun;">　　型号、尺寸及其他参数：（★我公司为生产厂家，可按客户要求订做各种非标尺寸）</span></p><p style="white-space: normal; line-height: 2em;"><span style="font-family: 宋体, SimSun;"><img src="http://www.vitefilter.cn/data/upload/image/20180123/1516670252558029.jpg" title="1516670252558029.jpg" alt="铝框高效过滤器.jpg"></span></p><p></p></div>'
                },
                {
                    name: '无隔板过滤器（超高效/高效/亚高效/中效）',
                    url: require('../assets/tab3/list7.jpg'),
                    detail:'<div class="content"><p style="white-space: normal;"><span style="font-size: 20px;"><strong><span style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;;">设计特点：</span></strong></span><span style="font-size: 18px;"><br style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;;">●&nbsp;效率高</span><br style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;;">●&nbsp;阻力低</span><br style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;;">●&nbsp;重量轻</span><br style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;;">●&nbsp;安装方便</span><br style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;;">●&nbsp;运行成本低</span><br style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;;">Features:</span><br style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;;">●&nbsp;High efficiency</span><br style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;;">●&nbsp;Low resistance</span><br style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;;">●&nbsp;Light weight</span><br style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;;">●&nbsp;Easy to install</span><br style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;;">●&nbsp;Low cost</span><br style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;;">一般应用：</span><br style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;;">●&nbsp;电子、医药、食品等<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>高效过滤器</strong></font></a>覆盖率大的净化场合</span><br style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;;">Application:</span><br style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;; font-size: medium;"><span style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;;">●Typical applications include electronics, pharmaceuticals, foods and many other locations where ultra-clean air is a requirement.</span></span></p><p style="white-space: normal;"><span style="font-size: 18px;"><span style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;;"><span style="font-family: &quot;Microsoft YaHei&quot;, arial, 宋体, sans-serif; font-size: 12px; background-color: rgb(255, 255, 255);"><br></span></span></span></p><p style="white-space: normal;"><span style="font-size: 18px;"><span style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;;"><span style="font-family: &quot;Microsoft YaHei&quot;, arial, 宋体, sans-serif; font-size: 12px; background-color: rgb(255, 255, 255);">&nbsp; &nbsp;</span><strong style="font-family: &quot;Microsoft YaHei&quot;, arial, 宋体, sans-serif; font-size: 12px; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; border: 0px; font-size: 16px;"><span style="margin: 0px; padding: 0px; border: 0px; font-family: 宋体;">&nbsp; &nbsp; &nbsp;型号、尺寸及其他参数：（★我公司为生产厂家，可按客户要求订做各种非标尺寸）</span></span></strong><span style="font-family: &quot;Microsoft YaHei&quot;, arial, 宋体, sans-serif; font-size: 12px; background-color: rgb(255, 255, 255);">&nbsp;&nbsp;&nbsp;</span><span style="margin: 0px; padding: 0px; border: 0px; font-family: &quot;Microsoft YaHei&quot;, arial, 宋体, sans-serif; background-color: rgb(255, 255, 255); font-size: 20px;"><strong>&nbsp;</strong></span></span></span></p><p style="white-space: normal;"><span style="font-size: 18px;"><span style="color: rgb(102, 102, 102); font-family: &quot;Times New Roman&quot;;"><img src="http://www.vitefilter.cn/data/upload/image/20171205/1512465685494578.jpg" title="1512465685494578.jpg" alt="无隔板高效过滤器.jpg"></span></span></p><p><br></p></div>'
                },
                {
                    name: '无隔板过滤器-液槽型（超高效/高效）',
                    url: require('../assets/tab3/list8.jpg'),
                    detail:'<div class="content"><p><strong style="font-family: 宋体, SimSun;">液槽式无隔板<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>高效过滤器</strong></font></a>产品特点：</strong><br></p><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun; font-size: 16px;">液槽式无隔板高效过滤器外形美观、安装方便、厚度薄、重量轻、过滤效率高；</span></p><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun; font-size: 16px;">效率高、过滤面积大、使用寿命长、阻力低；</span></p><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun; font-size: 16px;">法兰内灌液槽果冻胶，环保，密封可靠，通常与刀架式框架配合使用。</span></p><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun; font-size: 16px;">应用领域：</span></p><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun; font-size: 16px;">广泛应用于垂直送风的洁净厂房终端过滤。</span></p><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun; font-size: 16px;">型号、尺寸及其他参数：（★我公司为生产厂家，可按客户要求订做各种非标尺寸）</span></p><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun; font-size: 16px;"><img src="http://www.vitefilter.cn/data/upload/image/20170918/1505730171665982.jpg" title="家用过滤器" alt="家用过滤器" width="691" height="163" border="0" vspace="0" style="width: 691px; height: 163px;"></span></p><p><br></p></div>'
                },
                {
                    name: '耐高温有隔板过滤器-250℃（高效/中效）',
                    url: require('../assets/tab3/list9.jpg'),
                    detail:'<div class="content"><p style="line-height: 2em;"><strong><span style="font-family: 宋体, SimSun;">耐高温<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>高效过滤器</strong></font></a>产品特点：</span></strong><br></p><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun; font-size: 16px;">在额定风速下使用效率可达99.99%@0.3μm；</span></p><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun; font-size: 16px;">耐高温分别有250℃和350℃；</span></p><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun; font-size: 16px;">过滤面积大，容尘量大，阻力小，使用寿命长。</span></p><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun; font-size: 16px;">结构做法简述：采用超细玻璃纤维滤纸、铝箔隔板、不锈钢或镀锌外框、特制耐高温密封胶装配而成。过滤器滤材两面180°褶翻，滤料折弯时有两道压痕，使其在隔板的尾端开成盒式褶层，可以防止滤纸破损。</span></p><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun; font-size: 16px;">应用领域：</span></p><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun; font-size: 16px;">超净烤箱、UV烤炉、隧道炉等要求高温空气净化的设备和系统之空气过滤。</span></p><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun; font-size: 16px;">型号、尺寸及其他参数：（★我公司为生产厂家，可按客户要求订做各种非标尺寸）</span></p><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun; font-size: 16px;"><img src="http://www.vitefilter.cn/data/upload/image/20170918/1505730786607083.jpg" title="家用空气过滤器" alt="家用空气过滤器" width="666" height="171" border="0" vspace="0" style="width: 666px; height: 171px;"></span></p><p style="line-height: 2em;"><font face="宋体, SimSun">耐高温高效过滤器扩展阅读：</font></p><p style="line-height: 2em;"><font face="宋体, SimSun"></font></p><p>　　　耐高温高效空气过滤器特点</p><p>　　高效耐高温过滤器使用隔板式设计，波纹形隔板可以精确地保持褶层间距，在最小阻力下，最大限度地利用滤料。过滤器滤材两面180褶翻折形成锲形褶层，滤料折弯时有两道压痕，使其在隔板的尾端开成锲形盒式褶层，锲形盒式褶层可以防止滤料破损。</p><p style="TEXT-ALIGN: center"><br></p><p style="TEXT-ALIGN: center">耐高温高效过滤器</p><p>　　不锈钢外框。</p><p>　　密封胶：耐高温型硅胶。</p><p>　　密封垫：玻璃纤维(frsi)，硅橡胶(kseries).</p><p>　　逐台激光计数效率：效率等级:H13(EN1822)。</p><p>　　连续运行最高耐温：350℃(frsi)</p><p>　　参数说明：</p><p>　　规格尺寸</p><p>　　(W×H×D)(mm)风量</p><p>　　(m&amp;sup3;/h)过滤面积</p><p>　　(㎡)容尘量</p><p>　　(g)初阻力</p><p>　　（面风速0.5m/s时）终阻力过滤效率</p><p>　　0.3&amp;micro;m</p><p>　　484×484×1203904.4230&lt;=200pa400pa&gt;=99.97%</p><p>　　610×610×1206207.1370&lt;=200Pa400Pa</p><p>　　915×610×12093010.6560&lt;=200Pa400Pa</p><p>　　1220×610×120150014.1740&lt;=200Pa400Pa</p><p>　　484×484×1505306.0320&lt;=200Pa400Pa</p><p>　　610×610×15010009.7510&lt;=200Pa400Pa</p><p>　　915×610×150150014.5770&lt;=200Pa400Pa</p><p>　　1220×610×150200019.31020&lt;=200Pa400Pa</p><p>　　484×484×22010009.8600&lt;=200Pa400Pa</p><p>　　610×610×220160015.8920&lt;=200Pa400Pa</p><p>　　915×610×220230023.71340&lt;=200Pa400Pa</p><p>　　1220×610×220300031.61750&lt;=200Pa400Pa</p><p>　　耐<strong>高温高效空气过滤器</strong>使用注意事项<strong>一、</strong>耐<strong>高温高效空气过滤器</strong><strong>效率问题</strong></p><p>　　在使用的耐250℃红色高温硅胶与耐350-400℃黑色高温无机胶因受胶水物理特性的影响（流动性太差），故250℃H13高温高效过滤器实际过滤效率在H12-H13之间；350-400℃H13高温高效过滤器实际过滤效率在H11-H12之间。</p><p>　　耐<strong>高温高效空气过滤器</strong>使用注意事项<strong>一、</strong>耐<strong>高温高效空气过滤器</strong><strong>效率问题</strong></p><p>　　在使用的耐250℃红色高温硅胶与耐350-400℃黑色高温无机胶因受胶水物理特性的影响（流动性太差），故250℃H13高温高效过滤器实际过滤效率在H12-H13之间；350-400℃H13高温高效过滤器实际过滤效率在H11-H12之间。</p><p>　　<strong>二、</strong><strong>耐<strong>高温高效空气过滤器</strong>使用前注意事项</strong></p><p>　　因耐高温高效过滤器所使用的有机硅胶及无机胶固化过程中都是从表面往里固化，注胶高度越厚，越难固化，正常情况下胶水固化时间为3-7天，如果未完全固化的高温高效过滤器直接装入到高温设备上正常使用，</p><p>　　势必会造成高温胶开裂、膨胀及胶水脱离外框等现象；针对以上问题，特做如下两点方案进行处理：</p><p>　　1高温高效过滤器需待7天后正常使用；</p><p>　　2如客户需马上安装，建议客户在使用我司耐高温高效过滤器之前务必按以下方法操作：</p><p>　　<strong>耐250℃耐高温高效空气过滤器</strong> 在高温设备内缓慢升温至100℃，然后恒温2小时后停机冷却；</p><p>　　调温至150℃ 1小时后停机冷却</p><p>　　调温至200℃ 1小时后停机冷却</p><p>　　调温至250℃ 1小时后停机冷却</p><p>　　最后缓慢冷却后，即可正常使用。</p><p>　　<strong>耐350-400℃耐高温高效空气过滤器 </strong>在高温设备内缓慢升温至100℃，然后恒温2小时后停机冷却；</p><p>　　调温至150℃ 1小时后停机冷却</p><p>　　调温至200℃ 1小时后停机冷却</p><p>　　调温至250℃ 1小时后停机冷却</p><p>　　调温至300℃ 1小时后停机冷却</p><p>　　调温至350℃ 1小时后停机冷却</p><p>　　调温至400℃ 1小时后停机冷却</p><p>　　最后缓慢冷却后，即可正常使用。</p><p style="line-height: 2em;"><font face="宋体, SimSun"><br></font><br></p><p><br></p></div>'
                },
                {
                    name: '耐高温无隔板过滤器-250℃（高效/中效）',
                    url: '',
                    detail:''
                },
            ]
        }, {
            title: '化学过滤器',
            list: [
                {
                    name: '板式活性炭过滤器',
                    url: require('../assets/tab3/content1.jpg'),
                    detail:'<div class="content"><p><strong><span style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 20px;">设计特点：</span><span style="font-size: 18px;"><span style="color: rgb(102, 102, 102); font-family: 宋体;"></span></span></strong><span style="font-size: 18px;"><br style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; white-space: normal;"><span style="color: rgb(102, 102, 102); font-family: 宋体;">●&nbsp;采用活性炭毡</span><br style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; white-space: normal;"><span style="color: rgb(102, 102, 102); font-family: 宋体;">●&nbsp;吸附能力强</span><br style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; white-space: normal;"><span style="color: rgb(102, 102, 102); font-family: 宋体;">●&nbsp;迅速处理各种有害气体，有效洁净空气</span><br style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; white-space: normal;"><span style="color: rgb(102, 102, 102); font-family: 宋体;">Features:</span><br style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; white-space: normal;"><span style="color: rgb(102, 102, 102); font-family: 宋体;">●&nbsp;Adopting activated carbon felt</span><br style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; white-space: normal;"><span style="color: rgb(102, 102, 102); font-family: 宋体;">●&nbsp;Great absorption capacity</span><br style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; white-space: normal;"><span style="color: rgb(102, 102, 102); font-family: 宋体;">●&nbsp;Getting rid of a variety of noxious gases promptly.&nbsp;</span><br style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; white-space: normal;"><span style="color: rgb(102, 102, 102); font-family: 宋体;">一般应用：</span><br style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; white-space: normal;"><span style="color: rgb(102, 102, 102); font-family: 宋体;">●&nbsp;空调通风系统异味及污染空气处理</span><br style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; white-space: normal;"><span style="color: rgb(102, 102, 102); font-family: 宋体;">●&nbsp;有害气体（如：笨、甲醛、氨气、二氧化硫、丙酮、氯化氢等）的吸附</span><br style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; white-space: normal;"><span style="color: rgb(102, 102, 102); font-family: 宋体;">Application:</span><br style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; white-space: normal;"><span style="color: rgb(102, 102, 102); font-family: 宋体;">●&nbsp;To get rid of the contaminated air of the air condition system</span><br style="color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; white-space: normal;"><span style="color: rgb(102, 102, 102); font-family: 宋体;">●&nbsp;To absorb noxious gas.</span></span></p><p><img src="http://www.vitefilter.cn/data/upload/image/20171205/1512455442737218.jpg" title="1512455442737218.jpg" alt="活性炭初效过滤器.jpg"></p><h3 style="margin: 1em 0px; padding: 0px; font-size: 1.2em; font-family: arial, tahoma, sans-serif; white-space: normal;">设计特点</h3><ol style="margin-left: 2em; padding: 0px; list-style-position: initial; list-style-image: initial; font-family: arial, tahoma, sans-serif; font-size: 14px; white-space: normal;" class=" list-paddingleft-2"><li><p>采用活性炭表面积大，吸附能力强迅速处理各种有害气体，除异味，有效洁净空气一般应用</p></li><li><p>空调通风系统异味污染空气处理有害气体（如苯、甲醛、氨气等）的吸附脱除溶剂的回收</p></li><li><p>对汽车和气味的控制</p></li></ol><h3 style="margin: 1em 0px; padding: 0px; font-size: 1.2em; font-family: arial, tahoma, sans-serif; white-space: normal;">一般应用</h3><p style="font-family: arial, tahoma, sans-serif; font-size: 14px; white-space: normal;"><strong>活性碳过滤器</strong>主要用来清除气体、掉发物、气味和烟雾，对异味的清楚使的房间回风比例增大，从而降低制热制冷的能量损耗，活性炭过滤器四氧化碳的比重达63%以上的炭，过滤器可以配合多数厂家的箱体使用。</p><h2 style="margin: 1em 0px; padding: 0px; font-size: 16px; border-bottom: 1px solid rgb(204, 204, 204); line-height: 2em; font-family: arial, tahoma, sans-serif; white-space: normal;">GC活性炭粗效过滤器型号尺寸及其他参数</h2><table width="710"><tbody><tr class="firstRow"><th rowspan="2" style="margin: 0px; padding: 3px; border-color: rgb(25, 153, 239); background: rgb(18, 106, 187); color: rgb(255, 255, 255); text-align: center;">型号</th><th rowspan="2" style="margin: 0px; padding: 3px; border-color: rgb(25, 153, 239); background: rgb(18, 106, 187); color: rgb(255, 255, 255); text-align: center;">外形尺寸mmW×H×D</th><th rowspan="2" style="margin: 0px; padding: 3px; border-color: rgb(25, 153, 239); background: rgb(18, 106, 187); color: rgb(255, 255, 255); text-align: center;">额定风量M3/h</th><th rowspan="2" style="margin: 0px; padding: 3px; border-color: rgb(25, 153, 239); background: rgb(18, 106, 187); color: rgb(255, 255, 255); text-align: center;">初阻力Pa</th><th colspan="2" style="margin: 0px; padding: 3px; border-color: rgb(25, 153, 239); background: rgb(18, 106, 187); color: rgb(255, 255, 255); text-align: center;">材料</th></tr><tr><th style="margin: 0px; padding: 3px; border-color: rgb(25, 153, 239); background: rgb(18, 106, 187); color: rgb(255, 255, 255); text-align: center;">外框</th><th style="margin: 0px; padding: 3px; border-color: rgb(25, 153, 239); background: rgb(18, 106, 187); color: rgb(255, 255, 255); text-align: center;">滤料</th></tr><tr><td rowspan="6" style="margin: 0px; padding: 3px; border-color: rgb(18, 106, 187); background: rgb(248, 248, 248);">GC</td><td style="margin: 0px; padding: 3px; border-color: rgb(18, 106, 187); background: rgb(248, 248, 248);">595×595×46</td><td style="margin: 0px; padding: 3px; border-color: rgb(18, 106, 187); background: rgb(248, 248, 248);">3200</td><td rowspan="6" style="margin: 0px; padding: 3px; border-color: rgb(18, 106, 187); background: rgb(248, 248, 248);">40</td><td rowspan="6" style="margin: 0px; padding: 3px; border-color: rgb(18, 106, 187); background: rgb(248, 248, 248);">铝合金<p><br></p><p>镀锌板</p></td><td rowspan="6" style="margin: 0px; padding: 3px; border-color: rgb(18, 106, 187); background: rgb(248, 248, 248);">活性毡</td></tr><tr><td style="margin: 0px; padding: 3px; border-color: rgb(18, 106, 187);">595×495×46</td><td style="margin: 0px; padding: 3px; border-color: rgb(18, 106, 187);">2700</td></tr><tr><td style="margin: 0px; padding: 3px; border-color: rgb(18, 106, 187); background: rgb(248, 248, 248);">595×295×46</td><td style="margin: 0px; padding: 3px; border-color: rgb(18, 106, 187); background: rgb(248, 248, 248);">1600</td></tr><tr><td style="margin: 0px; padding: 3px; border-color: rgb(18, 106, 187);">495×495×46</td><td style="margin: 0px; padding: 3px; border-color: rgb(18, 106, 187);">2200</td></tr><tr><td style="margin: 0px; padding: 3px; border-color: rgb(18, 106, 187); background: rgb(248, 248, 248);">495×295×46</td><td style="margin: 0px; padding: 3px; border-color: rgb(18, 106, 187); background: rgb(248, 248, 248);">1300</td></tr><tr><td style="margin: 0px; padding: 3px; border-color: rgb(18, 106, 187);">295×295×46</td><td style="margin: 0px; padding: 3px; border-color: rgb(18, 106, 187);">800</td></tr></tbody></table><h2 style="margin: 1em 0px; padding: 0px; font-size: 16px; border-bottom: 1px solid rgb(204, 204, 204); line-height: 2em; font-family: arial, tahoma, sans-serif; white-space: normal;">合理使用活性碳空气过滤器</h2><ol style="margin-left: 2em; padding: 0px; list-style-position: initial; list-style-image: initial; font-family: arial, tahoma, sans-serif; font-size: 14px; white-space: normal;" class=" list-paddingleft-2"><li><p>空气通过活性炭层的时间一般大于0.1秒</p></li><li><p>应预先除去空气中的粉尘和雾滴</p></li><li><p>后端安装除尘过滤器，以防可能的碳末污染通风系统</p></li><li><p>气流温度一般不大于50℃</p></li><li><p>气流相对湿度一般不大于80%</p></li><li><p>根据具体使用环境，定期更换过滤器</p></li></ol><p><br></p></div>'
                },
                {
                    name: '袋式活性炭过滤器',
                    url: require('../assets/tab3/content2.jpg'),
                    detail:'<div class="content"><p style="line-height: 2em;"><span style="line-height: 2em;">&nbsp; &nbsp;</span><strong style="line-height: 2em;">活性炭袋式过滤器产品特点</strong><span style="line-height: 2em; font-family: sans-serif;">：</span><br></p><p style="line-height: 2em;">　　1、滤料采用优质活性炭珠毡或活性炭纤维；</p><p style="line-height: 2em;">　　2、袋式结构，表面积大，吸附能力强；</p><p style="line-height: 2em;">　　3、除味效果佳，使用简便，滤料寿命长。</p><p style="line-height: 2em;">　　应用领域：</p><p style="line-height: 2em;">　　广泛用于化学、制药、食品、实验室、医院等需要净化空气之场地，有效去除空气中的恶臭物质如氨、甲硫醇、硫化氢、二甲硫、三甲硫、以及有害气体的NO 、SO2等。</p><p style="line-height: 2em;">　　型号、尺寸及其他参数：（★我公司为生产厂家，可按客户要求订做各种非标尺寸）</p><p style="line-height: 2em;"><img src="http://www.vitefilter.cn/data/upload/image/20170916/1505555440833277.jpg" title="1505555440833277.jpg" alt="333.jpg"></p><p><br></p></div>'
                },
            ]
        }, {
            title: '风机过滤单元',
            list: [
                {
                    name: '风机过滤单元FFU',
                    url: require('../assets/tab3/ur1.jpg'),
                    detail:"<p><strong><span>FFU简介：</span></strong><span>Fan Filter Unit中文意思是风机过滤单元，简称FFU，俗称层流罩。它是一种自带动力具有过滤功效的模块化末端送风装置；风机从FFU顶部将空气吸入并经过HEPA过滤，过滤后的洁净空气从出风面均匀送出；可模组化连接使用。FFU为洁净室提供洁净空气并且提供微粒过滤控制。FFU安装在洁净室的天花板上（25%到100%的覆盖率），常规尺寸为2*4英寸或4*4英寸，非标尺寸我司可按客户要求订做生产!<br>FFU应用范围：适用于从100000级到100级的各种洁净室，并可组装成超净生产线、洁净工作室、洁净棚、无尘衣柜等。</span></p>"
                },
                {
                    name: '设备端风机过滤单元EFU',
                    url: require('../assets/tab3/ur2.jpg'),
                    detail:""
                },
            ]
        }, {
            title: '空气净化设备',
            list: [
                {
                    name: '层流罩',
                    url: ''
                },
                {
                    name: '传递窗',
                    url: require('../assets/tab3/li2.jpg'),
                    detail:"<p><span>传递窗是一种洁净室的辅助设备，主要用于洁净区与洁净区之间、洁净区与非洁净区之间小件物品的传递，以减少洁净室的开门次数，把对洁净室的污染降低到低程度。传递窗采用不锈钢板制作，平整光洁。双门互为连锁，有效阻止交叉污染，设有电子或机械连锁装置，并配置紫外线杀菌灯。</span></p>"
                },
                {
                    name: '风淋室',
                    url: require('../assets/tab3/li3.jpg'),
                    detail:"<p ><span>双人双吹风淋室可以清除人身和物品表面附着的尘埃，减少带入洁净空气的灰尘量，同时兼有气闸室功能，可防止不洁净空气由门侵入，以配合洁净空调系统确保洁净室达到所需洁净度。</span></p><p ><span >设计特点：<br>安装于洁净室入口处，用于去除人体表面及货物表面尘埃的洁净室设备。<br>1、&nbsp;光电感应，自动吹淋；<br>2、&nbsp;不锈钢双门电控联锁；<br>3、&nbsp;不锈钢喷嘴<br>Features:<br>As clean room equipments, they are installed in the inlet of clean room to get rid of the dust on the goods or on the people.<br>1.Photoelectric sensor, automatic blow<br>2.Stainless steel electric interlock with two-door<br>3.Stainless steel nozzles</span></p>"
                },
                {
                    name: '洁净工作台',
                    url: require('../assets/tab3/li4.jpg'),
                    detail:"<p ><strong><span >设计特点：</span></strong><span ><br>●洁净工作台作为一种局部（垂直或水平层流）洁净装置，可使工作区达到100级的净化要求，本系列产品有两种机构方式。一种为整体型，一种为工作台与自净器分离型，更可做成客户要求的各种形式。<br>Features:<br>●Clean bench, as a partial (vertical or horizontal ones) clean equipment, can make the working area meet the requirement of 100% purification. These series include two structures: the first one is one-piece type, the other one is the one that bench and self-purified equipments are separated, various sizes and customized design are available.</span></p><p ><span ><strong><strong>水平流洁净工作台</strong>特点：</strong></span><span ><span><br></span><br>●水平层流送风，防止操作室内部样品相互交叉污染，独特的气流再循环设计，可延长过滤器的使用寿命。<br>●采用超高效无隔板过滤器，对0.3微米的颗粒过滤效率达到99.99%（操作区洁净度远高于100级）。<br>●采用触摸式控制器，可调风速风机系统，噪音低，振动小，保证工作区风速始终处于理想状态。<br>●高品质离心式，超低噪音风机。<br>●正压式过滤系统，确保工作区域为无尘无菌环境。<br>●工作台面选用进口304不锈钢材质，美观、易清理、耐腐蚀。<br>●箱体表面采用静电喷涂工艺，耐酸碱，美观大方。<br>●工作台底部配有排污口，方便清理污垢<br>●前窗采用配重平衡，可任意升降，定位灵活，配备多功能插座，为操作者提供便利。<br>●采用全钢化玻璃视窗，保证操作者的人身安全。</span></p>"
                },
                {
                    name: '一体式空气净化风口',
                    url: require('../assets/tab3/li5.jpg'),
                    detail:"<p><span>传递窗是一种洁净室的辅助设备，主要用于洁净区与洁净区之间、洁净区与非洁净区之间小件物品的传递，以减少洁净室的开门次数，把对洁净室的污染降低到低程度。传递窗采用不锈钢板制作，平整光洁。双门互为连锁，有效阻止交叉污染，设有电子或机械连锁装置，并配置紫外线杀菌灯。</span></p><p ><span>标准传递窗：</span></p><p><br><span>内胆不锈钢，外壳优质钢板喷塑<br>机械连锁或电子互锁<br>可按客户的要求，加装紫外线杀菌灯</span></p>"
                },
            ]
        }]
    }),
    created() {
        this.info = this.$route.query
    },
    methods: {
        change(type) {
            if (type == 'add') {
                this.$router.push({ path: '/goods', query: { x: this.info.x, y: Number(this.info.y) + 1 } }).catch(err => { console.log(err) })
                this.info = this.$route.query
            }
            else {
                this.$router.push({ path: '/goods', query: { x: this.info.x, y: Number(this.info.y) - 1 } }).catch(err => { console.log(err) })
                this.info = this.$route.query
            }
        },
        goLink(path) {
            this.$router.push(path)
        },
    },
}
</script>
  
<style scoped>
.title {
    padding: 20px;
    text-align: center;
    font-weight: bold;
    border-bottom: 1px solid #ccc;
}

.text-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    z-index: 999;
    position: absolute;
    top: 220px;
    left: 0;
    right: 0;
}

.between {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #2648A3;
    color: #fff;
}

.button {
    background-color: #2648A3;
    margin-top: 15px;
    color: #fff;
    width: 100px;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    border-radius: 6px;
}

.betweens {
    display: flex;
    padding: 10px;
}

.tabs {
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
    font-size: 14px;
}

.news {
    font-size: 14px;
    padding: 5px 10px;
}

.tabs:hover {
    color: #2648A3;
    background-color: #eee;
}

.content1 {
    width: 25%;
}

.content2 {
    width: 73%;
}

.info {
    padding: 0 20%;
    display: flex;
    justify-content: space-between;
    margin: 10px 0;

    img {
        width: 450px;
        height: 450px;
    }
}

.textBox {
    width: 300px;
    height: 100px;
    word-wrap: break-word;
}

.textBox span {
    color: transparent;
    /* background-image: linear-gradient(to right, blue, pink, #fff); */
    background-image: linear-gradient(to right, #fff, #fff, #fff);
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    font-size: 30px;
    background-size: 100% 100%;
    animation: bg 1000ms linear;
    position: relative;
}

@keyframes dynamicWidth {
    0% {
        left: 0;
    }

    100% {
        left: 100%;
    }
}

@keyframes bg {
    0% {
        background-size: 0% 100%;
    }

    100% {
        background-size: 100% 100%;
    }
}

.home {
    height: 70vh;
    max-height: 1440px;
}

.swiper {
    width: 100%;
    height: 100%;
    max-height: 1440px;

    .swiper-slide-img {
        width: 100%;
        height: 100%;
    }
}

.tab {
    padding: 20px 10%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.tab-title:hover {
    color: brown;
    cursor: pointer;
}

.content {
    width: 100%;
    height: 100%;
    background: url(../assets/home/background.jpg);
    padding: 20px 10%;
    box-sizing: border-box;
}

.content-flex {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
}

._show {
    width: 75%;
    height: 100%;
    margin-right: 10px;
    box-sizing: border-box;
}

.word {
    display: none;
    width: 100%;
    height: 210px;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 2;
    left: 0;
    transition: 300ms;
    top: 0;
    font-size: 20px;
    color: #fff !important;
    padding-top: 80px !important;
    text-align: center;
    box-sizing: border-box;
}

.show {
    width: 100%;
    background-color: #f4f4f4;
    margin-right: 10px;
    box-sizing: border-box;
    padding: 20px;
}

.show-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #222;
    margin-bottom: 20px;
}

.show-title img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 15px;
}

.show-text {
    text-indent: 2em;
    font-size: 16px;
    color: #222;
    line-height: 2;
}

.show-img {
    margin-top: 20px;
    width: 100%;
    object-fit: cover;
}

.show-up {
    border-top: 1px solid #eee;
    font-size: 14px;
    color: #707070;
    margin-top: 15px;
    padding-top: 5px;
    cursor: pointer;
}

.show-down {
    margin-top: 5px;
    font-size: 14px;
    color: #707070;
    cursor: pointer;
}

.list {
    width: 25%;
    border-left: 1px solid #eee;
    padding: 0 0 0 10px;
}

.list-content {
    border: 1px solid #eee;
    overflow: hidden;
}

.list-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: 300ms;
    overflow: hidden;
}

.list-item {
    overflow: hidden;
    position: relative;
}

.list-item:hover {
    cursor: pointer;

    img {
        scale: 1.1;
        transition: 300ms;
        overflow: hidden;
    }
}

.list-item:hover .word {
    display: block;
    transition: 300ms;
}

.list-item div {
    font-size: 16px;
    color: #333;
    padding: 4px 10px;
}

.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.flex div {
    font-size: 14px;
    color: #777;
    padding: 6px 10px;
}

.flex img {
    height: 10px;
    width: 25px;
}

.list-solid {
    width: 88%;
    border-bottom: 1px solid #eee;
    margin: auto;
}

@media screen and (max-width: 768px) {
    .info {
        padding: 0 10px;
        display: block;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .content {
        padding: 20px;
    }

    .content1 {
        width: 100%;
    }

    .content2 {
        width: 100%;
    }

    .content-flex {
        display: block;
        padding: 10px;
    }

    .content-flex {
        width: 100%;
    }

    ._show {
        width: 100%;
    }

    .show {
        padding: 10px;
    }

    .list {
        display: none;
    }
    .between{
        display: block;
        line-height: 1.5;
    }
}</style>
    
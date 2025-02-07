<template>
    <div class="plan">
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
    <div  class="info">
            <div class="content1">
                <div style="padding:10px;background-color: #2648A3;color: #fff;">联系我们</div>
                <div class="news">东莞市南粤净化科技有限公司</div>
                <div class="news">工厂地址:广东省东莞市麻涌镇新基北街9号</div>
                <div class="news">售前电话:13925787528&emsp;13416783698</div>
                <div class="news">售后电话:15916750164</div>
                <div class="news">邮箱:fy686@126.com</div>
            </div>
            <div class="content2">
                <div class="between">
                    <div>
                        <span>{{ title }}</span>
                    </div>
                </div>
                <div style="margin:10px 0;">
                    <div v-html="html"></div>
                </div>
                <div class="show-up" @click="going('up')">上一个：{{ tabIndex==0?'无':list[tabIndex-1].title }}</div>
                <div class="show-down" @click="going('down')">下一个：{{tabIndex==34?'无':list[tabIndex+1].title }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";

export default {
    name: "home",
    components: {},
    data: () => ({
        mySwiper: null,
        interval: null,
        title:'',
        tabIndex:0,
        under768: document.body.clientWidth < 768,
        list:[
            {
                title:'高效过滤器检漏的必要性',
                html:'<div class="content"><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;"><a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>高效过滤器</strong></font></a>检漏的必要性</span></p><p><img src="http://www.vitefilter.cn/data/upload/image/20171204/1512368356539450.jpg" style="float: right; width: 320px; height: 331px;" alt="高效过滤器" width="320" height="331" border="0" vspace="0" title="高效过滤器"></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">一、国内制药企业对高效过滤器检漏的现状</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">随着我国制药工业的发展，国内一些药厂不断对企业进行技术改造，提高产品质量。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">目前国内的大部分药品生产企业对空气净化系统安装确认的前5项内容都认真具体的执行。但是忽略了高效过滤器检漏试验，即使极少数药品生产企业在做高效过滤器检漏的时候因未配备气溶胶发生器，而是在上游尘源达不到浓度要求的情况下用粒子计数器扫描，这样极易产生漏检，甚至有些企业根本没有执行过滤器的检漏。&nbsp;</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">检漏试验是粒子测定的基础，其重要性决不亚于粒子测定。如美国联邦标准209A及209B中都先后明确指出：&nbsp;</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">二、检漏的必要性</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">GMP规定：制剂，原料药的精、烘、包，制剂所用的原辅料，直接与药品接触的包装材料的生产均应在洁净区域内进行。药品生产企业的洁净室或洁净区系指对尘粒及微生物污染需进行规定的环境控制的区域，其建筑结构、设备及其使用均具有减少对该区域污染源的介入、产生和滞留的功能。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">PAO试验在高效过滤器安装或更换后都应该进行测试，在正常使用条件下一般每年至少要做一次，看其是否发生了变化。这是一件细致繁复的工作，但它是洁净度试验的重要组成部分，不容忽视。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">三、高效过滤器检漏的原理</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">高效过滤器检漏是空气净化系统验证的重要组成部分，高效过滤器检漏测定的目的是为了通过测出允许的泄漏量，发现高效过滤器及安装的缺陷所在，以便采取补救措施。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">PAO法检漏的工作原理是：在被检测高效过滤器上风侧发生PAO气溶胶作为尘源，在下风侧用光度计进行采样，含尘气体经过光度计产生的散射光由光电效应和线性放大转换为电量，并由微安表快速显示。采集到的空气样品通过光度计的扩散室，由于粒子扩散引起灯光强度的差异，经测定这个光强度，光度计便可测得气溶胶的相对浓度。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">即PAO试验实际测得的是高效过滤器的穿透率，而高效过滤器其效率与穿透率存在以下的关系：</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">K=（1－α）×100%</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">K ：高效过滤器穿透率</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">α：高效过滤器效率</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">在空气净化工程中，PAO法主要用于高效过滤器和亚高效过滤器安装后的泄漏试验，尤其对于要求10000级或更高洁净度的层流或乱流来说，进行泄漏试验是极为重要的。PAO泄漏试验针对层流工作台、层流罩、自净器以及无菌隧道、灌装线设备上的高效过滤器。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">高效过滤器PAO渗漏试验主要是检查过滤器介质中的小针孔和其他损坏，如框架密封、垫圈密封以及过滤器构架上的漏缝。当光度计上的读数（穿透率）超过标准时就视为过滤器不合格，应进行补漏或更换。高效过滤器密封处的泄漏率应为0。高效过滤器滤料的泄漏处允许修补，但是单个泄漏泄漏处的面积不能大于总面积的1%，全部泄漏处的面积不能大于总面积的5%，否则必须更换。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">综上所述，空气净化系统验证中对高效过滤器的检漏是十分必要的，特别是对百级洁净区而言。对此，应引起有关方面的高度重视。</span></p></div>',
                des:'发布时间：2019-01-10   点击次数：222',
                text:'高效过滤器检漏的必要性一、国内制药企业对高效过滤器检漏的现状随着我国制药工业的发展，国内一些药厂不断对企业进行技术改造，提高产品质量。目前国内的大部分药品生产企业对空气净化系统安装确认的前5项内容都认真具体的执行。但是忽略了高效过滤器检漏试'
            },
            {
                title:'中效过滤器四大过滤原理',
                html:'<div class="content"><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;"><a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>中效过滤器</strong></font></a>已经普及到我们日常的各个方面，但是大家对于其工作原理又了解多少呢?空气过滤器净化事业部主管指出，日常所见的中效过滤器原理有四个，具体划分，又可以有几十种，以下我们将中效过滤器的原理做简要阐述：</span></p><p><img src="http://www.vitefilter.cn/data/upload/image/20171204/1512368356539450.jpg" style="float: right; width: 300px; height: 310px;" alt="高效过滤器" width="300" height="310" border="0" vspace="0" title="高效过滤器"></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">原理一、拦截</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">拦截是常见的中效过滤器原理，这个原理就像我们日常用的筛子一样，从上面过滤我们不需要的，从而保留我们放过我们必需的。虽然看似筛子，但是净化专家也指出，中效过滤器要比筛子更加细致和工作分明，毕竟净化环境的责任不是那么简单。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">原理二、惯性</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">惯性，在物理学中是再平常不过的流量。例如现在的中效过滤器，其中有一大部分就是使用了我们常说的惯性原理，利用分子间的惯性运动，把它们从通风口排出，从而净化身边的环境。不过有时候惯性碰撞运动怎么办呢?虽然是个疑问，但是却被中效过滤器拿来作为工作原理，因为任何物体的碰撞都会产生废品，当然也是被净化的。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">原理三、静电</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">这是一种巧妙结合的中效过滤器，虽然原理看似很简单，但是我们对于设计者也是钦佩不已，因为他改写了中效过滤器的历史，把净化技术带入一个新的领域。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">原理四、化学</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">2013的诺贝尔奖如火如荼的举行的时候，国内也将要迎来历年糟糕的天气，空气雾霾。这场雾霾让很多人看到了中效过滤器的重要性，于是纷纷购买了相应的设备。其中的化学原理的中效过滤器设备更受欢迎，因为这种设备可以有效过滤空气中的有害物质，从而减少疾病发生。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">空气过滤器首选广东维特空气过滤器,专注空气过滤器的设计和开发，专业从事空气过滤器、家用空气过滤器及工业空气过滤器，<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>高效过滤器</strong></font></a>，中效过滤器和<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>初效过滤器</strong></font></a>生产销售于一体的公司。</span></p></div>',
                des:'发布时间：2018-12-17   点击次数：231',
                text:'中效过滤器已经普及到我们日常的各个方面，但是大家对于其工作原理又了解多少呢?空气过滤器净化事业部主管指出，日常所见的中效过滤器原理有四个，具体划分，又可以有几十种，以下我们将中效过滤器的原理做简要阐述：原理一、拦截拦截是常见的中效过滤器原理'
            },
            {
                title:'初效过滤器中效过滤器,可采用亚高效过滤器替代',
                html:'<div class="content"><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;"><a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>初效过滤器</strong></font></a><a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>中效过滤器</strong></font></a>,可采用亚<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>高效过滤器</strong></font></a>替代</span></p><p><img src="http://www.vitefilter.cn/data/upload/image/20171204/1512366991553829.jpg" style="float: right; width: 300px; height: 330px;" alt="初效过滤器" width="300" height="330" border="0" vspace="0" title="初效过滤器"></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">为什么会说初效过滤器中效过滤器,可采用亚高效过滤器替代呢？很多人都应该不理解，有了解它们的朋友，知道它们的用处，高效过滤器怎样替代。下面过滤器厂家就给大家解答这个疑问。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">1、初效过滤器中效过滤器安装前，必须对洁净室进行全面清扫、擦净，净化空调系统内部如有积尘，可采用亚高效过滤器代替应再次清扫、擦净，如在技术夹层或吊顶内安装高效过滤器，则技术夹层或吊顶内也应进行全面清扫、擦净。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">2、洁净室及净化空调系统达到清洁要求后，净化空调系统必须试运转。连续运转12h以上，再次清扫、擦净洁净室后立即安装高效过滤器。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">相信大家可能都知道，在无尘车间中，过滤器是必不可少的一个组成部分。因为无尘车间要根据不同级别空气洁净度来选择空气过滤器，对于300000级空气净化处理，可采用亚高效过滤器代替高效过滤器，空气洁净度100级、10000级及100000级的空气净化处理，应采用初、中、高效过滤器三级过滤器。高效过滤器那么你知道无尘车间安装过滤器时要遵循哪些要求吗。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">3、高效过滤器的运输和存放应按照生产厂标志的方向搁置。空调过滤网运输过程中应轻拿轻放，防止剧烈振动和碰撞。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">4、高效过滤器安装前，必须在安装现场拆开包装进行外观检。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">以上就是为什么初效过滤器中效过滤器,可采用亚高效过滤器替代的原因。想了解更多关于初中高效过滤器的朋友，欢迎咨询！</span></p></div>',
                des:'发布时间：2018-12-08   点击次数：242',
                text:'初效过滤器中效过滤器,可采用亚高效过滤器替代为什么会说初效过滤器中效过滤器,可采用亚高效过滤器替代呢？很多人都应该不理解，有了解它们的朋友，知道它们的用处，高效过滤器怎样替代。下面过滤器厂家就给大家解答这个疑问。1、初效过滤器中效过滤器安装'
            },
            {
                title:'如何教大家选择空气过滤器',
                html:'<div class="content"><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">空气过滤器是指空气过滤装置，一般用于洁净车间，洁净厂房，洁净手术室、实验室及洁净室，或者用于电子机械通信设备等的防尘。有<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>初效过滤器</strong></font></a>，<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>中效过滤器</strong></font></a>，高中效过滤器，亚高效及<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>高效过滤器</strong></font></a>共五种型号。各种型号有不同的标准和使用效能。</span></p><p><img src="http://www.vitefilter.cn/data/upload/image/20171204/1512368356539450.jpg" style="float: right; width: 300px; height: 310px;" alt="空气过滤器" width="300" height="310" border="0" vspace="0" title="空气过滤器"></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">在气动技术中，空气过滤器、减压阀和油雾器称为气动三大件。为得到多种功能往往将这三种气源处理元件按顺序组装在一起，称为气动三联件。用于气源净化过滤、减压和提供润滑。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">三大件的安装顺序按进气方向依次为空气过滤器、减压阀、油雾器。三大件是多数气动系统中不可缺少的气源装置，安装在用气设备近处，是压缩空气质量的保证，其设计和安装，除确保三大件自身质量外，还要考虑节省空间、操作安装方便、可任意组合等因素。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">大家知道应该如何选购空气过滤器吗？下面，初效过滤器厂家清霖实业教您选购空气过滤器的六大技巧：</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">1、高效空气过滤器选用的主要控制参数有过滤效率、额定风量、额定风量下的初阻力、容尘量等，这要根据您的具体使用环境来看这些参数是否合适以及是否合乎相关规范。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">2、高效空气过滤器常用滤料有超细玻维璃纤等，您可以具体了解超细玻维璃纤后，对产品的优劣做出判断。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">3、按GB/T6165-1985《高效空气过滤器性能试验方法 透过率和阻力》规定的方法检验,透过率≤0.1%(即效率≥99.9%)或对粒径≥0.1μm微粒的计数透过率≤0.001%(即效率≥99.999%)的过滤器为高效空气过滤器。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">4、设计时,可按初阻力的二倍为终阻力,作为过滤器的计算阻力。高效空气过滤器初阻力不得超过产品样本阻力的10%。高效空气过滤器不宜单独使用,高效空气过滤器宜设置在净化空调系统的末端。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">5 、空气过滤器应符合防火要求,高效空气过滤器按耐火程度分为三级:1级过滤器,过滤器全部材料都是不燃性的,不燃性材料应符合GB8624-1997 A级。2级过滤器,过滤器滤料应为符合GB8624-1997 A级的不燃性材料,分隔板、框架可用符合GB8624-1997 B2级的可燃性材料。3级过滤器,过滤器全部材料可用符合GB8624-1997 B3级。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">6、容尘量厂家应提供高效过滤器出厂时检漏证明材料，在一般非平行流洁净空调系统中多采用组合的过滤器风口。</span></p><p><br></p></div>',
                des:'发布时间：2018-12-05   点击次数：265',
                text:'空气过滤器是指空气过滤装置，一般用于洁净车间，洁净厂房，洁净手术室、实验室及洁净室，或者用于电子机械通信设备等的防尘。有初效过滤器，中效过滤器，高中效过滤器，亚高效及高效过滤器共五种型号。各种型号有不同的标准和使用效能。在气动技术中，空气过'
            },
            {
                title:'影响高效过滤器过滤效率的因素',
                html:'<div class="content"><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">影响<a href="https://www.nyjh.cc/" target="_self"><strong></strong></a><strong><a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>高效过滤器</strong></font></a></strong>过滤效率的因素</span></p><p><img src="http://www.vitefilter.cn/data/upload/image/20171106/1509935209175300.png" style="float: right; width: 300px; height: 276px;" alt="高效过滤器" width="300" height="276" border="0" vspace="0" title="高效过滤器"></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">高效过滤器主要用于捕集0.5um以下的颗粒灰尘及各种悬浮物，并且采用超细玻璃纤维纸作滤料，胶版纸、铝膜等材料作分割板，与木框铝合金胶合而成。那影响高效过滤器设备过滤效率的因素都有哪些呢?</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">一：过滤材料</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">过滤材料的选择与应用，是袋式收尘设备的核心技术，对高效空气过滤器收尘器的性能起着决定性的作用。因各粉尘收尘点的环境，处理粉尘的性质、温度、技术要求不一样，要针对不同的条件，选择不同的过滤材料，并采取相应的技术保护措施。对过滤材料的要求包括以下技术性能：过滤袋材料适用于不同的温度、剥离性好、易清灰、透气性好、阻力低、过滤效率高、强度高、能承受高强度清灰、使用寿命长、价格适宜。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">二：漏风</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">漏风直接影响收尘器的收尘效果和寿命，要求漏风率&lt;3%。袋式收尘器一般都是负压运行，如漏风易形成小回路短路。收尘系统处理风量不够，形成正压扬尘。漏风还会降低系统温度，易结潮糊袋，增大收尘阻力，降低高效过滤器设备过滤效果。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">三：过滤风速</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">高效过滤器过滤风速是决定收尘器性能的一个很重要参数，也是衡量袋式收尘器先进性的一个重要参数。过滤风速与含尘气体的含尘浓度、灰尘颗粒粒度、应用场合、黏度、气体温度、水分含量和清灰方式有密切关系。当粉尘粒度较细，温度、湿度较高，浓度大，黏性较大时，过滤风速应取低些，反之可选高值。过滤风速过大，会加重滤袋负荷，增加过滤阻力，导致滤袋使用寿命短、效率低。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">影响高效过滤器效率的因素就是以上三个。当我们在使用过程中需要留意以上的问题，不要当故障出现以后才检测。</span></p><p><br></p></div>',
                des:'发布时间：2018-11-28   点击次数：221',
                text:'影响高效过滤器过滤效率的因素高效过滤器主要用于捕集0.5um以下的颗粒灰尘及各种悬浮物，并且采用超细玻璃纤维纸作滤料，胶版纸、铝膜等材料作分割板，与木框铝合金胶合而成。那影响高效过滤器设备过滤效率的因素都有哪些呢?一：过滤材料过滤材料的选择'
            },
            {
                title:'如何清洁高效过滤器',
                html:'<div class="content"><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">现在我们在网上一搜几页都是<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>高效过滤器</strong></font></a>，但为什么这么多过滤器厂家都在网站宣传呢？现在很多人都知道吧！当我们需要时我们都会在网上找，那你有找到如何清洁高效过滤器的文章吗？下面就带大家看一下过滤器厂家介绍的。</span></p><p><img src="http://www.vitefilter.cn/data/upload/image/20171204/1512368356539450.jpg" style="float: right; width: 300px; height: 310px;" alt="高效过滤器" width="300" height="310" border="0" vspace="0" title="高效过滤器"></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">高效过滤器清洁的目的：建立高效过滤器出口清洁更换操作规程，确保洁净室（区）空气洁净度达到复合要求或层流速度达到符合规定。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">高效过滤器的清洁时怎样的？</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">1、当高效过滤器的空气速度下降到最小值或空气体积为原空气体积的70%时，应更换初始和<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>中效过滤器</strong></font></a>和调节静压箱的空气体积控制阀。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">2、车间停工、空调净化装置停止运行时，必须更换。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">3、更换高效过滤器后，只有在检漏合格后才能投入使用。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">4、高效过滤器导流板的清洗：去除高效过滤器导流板的螺钉，去除导流板，擦拭导流板清洗，并将其放回原位。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">5、高效过滤器的维护：当粉尘粒子的检测不合格并且确认它是由高效过滤器的泄漏引起时，应按照《高效过滤器捡漏操作规程》进行操作，找出泄漏点。当框架泄漏时，紧固螺钉拧紧。密封剂的泄漏点可通过滤清器表面的泄漏来密封。如果泄漏点太多，无法修复，应该更换。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">6、拆卸导流板，松开紧固螺母，拆卸原高效过滤器，安装新型高效过滤器，拧紧螺母，安装导流板。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">7、记录：填写空调过滤器的清洁更换记录。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">以上就是我们在清洁高效过滤器时需要做的，还有我们在生活中还有经常查看高效过滤器的使用情况。以免出现故障。</span></p><p><br></p></div>',
                des:'发布时间：2018-11-27   点击次数：216',
                text:'现在我们在网上一搜几页都是高效过滤器，但为什么这么多过滤器厂家都在网站宣传呢？现在很多人都知道吧！当我们需要时我们都会在网上找，那你有找到如何清洁高效过滤器的文章吗？下面就带大家看一下过滤器厂家介绍的。高效过滤器清洁的目的：建立高效过滤器出'
            },
            {
                title:'高效过滤器的更换周期，你知道吗?',
                html:'<div class="content"><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;"><a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>高效过滤器</strong></font></a>的更换周期，你知道吗?</span></p><p><img src="http://www.vitefilter.cn/data/upload/image/20171106/1509935209175300.png" style="float: right; width: 306px; height: 282px;" alt="初效过滤器" width="306" height="282" border="0" vspace="0" title="初效过滤器"></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">洁净室对环境的湿度、温度、新鲜空气量、状态、照度等都有严格的规定，保证了产品的生产质量和人员工作环境的舒适。整个洁净室系统配有一套采用<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>初效过滤器</strong></font></a>、<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>中效过滤器</strong></font></a>、高效过滤器的三级过滤器的空气净化系统，控制洁净区内尘粒数以及沉降菌和浮游菌数等，作为末端过滤装置高效过滤器决定着整个净化系统的运行效果，因此对于高效过滤器的更换时间把握就非常的重要。&nbsp;</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">&nbsp;一,我们从高效空气过滤器说起,在洁净无尘室中,无论是安装在净化空调机组未端的大风量高效空气过滤器还是安装在<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>高效送风口</strong></font></a>的高效空气过滤器,这些必需要有准确性的运行时间记录和洁净度及风量作为更换依据,如在常态的使用情况下,高效过滤器的使用寿命可以长达一年以上,如前端保护做的好高效过滤器的使用寿命可以长达二年以上一点问题也没有,当然这也要视高效空气过滤器的质量好坏而定,或许更长;&nbsp;</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">二,安装在净化设备中的高效空气过滤器,例如全自动风淋室里的高效过滤器,如果前端初效过滤器保护做的好高效过滤器的使用寿命可以长达二年以上。净化工作台上的高效过滤器,我们可以通过净化工作台上的压差表的提示来更换高效过滤器,洁净棚上的高效过滤器可通过高效空气过滤器的检测风速来决定空气过滤器更换的时间，如是<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>FFU风机</strong></font></a>过滤单元机组上的高效空气过滤器更换更是通过PLC控制系统中的提示或者压差表的提示来更换高效空气过滤器。&nbsp;</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">三、我们一些有经验的空气过滤器安装人员总结了宝贵的经验，在这里给大家介绍一下，希望可以帮您在把握空气过滤器更换的时间上更加准确，在空调机组中当压差表展现，空气过滤器阻力抵达初阻力的2～3倍时，应中止维护或改换空气过滤器。&nbsp;</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">以上是高效过滤器的更换周期的方法你有了解吗？想了解更多关于高效过滤器的，可以来电咨询！</span></p><p><br></p></div>',
                des:'发布时间：2018-11-24   点击次数：415',
                text:'高效过滤器的更换周期，你知道吗?洁净室对环境的湿度、温度、新鲜空气量、状态、照度等都有严格的规定，保证了产品的生产质量和人员工作环境的舒适。整个洁净室系统配有一套采用初效过滤器、中效过滤器、高效过滤器的三级过滤器的空气净化系统，控制洁净区内'
            },
            {
                title:'什么影响着高效过滤器的过滤效率呢?',
                html:'<div class="content"><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">现在市场上有多种过滤器。由于不同的过滤器所适用的过滤环境不同，因此选择时应严格区分。据调查，市场上的<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>高效过滤器</strong></font></a>是比较流行的过滤设备之一、主要用于收集0.5μm以下的粉尘颗粒及各种悬浮物，采用超细玻璃纤维纸作为过滤材料，胶印纸、铝膜等材料作为隔板，并用木架铝合金胶粘。那你知道影响过滤器效率的原因吗？</span></p><p><img src="http://www.vitefilter.cn/data/upload/image/20180224/1519460542908421.jpg" style="float: right; width: 360px; height: 289px;" alt="高效过滤器" width="360" height="289" border="0" vspace="0" title="高效过滤器"></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">1、滤袋材料</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">滤袋材料的选择和应用是袋式除尘设备的核心技术，对高效<a href="/product/cpfl1120/" target="_self">空气过滤器</a>的性能起着决定性的作用。由于集尘点的环境不同，对除尘的性质、温度和技术要求也不同，应根据不同的条件选择不同的过滤材料，并采取相应的技术保护措施。对滤袋材料的要求包括以下技术性能：滤袋材料适合于不同温度，良好的剥离性，易除灰，良好的透气性，低阻力，高过滤效率，高强度，能承受高强度的除灰，使用寿命长，价格合理。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">2、漏风</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">漏风直接影响除尘器的除尘效果和寿命，漏风率为&lt;3%。袋式收尘器一般在负压下运行，如漏气。集尘系统风量不足，形成正压扬尘。漏风还会降低系统温度，容易潮糊袋，增加集尘阻力，降低过滤设备的高效过滤效果。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">3、过滤速度</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">高效过滤器的风速是决定过滤器性能的重要参数，也是衡量袋式收尘器性能的重要参数。过滤风速与含尘气体的粉尘浓度、粒径、应用场合、粘度、气体温度、含水量、除尘方法等密切相关。当粉尘粒径越细、温湿度越高、浓度越高、粘度越大时，过滤风速越低，否则可以选择高值。如果风速过高，则会增加滤袋的负荷，增加滤袋的阻力，导致滤袋使用寿命短，效率低。</span></p><p><br></p></div>',
                des:'发布时间：2018-11-16   点击次数：265',
                text:'现在市场上有多种过滤器。由于不同的过滤器所适用的过滤环境不同，因此选择时应严格区分。据调查，市场上的高效过滤器是比较流行的过滤设备之一、主要用于收集0.5μm以下的粉尘颗粒及各种悬浮物，采用超细玻璃纤维纸作为过滤材料，胶印纸、铝膜等材料作为'
            },
            {
                title:'怎样判断是否合格的高效过滤器',
                html:'<div class="content"><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">由于使用场所要求严格，<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>高效过滤器</strong></font></a>出厂前必须经过逐台检测，通过标准后才能投入使用。过滤器的测试包括出厂测试和现场测试。在这两个测试过程中，滤波器失效的原因可能如下。</span></p><p><img src="http://www.vitefilter.cn/data/upload/image/20171129/1511927596683400.jpg" style="float: right; width: 273px; height: 273px;" alt="高效过滤器" width="273" height="273" border="0" vspace="0" title="高效过滤器"></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">一、原材料本身原因<br></span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">（1）过滤材料本身效率低。如果过滤材料本身的效率不能满足要求（高效滤材的定义：在5.3cm/s风速下检测，对0.3μm粉尘过滤效率≥99.97%），就无法生产出合格的过滤器。这一原则对每个人都是清楚的，但一些市场上标明了高效率却达不到高效率的过滤材料。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">（2）材料粉尘。传统上，有一个带有隔板的高效过滤器。如果纸隔板没有严格控制，纸隔板有粉尘的危险。过滤材料的生产环境较差。过滤材料本身携带大量的灰尘，可能会脱落。所制成的过滤器也可能产生粉尘。值得注意的是，一些检测方法无法检测到这种粉尘。<br></span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">二、测试本身的问题。<br></span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">（1）出厂检查时，如果采用扫描检测方法，则过滤器出口表面可能存在涡流，周围灰尘随涡流进入扫描区域。如果存在涡流，则扫描时灰尘必须超过标准。此时，你不能确定灰尘是否来自滤嘴漏泄点或涡流。没有经验的操作者可能判断一个好的过滤器是一个废物。国外一些厂家为了消除涡流引起的误判，将过滤器试验台置于洁净室中。国内吵架并不那么奢侈，所以我们必须采取措施消除涡流。<br></span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">（2）在许多情况下，安装过滤器后，人们利用下游的粉尘浓度来判断过滤器是否合格。即使过滤器的效率合格，也可能因为下游浓度高而被误判为不合格。<br></span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">三、目视检查和简单试验可以找出原因。<br></span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">（1）过滤材料表面破损或轻微损坏。用肉眼观察过滤材料的损伤比较容易，修复少量的损伤比较容易，最好在过滤厂进行。一些轻微的破损不易观察，只能在检测后检测到。<br></span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">（2）过滤材料在生产过程中太重，或某些人为因素会损坏过滤材料。如果只有少数地方受损，不严重，有可能修复合格的产品，但修复质量应符合标准要求。<br></span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">（3）密封缺陷、过滤材料与过滤器外框之间的漏气。在生产检验中，大部分的不合格率是由这种泄漏引起的。大部分病例可修复，但修复后外观无明显缺陷。<br></span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">（4）在密封胶接缝处过滤漏气。许多高效过滤器在边界上有密封胶条。有时接口不好处理，这可能导致空气泄漏。一些厂家使用现场发泡聚氨酯密封条，没有接头，并且没有空气泄漏问题。如果使用带有接头的粘合带，则接头应该是迷宫式的。<br></span></p><p><br></p></div>',
                des:'发布时间：2018-11-12   点击次数：239',
                text:'由于使用场所要求严格，高效过滤器出厂前必须经过逐台检测，通过标准后才能投入使用。过滤器的测试包括出厂测试和现场测试。在这两个测试过程中，滤波器失效的原因可能如下。一、原材料本身原因（1）过滤材料本身效率低。如果过滤材料本身的效率不能满足要求'
            },
            {
                title:'初效过滤器能否清洗呢？',
                html:'<div class="content"><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">在使用<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>初效过滤器</strong></font></a>的过程中，我们可以选择清洗它而不改变过滤材料吗？</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">初效过滤器又称初效过滤网，适用于空调系统的初滤，主要用于过滤5微米以上的尘埃颗粒。初效过滤器有三种类型：板式、折叠式和袋式。外框材料为纸架、铝框和镀锌铁框。过滤材料为无纺布、尼龙网、活性炭过滤材料、金属网等。防护屏有双面喷丝网和双面镀锌丝网。其主要原因是坚固耐用，节约成本。由于采用金属框架，只要达到过滤寿命，只需更换内部过滤元件，从而节省成本。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">初效过滤器是用金属材料制成的框架。理论上，过滤材料的选择基本上与一次性纸框的选择基本相同。金属框架结构和成本受到限制。无纺布通常用作金属框架的初滤器的过滤材料。但有一点需要注意的是，一些用户总是要求过滤器制造商使用可冲洗的过滤材料。原则上，任何过滤材料只要经过水洗（包括漂洗），其过滤性能就会大大降低，因此所有参数都会恶化，严重时将直接导致过滤器的拒收。即使一些过滤材料可以洗涤，过滤成本也会严重降低。不建议为了这种杀鸡取卵方法的长寿而牺牲过滤性能，正确的使用方法是更换过滤器。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">初效过滤器采用无纺布、玻璃纤维作为过滤材料，楔形折叠成型以增加过滤面积，金属丝网夹持或内置金属框架支撑，采用金属框架，制成平板结构。本实用新型具有阻力小、寿命长、可洗、经济耐用等优点。初始粗效果空气过滤器一般用于中央空调和中央通风系统的预过滤、燃气轮机和空气压缩机的预过滤。主效空气滤清器的结构一般分为龙骨骨架和骨架骨架。龙骨架的特点是过滤材料的分布均匀、均匀，但生产时间昂贵。该框架骨架的特点是更换过滤材料方便，省时且强度比龙骨架稍差。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">活性炭过滤网可洗无纺布、活性炭、合成纤维、化纤（进口）、玻璃纤维（进口）、锦纶凸网（尼龙网）。常用的是无纺布和玻璃纤维。效率可以达到粗或中等效率。</span></p><p style="line-height: 1.75em; text-indent: 2em;"><img src="http://www.vitefilter.cn/data/upload/image/20171129/1511927596635720.jpg" alt="初效过滤器,高效过滤器,中效过滤器" width="394" height="394" border="0" vspace="0" title="初效过滤器,高效过滤器,中效过滤器" style="width: 394px; height: 394px;"></p><p><br></p></div>',
                des:'发布时间：2018-10-27   点击次数：314',
                text:'在使用初效过滤器的过程中，我们可以选择清洗它而不改变过滤材料吗？初效过滤器又称初效过滤网，适用于空调系统的初滤，主要用于过滤5微米以上的尘埃颗粒。初效过滤器有三种类型：板式、折叠式和袋式。外框材料为纸架、铝框和镀锌铁框。过滤材料为无纺布、尼'
            },
            {
                title:'袋式过滤器结构与作用',
                html:'<div class="content"><p><strong><span style="font-family: arial, helvetica, sans-serif; font-size: 20px;">坚固构造确保其可靠性能</span></strong></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 20px;">用柳钉胶角固定以增加强度，同时消除锋利的棱边并<span style="font-family: sans-serif; font-size: 20px;">防止了空气泄漏或因风阻压力造成破损的情况发生</span></span></p><p><span style="font-family: sans-serif;"><img src="http://www.vitefilter.cn/data/upload/image/20180421/1524276340963528.jpg" title="1524276340963528.jpg" alt="DSC_6540.jpg"></span></p><p><span style="font-size: 20px;"><strong><span style="font-family: sans-serif;">支撑条 分隔片</span></strong></span></p><p><span style="font-family: sans-serif; font-size: 20px;"></span></p><p><span style="font-size: 20px;">滤袋间以金属条固定，增加滤网强度，并防<span style="font-size: 20px; font-family: sans-serif;">止滤袋于高风速时，因风切之摩擦力而破裂；</span></span></p><p><br></p><p><span style="font-size: 20px;">每个滤袋均有隔片平均分于袋宽中，防止滤袋<span style="font-size: 20px; font-family: sans-serif;">随风压过度膨胀/相互遮蔽,降低有效过滤面积与效率</span></span></p><p><span style="font-family: sans-serif;"><br></span><img src="http://www.vitefilter.cn/data/upload/image/20180421/1524276652180198.jpg" title="1524276652180198.jpg" alt="DSC_6536.jpg"></p><p><strong><span style="font-size: 20px;">超音波封边</span></strong></p><p><span style="font-size: 20px;">每个滤袋边均采用超音波方式熔合，<span style="font-size: 20px; font-family: sans-serif;">具有良好之气密性及结合强度</span></span></p><p><img src="http://www.vitefilter.cn/data/upload/image/20180421/1524276668597489.jpg" title="1524276668597489.jpg" alt="DSC_6538.jpg"></p></div>',
                des:'发布时间：2018-04-21   点击次数：157',
                text:'坚固构造确保其可靠性能用柳钉胶角固定以增加强度，同时消除锋利的棱边并防止了空气泄漏或因风阻压力造成破损的情况发生支撑条分隔片滤袋间以金属条固定，增加滤网强度，并防止滤袋于高风速时，因风切之摩擦力而破裂；每个滤袋均有隔片平均分于袋宽中，防止'
            },
            {
                title:'风淋室',
                html:'<div class="content"><p><strong><span style="font-size: 20px; font-family: arial, helvetica, sans-serif;">坚固构造确保其可靠性能</span></strong></p><p><span style="font-size: 20px; font-family: arial, helvetica, sans-serif;">产品功能自动化、智能化，材质外部为冷轧钢板烤漆内部<span style="font-size: 20px; font-family: sans-serif;">为优质304不锈钢，采用360度旋转喷嘴联锁控制、彩色七寸液晶触摸式控制、红外线自动感应装置等，有效进行人体净化和防空气污染，为企业工作场地达到严格的无尘净化标准。</span></span></p><p><img src="http://www.vitefilter.cn/data/upload/image/20180421/1524293947516691.jpg" title="1524293947516691.jpg" alt="2.jpg"></p><p><strong><span style="font-size: 20px; font-family: arial, helvetica, sans-serif;"><a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>高效过滤器</strong></font></a>过滤</span></strong></p><p><span style="font-size: 20px; font-family: arial, helvetica, sans-serif;">高速洁净气流经高效过滤器过滤后<span style="font-size: 20px; font-family: sans-serif;">由可旋转喷嘴从各个方向喷射至人身上</span></span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 20px;"><img src="http://www.vitefilter.cn/data/upload/image/20180421/1524294350874996.jpg" title="1524294350874996.jpg" alt="3.jpg"></span></p><p><strong><span style="font-size: 20px; font-family: arial, helvetica, sans-serif;">电子互锁</span></strong></p><p><span style="font-size: 20px; font-family: arial, helvetica, sans-serif;">两道门电子互锁可以兼起气闸室的<span style="font-size: 20px; font-family: sans-serif;">作用，防止未被净化的空气进入洁净室，降低人员出入洁净室过程中尘埃对洁净室的污染。</span></span></p><p><br></p></div>',
                des:'发布时间：2018-04-21   点击次数：155',
                text:'坚固构造确保其可靠性能产品功能自动化、智能化，材质外部为冷轧钢板烤漆内部为优质304不锈钢，采用360度旋转喷嘴联锁控制、彩色七寸液晶触摸式控制、红外线自动感应装置等，有效进行人体净化和防空气污染，为企业工作场地达到严格的无尘净化标准。高效'
            },
            {
                title:'FFU风机过滤单元构造',
                html:'<div class="content"><p><span style="font-family: arial, helvetica, sans-serif; font-size: 20px;"><strong>坚固构造确保其可靠性能</strong></span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 20px;">采用柳钉固定，加装提手，壳体结构选用不锈钢、铝合金、<span style="font-family: sans-serif; font-size: 20px;">覆铝锌板、冷轧钢板，冷板静电喷塑材料制造，重量轻、抗腐蚀、防锈、美观大方。</span></span></p><p><span style="font-family: sans-serif;"><br></span></p><p><span style="font-family: sans-serif;"><img src="http://www.vitefilter.cn/data/upload/image/20180419/1524118372863423.jpg" title="FFU风机过滤单元.jpg" alt="FFU风机过滤单元.jpg" width="850" height="338" border="0" vspace="0" style="width: 850px; height: 338px;"></span></p><p><span style="font-size: 20px;"><strong><span style="font-family: sans-serif;">安全护网 低噪音风机</span></strong></span></p><p><span style="font-family: sans-serif; font-size: 20px;"></span></p><p><span style="font-size: 20px;">进风口安全护网，采用多翼式涡轮节能<span style="font-size: 20px; font-family: sans-serif;">风机风压扩散均匀，出封面风速均匀稳定</span></span></p><p><span style="font-family: sans-serif;"><img src="http://www.vitefilter.cn/data/upload/image/20180419/1524118452487219.jpg" title="FFU风机过滤单元 安全护网.jpg" alt="FFU风机过滤单元 安全护网.jpg" width="850" height="319" border="0" vspace="0" style="width: 850px; height: 319px;"></span></p><p><strong><span style="font-size: 20px; font-family: sans-serif;">三挡可调 <a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>高效过滤器</strong></font></a>过滤</span></strong><span style="font-size: 20px; font-family: sans-serif;"><br></span></p><p><span style="font-family: sans-serif; font-size: 20px;"></span></p><p><span style="font-size: 20px;">风机从FFU顶部将空气吸入并经HEPA<span style="font-size: 20px; font-family: sans-serif;">过滤，过滤后的洁净空气从出风面均匀送出</span></span></p><p><br></p><p><img src="http://www.vitefilter.cn/data/upload/image/20180419/1524118861815670.jpg" title="过滤机组.jpg" alt="过滤机组.jpg" width="850" height="572" border="0" vspace="0" style="width: 850px; height: 572px;"></p><p><!--StartFragment--><span style="font-size: 20px;"><strong><span style="color: rgb(51, 51, 51); font-family: arial, sans-serif; orphans: 2; text-indent: 28px; widows: 2; background-color: rgb(255, 255, 255);">概述</span></strong></span><strong style="font-size: 20px;"><span style="color: rgb(51, 51, 51); font-family: arial, sans-serif; orphans: 2; text-indent: 28px; widows: 2; background-color: rgb(255, 255, 255);">：</span></strong></p><p><span style="font-size: 20px; color: rgb(51, 51, 51); font-family: arial, sans-serif; orphans: 2; text-indent: 28px; widows: 2; background-color: rgb(255, 255, 255);">·风机过滤单元(FFU)是一种空气自净装置，可室内吊顶安装或放置在支架上，使局部级别达到百级。</span></p><p><span style="color: rgb(51, 51, 51); font-family: arial, sans-serif; font-size: 20px; orphans: 2; text-indent: 28px; widows: 2; background-color: rgb(255, 255, 255);"><!--StartFragment-->·也可用于洁净室末端送风。该产品设有初、高效两级过滤装置。风机从顶部将空气吸入并经初、高效过滤器过滤，过滤后的洁净空气在整个出风口送出。安装方式有悬挂式和落地支架两种。<!--EndFragment--></span></p></div>',
                des:'发布时间：2018-04-19   点击次数：272',
                text:'坚固构造确保其可靠性能采用柳钉固定，加装提手，壳体结构选用不锈钢、铝合金、覆铝锌板、冷轧钢板，冷板静电喷塑材料制造，重量轻、抗腐蚀、防锈、美观大方。安全护网低噪音风机进风口安全护网，采用多翼式涡轮节能风机风压扩散均匀，出封面风速均匀稳定三'
            },
            {
                title:'购买高效过滤器合格标准检验',
                html:'<div class="content"><p><!--StartFragment --></p><p style="text-indent: 2em;"><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">当我们购买回来了一个<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>高效过滤器</strong></font></a>，但是对于行外的我们不懂行内的标准，怎么才能判定自己买回来的产品是一个合格的产品，而不是一个次品呢？下面维特净化为大家普及。<br><br>那么首先我们要知道一个合格高效过滤器的有什么特点，有什么性能，外观是什么样的类型等等的问题，当我们知道了这些星盟特征的时候在判定一台高效过滤器是否是优质产品就容易多了。<br><br>1.外观判定<br><br>当我们收到或是购买高效过滤器的时候我们通常都会先看产品的外观，包装，检查是否有破损、压伤、划破、锈斑、涂层，框架是否变形晃动等问题，如有问题就可以判定为不合格产品了。<br><br>2.厂家基本配置<br><br>产品上是否张贴有型号，风量，气流等标识，张贴的标识是否完整，产品配套的合格证保修可，说明说等是否齐全，如果连最基本的东西都没有又如何判定该产品为合格产品？更有可能类似食品行业判定为三无产品了。<br><br>3.密封效果<br><br>高效过滤器铝板与外框之间的接缝是否有缝隙、孔洞，如有，则判定为不合格产品。高效过滤器与框架之间的密封胶条是否紧密连接，无断裂。<br><br>4.滤纸<br><br>滤纸层数是否符合要求，纸隔板的高度在4.0-4.5mm之间。同时查看滤纸是否有破损，是否有污迹，是否有脱屑，是否有打胶，是否有补丁平齐均匀，密封胶整齐，不裂纹。<br><br>5.检验规则<br><br>高效过滤器全数检验&nbsp;</span></p><p><!--EndFragment--></p><p style="text-align: right;"><img src="http://www.vitefilter.cn/data/upload/image/20180303/1520038856450013.jpg" title="高效过滤器.jpg" alt="高效过滤器.jpg" width="380" height="305" border="0" vspace="0" style="width: 380px; height: 305px;"></p></div>',
                des:'发布时间：2018-03-03   点击次数：176',
                text:'当我们购买回来了一个高效过滤器，但是对于行外的我们不懂行内的标准，怎么才能判定自己买回来的产品是一个合格的产品，而不是一个次品呢？下面维特净化为大家普及。那么首先我们要知道一个合格高效过滤器的有什么特点，有什么性能，外观是什么样的类型等等的'
            },
            {
                title:'选择无隔板高效过滤器需记住六点',
                html:'<div class="content"><p style="text-indent: 2em;"><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">近年来生活水平逐步提高，现在大家也对自己的生活有很高的品质要求，都希望能在一个良好的环境生活。如今<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>高效过滤器</strong></font></a>是一种不错的净化设备，能够为用户带来极佳的生活和工作环境。今天小编带大家了解的是无隔板高效过滤器的使用效果，我们如何选择？相信这对大家有一定帮助。</span></p><p style="text-indent: 2em;"><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">首先我们了解下无隔板高效过滤器的结构：无隔板主要采用热溶胶作为滤芯的分隔物，便于机械化生产。加之其具有体积小、重量轻、便于安装、效率稳定、风速均匀的优点，目前洁净厂房所需的大批量的过滤器多采用无隔板结构。</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">然后我们再了解它的拦截原理：空气中的尘埃粒子，随气流作惯性运动或无规则布朗运动或受某种场力的作用而移动，当微粒运动撞到其它物体，物体间存在的范德华力（是分子与分子、分子团与分子团之间的力）使微粒粘到纤维表面。进入过滤介质的尘埃有较多撞击介质的机会，撞上介质就会被粘住。较小的粉尘相互碰撞会相互粘结形成较大颗粒而沉降，空气中粉尘的颗粒浓度相对稳定。室内及墙壁的退色就因为这原因。</span></p><p style="text-indent: 2em;"><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">到这里相信大家对无隔板也不陌生了，从以上介绍了它的结构和工作时拦截的原理，我们还有一个问题没有解决，我们如何选择无隔板高效过滤器？请各位购买前务必记住以下六点！</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">第一点：选定所需的过滤器效率：H13-U15，及滤芯材质：玻纤或PP</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">第二点：确定所需过滤器所需风量（额定风量0.45m/s以下）</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">第三点：确定过滤器外框材质，标准为铝合金框</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">第四点：确定过滤器滤芯护网材质，标准为喷塑方格网</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">第五点：确定所需过滤器的尺寸及安装方式是否合适</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">第六点：确定过滤器有无特殊要求，如液槽密封、DOP检测等</span></p><p style="text-align: right;"><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;"><img src="http://www.vitefilter.cn/data/upload/image/20180302/1519955440388779.jpg" title="高效过滤器.jpg" alt="高效过滤器.jpg" width="400" height="401" border="0" vspace="0" style="width: 400px; height: 401px;"></span></p><p><br></p></div>',
                des:'发布时间：2018-03-02   点击次数：151',
                text:'近年来生活水平逐步提高，现在大家也对自己的生活有很高的品质要求，都希望能在一个良好的环境生活。如今高效过滤器是一种不错的净化设备，能够为用户带来极佳的生活和工作环境。今天小编带大家了解的是无隔板高效过滤器的使用效果，我们如何选择？相信这对大'
            },
            {
                title:'初效、中效、高效过滤器更换周期',
                html:'<div class="content"><p style="text-indent: 2em;"><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">每种设备都有着自身的价值，但是在使用过程中，如果没有在正确的寿命范围使用，肯定对效率有所影响；总所周知，寿命的长短不是绝对的，是根据自身使用的一个环境等等一些因素来决定的，如果没有正确的保养，肯定会缩短使用寿命。下面给大家普及下空气滤网及空气过滤器的更换周期：</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">1、根据环境的洁净度，一般定期（<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>初效过滤器</strong></font></a>一般为1-6个月，<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>中效过滤器</strong></font></a>一般为3-8个月，<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>高效过滤器</strong></font></a>一般为6-12个月）更换过滤器。</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">&nbsp; &nbsp; &nbsp;</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">2、定期（一般每周测试一次）用激光尘埃粒子计数器测定用本产品实施净化的洁净度区域的洁净度，当实测的洁净度与要求的洁净度不符时，应查明原因（是否有泄漏、高效是否有失效等）若高效过滤器已失效，则应更换新的高效过滤器。</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">&nbsp; &nbsp; &nbsp;</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">3、&nbsp; 更换高效过滤器及初效过滤器时应停机进行。</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">&nbsp;&nbsp;</span><span style="font-family: sans-serif;">&nbsp;</span><span style="font-family: arial, helvetica, sans-serif;">&nbsp;&nbsp;</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">4、&nbsp; 更换高效过滤器时应注意以下事项：</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">（1）更换高效过滤器时应特别注意拆箱、搬运及安装取用时确保滤纸完整无损，禁止用手触及滤纸造成破损。</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">（2）安装前，将新的高效过滤器对着亮处，以肉眼观察高效过滤器是否因运输等原因而出现破损，如滤纸有漏洞则不能使用。</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">（3）更换高效过滤器时应首先卸下箱盖，再卸下压条，然后将失效的的高效过滤器取出，换上新的高效过滤器（注意高效过滤器的气流箭头标志应与净化单元出风气流方向一致），确保边框密封后将箱盖回原位。</span></p><p style="text-align: right;"><img src="http://www.vitefilter.cn/data/upload/image/20180302/1519960480856904.jpg" title="高效过滤器.jpg" alt="高效过滤器.jpg" width="380" height="305" border="0" vspace="0" style="width: 380px; height: 305px;"></p></div>',
                des:'发布时间：2018-03-02   点击次数：252',
                text:'每种设备都有着自身的价值，但是在使用过程中，如果没有在正确的寿命范围使用，肯定对效率有所影响；总所周知，寿命的长短不是绝对的，是根据自身使用的一个环境等等一些因素来决定的，如果没有正确的保养，肯定会缩短使用寿命。下面给大家普及下空气滤网及空'
            },
            {
                title:'HEPA高效过滤器介绍',
                html:'<div class="content"><p style="text-indent: 2em;"><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">HEPA是High Efficiency Particulate Air Filter（高效率空气微粒滤芯）的缩写，HEPA过滤器在中国往往被称为高效空气过滤器，HEPA<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>高效过滤器</strong></font></a>的过滤效率是非常高的，空气可以通过，而细小的微粒却无法通过。</span></p><p><br></p><p style="text-indent: 2em;"><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">HEPA高效过滤器对直径为0.3微米(头发直径的1/200)以上的微粒去除效率达到了惊人99.7%以上，是目前为止，市面上最有效的对于烟雾、灰尘以及细菌等污染物的过滤媒介。(抽烟产生的烟雾颗粒直径为0.5微米)在国际上它也是被公认的高效过滤材料。经广泛运用于手术室、动物实验室、晶体实验和航空等高洁净场所。</span></p><p><br></p><p><strong><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">历史</span></strong></p><p style="text-indent: 2em;"><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">原始的HEPA过滤器在40年代被设计了和用于曼哈顿项目防止传播空中放射性污染物。 它在50年代商业化，并且成为了注册商标，一般术语为非常有效率的过滤器。 在十年过滤器演变满足对空气质量的更高和高需求以各种各样的高技术产业，例如航空航天,配药处理，医院、医疗保健、核燃料，核能和电子microcircuitry(计算机芯片)。</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">人工呼吸机中HEPA过滤器的规定值：过滤器效率性能标准和极小值一是等效的NIOSHN100规定值。美国能源部[United States Department of Energy (DOE)]有HEPA过滤器的具体要求在 DOE 被调控的应用。 标为「HEPA类型」，「HEPA」或者「99% HEPA」的产品在独立实验室可以不满足这些要求，并且可以不被测试。</span></p><p><br></p><p style="text-indent: 2em;"><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">下面我给大家介绍HEPA过滤器，它广泛被应用于光学电子、LCD液晶制造，生物医药、精密仪器、胶片和光纤设备，PCB印刷等行业无尘净化车间的空调末端送风处。</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">1.因为采用了特有无缝密封技术，所以相对于普通的过滤器密封效果更好，更持久，不易泄露;</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">2.安全性很高，滤料双面带金属护网。</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">3.可提供46mm,50mm,69mm,80mm,90mm等其它多种厚度。</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">4.逐台激光扫描计数MPPS效率：95%-99.999995%(EN1882)。</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">5.过滤的等级有很多种：H11-H14、U15、U16(EN1882)。</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">下面我来给大家介绍HEPA高效过滤器的性能特点与应用</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">对≥0.3μm颗粒的过滤效率在99.97%以上。</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">因为是电脑控制的全自动折叠机系统进行喷胶折叠的，所以折叠高度范围可在22～96mm之间无级调节。</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">它的滤材都是采用的专用玻璃纤维滤纸作。</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">每个滤器经严格检侧。</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">采用国际标准尺寸规格。</span></p><p style="text-align: right;"><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;"><img src="http://www.vitefilter.cn/data/upload/image/20180302/1519972551834985.jpg" title="HEPA高效过滤器.jpg" alt="HEPA高效过滤器.jpg" width="300" height="300" border="0" vspace="0" style="width: 300px; height: 300px;"></span></p><p><br></p></div>',
                des:'发布时间：2018-03-02   点击次数：247',
                text:'HEPA是HighEfficiencyParticulateAirFilter（高效率空气微粒滤芯）的缩写，HEPA过滤器在中国往往被称为高效空气过滤器，HEPA高效过滤器的过滤效率是非常高的，空气可以通过，而细小的微粒却无法通过。'
            },
            {
                title:'空气过滤器应用领域',
                html:'<div class="content"><p><strong><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">空气过滤器应用领域</span></strong></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">&nbsp;一、 <a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>初效过滤器</strong></font></a> 平板式、折叠式、可更换式、箱式、袋式等应用领域：办公楼、会议室、医院、商场、体育馆、机场等大型民用建筑通风空调系统、工业厂房的集中通风系统和洁净室的集中通风空调系统的初级过滤。 尼龙网初效：中央空调、家用空调器初级过滤、特殊耐酸、碱之通风过滤 金属孔网：中央空调器除油烟机用及初级过滤、特殊耐酸、碱之通风过滤 耐高温初效：一般初级过滤、热风式高温烤炉空气过滤、涂装厂高温烤炉空气过滤 活性炭初效：空调通风系统异味及污染空气处理、有害气体（如苯、甲醛、氨气等）的吸附脱除、溶剂的回收。&nbsp;</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;"><br></span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">二、<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>中效过滤器</strong></font></a> 袋式过滤器：工业与民用通风系统最常见的空气过滤器品种 板式过滤器：制药、医院、化妆品、半导体电子精密机械、食品等行业空气过滤、喷涂线空气过滤 有隔板与无隔板中效过滤器：空调系统中级过滤，制药、电子、食品等行业的空气过滤 组合式中效：空调系统的中级过滤</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;"><br></span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;">&nbsp;三、<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>高效过滤器</strong></font></a> 有隔板高效：高等级净化设备、净化系统末端过滤部件、局部净化设备和洁净厂房 液槽式高效过滤器：用于各种垂直送风的洁净厂房的终端过滤 有隔板耐高温高效：超净烘箱等要求高温空气净化的设备和系统空气过滤 无隔板高效：电子、医药、食品、半导体制造、原子力研究、精密机械、化妆品等要求高洁净度的场合。 耐高湿高效：特别适用医药行业输液生产等高湿度环境条件下使用 组合式高效：空调机组的终端过滤、大风量空气净化设备 可弃式一体化与可更换式一体化：适用于医院的手术室、实验室、制药业、微电子、胶片、光纤设备及食品加工工厂等 四、超高效过滤器 适用于超LSI制造工厂、半导体制造工厂、原子力研究中心、无尘室、层流设备、工作台等其他要求超高洁净度的场合。</span></p><p><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;"><br></span></p><p style="text-align: center;"><span style="font-family: arial, helvetica, sans-serif; font-size: 16px;"><img src="http://www.vitefilter.cn/data/upload/image/20180301/1519866762289736.jpg" title="空气过滤器.jpg" alt="空气过滤器.jpg" width="888" height="334" style="width: 888px; height: 334px;" border="0" vspace="0"></span></p></div>',
                des:'发布时间：2018-03-01   点击次数：215',
                text:'空气过滤器应用领域一、初效过滤器平板式、折叠式、可更换式、箱式、袋式等应用领域：办公楼、会议室、医院、商场、体育馆、机场等大型民用建筑通风空调系统、工业厂房的集中通风系统和洁净室的集中通风空调系统的初级过滤。尼龙网初效：中'
            },
            {
                title:'活性炭过滤材料',
                html:'<div class="content"><p><!--StartFragment--></p><p><span style="font-family: 微软雅黑; font-size: 16px;">活性炭材料典型应用:</span></p><p><span style="font-family: 微软雅黑; font-size: 16px;"><span style="font-family: sans-serif; font-size: 16px;"></span>纤维活性炭介质由优质活性炭粉作为吸附材料制成。 采用封装在纤维基材上的高分子粘合材料，吸收性能优异，锋利，强度高，气流少。 广泛用于各种家用和汽车空调，空气净化器，净水器，气体吸收器等......纤维活性炭介质也可以单用于超细合成纤维的过滤效果。</span></p><p><br></p><p><span style="font-family: 微软雅黑; font-size: 16px;">优点：</span></p><p><span style="font-family: 微软雅黑; font-size: 16px;">纤维状活性炭过滤筛通过将粉状活性炭粘附到纤维上而制成<span style="font-family: sans-serif; font-size: 16px;">材料具有优异的吸附功能，强度高，气流阻力低。 它主要是用于各种空调，空气净化器，水净化和气体吸附等。纤维活化碳过滤筛不仅可以单手使用，还可以与超细纤维复合使用灰尘过滤。</span></span></p><p><br></p><p><span style="font-family: 微软雅黑; font-size: 16px;">吸附特性：</span></p><p><span style="font-family: 微软雅黑; font-size: 16px;">活性炭吸附法是利用多孔性的活性炭，使水中一种或多种物质被吸附在活性炭表面而去除的方法，去除对象包括溶解性的有机物质，合成洗涤剂、微生物、病毒和一定量的重金属，并能够脱色、除臭、空气净化。</span></p><p><br></p><p><span style="font-family: 微软雅黑; font-size: 16px;">影响活性炭吸附的因素有：活性炭的特性；被吸附物的特性和浓度；废水的PH值；悬浮固体含量等特性；接触系统及运行方式等。活性炭能有效吸附氯代烃、有机磷和氨基甲酸酯类杀虫剂，还能吸附苯醚、正硝基氯苯、萘、乙烯、二甲苯酚、苯酚、DDT、艾氏剂、烷基苯磺酸及许多酯类 和芳烃化合物。二级出水中也含有不被活性炭吸附的有机物，如蛋白质的中间降解物质，比原有的有机物更难被活性炭吸附，活性炭对THMS的去除能力较低，仅达到23-60%。活性炭吸附法与其他处理方法联用，出现了臭氧-活性炭法、混凝-吸附活性炭法、Habberer工艺、活性炭-硅藻土法等，使活性炭的吸附周期明显延长，用量减少，处理效果和范围大幅度提高。</span><img src="http://www.vitefilter.cn/data/upload/image/20180228/1519797126749654.jpg" title="活性炭过滤材料.jpg" alt="活性炭过滤材料.jpg" width="393" height="393" style="width: 393px; height: 393px; float: right;" border="0" vspace="0"></p></div>',
                des:'发布时间：2018-02-28   点击次数：172',
                text:'活性炭材料典型应用:纤维活性炭介质由优质活性炭粉作为吸附材料制成。采用封装在纤维基材上的高分子粘合材料，吸收性能优异，锋利，强度高，气流少。广泛用于各种家用和汽车空调，空气净化器，净水器，气体吸收器等......纤维活性炭介质也可以单用'
            },
            {
                title:'漆雾毡如何选择，用途介绍',
                html:'<div class="content"><p><span style="font-family: 微软雅黑; font-size: 16px;">&nbsp; &nbsp; 空气净化大家都不陌生，但是空气过滤产品尺寸种类繁多，选择不当直接影响净化效果；不管是工业还是家用，因为对产品使用并不是特别了解，都面临着如何惦问题，下面给大家解析什么是漆雾毡？它的用途是什么？我们又如何选择？<br></span></p><p><span style="font-family: 微软雅黑; font-size: 16px;">&nbsp; &nbsp; 漆雾毡捕集来自喷漆系统的过量油漆，避免设备上有油漆污点，防止被喷漆表面受损并保护外界环境，过滤房内油漆微粒，减低排出废气污染。</span></p><p><span style="font-family: 微软雅黑; font-size: 16px;">&nbsp; &nbsp;漆雾毡由高强度的连续单丝玻璃纤维组成,呈递增结构，捕捉率高、漆雾隔离效果好；压缩性能好,能保持其外型不变,其过滤纤维利于储存漆雾灰尘；漆雾毡滤料为绿白两色，绿色面为空气迎风面；具弹性、低压损，对漆雾有特佳的捕集效滤，漆雾毡阻燃符合DIN4102 F1耐温度强，可达到100%相对温度的耐温性； 耐高温达170。C 可切片、成卷供应。</span></p><p><span style="font-family: 微软雅黑; font-size: 16px;">&nbsp; &nbsp; 漆雾毡，一般适用于干式涂装喷漆房、汽车、家具、机械零部件的干式喷漆系统及车间漆雾过滤或厨房油烟过滤。</span><br><img src="http://www.vitefilter.cn/data/upload/image/20180227/1519697336857856.jpg" title="漆雾毡" alt="漆雾毡" width="468" height="361" style="width: 468px; height: 361px; float: right;" border="0" vspace="0"></p></div>',
                des:'发布时间：2018-02-27   点击次数：173',
                text:'空气净化大家都不陌生，但是空气过滤产品尺寸种类繁多，选择不当直接影响净化效果；不管是工业还是家用，因为对产品使用并不是特别了解，都面临着如何惦问题，下面给大家解析什么是漆雾毡？它的用途是什么？我们又如何选择？'
            },
            {
                title:'金属网过滤器应用和使用',
                html:'<div class="content"><p style="text-align: left;"><span style="font-family: 微软雅黑; font-size: 16px;">&nbsp; &nbsp; 金属网过滤器是专为大范围的使用,可以使用300 - 600 FPM。 媒体包括多层波纹铝网或不锈钢网提供优越的集尘能力和生命周期四倍的时间比传统的过滤器。 媒体都被封闭在一个耐用的金属框架或不锈钢框架。 金属网过滤器是完全可洗的,可在大范围的大小在深度1”,2”和图4”。 他们是有或没有处理。&nbsp;</span></p><p style="text-align: left;"><span style="font-family: 微软雅黑;">&nbsp; &nbsp; 金属网过滤器广泛应用于商业和工业暖通空调系统,以防止传热线圈覆盖着灰尘和线头。 他们也用作预飞的更高效率的过滤器。 永久过滤器是适合安装在高湿度条件下退出。 轻型结构 使他们容易搬运、安装和清洁。 参数和材料: frame:铝/不锈钢 ——媒体:折叠铝网/褶皱SS网 -麦克斯。 恒定的温度:160℃(340℉) ——建议最后的阻力:150 pa(0.6“张磊)银行业 可燃性:UL分类 相对湿度:100% 优势&nbsp;</span></p><p style="text-align: left;"><span style="font-family: 微软雅黑;"><br></span></p><p style="text-align: left;"><span style="font-family: 微软雅黑;">优点: •多层褶皱媒体捕捉更多的污垢 •轻量级 •永久和耐洗的 •高尘容量 •可以在所有大小 •许多不同的应用程序 •一次性的,易于使用,较低的服务成本 •生产几乎没有灰尘</span><br></p><p style="text-align: left;"><span style="font-family: 微软雅黑; font-size: 16px;"></span></p><p><br></p><p style="text-align: right;"><img src="http://www.vitefilter.cnhttp://www.vitefilter.cn/data/upload/image/20180227/1519710895442644.jpg" title="金属网过滤器.jpg" alt="金属网过滤器.jpg" width="408" height="377" style="white-space: normal; width: 408px; height: 377px;" border="0" vspace="0"></p></div>',
                des:'发布时间：2018-02-27   点击次数：135',
                text:'金属网过滤器是专为大范围的使用,可以使用300-600FPM。媒体包括多层波纹铝网或不锈钢网提供优越的集尘能力和生命周期四倍的时间比传统的过滤器。媒体都被封闭在一个耐用的金属框架或不锈钢框架。金属网过'
            },
            {
                title:'一体化送风口结构说明',
                html:'<div class="content"><p><!--StartFragment--></p><h2 style="margin: 35px 0px 15px -30px; padding: 0px; font-size: 22px; font-weight: 500; border-left-width: 10px; border-left-style: solid; border-left-color: rgb(55, 171, 47); line-height: 22px; text-indent: 20px;  position: relative; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);"><p><span style="font-family: 微软雅黑; font-size: 16px; color: rgb(12, 12, 12);">结构说明</span></p><p><span style="font-family: 微软雅黑; font-size: 16px; color: rgb(12, 12, 12);">① 封闭式结构。抛弃式过<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>高效送风口</strong></font></a>采用封闭式结构，并通过测试防止进风口和出风口之间的渗漏，框体与端盖均进行较好的密封处理，避免侧漏。</span></p><p><span style="font-family: 微软雅黑; font-size: 16px; color: rgb(12, 12, 12);">② 体积小，重量轻。框体采用阳极处理铝合金材质，放便搬运及安装。</span></p><p><span style="font-family: 微软雅黑; font-size: 16px; color: rgb(12, 12, 12);">③ 达到美国UL防火要求。箱体外贴10㎜厚的PE保温棉，防火等级为B1级。</span></p><p><span style="font-family: 微软雅黑; font-size: 16px; color: rgb(12, 12, 12);">④ 风口直径有350㎜、300㎜、250㎜可供选择。</span></p><p style="text-align: right;"><a href="http://www.vitefilter.cn/product/266.html" target="_blank"><span style="font-family: 微软雅黑; font-size: 16px; color: rgb(12, 12, 12);"><img src="http://www.vitefilter.cn/data/upload/image/20180226/1519609311303810.jpg" title="点击查看产品.jpg" alt="点击查看产品.jpg" width="275" height="181" style="width: 275px; height: 181px;" border="0" vspace="0"></span></a></p><p><span style="font-family: 微软雅黑; font-size: 16px; color: rgb(12, 12, 12);"></span></p><p><span style="font-family: 微软雅黑; font-size: 16px; color: rgb(12, 12, 12);">安装说明</span></p><p><span style="font-family: 微软雅黑; font-size: 16px; color: rgb(12, 12, 12);">① 可安装于天花龙骨上或彩钢板吊顶上。</span></p><p><span style="font-family: 微软雅黑; font-size: 16px; color: rgb(12, 12, 12);">② 高效送风口需要在风管安装完毕，对室内进行试吹，并在风量及室内洁净度达到一定要求后再安装，以延长送风口的使用寿命。</span></p><p><span style="font-family: 微软雅黑; font-size: 16px; color: rgb(12, 12, 12);">③ 为保证<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>高效过滤器</strong></font></a>的使用寿命，建议空气进入前，需经过不低于F8(比色法90-95%)的预过滤。</span></p><p><span style="font-family: 微软雅黑; font-size: 16px; color: rgb(12, 12, 12);"><br><br></span></p><span class="title" style="float: left; font-family: Arial, Helvetica, sans-serif; line-height: 24px; zoom: 1;"><br></span></h2></div>',
                des:'发布时间：2018-02-26   点击次数：148',
                text:'结构说明①封闭式结构。抛弃式过高效送风口采用封闭式结构，并通过测试防止进风口和出风口之间的渗漏，框体与端盖均进行较好的密封处理，避免侧漏。②体积小，重量轻。框体采用阳极处理铝合金材质，放便搬运及安装。③达到美国UL防火要求。箱体外贴1'
            },
            {
                title:'合成纤维滤袋、滤料的特点与应用',
                html:'<div class="content"><p>主要应用于汽车制造、核电军工、高科电子等高容尘要求领域；<br></p><p><br></p><p><!--StartFragment--><span style="color: rgb(102, 102, 102);  font-size: 18px; line-height: 24px; widows: 1; background-color: rgb(255, 255, 255);">●由高性能合成纤维与微纤维滤材，利用逐级加密技术制成；</span><!--EndFragment--></p><p><span style="color: rgb(102, 102, 102);  font-size: 18px; line-height: 24px; widows: 1; background-color: rgb(255, 255, 255);"><!--StartFragment--><span style="color: rgb(102, 102, 102);  font-size: 18px; line-height: 24px; widows: 1; background-color: rgb(255, 255, 255);">●坚挺的袋式设计能增强结构刚性，薄气动分隔袋结构能最大程度稳定气流；</span><!--EndFragment--></span></p><p><span style="color: rgb(102, 102, 102);  font-size: 18px; line-height: 24px; widows: 1; background-color: rgb(255, 255, 255);"><span style="color: rgb(102, 102, 102);  font-size: 18px; line-height: 24px; widows: 1; background-color: rgb(255, 255, 255);"><!--StartFragment--><span style="color: rgb(102, 102, 102);  font-size: 18px; line-height: 24px; widows: 1; background-color: rgb(255, 255, 255);">●防爆裂高频焊接结构防止粉尘泄漏；</span><!--EndFragment--></span></span></p><p><span style="color: rgb(102, 102, 102);  font-size: 18px; line-height: 24px; widows: 1; background-color: rgb(255, 255, 255);"><span style="color: rgb(102, 102, 102);  font-size: 18px; line-height: 24px; widows: 1; background-color: rgb(255, 255, 255);"><span style="color: rgb(102, 102, 102);  font-size: 18px; line-height: 24px; widows: 1; background-color: rgb(255, 255, 255);"><!--StartFragment--><span style="color: rgb(102, 102, 102);  font-size: 18px; line-height: 24px; widows: 1; background-color: rgb(255, 255, 255);">●初助力低，有效过滤面积大，容尘量高</span></span></span></span></p></div>',
                des:'发布时间：2018-01-29   点击次数：115',
                text:'主要应用于汽车制造、核电军工、高科电子等高容尘要求领域；●由高性能合成纤维与微纤维滤材，利用逐级加密技术制成；●坚挺的袋式设计能增强结构刚性，薄气动分隔袋结构能最大程度稳定气流；●防爆裂高频焊接结构防止粉尘泄漏；●初助力低，有效过滤面积大，'
            },
            {
                title:'过滤器的外框结构',
                html:'<div class="content"><p><!--StartFragment--></p><div class="para" label-module="para" style="font-size: 14px; word-wrap: break-word; color: rgb(51, 51, 51); margin-bottom: 15px; text-indent: 2em; line-height: 24px; zoom: 1; font-family: arial, 宋体, sans-serif; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);">过滤器的外框是以坚固的防水板组成，用来固定已折叠完成的滤材。外框上对角线的设计能提供大过滤面积，并使内部滤材紧密的粘附在外框上。过滤器的四周皆以特殊的专业粘合胶水与外框粘合，能防止空气泄漏或因风阻压力造成破损的情况发生。</div><div class="para" label-module="para" style="font-size: 14px; word-wrap: break-word; color: rgb(51, 51, 51); margin-bottom: 15px; text-indent: 2em; line-height: 24px; zoom: 1; font-family: arial, 宋体, sans-serif; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);">一次性纸框过滤器的外框一般分为一般硬纸框和高强度模切硬纸板，滤芯为打褶的纤维过滤材料内衬单面金属丝网。外型美观。结构坚固耐用。一般硬纸板外框用于制造非标规格的过滤器，可用于任意规格过滤器生产，高强度，不易变形。高强度模切硬纸板用于制造标准规格的过滤器，特点为规格精度高，美观成本低。如果用进口面纤维或合成纤维过滤材料，则其各项性能指标均可达到或超过进口过滤器。</div><p>过滤材料是以折叠形式装入高强度模切硬纸板内，迎风面积增大。流入的空气中的尘埃粒子被过滤材料有效阻挡在褶与褶之间。洁净空气从另一面均匀流出，因此气流通过过滤器是平缓</p><p>和均匀的。视过滤材料不同，它所阻挡的粒径从0.5μm到5μm而不同，过滤效率也不同 !</p><p><!--EndFragment--></p><p style="text-align: right;"><a href="http://www.vitefilter.cn/product/fxpg8ee/" target="_blank" title="点击查看产品"><img src="http://www.vitefilter.cnhttp://www.vitefilter.cn/data/upload/image/20180122/1516600697520472.jpg" title="1516600697520472.jpg" alt="1516600697520472.jpg" width="300" height="300" border="0" vspace="0" style="white-space: normal; color: rgb(51, 51, 51); font-size: 14px; line-height: 24px; text-indent: 28px; widows: 1; width: 300px; height: 300px;"></a></p></div>',
                des:'发布时间：2018-01-22   点击次数：133',
                text:'过滤器的外框是以坚固的防水板组成，用来固定已折叠完成的滤材。外框上对角线的设计能提供大过滤面积，并使内部滤材紧密的粘附在外框上。过滤器的四周皆以特殊的专业粘合胶水与外框粘合，能防止空气泄漏或因风阻压力造成破损的情况发生。一次性纸框过滤器的外'
            },
            {
                title:'空气过滤材料全系列介绍',
                html:'<div class="content"><p><strong>1、高容尘中效袋式过滤材料</strong></p><p style="white-space: normal;">维特滤材用于制造一般通风袋式过滤器。与其他化纤滤材相比，滤材静电消除后的效率比较高。例如，VTF-F7滤材经静电消除后的效率（ISO/DIS 2122，EN779）仍大于25%，明显高于争议的20%。维特中效袋式过滤材料的主要成份是聚丙烯。聚丙烯有几个优点：焚烧产物只有二氧化碳和水，焚烧处理不污染大气；聚丙烯是斥水性材料，因此不宜长霉生菌；聚丙烯阻燃。</p><p style="white-space: normal;"><br></p><p style="white-space: normal;"><br></p><p style="white-space: normal;"><br></p><p style="white-space: normal; text-align: right;"><a href="http://www.vitefilter.cn/product/fxscda0/" target="_blank"><img src="http://www.vitefilter.cn/data/upload/image/20180119/1516347360510935.png" title="点击查看产品" alt="点击查看产品" width="300" height="300" border="0" vspace="0" style="width: 300px; height: 300px;"></a></p><p style="white-space: normal;"><br></p><p style="white-space: normal;"><br></p><p style="white-space: normal;"><br></p><p style="white-space: normal;"><br></p><p style="white-space: normal;"><br></p><p><strong>1、铺网复合过滤材料</strong></p><p>维特铺网过滤材料是在粗中效过滤材料的出风面粘合一层金属网，从而增加了材料的挺度、硬度，在折叠后便于定型，并在大风量下使用不变形，此材料平整牢固，可广泛用于粗中效板框式过滤器。</p><p><br></p><p><br></p><p style="text-align: right;"><a href="http://www.vitefilter.cn/product/cpfl1120/" target="_blank"><img src="http://www.vitefilter.cn/data/upload/image/20180119/1516346870837930.png" style="width: 300px; height: 300px;" title="点击查看产品" width="300" height="300" border="0" vspace="0" alt="点击查看产品"></a></p><p><br></p><p><strong>2、双组份滤材</strong><br></p><p>双组份是以聚丙烯超细和三维中空涤纶短纤混合而成。双组份保暖棉具有高回弹性，抗变形，防潮，可洗涤或干洗，可广泛用于服装，棉被，鞋帽。该材料是多功能的，也适用于其他行业，如汽车工业和其他需要保温或隔音的场合。</p><p style="text-align: right;"><a href="http://www.vitefilter.cn/product/cpfl1120/" target="_blank"><img src="http://www.vitefilter.cnhttp://www.vitefilter.cn/data/upload/image/20180119/1516346870348759.png" title="点击查看产品" style="text-align: right; white-space: normal; width: 300px; height: 300px;" width="300" height="300" border="0" vspace="0" alt="点击查看产品"></a></p></div>',
                des:'发布时间：2018-01-19   点击次数：260',
                text:'1、高容尘中效袋式过滤材料维特滤材用于制造一般通风袋式过滤器。与其他化纤滤材相比，滤材静电消除后的效率比较高。例如，VTF-F7滤材经静电消除后的效率（ISO/DIS2122，EN779）仍大于25%，明显高于争议的20%。维特中效袋式过'
            },
            {
                title:'高容尘中效袋式过滤材料主要成份解剖',
                html:'<div class="content"><p>维特滤材用于制造一般通风<a href="http://www.vitefilter.cn/product/fxscda0/" target="_blank"><strong>袋式过滤器</strong></a>。与其他化纤滤材相比，滤材静电消除后的效率比较高。例如，VTF-F7滤材经静电消除后的效率（ISO/DIS 2122，EN779）仍大于25%，明显高于争议的20%。<!--EndFragment--></p><p style="text-align: right;"><a href="http://www.vitefilter.cn/product/fxscda0/" target="_blank" title="点击查看产品"><img src="http://www.vitefilter.cn/data/upload/image/20180118/1516246294795691.png" title="1516246294795691.png" alt="3211.png"></a></p><p>维特中效袋式过滤材料的主要成份是聚丙烯。聚丙烯有几个优点：焚烧产物只有二氧化碳和水，焚烧处理不污染大气；聚丙烯是斥水性材料，因此不宜长霉生菌；聚丙烯阻燃。</p></div>',
                des:'发布时间：2018-01-18   点击次数：174',
                text:'维特滤材用于制造一般通风袋式过滤器。与其他化纤滤材相比，滤材静电消除后的效率比较高。例如，VTF-F7滤材经静电消除后的效率（ISO/DIS2122，EN779）仍大于25%，明显高于争议的20%。维特中效袋式过滤材料的主要成份是聚丙烯。'
            },
            {
                title:'活性炭过滤棉应用特点',
                html:'<div class="content"><p><!--StartFragment-->活性炭的特点就是去除空气中的异味。 <a href="http://www.vitefilter.cn/product/249.html" target="_blank">活性炭过滤棉</a>是指合成纤维经过浸碳加胶处理。因为活性炭的作用就是除去异味，所以对过滤效率并不强调。在使用上。一般须配合独立的初、<a href="http://www.vitefilter.cn/product/fxscda0/" target="_blank"></a><a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>中效过滤器</strong></font></a>的使用。<!--EndFragment--></p><p><a href="http://www.vitefilter.cn/product/249.html" target="_blank" title="点击查看产品"><img src="http://www.vitefilter.cn/data/upload/image/20180117/1516158284209834.jpg" title="1516158284209834.jpg" alt="DSC_9268.jpg" width="419" height="296" style="width: 419px; height: 296px;"></a></p><p><br></p><p><!--StartFragment--></p><h2>产品性能</h2><p><!--EndFragment--></p><p><!--StartFragment--></p><div label-module="para">1、100%的相对耐湿度;</div><div label-module="para">2、符合防火分类标准欧洲;</div><div label-module="para">3、应用：装配车间、喷漆烤漆车间、表面整修、烤漆房等。</div><div label-module="para">过滤棉产品一般用于表面涂装行业，专门为喷漆室末端过滤而设计，由抗断裂的合成纤维构成的高性能热熔法无纺布加工而成，采取递增的结构，就是往纯净空气方向的纤维密度逐渐增大，过滤效率也增大，使用寿命更长。</div><p><!--EndFragment--></p><p><br></p></div>',
                des:'发布时间：2018-01-17   点击次数：149',
                text:'活性炭的特点就是去除空气中的异味。活性炭过滤棉是指合成纤维经过浸碳加胶处理。因为活性炭的作用就是除去异味，所以对过滤效率并不强调。在使用上。一般须配合独立的初、中效过滤器的使用。产品性能1、100%的相对耐湿度;2、符合防火分类标准欧洲;'
            },
            {
                title:'高效送风口购前必读要点',
                html:'<div class="content"><p><!--StartFragment--></p><div label-module="para">1，安装前首先重要一点，<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>高效送风口</strong></font></a>的尺寸效率要求，必须符合洁净室现场设计要求和客户应用标准</div><div label-module="para">2，<a href="http://www.vitefilter.cn/product/260.html" target="_self">高效送风口</a>安装前需要清理清洗好产品和对洁净室全方位的清扫清洁，如净化空调系统中的灰尘，应进行清扫清除，需达到清洁要求标准准才行还有夹层或吊顶内也需要清洁，再次净化空调系统必须试运转连续运转12h以上，再一次清洁处理。</div><div label-module="para">3．高效送风口的安全运输需严格按照生厂家的标志说明方向等放，在运输过种程需轻拿轻放切忌剧烈振动和碰撞。<p><br></p><p><a href="http://www.vitefilter.cn/product/260.html" target="_blank" title="点击查看产品"><img src="http://www.vitefilter.cn/data/upload/image/20171215/1513325404401587.png" style=""></a></p></div><div label-module="para">4，高效送风口安装前，需现场对<a href="http://www.vitefilter.cn/product/260.html" target="_blank">送风口</a>包装进行外观检查，内容包括滤纸、密封胶和框架有无损坏；边长、对角线和厚度尺寸是否符合要求；框架有无毛刺和锈斑（金属框）；有无产品合格证，技术性能是否符合设计要求。</div><div label-module="para">5，进行高效送风口检漏，检查和检漏是否合格，安装时应根据各台送风口的阻力大小进行合理调配，对于单向流，同一风口或送风面上的各过滤器之间，每台额定阻力和各台平均阻力相差应小于5%。洁净度级别等于和高于100级洁净室的高效送风口。</div><div label-module="para">6，洁净室内需要安装高效送风口的风口翻边和吊顶板之间的接缝施行密封垫处理，记住有裂缝的地方必须严格处理好。忌高效送风口损坏或涂层破损不得进行安装，送风口安装和风管必须严格连接好，开口端用塑料薄膜和胶带加固密风处理。以上的七个注意事项我们必须细心遵守稍有不对，是直接影响整个洁净室洁净标准，友情提示；企业购买需要选对整个产品设计生产安装实力的净化设备生产厂家</div><p><!--EndFragment--></p><p><br></p></div>',
                des:'发布时间：2018-01-16   点击次数：151',
                text:'1，安装前首先重要一点，高效送风口的尺寸效率要求，必须符合洁净室现场设计要求和客户应用标准2，高效送风口安装前需要清理清洗好产品和对洁净室全方位的清扫清洁，如净化空调系统中的灰尘，应进行清扫清除，需达到清洁要求标准准才行还有夹层或吊顶内也需'
            },
            {
                title:'高效空气过滤器的选用要点',
                html:'<div class="content"><p>　　高效空气过滤器的选用要点</p><p>　　1. 高效空气过滤器选用的主要控制参数过滤效率、额定风量、额定风量下的初阻力、容尘量等。</p><p>　　2. 按GB/T6165-1985《高效空气过滤器性能试验方法 透过率和阻力》规定的方法检验，其透过率≤0.1%（即效率≥99.9%）或对粒径≥0.1μm微粒的计数透过率≤0.001%（即效率≥99.999%）的过滤器为高效空气过滤器。</p><p>　　3. 高效空气过滤器常用滤料有超细玻璃纤维等。</p><p><img src="http://www.vitefilter.cn/data/upload/image/20171009/1507537945541046.jpg" alt="空气过滤器" width="340" height="255" border="0" vspace="0" title="空气过滤器" style="width: 340px; height: 255px;"></p><p>　　4. 空气过滤器应符合防火要求，高效空气过滤器按耐火程度分为三级：1级过滤器，过滤器全部材料都是不燃性的，不燃性材料应符合GB8624-1997 A级。2级过滤器，过滤器滤料应为符合GB8624-1997 A级的不燃性材料，分隔板、框架可用符合GB8624-1997 B2级的可燃性材料。3级过滤器，过滤器全部材料可用符合GB8624-1997 B3级</p><p>　　5 设计时，可按初阻力的二倍为终阻力，作为过滤器的计算阻力。</p><p>　　6 高效空气过滤器初阻力不得超过产品样本阻力的10%。</p><p>　　7 高效空气过滤器不宜单独使用，高效空气过滤器宜设置在净化空调系统的末端。</p><p>　　8 容尘量厂家应提供。<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>高效过滤器</strong></font></a>出厂时应检漏。其他要求根据用户需求定。</p><p>　　9 在一般非平行流洁净空调系统中多采用组合的过滤器风口。</p><p><br></p></div>',
                des:'发布时间：2017-10-17   点击次数：203',
                text:'高效空气过滤器的选用要点　　1.高效空气过滤器选用的主要控制参数过滤效率、额定风量、额定风量下的初阻力、容尘量等。　　2.按GB/T6165-1985《高效空气过滤器性能试验方法透过率和阻力》规定的方法检验，其透过率≤0.1%（即'
            },
            {
                title:'空气过滤器的品种和功能你知道吗',
                html:'<div class="content"><p>　　空气过滤器的品种和功能你知道吗</p><p>　　空气过滤器一般分为初效空气过滤器、中效空气过滤器、高效空气过滤器及亚高效空气过滤器等类型</p><p>　　高效空气过滤器</p><p>　　首要用于捕集0.5um以下的颗粒尘埃及各种悬浮物。采用超细玻璃纤维纸作滤料，胶版纸、铝膜等资料作分割板，与木框铝合金胶合而成,采用特别硅橡胶作[1],无气味,外表不会硬化,时间 长也不会有裂纹,化学功能稳定，耐腐蚀，可吸收热胀冷缩发生的应力而不会开裂，软硬度适中，弹性恢复好。每台均经纳焰法测验，具有过滤效率高、阻力低、容尘量大等特色。</p><p>&nbsp; &nbsp; &nbsp; &nbsp;</p><p style="text-align:center"><img src="http://www.vitefilter.cn/data/upload/image/20170908/1504861751912465.jpg" alt="空气过滤器" width="300" height="240" border="0" vspace="0" title="空气过滤器" style="width: 300px; height: 240px;"></p><p>　　中效空气过滤器</p><p>　　首要用于中央空调和集中送风体系。它可用于空调体系的初级过滤，以维护体系中下一级过滤器和体系自身，在对空气净化洁净度要求不严厉的场所，经中效空气过滤器处理后的空气可直 接送至用户。中效空气过滤器被广泛应用于中央空调通风体系、制药、医院、电子、食物等工业净化中，中效空气过滤器还可作为高效空气过滤器的前端过滤，以削减高效空气过滤器的负荷 ，延伸其使用寿命。</p><p>　　初效空气过滤器</p><p>　　适用于中央空调和集中通风体系过滤；大型空压机过滤；洁净回风体系；中效、高效过滤设备的前置预过滤体系。初效空气过滤器有板式、折叠式、袋式、箱式四种款式，外框资料有纸质 框、铝合金框、镀锌铁框，不锈钢框，过滤资料有无纺布、尼龙网、活性炭过滤棉、金属孔网等，防护网有双面喷塑铁丝网和双面镀锌铁丝网。价廉、重量轻、通用性好、结构紧凑。</p><p><br></p></div>',
                des:'发布时间：2017-10-16   点击次数：157',
                text:'空气过滤器的品种和功能你知道吗　　空气过滤器一般分为初效空气过滤器、中效空气过滤器、高效空气过滤器及亚高效空气过滤器等类型　　高效空气过滤器　　首要用于捕集0.5um以下的颗粒尘埃及各种悬浮物。采用超细玻璃纤维纸作滤料，胶版纸、铝膜等资'
            },
            {
                title:'风淋室出厂前的检验',
                html:'<div class="content"><p style="line-height: 2em;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　2、其次对不锈钢风淋喷嘴气流平均风速的检测.风淋室气流平均风速为各测量出风口风速读数的算术平均值。气流平均风速应符合18-25m/s的规定。</span></p><p style="line-height: 2em;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　3、第三对<a href="https://www.nyjh.cc/" target="_self">风淋室</a>噪声的测试，被测空气<a href="https://www.nyjh.cc/" target="_self">风淋室</a>门前中心水平向外1000mm，高度距地面1500mm处测量。噪声值应符合《72分贝要求。</span></p><p style="line-height: 2em;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　4、<a href="https://www.nyjh.cc/" target="_self">风淋室</a>的照度每隔500mm设置一个测量点。与内壁距离小于150mm时，不再设置。被测风淋室置于正常工作条件下，用照度计在高度距地面800mm处检测各测量点。被测空气吹淋室的照度为各测量点照度的算术平均值</span></p><p style="line-height: 2em;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　5、<a href="https://www.nyjh.cc/" target="_self">风淋室</a>压差在风淋室外安装压差表，将其测管通过能密封的孔置于吹淋室内距地面1m高，距内壁不小于20cm处。关好风淋室的门，启动吹淋室的风机。15秒钟后测量室内外压差。重复测量三次。</span></p><p style="line-height: 2em;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　6、<a href="https://www.nyjh.cc/" target="_self">风淋室</a>泄漏电流测试，按照的标准进行检测。电流值应符合规定。</span></p><p style="line-height: 2em;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　7、<a href="https://www.nyjh.cc/" target="_self">风淋室</a>接地电阻检查被测空气净化风淋室所有的功能开关均置于“断”位，用接地电阻测试仪测量接地端与可触及的金属部件之间的电阻值，电阻值应符合规定。</span></p><p style="line-height: 2em;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　8、<a href="https://www.nyjh.cc/" target="_self">风淋室</a>耐电压测试，电气强度测试历时1min，经受频率为50Hz的基本正弦波的交流电压，测试的部位为电源输入端与金属外壳之间。最初施加的电压不超过规定值的一半，然后迅速上升到规定值，试验期间不应发生击穿。所耐电压应符合规定。</span></p><p style="line-height: 2em;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　9、<a href="https://www.nyjh.cc/" target="_self">风淋室</a>绝缘电阻，在施加500V直流电压1min后进行绝缘电阻测量，在带电部件与壳体之间值应符合规定。</span></p><p style="line-height: 2em;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　10、风淋室门互锁检测， &nbsp;应对风淋室两侧门的互锁功能进行检测行检测</span></p><p style="line-height: 2em;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　a)、在<a href="https://www.nyjh.cc/" target="_self">风淋室</a>未吹淋状态。任意打开吹淋室一侧的门，检查另一侧门是否不能打开。每一边的门应至少应重复检测三次；</span></p><p style="line-height: 2em;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　b)、当<a href="https://www.nyjh.cc/" target="_self">风淋室</a>处于吹淋状态。检查两侧门是否均处于锁闭状态，至少试验三次；</span></p><p style="line-height: 2em;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　c)、当<a href="https://www.nyjh.cc/" target="_self">风淋室</a>断电或门的自锁功能失灵时，两侧门是否能手动开启，至少试验三次。</span></p><p style="line-height: 2em;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　11、<a href="https://www.nyjh.cc/" target="_self">风淋室</a>外观检查好后，包装运输试验。</span></p><p style="text-align: center;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><img src="http://www.vitefilter.cn/data/upload/image/20170831/1504170193188494.png" alt="风淋室" width="457" height="337" border="0" vspace="0" title="风淋室" style="width: 457px; height: 337px;"></span></p></div>',
                des:'发布时间：2017-09-11   点击次数：169',
                text:'2、其次对不锈钢风淋喷嘴气流平均风速的检测.风淋室气流平均风速为各测量出风口风速读数的算术平均值。气流平均风速应符合18-25m/s的规定。　　3、第三对风淋室噪声的测试，被测空气风淋室门前中心水平向外1000mm，高度距地面1500m'
            },
            {
                title:'空气过滤器厂家教你如何选择空气净化器',
                html:'<div class="content"><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun; font-size: 14px;">　　<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>空气过滤器厂家</strong></font></a>教你如何选择空气净化器，空气净化器中有多种不同的技术和介质，使它能够向用户提供清洁和安全的空气。常材料技术主要有光触媒、活性炭、合成纤维、HEPA<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>高效过滤器</strong></font></a>材料、负离子发生器等。国内市场现有的空气净化器多采为复合型，即同时采用了多种净化技术和材料介质。</span></p><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun; font-size: 14px;">　　选购空气净化器时需要考虑两大点：</span></p><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun; font-size: 14px;">　　第一、是否具有绝对的安全性，一台空气净化器是否安全，是决定其是否可取的基本前提条件。清越生态空气净化器通过欧盟CE认证，并通过美国航天局官方认证，获得美国五角大楼荣誉奖章，其外壳、机芯等均采用欧美先进材料，安全环保，无毒害，不产生二次污染。</span></p><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun; font-size: 14px;">　　第二、是否具有科学的净化原理，达到高效的空气净化器效果国际通行的空气净化原理有五种，物理式、静电式、化学式、负离子式和复合式。 一般来说，同时使用多种净化方式的空气净化器，其净化效果会更佳。清越生态空气净化器采用APT主动净化、PCM光催化净化等多种净化方式。世界独创APT主动净化，采用生性活泼的富氧分子和负离子，净化介质主动地散步到室内的各个角落，积极进行消毒与净化，达到最大的净化效果，因而净化面积比较大，是一般净化的3-5倍，而且不产生二次污染。 对于专业人士来说，洁净间的洁净度是一个常识问题。</span></p><p style="text-align: center;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><img src="http://www.vitefilter.cn/data/upload/image/20170908/1504860677456724.jpg" alt="空气净化器" width="400" height="300" border="0" vspace="0" title="空气净化器" style="width: 400px; height: 300px;"></span></p></div>',
                des:'发布时间：2017-09-11   点击次数：130',
                text:'空气过滤器厂家教你如何选择空气净化器，空气净化器中有多种不同的技术和介质，使它能够向用户提供清洁和安全的空气。常材料技术主要有光触媒、活性炭、合成纤维、HEPA高效过滤器材料、负离子发生器等。国内市场现有的空气净化器多采为复合型，即同时'
            },
            {
                title:'购买家用空气过滤器时不能忽视的因素',
                html:'<div class="content"><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun; font-size: 14px;">　　现阶段，<a href="https://www.nyjh.cc/" target="_self">家用空气过滤器</a>的类型有很多，不同的设备所对应的使用情况并不一样，所以我们一定要了解清楚在进行购买，那到底如何选择<a href="https://www.nyjh.cc/" target="_self">家用空气过滤器</a>设备呢，考虑因素有哪些？下面就让小编简单的为大家介绍一吧。确定最末级的空气高效<a href="https://www.nyjh.cc/" target="_self">家用空气过滤器</a>的效率，合理地选择高效<a href="https://www.nyjh.cc/" target="_self">家用空气过滤器</a>的组合级数和各级的效率。如室内要求一般净化，可以采用初效高效<a href="https://www.nyjh.cc/" target="_self">家用空气过滤器</a>;如室内要求中等净化，就应采用初效和中效两级高效空气过滤器。如室内要求超净净化，就应采用初效、中效和高效三级净化过滤，并应合理妥善地匹配各级高效<a href="https://www.nyjh.cc/" target="_self">家用空气过滤器</a>的效率，若相邻两级高效<a href="https://www.nyjh.cc/" target="_self">家用空气过滤器</a>的效率相差太大，则前一级高效<a href="https://www.nyjh.cc/" target="_self">家用空气过滤器</a>就起不到对后一级高效<a href="https://www.nyjh.cc/" target="_self">家用空气过滤器</a>的保护作用。</span></p><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun; font-size: 14px;">　　因为高效<a href="https://www.nyjh.cc/" target="_self">家用空气过滤器</a>是将室外空气过滤净化后送入室内，所以室外空气的含尘量是一个很重要的数据。特别是在多级净化过滤处理，选择预高效空气空气过滤器时要将使用环境、备件费用、运行能耗、维护与供货等因素综合考虑后决定。</span></p><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun; font-size: 14px;">　　与选用高效<a href="https://www.nyjh.cc/" target="_self">家用空气过滤器</a>有关的含尘气体的性质主要是，温度、湿度、含酸碱及有机溶剂的数量。因为有的高效空气过滤器允许在高温下使用，而有的高效<a href="https://www.nyjh.cc/" target="_self">家用空气过滤器</a>只能在常温、常湿度下工作，高效空气过滤器并且含尘气体的含酸碱及有机溶剂数量对空气高效空气过滤器的性能效率都有影响。</span></p><p style="line-height: 2em;"><span style="font-family: 宋体, SimSun; font-size: 14px;">　　<a href="https://www.nyjh.cc/" target="_self">家用空气过滤器</a>的特征主要是过滤效率、阻力、穿透率、容尘量、过滤风速及处理风量等。在条件容许的情况下，应尽可能选用高效、低阻、容尘量大、过滤风速适中、处理风量大、制造安装方便、价格低的空气空气过滤器。</span></p><p style="text-align: center;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><img src="http://www.vitefilter.cn/data/upload/image/20170908/1504862396101829.jpg" alt="空气净化器" width="400" height="300" border="0" vspace="0" title="空气净化器" style="width: 400px; height: 300px;"></span></p></div>',
                des:'发布时间：2017-09-11   点击次数：142',
                text:'现阶段，家用空气过滤器的类型有很多，不同的设备所对应的使用情况并不一样，所以我们一定要了解清楚在进行购买，那到底如何选择家用空气过滤器设备呢，考虑因素有哪些？下面就让小编简单的为大家介绍一吧。确定最末级的空气高效家用空气过滤器的效率，合'
            },
            {
                title:'商用空气过滤器的核心技术',
                html:'<div class="content"><p style="line-height: 2em;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　<a href="https://www.nyjh.cc/" target="_self">商用空气过滤器</a>作为一种健康环保产品,进入21世纪之后就逐渐成为人们关注的焦点,并且整体发展的趋势还在不断上升。尤其在欧美等发达国家,<a href="https://www.nyjh.cc/" target="_self">商用空气过滤器</a>已经成为千家万户的必备家电之一,因为<a href="https://www.nyjh.cc/" target="_self">商用空气过滤器</a>能够给人们带来更好的生活品质,让家人身体更加健康。随着我国的经济实力不断强大,人民群众对高品质生活的要求也越来越高,<a href="https://www.nyjh.cc/" target="_self">商用空气过滤器</a>逐渐开始风靡国内的家电市场，与此同时，也导致了国内家电市场上各种商用空气过滤器品质参差不齐，因为发展时间较短的原因,其实，我们大部分的消费者对商用空气过滤器的核心技术都不是很了解。今天由维特小编来分析商用空气过滤器核心净化技术。</span></p><p style="line-height: 2em;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　<a href="https://www.nyjh.cc/" target="_self">商用空气过滤器</a>的核心技术主要从三个点出发,其中就是电机、滤网、管理系统等。电机的作用是增加空气的风量和流动,让室内空气不断循环,通过精心滤网的过滤,从而去除空气中的悬浮颗粒、二氧化碳、细菌等有害物质,从而保证家庭空气的健康。而滤网主要分初效HEPA滤网、活性炭滤网、电离子滤网、光触媒滤网等。多种滤网的组合,更加科学化、物理化的过滤空气中的污染物质,并且提升了空气的清新,让室内空气更加清新。目前市面上的空气过滤器,大多数都采用了智能化的管理系统,可以数字显示和触摸控制空气量的净化效率。所以管理系统的方便、实用等问题,都关系到产品的体验。这三个核心问题,缺一不可。</span></p><p style="text-align: center;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><img src="http://www.vitefilter.cn/data/upload/image/20170908/1504859920618122.jpg" alt="商用空气过滤器" width="400" height="300" border="0" vspace="0" title="商用空气过滤器" style="width: 400px; height: 300px;"></span></p></div>',
                des:'发布时间：2017-09-08   点击次数：172',
                text:'商用空气过滤器作为一种健康环保产品,进入21世纪之后就逐渐成为人们关注的焦点,并且整体发展的趋势还在不断上升。尤其在欧美等发达国家,商用空气过滤器已经成为千家万户的必备家电之一,因为商用空气过滤器能够给人们带来更好的生活品质,让家人身体'
            },
            {
                title:'商用空气过滤器的基本介绍',
                html:'<div class="content"><p style="line-height: 2em;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　<a href="https://www.nyjh.cc/" target="_self">商用空气过滤器</a>(Air Filter)是指空气过滤装置，一般用于洁净车间，洁净厂房，实验室及洁净室，或者用于电子机械通信设备等的防尘。有<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>初效过滤器</strong></font></a>，<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>中效过滤器</strong></font></a>，<a href="https://www.nyjh.cc/" target="_blank" class="key_tag"><font color="#2086ee"><strong>高效过滤器</strong></font></a>及亚高效等型号。各种型号有不同的标准和使用效能。</span></p><p style="line-height: 2em;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　在气动技术中，<a href="https://www.nyjh.cc/" target="_self">商用空气过滤器</a>、减压阀和油雾器称为气动三大件。为得到多种功能往往将这三种气源处理元件按顺序组装在一起，称为气动三联件。用于气源净化过滤、减压和提供润滑。</span></p><p style="line-height: 2em;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　三大件的安装顺序按进气方向依次为商用空气过滤器、减压阀、油雾器。三大件是多数气动系统中不可缺少的气源装置，安装在用气设备近处，是压缩空气质量的最后保证，其设计和安装，除确保三大件自身质量外，还要考虑节省空间、操作安装方便、可任意组合等因素。</span></p><p style="line-height: 2em;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　分类</span></p><p style="line-height: 2em;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　（1）粗效过滤器</span></p><p style="line-height: 2em;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　粗效过滤器的滤料一般为无纺布、金属丝网、玻璃丝、尼龙网等。常用的粗效过滤器有：ZJK-1型自动卷绕式人字形空气过滤器、TJ-3型自动卷绕式平板形空气过滤器、CW型空气过滤器等。其结构形式有板式、折叠式、带式和卷绕式。</span></p><p style="text-align:center"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><img src="http://www.vitefilter.cn/data/upload/image/20170908/1504861751912465.jpg" alt="空气过滤器" width="500" height="400" border="0" vspace="0" title="空气过滤器" style="width: 500px; height: 400px;"></span></p><p style="line-height: 2em;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　（2）中效<a href="https://www.nyjh.cc/" target="_self">商用空气过滤器</a></span></p><p style="line-height: 2em;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　常用的中效<a href="https://www.nyjh.cc/" target="_self">商用空气过滤器</a>有：M-I、Ⅱ、Ⅳ型泡沫塑料过滤器、YB型玻璃纤维过滤器等。中效过滤器的滤料主要有玻璃纤维、中细孔聚乙烯泡沫塑料和由涤纶、丙纶、腈纶等制成的合成纤维毡。</span></p><p style="line-height: 2em;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　（3）高效过滤器</span></p><p style="line-height: 2em;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　常用的高效<a href="https://www.nyjh.cc/" target="_self">商用空气过滤器</a>有GB型和GWB型。其滤料为超细玻璃纤维滤纸，孔隙非常小。采用很低的滤速，这就增强了对小尘粒的筛滤作用和扩散作用，所以具有很高的过滤效率。</span></p><p style="line-height: 2em;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　分类及作用</span></p><p style="line-height: 2em;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　从气源出来的压缩空气中含有过量的水汽和油滴，同时还有固体杂质，如铁锈、沙粒、管道密封剂等，这些会损坏活塞密封环，堵塞元器件上的小排气孔，缩短元器件的使用寿命或使之失效。空气过滤器的作用就是将压缩空气中的液态水、液态油滴分离出来，并滤去空气中的灰尘和固体杂质，但不能除去气态的水和油。</span></p><p style="text-align:center"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><img src="http://www.vitefilter.cn/data/upload/image/20170908/1504862290937106.jpg" alt="空气过滤器" width="500" height="400" border="0" vspace="0" title="空气过滤器" style="width: 500px; height: 400px;"></span></p><p style="line-height: 2em;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　应用:</span></p><p style="line-height: 2em;"><span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">　　<a href="https://www.nyjh.cc/" target="_self">商用空气过滤器</a>就是为了获得能够达到标准的洁净空气，一般通风用过滤器就是针对空气中的不同粒径的粉尘粒子进行捕捉，吸附，使空气质量提高，化学过滤器除了吸附灰尘之外主要还可以吸附气味，通常用于生物制药、医院、机场航站楼、人居环境等地方。一般通风用的过滤器用途就比较广泛了，微电子行业、涂装行业、食品饮料业等等都有需要。也就是说，过滤器只是一个手段，为了达到洁净的目标。</span></p><p><br></p></div>',
                des:'发布时间：2017-09-08   点击次数：167',
                text:'商用空气过滤器(AirFilter)是指空气过滤装置，一般用于洁净车间，洁净厂房，实验室及洁净室，或者用于电子机械通信设备等的防尘。有初效过滤器，中效过滤器，高效过滤器及亚高效等型号。各种型号有不同的标准和使用效能。　　在气动技术中，'
            }
        ],
        html:''
    }),
    mounted() {
        this.title = this.$route.query.title ? this.$route.query.title : ''
        const index = this.list.findIndex((item)=>{
            return item.title==this.title
        })
        if(index!=-1){
            this.html=this.list[index].html
            this.tabIndex=index
        }
    },
    methods: {
        goLink(path) {
            // 新开窗口
            // const routeUrl = this.$router.resolve({
            //     path,
            // });
            // window.open(routeUrl.href);
            // 不新开窗口
            this.$router.push(path)
            this.title = this.$route.query.title ? this.$route.query.title : ''
            const index = this.list.findIndex((item)=>{
                return item.title==this.title
            })
            if(index!=-1){
                this.html=this.list[index].html
                this.tabIndex=index
            }
        },
        going(type) {
            if (type == 'up' && this.tabIndex != 0) {
                this.goLink('/news?title=' +this.list[Number(Number(this.tabIndex )- 1)].title )
            }
            if (type == 'down' && this.tabIndex != 34) {
                this.goLink('/news?title=' + this.list[Number(Number(this.tabIndex) + 1)].title)
            }

        }
    },
};
</script>


<style scoped>
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
.down{
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-top:10px;
}
.grey{
    color: #ccc;
    border: 1px solid #ccc;
    padding: 3px 10px;
    margin-right:10px;
}
.active{
    color: #333;
    border: 1px solid #333;
    padding: 3px 10px;
    margin-right:10px;
    cursor: pointer;
}
.title {
    padding: 20px;
    text-align: center;
    font-weight: bold;
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
    .down{
        display: block;
        div{
            margin-top: 10px;
        }
    }
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
    
<template>
    <div class="plan">
        <div class="home">
            <div class="swiper">
                <div class="swiper-wrapper">
                    <!-- <div class="swiper-slide">
            <img class="swiper-slide-img"
              src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg" />
          </div> -->
                    <div class="swiper-slide">
                        <img class="swiper-slide-img"
                        src="../assets/tab1/banner.png" />
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="text-container">
      <div class="textBox">
        <span>文案文案文案文案文文案文案文案文案文案文</span>
      </div>
    </div> -->
    <div  class="info">
            <div class="content1">
                <!-- <div style="padding:10px;background-color: #2648A3;color: #fff;">产品分类</div> -->
                <!-- <div v-for="(item, index) in list" :key="index" class="tabs" @click="goLink('/center')">{{ item.title }}
                </div> -->
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
                        <span>技术知识</span>
                    </div>
                </div>
                <div style="padding:10px 0;font-size:14px;"  v-if="tabIndex==1">
                   <div v-for="(item,index) in list1" @click="check(item.title)" :key="index" style="border-bottom:1px solid #ccc;padding:10px 0;cursor:pointer;">
                        <div class="down" style="margin-top:0">
                            <div class="title" style="text-align:left;padding:2px 0 2px 0;font-size:16px;">{{ item.title }}</div>
                            <div style="color:#aaa;">{{ item.des }}</div>
                        </div>
                        <div>{{ item.text }}</div>
                    </div>
                    <div class="down">
                        <div>共35条&emsp;每页12条&emsp;页次:{{tabIndex}}/3</div>
                        <div>
                            <span :class="tabIndex==1?'grey':'active'" @click="change(1)">1</span>
                            <span :class="tabIndex==2?'grey':'active'" @click="change(2)">2</span>
                            <span :class="tabIndex==3?'grey':'active'" @click="change(3)">3</span>
                            <span :class="tabIndex==1?'grey':'active'" @click="change('up')">上一页</span>
                            <span :class="tabIndex==3?'grey':'active'" @click="change('down')">下一页</span>
                        </div>
                    </div>
                </div>
                <div style="padding:10px 0;font-size:14px;"  v-if="tabIndex==2">
                   <div v-for="(item,index) in list2" @click="check(item.title)" :key="index" style="border-bottom:1px solid #ccc;padding:10px 0;cursor:pointer;">
                        <div class="down" style="margin-top:0">
                            <div class="title" style="text-align:left;padding:2px 0 2px 0;font-size:16px;">{{ item.title }}</div>
                            <div style="color:#aaa;">{{ item.des }}</div>
                        </div>
                        <div>{{ item.text }}</div>
                    </div>
                    <div class="down">
                        <div>共35条&emsp;每页12条&emsp;页次:{{tabIndex}}/3</div>
                        <div>
                            <span :class="tabIndex==1?'grey':'active'" @click="change(1)">1</span>
                            <span :class="tabIndex==2?'grey':'active'" @click="change(2)">2</span>
                            <span :class="tabIndex==3?'grey':'active'" @click="change(3)">3</span>
                            <span :class="tabIndex==1?'grey':'active'" @click="change('up')">上一页</span>
                            <span :class="tabIndex==3?'grey':'active'" @click="change('down')">下一页</span>
                        </div>
                    </div>
                </div>
                <div style="padding:10px 0;font-size:14px;"  v-if="tabIndex==3">
                   <div v-for="(item,index) in list3" @click="check(item.title)" :key="index" style="border-bottom:1px solid #ccc;padding:10px 0;cursor:pointer;">
                        <div class="down" style="margin-top:0">
                            <div class="title" style="text-align:left;padding:2px 0 2px 0;font-size:16px;">{{ item.title }}</div>
                            <div style="color:#aaa;">{{ item.des }}</div>
                        </div>
                        <div>{{ item.text }}</div>
                    </div>
                    <div class="down">
                        <div>共35条&emsp;每页12条&emsp;页次:{{tabIndex}}/3</div>
                        <div>
                            <span :class="tabIndex==1?'grey':'active'" @click="change(1)">1</span>
                            <span :class="tabIndex==2?'grey':'active'" @click="change(2)">2</span>
                            <span :class="tabIndex==3?'grey':'active'" @click="change(3)">3</span>
                            <span :class="tabIndex==1?'grey':'active'" @click="change('up')">上一页</span>
                            <span :class="tabIndex==3?'grey':'active'" @click="change('down')">下一页</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";

export default {
    name: "home",
    components: {},
    data: () => ({
        mySwiper: null,
        interval: null,
        tabIndex:1,
        under768: document.body.clientWidth < 768,
        plan:[
            {
                title:'生物洁净与生物安全解决方案',
                text:'在生物医药行业，配合使用公司生产的各级别过滤器，使环境免受颗粒物及微生物的污染，并达到GMP规范要求的空气洁净度。随着越来越多的制药企业正致力于降低产品制造成本，同时提高安全性和质量。在药物工艺制程中，过滤系统被提出了寿命、质量、操作灵活型等不同要求，南粤净化针对不同需求整合出了一套完备的交付方案，并伴随制药工艺迭代进行论证更新。'
            },
            {
                title:'半导体超洁净解决方案',
                text:'南粤净化紧跟污染控制技术的发展步伐，使自己的产品成为更为优质的选择。我们在微电子和半导体微污染控制领域累积了十余年的丰富经验，可以帮助您保护半导体、工艺设备、印刷电路板、液晶面板和太阳能电池板。'
            },
            {
                title:'涂装行业解决方案',
                text:'高质量的表面喷涂工艺对于喷漆工序的颗粒物数量有着严格的控制标准，对于汽车喷涂工艺的使用要求，南粤净化可根据不同的使用区域给出最优的组合方案，为您保障生产安全的同时降低能耗、保障人身的健康。'
            },
            {
                title:'工业废气排放治理解决方案',
                text:'对加工业而言，生产过程中产生的严重污染空气会打断生产流程，造成健康、安全和环境风险。污染可能包括重污染粉尘、爆炸性粉尘和气态化学污染物。它们会产生异味、发生腐蚀性反应，甚至可能对操作人员和环境构成毒性威胁。针对不同工矿造成的废气污染源，南粤净化提供的关键性过滤器产品可在恶劣的工况下提供出色的长期性能。'
            },
            {
                title:'医疗健康解决方案',
                text:'医院是集患者、易感人群、陪同家属和医护人员在一起的特殊场所，在医疗设施里，适当的空气过滤是保障人员健康和患者康复的重要举措。南粤净化为医院的复杂环境提供全系列的空气过滤器，从办公室、停车场等普通区域到候诊室和手术室，一应俱全。'
            },
        ],
        list1:[
            {
                title:'高效过滤器检漏的必要性',
                des:'发布时间：2019-01-10   点击次数：222',
                text:'高效过滤器检漏的必要性一、国内制药企业对高效过滤器检漏的现状随着我国制药工业的发展，国内一些药厂不断对企业进行技术改造，提高产品质量。目前国内的大部分药品生产企业对空气净化系统安装确认的前5项内容都认真具体的执行。但是忽略了高效过滤器检漏试'
            },
            {
                title:'中效过滤器四大过滤原理',
                des:'发布时间：2018-12-17   点击次数：231',
                text:'中效过滤器已经普及到我们日常的各个方面，但是大家对于其工作原理又了解多少呢?空气过滤器净化事业部主管指出，日常所见的中效过滤器原理有四个，具体划分，又可以有几十种，以下我们将中效过滤器的原理做简要阐述：原理一、拦截拦截是常见的中效过滤器原理'
            },
            {
                title:'初效过滤器中效过滤器,可采用亚高效过滤器替代',
                des:'发布时间：2018-12-08   点击次数：242',
                text:'初效过滤器中效过滤器,可采用亚高效过滤器替代为什么会说初效过滤器中效过滤器,可采用亚高效过滤器替代呢？很多人都应该不理解，有了解它们的朋友，知道它们的用处，高效过滤器怎样替代。下面过滤器厂家就给大家解答这个疑问。1、初效过滤器中效过滤器安装'
            },
            {
                title:'如何教大家选择空气过滤器',
                des:'发布时间：2018-12-05   点击次数：265',
                text:'空气过滤器是指空气过滤装置，一般用于洁净车间，洁净厂房，洁净手术室、实验室及洁净室，或者用于电子机械通信设备等的防尘。有初效过滤器，中效过滤器，高中效过滤器，亚高效及高效过滤器共五种型号。各种型号有不同的标准和使用效能。在气动技术中，空气过'
            },
            {
                title:'影响高效过滤器过滤效率的因素',
                des:'发布时间：2018-11-28   点击次数：221',
                text:'影响高效过滤器过滤效率的因素高效过滤器主要用于捕集0.5um以下的颗粒灰尘及各种悬浮物，并且采用超细玻璃纤维纸作滤料，胶版纸、铝膜等材料作分割板，与木框铝合金胶合而成。那影响高效过滤器设备过滤效率的因素都有哪些呢?一：过滤材料过滤材料的选择'
            },
            {
                title:'如何清洁高效过滤器',
                des:'发布时间：2018-11-27   点击次数：216',
                text:'现在我们在网上一搜几页都是高效过滤器，但为什么这么多过滤器厂家都在网站宣传呢？现在很多人都知道吧！当我们需要时我们都会在网上找，那你有找到如何清洁高效过滤器的文章吗？下面就带大家看一下过滤器厂家介绍的。高效过滤器清洁的目的：建立高效过滤器出'
            },
            {
                title:'高效过滤器的更换周期，你知道吗?',
                des:'发布时间：2018-11-24   点击次数：415',
                text:'高效过滤器的更换周期，你知道吗?洁净室对环境的湿度、温度、新鲜空气量、状态、照度等都有严格的规定，保证了产品的生产质量和人员工作环境的舒适。整个洁净室系统配有一套采用初效过滤器、中效过滤器、高效过滤器的三级过滤器的空气净化系统，控制洁净区内'
            },
            {
                title:'什么影响着高效过滤器的过滤效率呢?',
                des:'发布时间：2018-11-16   点击次数：265',
                text:'现在市场上有多种过滤器。由于不同的过滤器所适用的过滤环境不同，因此选择时应严格区分。据调查，市场上的高效过滤器是比较流行的过滤设备之一、主要用于收集0.5μm以下的粉尘颗粒及各种悬浮物，采用超细玻璃纤维纸作为过滤材料，胶印纸、铝膜等材料作为'
            },
            {
                title:'怎样判断是否合格的高效过滤器',
                des:'发布时间：2018-11-12   点击次数：239',
                text:'由于使用场所要求严格，高效过滤器出厂前必须经过逐台检测，通过标准后才能投入使用。过滤器的测试包括出厂测试和现场测试。在这两个测试过程中，滤波器失效的原因可能如下。一、原材料本身原因（1）过滤材料本身效率低。如果过滤材料本身的效率不能满足要求'
            },
            {
                title:'初效过滤器能否清洗呢？',
                des:'发布时间：2018-10-27   点击次数：314',
                text:'在使用初效过滤器的过程中，我们可以选择清洗它而不改变过滤材料吗？初效过滤器又称初效过滤网，适用于空调系统的初滤，主要用于过滤5微米以上的尘埃颗粒。初效过滤器有三种类型：板式、折叠式和袋式。外框材料为纸架、铝框和镀锌铁框。过滤材料为无纺布、尼'
            },
            {
                title:'袋式过滤器结构与作用',
                des:'发布时间：2018-04-21   点击次数：157',
                text:'坚固构造确保其可靠性能用柳钉胶角固定以增加强度，同时消除锋利的棱边并防止了空气泄漏或因风阻压力造成破损的情况发生支撑条分隔片滤袋间以金属条固定，增加滤网强度，并防止滤袋于高风速时，因风切之摩擦力而破裂；每个滤袋均有隔片平均分于袋宽中，防止'
            },
            {
                title:'风淋室',
                des:'发布时间：2018-04-21   点击次数：155',
                text:'坚固构造确保其可靠性能产品功能自动化、智能化，材质外部为冷轧钢板烤漆内部为优质304不锈钢，采用360度旋转喷嘴联锁控制、彩色七寸液晶触摸式控制、红外线自动感应装置等，有效进行人体净化和防空气污染，为企业工作场地达到严格的无尘净化标准。高效'
            }
        ],
        list2:[
            {
                title:'FFU风机过滤单元构造',
                des:'发布时间：2018-04-19   点击次数：272',
                text:'坚固构造确保其可靠性能采用柳钉固定，加装提手，壳体结构选用不锈钢、铝合金、覆铝锌板、冷轧钢板，冷板静电喷塑材料制造，重量轻、抗腐蚀、防锈、美观大方。安全护网低噪音风机进风口安全护网，采用多翼式涡轮节能风机风压扩散均匀，出封面风速均匀稳定三'
            },
            {
                title:'购买高效过滤器合格标准检验',
                des:'发布时间：2018-03-03   点击次数：176',
                text:'当我们购买回来了一个高效过滤器，但是对于行外的我们不懂行内的标准，怎么才能判定自己买回来的产品是一个合格的产品，而不是一个次品呢？下面维特净化为大家普及。那么首先我们要知道一个合格高效过滤器的有什么特点，有什么性能，外观是什么样的类型等等的'
            },
            {
                title:'选择无隔板高效过滤器需记住六点',
                des:'发布时间：2018-03-02   点击次数：151',
                text:'近年来生活水平逐步提高，现在大家也对自己的生活有很高的品质要求，都希望能在一个良好的环境生活。如今高效过滤器是一种不错的净化设备，能够为用户带来极佳的生活和工作环境。今天小编带大家了解的是无隔板高效过滤器的使用效果，我们如何选择？相信这对大'
            },
            {
                title:'初效、中效、高效过滤器更换周期',
                des:'发布时间：2018-03-02   点击次数：252',
                text:'每种设备都有着自身的价值，但是在使用过程中，如果没有在正确的寿命范围使用，肯定对效率有所影响；总所周知，寿命的长短不是绝对的，是根据自身使用的一个环境等等一些因素来决定的，如果没有正确的保养，肯定会缩短使用寿命。下面给大家普及下空气滤网及空'
            },
            {
                title:'HEPA高效过滤器介绍',
                des:'发布时间：2018-03-02   点击次数：247',
                text:'HEPA是HighEfficiencyParticulateAirFilter（高效率空气微粒滤芯）的缩写，HEPA过滤器在中国往往被称为高效空气过滤器，HEPA高效过滤器的过滤效率是非常高的，空气可以通过，而细小的微粒却无法通过。'
            },
            {
                title:'空气过滤器应用领域',
                des:'发布时间：2018-03-01   点击次数：215',
                text:'空气过滤器应用领域一、初效过滤器平板式、折叠式、可更换式、箱式、袋式等应用领域：办公楼、会议室、医院、商场、体育馆、机场等大型民用建筑通风空调系统、工业厂房的集中通风系统和洁净室的集中通风空调系统的初级过滤。尼龙网初效：中'
            },
            {
                title:'活性炭过滤材料',
                des:'发布时间：2018-02-28   点击次数：172',
                text:'活性炭材料典型应用:纤维活性炭介质由优质活性炭粉作为吸附材料制成。采用封装在纤维基材上的高分子粘合材料，吸收性能优异，锋利，强度高，气流少。广泛用于各种家用和汽车空调，空气净化器，净水器，气体吸收器等......纤维活性炭介质也可以单用'
            },
            {
                title:'漆雾毡如何选择，用途介绍',
                des:'发布时间：2018-02-27   点击次数：173',
                text:'空气净化大家都不陌生，但是空气过滤产品尺寸种类繁多，选择不当直接影响净化效果；不管是工业还是家用，因为对产品使用并不是特别了解，都面临着如何惦问题，下面给大家解析什么是漆雾毡？它的用途是什么？我们又如何选择？'
            },
            {
                title:'金属网过滤器应用和使用',
                des:'发布时间：2018-02-27   点击次数：135',
                text:'金属网过滤器是专为大范围的使用,可以使用300-600FPM。媒体包括多层波纹铝网或不锈钢网提供优越的集尘能力和生命周期四倍的时间比传统的过滤器。媒体都被封闭在一个耐用的金属框架或不锈钢框架。金属网过'
            },
            {
                title:'一体化送风口结构说明',
                des:'发布时间：2018-02-26   点击次数：148',
                text:'结构说明①封闭式结构。抛弃式过高效送风口采用封闭式结构，并通过测试防止进风口和出风口之间的渗漏，框体与端盖均进行较好的密封处理，避免侧漏。②体积小，重量轻。框体采用阳极处理铝合金材质，放便搬运及安装。③达到美国UL防火要求。箱体外贴1'
            },
            {
                title:'合成纤维滤袋、滤料的特点与应用',
                des:'发布时间：2018-01-29   点击次数：115',
                text:'主要应用于汽车制造、核电军工、高科电子等高容尘要求领域；●由高性能合成纤维与微纤维滤材，利用逐级加密技术制成；●坚挺的袋式设计能增强结构刚性，薄气动分隔袋结构能最大程度稳定气流；●防爆裂高频焊接结构防止粉尘泄漏；●初助力低，有效过滤面积大，'
            },
            {
                title:'过滤器的外框结构',
                des:'发布时间：2018-01-22   点击次数：133',
                text:'过滤器的外框是以坚固的防水板组成，用来固定已折叠完成的滤材。外框上对角线的设计能提供大过滤面积，并使内部滤材紧密的粘附在外框上。过滤器的四周皆以特殊的专业粘合胶水与外框粘合，能防止空气泄漏或因风阻压力造成破损的情况发生。一次性纸框过滤器的外'
            }
        ],
        list3:[
            {
                title:'空气过滤材料全系列介绍',
                des:'发布时间：2018-01-19   点击次数：260',
                text:'1、高容尘中效袋式过滤材料维特滤材用于制造一般通风袋式过滤器。与其他化纤滤材相比，滤材静电消除后的效率比较高。例如，VTF-F7滤材经静电消除后的效率（ISO/DIS2122，EN779）仍大于25%，明显高于争议的20%。维特中效袋式过'
            },
            {
                title:'高容尘中效袋式过滤材料主要成份解剖',
                des:'发布时间：2018-01-18   点击次数：174',
                text:'维特滤材用于制造一般通风袋式过滤器。与其他化纤滤材相比，滤材静电消除后的效率比较高。例如，VTF-F7滤材经静电消除后的效率（ISO/DIS2122，EN779）仍大于25%，明显高于争议的20%。维特中效袋式过滤材料的主要成份是聚丙烯。'
            },
            {
                title:'活性炭过滤棉应用特点',
                des:'发布时间：2018-01-17   点击次数：149',
                text:'活性炭的特点就是去除空气中的异味。活性炭过滤棉是指合成纤维经过浸碳加胶处理。因为活性炭的作用就是除去异味，所以对过滤效率并不强调。在使用上。一般须配合独立的初、中效过滤器的使用。产品性能1、100%的相对耐湿度;2、符合防火分类标准欧洲;'
            },
            {
                title:'高效送风口购前必读要点',
                des:'发布时间：2018-01-16   点击次数：151',
                text:'1，安装前首先重要一点，高效送风口的尺寸效率要求，必须符合洁净室现场设计要求和客户应用标准2，高效送风口安装前需要清理清洗好产品和对洁净室全方位的清扫清洁，如净化空调系统中的灰尘，应进行清扫清除，需达到清洁要求标准准才行还有夹层或吊顶内也需'
            },
            {
                title:'高效空气过滤器的选用要点',
                des:'发布时间：2017-10-17   点击次数：203',
                text:'高效空气过滤器的选用要点　　1.高效空气过滤器选用的主要控制参数过滤效率、额定风量、额定风量下的初阻力、容尘量等。　　2.按GB/T6165-1985《高效空气过滤器性能试验方法透过率和阻力》规定的方法检验，其透过率≤0.1%（即'
            },
            {
                title:'空气过滤器的品种和功能你知道吗',
                des:'发布时间：2017-10-16   点击次数：157',
                text:'空气过滤器的品种和功能你知道吗　　空气过滤器一般分为初效空气过滤器、中效空气过滤器、高效空气过滤器及亚高效空气过滤器等类型　　高效空气过滤器　　首要用于捕集0.5um以下的颗粒尘埃及各种悬浮物。采用超细玻璃纤维纸作滤料，胶版纸、铝膜等资'
            },
            {
                title:'风淋室出厂前的检验',
                des:'发布时间：2017-09-11   点击次数：169',
                text:'2、其次对不锈钢风淋喷嘴气流平均风速的检测.风淋室气流平均风速为各测量出风口风速读数的算术平均值。气流平均风速应符合18-25m/s的规定。　　3、第三对风淋室噪声的测试，被测空气风淋室门前中心水平向外1000mm，高度距地面1500m'
            },
            {
                title:'空气过滤器厂家教你如何选择空气净化器',
                des:'发布时间：2017-09-11   点击次数：130',
                text:'空气过滤器厂家教你如何选择空气净化器，空气净化器中有多种不同的技术和介质，使它能够向用户提供清洁和安全的空气。常材料技术主要有光触媒、活性炭、合成纤维、HEPA高效过滤器材料、负离子发生器等。国内市场现有的空气净化器多采为复合型，即同时'
            },
            {
                title:'购买家用空气过滤器时不能忽视的因素',
                des:'发布时间：2017-09-11   点击次数：142',
                text:'现阶段，家用空气过滤器的类型有很多，不同的设备所对应的使用情况并不一样，所以我们一定要了解清楚在进行购买，那到底如何选择家用空气过滤器设备呢，考虑因素有哪些？下面就让小编简单的为大家介绍一吧。确定最末级的空气高效家用空气过滤器的效率，合'
            },
            {
                title:'商用空气过滤器的核心技术',
                des:'发布时间：2017-09-08   点击次数：172',
                text:'商用空气过滤器作为一种健康环保产品,进入21世纪之后就逐渐成为人们关注的焦点,并且整体发展的趋势还在不断上升。尤其在欧美等发达国家,商用空气过滤器已经成为千家万户的必备家电之一,因为商用空气过滤器能够给人们带来更好的生活品质,让家人身体'
            },
            {
                title:'商用空气过滤器的基本介绍',
                des:'发布时间：2017-09-08   点击次数：167',
                text:'商用空气过滤器(AirFilter)是指空气过滤装置，一般用于洁净车间，洁净厂房，实验室及洁净室，或者用于电子机械通信设备等的防尘。有初效过滤器，中效过滤器，高效过滤器及亚高效等型号。各种型号有不同的标准和使用效能。　　在气动技术中，'
            }
        ],
    }),
    mounted() {
        // this.under768 = document.body.clientWidth < 768;
        // this.mySwiper = new Swiper(".swiper2", {
        //     slidesPerView: this.under768 ? 2 : 3,
        //     spaceBetween: this.under768 ? 15 : 30,
        //     speed: 2000,
        //     autoplay: {
        //         delay: 2500,
        //         disableOnInteraction: false,
        //     },
        // });
        // this.interval = setInterval(() => {
        //     this.mySwiper.slideNext();
        // }, 4000);
        this.tabIndex = this.$route.query.id ? this.$route.query.id : 1
    },
    destroyed() {
        // clearInterval(this.interval);
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
            this.tabIndex = this.$route.query.id ? this.$route.query.id : 1
        },
        change(type){
            if(type==1){
                if(this.tabIndex!=1){
                    this.goLink('/plan?id=' + 1)
                }
            }
            else if (type==2){
                if(this.tabIndex!=2){
                    this.goLink('/plan?id=' + 2)
                }
            }
            else if (type==3){
                if(this.tabIndex!=3){
                    this.goLink('/plan?id=' + 3)
                }
            }
            else if (type=='up'){
                if(this.tabIndex!=1){
                    this.goLink('/plan?id=' + Number(Number(this.tabIndex)-1))
                }
            }
            else if (type=='down'){
                if(this.tabIndex!=3){
                    this.goLink('/plan?id=' + Number(Number(this.tabIndex)+1))
                }
            }
        },
        check(title){
            this.goLink('/news?title=' + title)
        }
    },
};
</script>


<style scoped>
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
    
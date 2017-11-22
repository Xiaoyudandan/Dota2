window.onload = function(){
	/*头部导航栏*/

	//二级菜单
	
	var nav_link = document.getElementsByClassName('nav_link');

	var link_pop = document.getElementsByClassName('link_pop');

	var Nav_link=[];

	Nav_link.push(['品牌站','个人中心','神秘商店','玩家工坊']);

	Nav_link.push(['官方新闻','赛事新闻','更新日志','游戏攻略']);

	Nav_link.push(['赛事中心','赛事总览','赛事活动']);

	Nav_link.push(['精彩综合','官方活动','玩家论坛','新浪微博','官方微信']);

	Nav_link.push(['英雄资料','物品资料','视频中心','自定义地图','新手引导']);

	Nav_link.push(['客服中心','在线客服','自动专区','被盗找回','忘记账号','通行证查询','网吧特权']);

	Nav_link.push(['游戏下载','刀塔助手','精美壁纸','官方漫画']);

	for(var i=0;i<nav_link.length;i++){

		nav_link[i].onmousemove = function() {

			this.style.background = "black";

			var nav_link_a = this.getElementsByTagName('a')[0];

			var link_pop=this.getElementsByClassName('link_pop')[0];

			nav_link_a.style.color = "#00b7f4";

			link_pop.style.height="239px";

		}

		nav_link[i].onmouseout = function() {

			this.style.background = "#13171A";

			var nav_link_a = this.getElementsByTagName('a')[0];

			nav_link_a.style.color = "#827C79";

			var link_pop=this.getElementsByClassName('link_pop')[0];

			link_pop.style.height="0px";

		}

	}

	//二级菜单内容添加
	
	for(var i=0;i<Nav_link.length;i++){

		for(var j=0;j<Nav_link[i].length;j++){

			link_pop[i].innerHTML +='<a href="">'+Nav_link[i][j]+'</a>'

		}

	}

	//二级菜单内容hover事件
	
	for(var i=0;i<Nav_link.length;i++){

		var link_pop_a = link_pop[i].getElementsByTagName('a');

		for(var j=0;j<Nav_link[i].length;j++){

			link_pop_a[j].onmousemove = function(){

				this.style.color = "#00b7f4";

			}

			link_pop_a[j].onmouseout = function(){

				this.style.color = "#827C79";

			}

		}

	}

	//二级菜单结束
	
	//登录按钮
	
	var login = document.getElementsByClassName('name')[0].getElementsByTagName('a')[0];

	login.onmousemove = function(){

		login.style.textDecoration = 'underline';

	}

	login.onmouseout = function(){

		login.style.textDecoration = 'none';

	}

	/*头部导航栏结束*/

	var slideshow = document.getElementsByClassName('slideshow')[0];

	var right_arrow = document.getElementsByClassName('right_arrow')[0];

	var left_arrow = document.getElementsByClassName('left_arrow')[0];

	var spot = document.getElementsByClassName('spot')[0].getElementsByTagName('li');

	var img = slideshow.getElementsByTagName('img');

	var imgArr=['./images/slideshow_1.jpg','./images/slideshow_2.jpg','./images/slideshow_3.jpg','./images/slideshow_4.jpg','./images/slideshow_1.jpg'];

	var index=1;

	var animat = false;

	var onNum = 0; 

	showSpot();

	resetSlideshow();

	right_arrow.onclick=function(){
		
		if(!animat){
			
			if(index==4){

				index=1;

			}else{

				index++;

			}

			var left = parseFloat(slideshow.style.left);
			
			if(left==-400){

				left=0;

			}

			slideshow.style.left=left+'%';

			animation(-100);

		}

	}

	left_arrow.onclick=function(){

		if(!animat){

			if(index==1){

				index=4;

			}else{

				index--;

			}

			var left = parseFloat(slideshow.style.left);

			if(left==0){

				left=-400;

			}

			slideshow.style.left=left+'%';

			animation(100);

		}

	}

	for(var i=0;i<spot.length;i++){

		spot[i].onclick = function(){

			onNum = 1;

			var new_index = this.getAttribute('index');

			console.log('index:'+index+',new_index:'+new_index);

			var offset =(index - new_index)*100;

			var math = new_index-index;

			if(math > 0){

                img[index].src = imgArr[new_index-1];

                math = -100;

            }else if(math < 0){

                img[index-2].src = imgArr[new_index-1];

                math = 100;
                
            } 
                
            index = new_index;

            animation(math);

		}

	}

	var int = setInterval(right_arrow.onclick,3000);

    slideshow.onmouseover = function(){

    	clearInterval(int);

    }

    slideshow.onmouseout =function(){

        int = setInterval(right_arrow.onclick,3000);

    }

	function animation(offset){

		animat = true;

		var time = 1*1000;

		var new_left = parseFloat(slideshow.style.left)+offset;

		var interval = 10;

		var speed = offset/(time/interval);

		run();

		function run(){

			var left = parseFloat(slideshow.style.left);

			temp_left = left+speed;

			if(speed<0&&temp_left>new_left||speed>0&&temp_left<new_left){

				setTimeout(function(){run()},interval);

				slideshow.style.left = temp_left+'%';

			}else{

				slideshow.style.left = new_left+'%';

				showSpot();

				if(onNum==1){

					resetSlideshow();

					slideshow.style.left = -100*Number(index-1)+'%';

				}

				animat = false;

			}

		}

	}

	function showSpot(){

		for(var i=0;i<spot.length;i++){

			spot[i].className = '';

		}

		spot[index - 1].className = 'spot_on';

	}

	//刷新
	
	function resetSlideshow(){

		for(var i=0;i<img.length;i++){

			img[i].src=imgArr[i];

		}
		
	}
//轮播图样式结束

	var mySwiper = new Swiper('.u_racecenter_content', {
		autoplay: 3000,//可选选项，自动滑动
		loop : true,
		speed:500,
		pagination : '.swiper-pagination'
	});



	/*-----------------新闻中心框---------------------------*/

	var news_tabs_arr = ['综合新闻','官方新闻','赛事新闻','更新日志','媒体资讯']

	var news_panel = [];

	for(var i=0;i<5;i++){

		news_panel.push({title:[],subtitle:[],pic:[],date:[]});

	}

	news_panel[0].title = ['​做自己的英雄——DOTA2灵魂COSPLAY图赏','​COSPLAY嘉年华报名开启 完美盛典邀你登台','熊猫直播DOTA2主播招募','Valve发布个人直播DOTA2比赛规定：不能出于商业目的',
	'​DOTA2 10月5日更新 翡翠之兴珍藏上架','DOTA2 10月4日更新日志：修复并优化匹配系统','​决战上海 完美大师赛十支参赛队伍公布','​​完美大师赛中国区预选赛第四日战报 LGD、VG携手晋级主赛事'];

	news_panel[0].subtitle = ['COSPLAY一直是DOTA2周边文化的一个重要组成部分，玩家通过将自己装扮成DOTA2中英雄的形象，表达着对心爱的游戏的支持和认同。而每年的国际邀请赛上，更是有精彩的COSPLAY大赛，众多COSER齐聚一堂，展示着精美的COSPLAY作品。在看过了那么多的专业COSPLAY后，我们也换一下口味，看看可爱的玩家们是怎样用身边的东西，宣示着对DOTA2的热爱。'];

	news_panel[0].pic = ['news_pic1.jpg'];

	news_panel[0].date = ['2017-10-18','2017-09-29','2017-09-29','2017-10-19','2017-10-16','2017-10-05','2017-10-04','2017-10-02','2017-09-30'];

	news_panel[1].title = ['​做自己的英雄——DOTA2灵魂COSPLAY图赏','​COSPLAY嘉年华报名开启 完美盛典邀你登台','熊猫直播DOTA2主播招募','Valve发布个人直播DOTA2比赛规定：不能出于商业目的',
	'​DOTA2 10月5日更新 翡翠之兴珍藏上架','DOTA2 10月4日更新日志：修复并优化匹配系统','​决战上海 完美大师赛十支参赛队伍公布','​​完美大师赛中国区预选赛第四日战报 LGD、VG携手晋级主赛事'];

	news_panel[1].subtitle = ['COSPLAY一直是DOTA2周边文化的一个重要组成部分，玩家通过将自己装扮成DOTA2中英雄的形象，表达着对心爱的游戏的支持和认同。而每年的国际邀请赛上，更是有精彩的COSPLAY大赛，众多COSER齐聚一堂，展示着精美的COSPLAY作品。在看过了那么多的专业COSPLAY后，我们也换一下口味，看看可爱的玩家们是怎样用身边的东西，宣示着对DOTA2的热爱。'];

	news_panel[1].pic = ['news_pic1.jpg'];

	news_panel[1].date = ['2017-10-18','2017-09-29','2017-09-29','2017-10-19','2017-10-16','2017-10-05','2017-10-04','2017-10-02','2017-09-30'];

	news_panel[2].title = ['​​COSPLAY嘉年华报名开启 完美盛典邀你登台','​Valve发布个人直播DOTA2比赛规定：不能出于商业目的','决战上海 完美大师赛十支参赛队伍公布','​完美大师赛中国区预选赛第四日战报 LGD、VG携手晋级主赛事',
	'​完美大师赛中国区预选赛第三日战报 VG双雄会师败者组半决赛','​完美大师赛中国区预选赛次日战报  LGD连胜VG双雄','《真视界》- 2017年国际邀请赛总决赛纪录片','​完美大师赛中国区预选赛首日战报 Eclipse晋级胜者组决赛'];

	news_panel[2].subtitle = [' 一直以来，DOTA2独特的周边文化深受玩家青睐，而COSPLAY作为这其中的重要一环，也是吸引了大量的爱好者。2017年国际邀请赛上，精彩的COSPLAY大赛引得现场掌声雷动，而现在，2017完美盛典COSPLAY嘉年华向国内外玩家征集COSPLAY作品，只要你有创意，只要你有一颗热爱COSPLAY的心，即可向我们投递你的COSPLAY作品，更有机会登上完美盛典的舞台!'];

	news_panel[2].pic = ['news_pic1.jpg'];

	news_panel[2].date = ['2017-09-29','2017-10-16','2017-10-02','2017-09-30','2017-09-29','2017-09-28','2017-09-28','2017-09-27'];

	news_panel[3].title = ['​DOTA2 10月4日更新日志：修复并优化匹配系统','​8月21日更新日志：7.06f游戏平衡性改动','7月29日更新日志：全新种树特效和蟹小蜗外壳','DOTA2 7月3日更新：7.06e平衡性改动',
	'​​DOTA2 7月1日更新：昆卡与潮汐猎人播音包','DOTA2 6月12日更新：7.06d平衡性改动','​DOTA2 6月1日更新日志：更改指令处理方式','​​DOTA2 5月29日更新日志：7.06c平衡性更新'];

	news_panel[3].subtitle = ['DOTA2 10月4日更新日志：修复并优化匹配系统'];

	news_panel[3].pic = ['news_pic2.jpg'];

	news_panel[3].date = ['2017-10-04','2017-08-21','2017-07-29','2017-07-03','2017-07-01','2017-06-12','2017-06-01','2017-05-29'];

	news_panel[4].title = ['​【易竞技】今天开始比赛不断！DOTA2近期赛事汇总','​【易竞技】视界：智慧的博弈 当DOTA2的教练走进比赛室','【体坛加电竞】媒体评TI7：遗憾，或许也是一种精彩','【新浪电竞】Liquid斩获TI7冠军，本届国际邀请赛亮点还有哪些？',
	'​【凤凰网电竞】天才少女Super的蜕变 LFY中单重新焕发第二春','【电竞虎推荐】你的作业抄好了么？TI7赛事预测船神版','​【电竞虎推荐】MDL上大放异彩的摩托大军，混沌骑士全新打法','​​【中国电子竞技大会推荐】DOTA电影《我是中国DOTA的希望》爱奇艺热播'];

	news_panel[4].subtitle = ['告诉各位DOTA2观众一个好消息，TI7后的比赛荒马上就要结束了，如果说最近的各种预选赛无法满足大家的观赛体验。那么从今天开始DOTA职业巡回赛的正式比赛就要打响了，从今天开始到11月下旬，在全球五个国家将举办四个Minor（乙级）赛事和一个Major（甲级）赛事。除了选手坐飞机转场的时间，几乎无缝Combo。'];

	news_panel[4].pic = ['news_pic3.jpg'];

	news_panel[4].date = ['2017-10-12','2017-09-20','2017-08-15','2017-08-15','2017-08-07','2017-07-19','2017-07-13','2017-07-11'];

	var panel = document.getElementsByClassName('panel')[0];

	for(var i=0;i<5;i++){

		panel.innerHTML +='<li class="u_panel"><div class="u_lists"></div></li>'

	}

	var u_lists = document.getElementsByClassName('u_lists');

	for(var i=0;i<5;i++){

		for(var j=0;j<8;j++){

			if(j==0){

				u_lists[i].innerHTML+='<a href="" class="u_recommend"><h3>'+news_panel[i].title[j]+'</h3><div class="u_contents"><div class="u_item_avatar"><img src="./images/index/'+news_panel[i].pic[j]+'" alt=""></div><div class="u_msg"><p>'+news_panel[i].subtitle[j]+'</p><span class="u_date">'+news_panel[i].date[j]+'</span></div></div></a>'

			}else{

				u_lists[i].innerHTML+='<a href="" class="u_list u_highlight"><i class="u_icon u_icon_dot"></i><p>'+news_panel[i].title[j]+'</p><span class="u_date">'+news_panel[i].date[j]+'</span></a>'
			}


		}

	}

	var u_tab=document.getElementsByClassName('u_tab');

	var u_panel = document.getElementsByClassName('u_panel');

	u_panel[0].setAttribute('class','u_panel panel_active');

	for(var i=0;i<5;i++){

		u_tab[i].onclick = function(){

			for(var j=0;j<5;j++){

				u_tab[j].className = 'u_tab';

				u_panel[j].className = 'u_panel'

			}

			this.setAttribute('class','u_tab tab_active');
 
			for(var j=0;j<5;j++){


				if(this.innerHTML == news_tabs_arr[j]){

					u_panel[j].setAttribute('class','u_panel panel_active');

				}

			}

		}

	}



	/*----------- 版本更新轮播图----------------------------------*/
	var mySwiper2 = new Swiper('.u_version-container', {
		autoplay: 3000,//可选选项，自动滑动
		loop : true,
		speed:500,
		effect : 'cube',
		cube: {
		  slideShadows: true,
		  shadow: true,
		  shadowOffset: 100,
		  shadowScale: 0.6
		}
	})

	/*--------------------活动中心-------------------------------------*/

	var activity_panel = []

	for(var i=0;i<4;i++){

		activity_panel.push({title:[],pic:[]});

	}

	activity_panel[0].title = ['新战役推出 破泞之战第二幕：深渊密室','神秘商店的夏夜秘赠','TI7神秘商店开张 多重活动携惊喜','破泞之战推出 黄沙Roshan等你开启'];

	activity_panel[0].pic = ['activity_1.jpeg','activity_2.jpeg','activity_3.jpg','activity_4.jpg'];

	activity_panel[1].title = ['2017完美大师赛预选赛线上观战','2017完美大师赛公开预选赛报名开启','2017国际邀请赛线上观战','2017国际邀请赛线下观战活动'];

	activity_panel[1].pic = ['activity_5.jpg','activity_6.jpg','activity_7.jpg','activity_8.jpg'];

	activity_panel[2].title = ['贴吧电竞：秀出你的DOTA2战绩','联想拯救者DAC官方指定用机','京东游戏玩家惠','维他可可助力DOTA2亚洲邀请赛'];

	activity_panel[2].pic = ['activity_9.png','activity_10.jpg','activity_11.jpg','activity_12.jpg'];

	activity_panel[3].title = ['新战役推出 破泞之战第二幕：深渊密室','神秘商店的夏夜秘赠','TI7神秘商店开张 多重活动携惊喜','破泞之战推出 黄沙Roshan等你开启'];

	activity_panel[3].pic = ['activity_1.jpeg','activity_2.jpeg','activity_3.jpg','activity_4.jpg'];

	var u_activity_type = document.getElementsByClassName('u_activity_type');

	var u_activity_content = document.getElementsByClassName('u_activity_content')[0];

	// html代码添加

	for(var i=0;i<4;i++){

		u_activity_content.innerHTML += '<div class="u_activity_container"><div class="slick_list draggable"><div class="u_activities"></div></div></div>'

	}

	var u_activities = document.getElementsByClassName('u_activities');

	for(var i=0;i<4;i++){

		u_activities[i].innerHTML += '<div class="u_activity_row"></div>'
		u_activities[i].innerHTML += '<div class="u_activity_row"></div>'

	}

	var u_activity_row = document.getElementsByClassName('u_activity_row');

	for(var i=0;i<8;i=i+2){
		u_activity_row[i].innerHTML += '<a href="" class="u_activity"><span class="u_activity_logo"><img src="./images/index/'+activity_panel[i/2].pic[0]+'" alt=""></span><p class="u_activity_title">'+activity_panel[i/2].title[0]+'</p></a>'
		u_activity_row[i].innerHTML += '<a href="" class="u_activity"><span class="u_activity_logo"><img src="./images/index/'+activity_panel[i/2].pic[1]+'" alt=""></span><p class="u_activity_title">'+activity_panel[i/2].title[1]+'</p></a>'
		u_activity_row[i+1].innerHTML += '<a href="" class="u_activity"><span class="u_activity_logo"><img src="./images/index/'+activity_panel[i/2].pic[2]+'" alt=""></span><p class="u_activity_title">'+activity_panel[i/2].title[2]+'</p></a>'
		u_activity_row[i+1].innerHTML += '<a href="" class="u_activity"><span class="u_activity_logo"><img src="./images/index/'+activity_panel[i/2].pic[3]+'" alt=""></span><p class="u_activity_title">'+activity_panel[i/2].title[3]+'</p></a>'
	}

	u_activity_content.innerHTML+= '<a href="" class="a_activityes"><div class="u_activityes"></div></a>'

	

	var u_activity_container = document.getElementsByClassName('u_activity_container');

	u_activity_container[1].setAttribute('class',"u_activity_container activity_selected");



	// 事件触发
	for(var i=0;i<4;i++){

		u_activity_type[i].onmouseover = function(){

			for(var j=0;j<4;j++){

				u_activity_type[j].className = 'u_activity_type';

				u_activity_container[j].className = 'u_activity_container';

			}

			u_activity_container[this.getAttribute('data-type')-1].setAttribute('class',"u_activity_container activity_selected");

			this.setAttribute('class',"u_activity_type selected")

		}

	}

	/*--------------------视频中心-------------------------------------*/

	var video_arr = ['最新视频','官方视频','比赛视频','战队视频'];

	var video_panel = [];

	for(var i=0;i<video_arr.length;i++){

		video_panel.push({title:[],pic:[]});

	}

	video_panel[0].title = ['Dota 2 WTF Moments 250：强力摩托车 终极手榴弹','LGD一周快报第十期：本期快报迎来了大改版','Liquid vs Mineski SLi国际邀请赛线下赛 淘汰赛BO5',
	'Liquid vs Secret SLi国际邀请赛线下赛 淘汰赛BO3','COL vs Mineski SLi国际邀请赛线下赛 淘汰赛BO3','Secret vs Navi SLi国际邀请赛线下赛 小组赛BO3'];

	video_panel[0].pic = ['video_pic1.png','video_pic2.jpg','video_pic3.jpg','video_pic4.jpg','video_pic5.jpg','video_pic6.jpg'];

	video_panel[1].title = ['DOTA2 Valve官方纪录片 新视界第5部 TI7总决赛篇','V社官方纪录片《真视界》——TI7总决赛篇预告片','DOTA2周边文化主题展，TI7神秘商店同时火热开售',
	'无止竞 再出发—中国军团出征2017Ti7国际邀请赛','2017国际邀请赛 中国赛区预选赛各直邀战队前瞻视频','冠军之路永无止竞——TI7中国区预选赛即将火热开启'];

	video_panel[1].pic = ['video_pic7.png','video_pic7.png','video_pic8.jpg','video_pic9.png','video_pic10.png','video_pic11.jpg'];

	video_panel[2].title = ['Liquid vs Mineski SLi国际邀请赛线下赛 淘汰赛BO5','Liquid vs Secret SLi国际邀请赛线下赛 淘汰赛BO3','COL vs Mineski SLi国际邀请赛线下赛 淘汰赛BO3',
	'Secret vs Navi SLi国际邀请赛线下赛 小组赛BO3','Mineski vs SG SLi国际邀请赛线下赛 小组赛BO3视频','Newbee vs Secret SLi国际邀请赛线下赛 小组赛BO3'];

	video_panel[2].pic = ['video_pic12.jpg','video_pic13.jpg','video_pic14.jpg','video_pic15.jpg','video_pic16.jpg','video_pic17.jpg'];

	video_panel[3].title = ['Liquid vs Mineski SLi国际邀请赛线下赛 淘汰赛BO5','Liquid vs Secret SLi国际邀请赛线下赛 淘汰赛BO3','COL vs Mineski SLi国际邀请赛线下赛 淘汰赛BO3',
	'Secret vs Navi SLi国际邀请赛线下赛 小组赛BO3','Mineski vs SG SLi国际邀请赛线下赛 小组赛BO3视频','Newbee vs Secret SLi国际邀请赛线下赛 小组赛BO3'];

	video_panel[3].pic = ['video_pic12.jpg','video_pic13.jpg','video_pic14.jpg','video_pic15.jpg','video_pic16.jpg','video_pic17.jpg'];

	var vedio_tab = document.getElementsByClassName('vedio_tab');

	var video_panels = document.getElementsByClassName('video_panels')[0];

	for(var i=0;i<vedio_tab.length;i++){

		video_panels.innerHTML+='<li class="video_panel"></li>'

	}

	var video_panels_li = document.getElementsByClassName('video_panel');

	for(var i=0;i<vedio_tab.length;i++){

		for(var j=0;j<6;j++){

			video_panels_li[i].innerHTML += '<a href="" class="video_item"><span class="video_item_logo"><img src="./images/index/'+video_panel[i].pic[j]+'" alt=""></span><p class="video_item_title">'+video_panel[i].title[j]+'</p></a>'

		}

	}

	video_panels_li[0].setAttribute('class','video_panel video_panel_active')

	for(var i=0;i<vedio_tab.length;i++){

		vedio_tab[i].onclick = function(){

			for(var j=0;j<vedio_tab.length;j++){

				vedio_tab[j].className = 'vedio_tab';

				video_panels_li[j].className = 'video_panel';

			}

			console.log(this.innerHTML)

			for(var j=0;j<vedio_tab.length;j++){

				if(this.innerHTML.indexOf(video_arr[j]) != -1){

					video_panels_li[j].setAttribute('class','video_panel video_panel_active');

				}

			}

			this.setAttribute('class','vedio_tab vedio_active');

		}

	}

}
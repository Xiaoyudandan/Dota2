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
		// alert(1);
		if(!animat){
			// index = ++index>4? 1: index;\
			if(index==4){
				index=1;
			}else{
				index++;
			}
			var left = parseFloat(slideshow.style.left);
			// var left = parseFloat(slideshow.style.left)-100<-400?0:left-100;
			if(left==-400){
				left=0;
			}
			
			slideshow.style.left=left+'%';
			animation(-100);
		}

	}

	left_arrow.onclick=function(){
		if(!animat){
			// index = --index<1? 4: index;
			if(index==1){
				index=4;
			}else{
				index--;
			}
			var left = parseFloat(slideshow.style.left);
			// var left = parseFloat(slideshow.style.left)+100>0?-400:left-100;
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

	//u-setion样式开始
    var u_btn_source = document.getElementsByClassName('u_btn_source')[0];
    u_btn_source.onmouseover =function () {
    	// alert(1);
        u_btn_source.borderColor='blue';
        u_btn_source.borderWidth=1+'px';
        u_btn_source.borderStyle='solid';
    }

    var racecenter_slideshow = document.getElementsByClassName('racecenter_slideshow')[0];
    var racecenter_spot = document.getElementsByClassName('racecenter_spot')[0].getElementsByTagName('li');
    var img2 = racecenter_slideshow.getElementsByTagName('img');
    resetSlideshow2();
    var index2=1;
    var onNum2=0;
    var animat2 = false;


    racecenter_slideshow.onclick = function () {
        // alert(1);
        if(!animat2){
            // index = ++index>4? 1: index;\
            if(index2==4){
                index2=1;
            }else{
                index2++;
            }
            var left = parseFloat(racecenter_slideshow.style.left);
            // var left = parseFloat(slideshow.style.left)-100<-400?0:left-100;
            if(left==-400){
                left=0;
            }

            racecenter_slideshow.style.left=left+'%';
            animation2(-100);
        }
    }
    for(var i=0;i<racecenter_spot.length;i++){
        racecenter_spot[i].onclick = function(){
            onNum2 = 1;
            var new_index = this.getAttribute('index');
            console.log('index2:'+index2+',new_index:'+new_index);
            var offset =(index2 - new_index)*100;
            var math = new_index-index2;
            if(math > 0){

                img[index2].src = imgArr[new_index-1];
                math = -100;

            }else if(math < 0){

                img[index2-2].src = imgArr[new_index-1];
                math = 100;

            }

            index2 = new_index;
            animation2(math);
        }

    }
    var int2 = setInterval(racecenter_slideshow.onclick,3000);

    function animation2(offset){
        animat2 = true;
        var time = 1*1000;
        var new_left = parseFloat(racecenter_slideshow.style.left)+offset;
        var interval = 10;
        var speed = offset/(time/interval);

        run();
        function run(){
            var left = parseFloat(racecenter_slideshow.style.left);
            temp_left = left+speed;
            if(speed<0&&temp_left>new_left||speed>0&&temp_left<new_left){
                setTimeout(function(){run()},interval);
                racecenter_slideshow.style.left = temp_left+'%';
            }else{
                racecenter_slideshow.style.left = new_left+'%';
                showSpot2();
                if(onNum2==1){
                    resetSlideshow2();
                    racecenter_slideshow.style.left = -100*Number(index2-1)+'%';
                }
                animat2 = false;
            }
        }
    }
    function showSpot2(){
        for(var i=0;i<racecenter_spot.length;i++){
            racecenter_spot[i].className = '';
        }
        racecenter_spot[index2 - 1].className = 'spot_on';
    }
    function resetSlideshow2(){
        for(var i=0;i<img2.length;i++){
            img2[i].src=imgArr[i];
        }
    }

}
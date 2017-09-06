window.onload=function(){
	food_box("img_box_left");
	food_box("img_box_right");
	food_bgc();
}


function food_box(cls){
	var img_box=getByClass("two",cls);
	for(var i=0;i<img_box.length;i++){
		(function(i){
			//图片盒子宽度
			var imgs=img_box[i].getElementsByTagName("img");
			var imgWidth=imgs[0].offsetWidth;
			var exposeWidth=150;
			var boxWidth=imgWidth+exposeWidth*(imgs.length-1);
			img_box[i].style.width=boxWidth+"px";
			//描述定位
			if(cls=="img_box_left"){
				var desc=getByClass("two","description_left");
				desc[i].style.left=boxWidth+"px";
			}
			if(cls=="img_box_right"){
				var desc=getByClass("two","description_right");
				desc[i].style.right=boxWidth+"px";
			}
							
			//图片盒子中图片定位
			function setImgsPos(){
				for(var i=1 ;i<imgs.length;i++){
					if(cls=="img_box_left"){
						imgs[i].style.left=imgWidth + exposeWidth*(i - 1)+"px";	
					}
					if(cls=="img_box_right"){
						imgs[i].style.right=imgWidth +exposeWidth*(i-1)+"px";
					}				
				}
			}
			setImgsPos();

			//图片滑动
			var translate=imgWidth-exposeWidth;
			for(var i=0;i<imgs.length;i++){
				(function(i){
					imgs[i].onmouseover=function(){
					setImgsPos();	
						for(var j=1;j<=i;j++){
							if(cls=="img_box_left"){
								imgs[j].style.left=parseInt(imgs[j].style.left,10)-translate+'px';
							}
							if(cls=="img_box_right"){
								imgs[j].style.right=parseInt(imgs[j].style.right,10)-translate+'px';
							}
						}
					}
				})(i);
			}			
		})(i);	
	}
}

function food_bgc(){
	var gallery=getByClass("two","gallery");
	for(var i=0;i<gallery.length;i++){
		gallery[i].style.backgroundColor="rgba(0,0,0,"+0.075*(i+1)+")";
	}
	var travel=getByClass("three","travel_item");
	for(var i=0;i<travel.length;i++){
		travel[i].style.backgroundColor="rgba(0,0,0,"+0.04*(i+1)+")";
	}
}

function getByClass(parent_id,cls){
	var oParent=document.getElementById(parent_id);
	var elements=oParent.getElementsByTagName("*");
	var results=[];
	for(var i=0;i<elements.length;i++){
		if(elements[i].className.indexOf(cls)!= -1){
			results.push(elements[i]);
		}	
	}
	return results;
}

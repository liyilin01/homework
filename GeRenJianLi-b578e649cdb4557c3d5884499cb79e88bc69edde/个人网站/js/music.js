$(document).ready(function() {　
    var isOn = true;
 //    var music = $('#music')[0];
 //    var data = [
	// 	{url:'Save Me.mp3',name:'Aimee Allen - Save Me'},
	// 	{url:'野子.mp3',name:'苏运莹 - 野子'},
	// 	{url:'岁月神偷.mp3',name:'金志文 - 岁月神偷'},
	// 	{url:'阿婆说.mp3',name:'陈一发儿 - 阿婆说'}
	// ];
	// $('#music').get(0).addEventListener('timeupdate',function(){
	// 	// console.log(this.currentTime,this.duration);
	// 	// console.log(this.currentTime/this.duration*100)
	// 	var item = parseInt(this.currentTime);
		
	// })
 //    $('#isOn').click(function() {
 //        if (isOn) {
 //            $(this).html('&#xe65f;');
 //            music.pause()
 //        } else {
 //            $(this).html('&#xe605;');
 //            music.play();
 //        }
 //        isOn = !isOn;
 //    })

   $('.btn_x').click(function(){
   		if(!isOn){
   			$('.on').show();
   			$('.off').hide();
   			$('iframe').animate({width:8},600)
   		}else{
   			$('.on').hide();
   			$('.off').show();
   			$('iframe').animate({width:330},600)
   		}
   		isOn = !isOn;
   })
});

/*The nav*/
      $(function(){  
 $("#u1 li a").addClass("white");   
 $("#u1 li a").click(function(){
     $(this).addClass("border");   
      $("#u1 li a").not(this).removeClass("border");
 });
  $("#u1 .li1").click(function(){
    $("html,body").animate({"scrollTop":"0"},300);         
  });
    $("#u1 .li2").click(function(){
    $("html,body").animate({"scrollTop":"1000px"},300);         
  });
      $("#u1 .li3").click(function(){
    $("html,body").animate({"scrollTop":"2000px"},300);         
  });
      $("#u1 .li4").click(function(){
    $("html,body").animate({"scrollTop":"3000px"},300);         
  });
      });
      /*Scroller*/
 $(function(){     
     $(document).scroll(function(){
         var top= $(document).scrollTop();
if(top>=0&&top<1000){
      window.location.hash="#hp";
   $("#u1 .li1 a").addClass("border"); 
      $("#u1 .li2 a").removeClass("border");    $("#u1 .li3 a").removeClass("border");  $("#u1 .li4 a").removeClass("border"); 
}
if(top>=1000&&top<2000){     
    window.location.hash="#hst";
   $("#u1 .li2 a").addClass("border"); 
     $("#u1 .li1 a").removeClass("border");    $("#u1 .li3 a").removeClass("border");  $("#u1 .li4 a").removeClass("border"); 
}
if(top>=2000&&top<3000){
      window.location.hash="#exa";
   $("#u1 .li3 a").addClass("border"); 
     $("#u1 .li1 a").removeClass("border");    $("#u1 .li2 a").removeClass("border");  $("#u1 .li4 a").removeClass("border"); 
}
if(top>=3000){
      window.location.hash="#ref";
   $("#u1 .li4 a").addClass("border"); 
     $("#u1 .li1 a").removeClass("border");    $("#u1 .li2 a").removeClass("border");  $("#u1 .li3 a").removeClass("border"); 
}
      });
    });             ;        
/*Reload to  top*/
$(function(){
       $("#u1 .li1 a").addClass("border"); 
    $(window).scrollTop(0);
});
/*Homepage*/
   $(function(){
       $("#h1a").hide();     
       $("#h1b").hide();
             $("#h1c").hide();
var n=0;
function f1(){
    n++;
    if(n==1){
        $("#h1a").fadeIn();
    }
        if(n==2){
        $("#h1b").fadeIn();
    }
            if(n==3){
        $("#h1c").fadeIn();
    }
}
setInterval(f1,1000);
});  
/*show and hide button*/
$(function(){
      $("button").hide();
     $(document).scroll(function(){
         var top= $(document).scrollTop();
if(top===0){  
    $("button").hide();
}
else{  
    $("button").show();
}
});
/*click to top*/
    $("button").click(function(){
   $("html,body").animate({"scrollTop":"0"},300);     
    });
    /*change characters on button*/
    $("button").hover(function(){
        $(this).html("返回<br>顶部")
    },
        function(){
     $(this).html("∧");        
  
    });
});

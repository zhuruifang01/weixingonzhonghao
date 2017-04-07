//手机屏幕自适应
function resize(originSize,type){
    var type=type||"x";
    var widths=document.documentElement.clientWidth;
    var heights=document.documentElement.clientHeight;
    if(type=="x"){
        var scale=widths/originSize*100+"px";
    }else{
        var scale=heights/originSize*100+"px";
    }
    document.getElementsByTagName("html")[0].style.fontSize=scale;
}
window.onload=function(){
    resize(894);
}

//值班信息——选项卡
$(function(){
    $(".header>li").click(function(){
        var index=$(this).index(".header>li");
        $(".xuanxianka").hide();
        $(".xuanxianka").eq(index).show();
        $(".header>li").removeClass("active");
        $(".header>li").eq(index).addClass("active");
    });
});

//假勤变动【发起调休，发起换班】
$(function(){
    var fqtx=$(".fqtx");
    fqtx.click(function(){
        $(".contain_wdfq").hide();
        $(".contain_fqtx").show();
    });
    var fqhb=$(".fqhb");
    fqhb.click(function(){
        $(".contain_wdfq").hide();
        $(".contain_fqhb").show();
    });
});


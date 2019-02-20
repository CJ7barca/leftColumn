
function nlogout() {
    if(!confirm("是否确定退出？")){
        return false;
    }
}

function getCookie(c_name){
　　　　if (document.cookie.length>0){　　
　　　　　　c_start=document.cookie.indexOf(c_name + "=")　
　　　　　　if (c_start!=-1){ 
　　　　　　　　c_start=c_start + c_name.length+1
　　　　　　　　c_end=document.cookie.indexOf(";",c_start)
　　　　　　　　if (c_end==-1) c_end=document.cookie.length　　
　　　　　　　　return unescape(document.cookie.substring(c_start,c_end))
　　　　　　} 
　　　　}
　　　　return ""
　　}
function setCookie(c_name, value, expiredays){
　　　　var exdate=new Date();
　　　　exdate.setDate(exdate.getDate() + expiredays);
　　　　document.cookie=c_name+ "=" + escape(value) + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString()) +";path=/";
　　}

var cookie_id6d='<% $worker_id6d %>';
//客服经理cookie
var cookie_kfjl=getCookie('kfjl'+cookie_id6d);
if(cookie_kfjl=='1'){
    $('.product-lists .kf_help').find('span').hide();
}else{
    $('.product-lists .kf_help').find('span').show();
}
$('.product-lists .kf_help').find('.hidden_help').mouseleave(function(){
    $('.product-lists .kf_help').find('span').hide();
    setCookie('kfjl'+cookie_id6d,'1',30);
})
//apicookie
var cookie_api_list=getCookie('api_list'+cookie_id6d);
if(cookie_api_list=='1'){
    $('.product-lists .api_list').find('span').hide();
}else{
    $('.product-lists .api_list').find('span').show();
}
$('.product-lists .api_list').find('.api_info').mouseleave(function(){
    $('.product-lists .api_list').find('span').hide();
    setCookie('api_list'+cookie_id6d,'1',30);
})

$(".product-lists>.left_icon").mouseenter(function(){
    var obj = $(this);
    navTimer = setTimeout(function(){
        obj.find(".hover_remind").show();
    },500)
})
$(".product-lists>.left_icon").mouseleave(function(){
    clearTimeout(navTimer);
    $(".hover_remind").hide();
})
$(".product-lists>.left_icon").on("click",function(){
    if(!$(this).hasClass('makemoney')){
        var href=$(this).children("a").attr("href");
        if(href){
            window.location=href;
        }
    }
})
$(".more_list").hover(function(){
    $(this).find(".hidden_list").show();
},function(){
    $(this).find(".hidden_list").hide();
})
$(".product-lists .api_list").hover(function(){
    $(this).find(".api_info").show();
},function(){
    $(this).find(".api_info").hide();
})
$(".product-lists .guest").hover(function(){
    $(this).find(".guest_info").show();
},function(){
    $(this).find(".guest_info").hide();
})
$(".product-lists .kf_help").hover(function(){
    $(this).find(".hidden_help").show();
},function(){
    $(this).find(".hidden_help").hide();
})
//咨询窗口
$('.kfConsultation').click(function() {
    chat();
});
(function() {var _53code = document.createElement("script");_53code.src = "https://tb.53kf.com/code/code/10000079/12";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(_53code, s);})();
var api = null;
setTimeout(function(){
    if(api == null){
        api = $53.createApi();
    }
    api.push('cmd', 'member');
    api.push('id', '<%$main_account%>');
    api.query();
},5000);

function chat() {
    if(api == null){
        api = $53.createApi();
    }
    api.push('cmd', 'kfclient');
    api.push('type', 'new');
    api.query();
}
// the Flyer Project, NRRINC Media (C) 2020, Apache V2
$("head").append('<link rel="stylesheet" href="/src/flyer/flyer.css" type="text/css" />'),$("head").append('<link rel="stylesheet" href="/src/flyer/video/rtop.videoPlayer.1.0.2.min.css" />'),$("head").append('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">'),$("head").append('<script type="text/javascript" src="/src/flyer/video/rtop.videoPlayer.1.0.2.js"><\/script>'),$(document).ready((function(){$("#flyer_video").RTOP_VideoPlayer({showFullScreen:!0,showTimer:!0,showSoundControl:!0,playInModal:!1})})),$(document).ready((function(){$("#flyer").append('<br><h2 class="flyer-title"><a href="#" id="flyer-linka"><i id="fyler-Sponsor-name"></i></a></h2><div class="entry"><desc><img class="flyer-image" id="flyer-image" src="/src/home/shared/images/HER.PNG" alt="" title="this is not the right image.." style="display:none;" /><iframe id="flyer-frame" class="flyer-iframe9"></iframe><div class="myVideo" id="flyer_video" data-video="/src/flyer/video/sample.mp4" data-poster="/src/flyer/video/sample.jpg" data-type="video/mp4"></div><p class="flyer-desc" id="flyer-desc"></p></desc></div>'),$("#fyler-Sponsor-name").append("A Word From Our Sponsor:"),$("#flyer-linka").attr("a","#"),$("#flyer-linka").attr("target","#"),$("#flyer-linka").attr("alt","Link to Sponsor"),$("#flyer-frame").attr("src","/settings/flyer.htm"),$("#flyer-frame").attr("sandbox",""),$("#flyer-frame").attr("allowpaymentrequest","false"),$("#flyer-frame").attr("name","Flyer"),$("#flyer-frame").attr("allowfullscreen","false"),$("#flyer-frame").attr("referrerpolicy","unsafe-url"),$("#flyer-desc").append("Your ad here"),$("#flyer-desc").attr("alt","ad desc."),$("#flyer-image").attr("src",""),$("#flyer-image").attr("title",""),$("#flyer-image").attr("alt","none"),$("#flyer-image").hide(),$("#flyer_video").attr("data-video","#"),$("#flyer_video").attr("data-poster","#"),$("#flyer_video").attr("data-type","video/mp4"),$("#flyer-image").hide()})),$(document).ready((function(e){var r=localStorage.getItem("ad");r&&e("#flyer").addClass(r),e("#nofly").click((function(){e("#flyer").addClass("hide"),e("#yesfly").addClass("hide"),e("#nofly").addClass("hide"),localStorage.setItem("ad","hide")})),e("#yesfly").click((function(){e("#flyer").removeClass("hide"),e("#yesfly").removeClass("hide"),e("#nofly").removeClass("hide"),localStorage.setItem("ad",null)}))}));
// note, this may not be up to date. Please use flyer.js NOT flyer-min.js.
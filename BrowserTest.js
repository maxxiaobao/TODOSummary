<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <script type="text/javascript">
    alert(getExploreName());
    function getExploreName(){
      var userAgent = navigator.userAgent.toLowerCase();
      if(userAgent.match(/opr/i)){ 
        return 'Opera';
      }else if(userAgent.match(/compatible/i) || userAgent.match(/msie/i)){
        if (!window.XMLHttpRequest) return "IE6";
        if (!window.document.querySelector) return "IE7";
        if (!window.document.addEventListener) return "IE8";
        if (!window.atob) return "IE9";
        if (!document.createElement ("input").dataset) return "IE10";
      }else if(userAgent.match(/edge/i)){
        return 'Edge';
      }else if(userAgent.match(/ucweb/i)){
        return "UC"
      }else if(userAgent.match(/firefox/i)){
        return 'Firefox';
      }else if(userAgent.match(/qqbrowser/i)){
        return 'QQBrowser';
      }else if(userAgent.match(/safari/i) && !userAgent.match(/chrome/i)){ 
        return 'Safari';
      }else if(userAgent.match(/chrome/i) && userAgent.match(/chrome/i)){ 
        return 'Chrome';
      }else if(!!window.ActiveXObject || "ActiveXObject" in window){
        return 'IE11';
      }else if(userAgent.match(/ipad/i)){
        return "iPad";
      }else if(userAgent.match(/iphone os/i)){
        return "iPhone";
      }else if(userAgent.match(/android/i)){
        return "Android";
      }else{
        return 'Unkonwn';
      }
    }
    console.log(navigator.userAgent);
    </script>
</body>
</html>

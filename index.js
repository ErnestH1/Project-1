        // var audio = new Audio('./images/Walker.mp3');
        // audio.play();
        var mysong = document.getElementById("mysong");
        var icon = document.getElementById("icon");
        
        icon.onclick = function(){
            if(mysong.paused){
                mysong.play();
                icon.src = "images/pause.png";
            }else{
                mysong.pause();
                icon.src = "images/play.png";
            }
        }
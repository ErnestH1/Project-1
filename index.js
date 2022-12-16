        const url = "https://api.npoint.io/9aec623c6586cd4c1b04/music/"
        const genreurl= "https://api.npoint.io/2df136e90bcc6ac40df8/Genere/"
        const info = document.getElementById('music')
        const searchInputTxt = document.getElementById('inputsearch').value.trim();
        const searchBtn= document.getElementById('loginbtn')
        const inputBtn= document.getElementById('searchBtn')
        const log_in = document.getElementById('sign-in')
        const genere= document.getElementById('genere')
        const intro= document.getElementById('intro').style.display = "none";
        const display= document.getElementById('music').style.display = "none";
        // var audio = new Audio('./images/Walker.mp3');
        // audio.play();
        // var mysong = document.getElementById("mysong ");
        // var icon = document.getElementById("icon") ;
        
        // icon.onclick = function(){
        //     if(mysong.paused){
        //         mysong.play();
        //         icon.src = "images/pause.png";
        //     }else{
        //         mysong.pause();
        //         icon.src = "images/play.png";
        //     }
        // }

        // event liteners
        searchBtn.addEventListener('click', showItems)
        inputBtn.addEventListener('click', genreSearch)



        // funtion to dispaly items on dom

    function showItems(){
            document.getElementById("intro").style.display = "block";
            document.getElementById("music").style.display = "block";
            document.getElementById("sign-in").style.display = "none";
            }
        
fetch(`${url}`).then((response) => response.json())
.then(json=>{json.map(data=>
   
    {console.log(data)
    info.append(playMusic(data))
    
    })})


    function playMusic({Mstite, audio, id}){
        let startMusic = document.createElement('div')
      startMusic.innerHTML=
                `
                <div class="right">
                <div class="right">
                     <p>Click To Play ${id}</p>
                     <h4>${Mstite}</h4><br>
                     <iframe width="42" height="31"
                     src="${audio}">
                     </iframe>
                 </div>
             </div>
            `  

    return startMusic
    }

    fetch(`${genreurl}${searchInputTxt}`).then((response) => response.json())
.then(json=>{json.map(data=>
   
    {console.log(data)
    genere.append(genreSearch(data))
    
    })})


    function genreSearch({id, genereName, audio}){
        let detailsdata= document.createElement('div')
       let details=  searchInputTxt
       if (details===searchInputTxt){
        detailsdata.innerHTML = `
        <div class="right">
        <div class="right">
             <p>Click To Play ${id}</p>
             <h4>${genereName}</h4><br>
             <iframe width="42" height="31"
             src="${audio}">
             </iframe>
         </div>
     </div>
        `
       }
       else{
        detailsdata.innerHTML= `sorry couldnt find one`
       }
       document.getElementById("music").style.display = "none";

       return detailsdata
    }
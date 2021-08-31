var audio=document.getElementById('audio');
var playPauseBTN=document.getElementById('play');

var count=0;

function playPause(){
    const playMB=document.getElementById('play-mb');
    if (window.innerWidth > 375) {
        if(count==0){
            count=1;
            audio.play();
            play.innerHTML="<h1>| |</h1>";
        }else{
            count=0;
            audio.pause();
            play.innerHTML="<h1>&#9658;</h1>";
        }
    }
    else {
        if(count==0){
            count=1;
            audio.play();
            playMB.innerHTML="<h1>| |</h1>";
        }else{
            count=0;
            audio.pause();
            playMB.innerHTML="<h1>&#9658;</h1>";
        }
    }
}
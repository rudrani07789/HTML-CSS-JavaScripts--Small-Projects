console.log("Welcome to Spotify");

//Intilize the variables
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));


let songs=[
    {songName:"Let me love you", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
     {songName:"My Heart Will Go On", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
     {songName:"I Will Always Love You", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
     {songName:"City of Stars", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
     {songName:"Take My Breath Away", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
     {songName:"Love Me Like You Do", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
     {songName:"A Whole New World", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
     {songName:"Iris", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
     {songName:"Singin' in the Rain", filePath:"songs/9.mp3", coverPath:"covers/9.jpg"},
     {songName:"Diamonds Are a Girl's Best Friend", filePath:"songs/10.mp3", coverPath:"covers/10.jpg"}

]

songItems.forEach((elelment,i)=>{
    //console.log(elelment,i);
   elelment.getElementsByTagName('img')[0].src=songs[i].coverPath;
   elelment.getElementsByClassName('songName')[0].innerText=songs[i].songName;
})

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        //masterPlay.classList.remove('fa-circle-play');
        //masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        //masterPlay.classList.remove('fa-pause');
        //masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    
    //update seekbar
    let progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value =progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})


/*Array.from(document.getElementsByClassName('songItemPlay')).forEach((element,i)=>{
    element.addEventListener('click',()=>{
        let songItem=element.closest('.songItem');
        let allSongItems=Array.from(document.getElementsByClassName('songItem'));
        let index = allSongItems.indexOf(songItem);
        
        audioElement.src=songs[index].filePath;
        audioElement.play();
        gif.style.opacity=1;
        console.log('Playing:', songs[index].songName);
        
    })
})*/
/*document.addEventListener('click',(e)=>{
    console.log(e.target);
})*/
document.addEventListener('click', (e) => {
let clickedElement = e.target.closest('.songItemPlay');

if(clickedElement) {
// Get the parent songItem
let songItem = clickedElement.closest('.songItem');
let allSongItems = Array.from(
document.getElementsByClassName('songItem')
);
let index = allSongItems.indexOf(songItem);

console.log('Song clicked at index:', index);
console.log('Song:', songs[index]);

// Play the song
audioElement.src = songs[index].filePath;
audioElement.play();
gif.style.opacity = 1;
}
})
const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.vid-container video')

    // Select all the Sounds using querySelectorAll
    const sounds = document.querySelectorAll('.sound-picker button');
    // Time display
    const timeDisplay = document.querySelector('.time-display');
    // Get the lenght of the outline for the sounds to allow annimation
    const outlineLength = outline.getTotalLength();
    console.log(outlineLength);
    //Duration function for the user to chose when the song stops
    let fakeDuration = 600;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

//Play sound
    play.addEventListener("click", () => {
        song.play();

// Create a function specific to stop and play the sounds
        const checkPlaying = song =>{
            if(song.paused){
                song.play();
                video.play();
                play.src = '/assets/svg/pause.svg';
            }else{
                song.pause();
                video.pause();
                play.src = '/assets/svg/play.svg';
            }
        }
});

};

app();
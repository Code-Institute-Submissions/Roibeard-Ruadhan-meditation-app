const app = () => {
  const song = document.querySelector('.song');
  const play = document.querySelector('.play');
  const replay = document.querySelector(".replay");
  const outline = document.querySelector('.moving-outline circle');
  const video = document.querySelector('.vid-container video');

  // Select all the Sounds using querySelectorAll
  const sounds = document.querySelectorAll('.sound-picker button');
  // Time display
  const timeDisplay = document.querySelector('.time-display');
  // Get the lenght of the outline for the sounds to allow annimation
  const outlineLength = outline.getTotalLength();
  console.log(outlineLength);
  //Duration function for the user to chose when the song stops
  const timeSelect = document.querySelectorAll(".time-select button");
  let fakeDuration = 600;

outline.style.strokeDasharray = outlineLength;
outline.style.strokeDashoffset = outlineLength;

//pick different sounds
sounds.forEach(sound => {
    sound.addEventListener("click", function() {
      song.src = this.getAttribute("data-sound");
      video.src = this.getAttribute("data-video");
      checkPlaying(song);
  });
});

//Play sound
play.addEventListener("click", function() {
    checkPlaying(song);
});

//Select sound
timeSelect.forEach(option => {
    option.addEventListener("click", function() {
        fakeDuration = this.getAttribute("data-time");
        timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
            fakeDuration % 60
        )}`;
    });
});

// Create a function specific to stop and play the sounds
        const checkPlaying = song => {
            if(song.paused) {
                song.play();
                video.play();
                play.src = '/assets/svg/pause.svg';
            }else{
                song.pause();
                video.pause();
                play.src = '/assets/svg/play.svg';
            }
        };

    //Preparations to animate the circle, to update when the song plays
    song.ontimeupdate = () => {
        let currentTime = song.currentTime;
        let elapsed = fakeDuration - currentTime;
        let seconds = Math.floor(elapsed % 60);
        let minutes = Math.floor(elapsed / 60);

        //Animate the circle details
        let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
        outline.style.strokeDashoffset = progress;
        //Animate the text of the sound timer
        timeDisplay.textContent = `${minutes}:${seconds}`;

        //To fix time-display for the sound so that when the song reaches its fakeDuration it pauses & resets
        if(currentTime >= fakeDuration){
            song.pause();
            song.currentTime = 0;
            play.src = '/assets/svg/play.svg'
        }
    };
};


app();
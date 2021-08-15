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

};

app();
boardBtnArr = document.getElementsByTagName("button");

console.log(boardBtnArr)

for(i=0;i<boardBtnArr.length;i++){
    console.log(boardBtnArr[i]);
    boardBtnArr[i].addEventListener("click", playAudio);    
}

function playAudio(){
    let thisButton = document.getElementById(`${this.id}`);
    var soundbite = new Audio();
    function playSoundbite(file){
        soundbite = new Audio(file);
        soundbite.play();
    }
    playSoundbite(`sounds/${thisButton.id}.wav`);
    console.log(thisButton.id);

}

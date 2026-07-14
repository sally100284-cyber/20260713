const b = document.getElementById("play");
const a = document.getElementById("audio");

b.onclick = () => {

    if(a.paused){

        a.play();
        b.textContent = "❚❚";

    }else{

        a.pause();
        b.textContent = "▶";

    }
};

a.onended = () => {
    b.textContent = "▶";
};

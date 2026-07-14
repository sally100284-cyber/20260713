const b = document.getElementById("play");
const a = document.getElementById("audio");

b.innerHTML = "▶";

b.onclick = () => {

    if (a.paused) {

        a.play();
        b.innerHTML = "❚❚";

    } else {

        a.pause();
        b.innerHTML = "▶";

    }

};

a.onended = () => {
    b.innerHTML = "▶";
};

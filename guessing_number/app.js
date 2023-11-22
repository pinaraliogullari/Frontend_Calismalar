let heart = 3;
let random = 0;


function Guess() {
    let number = document.getElementById("number").value;
    if (heart == 3) {
        random = Math.floor(Math.random() * 10) + 1;
    }

    if (number == random) {
        document.getElementById("result").innerHTML = "Congratulations!"
        ShowButton("again-button");
        HideButton("guess-button");



    } else {
        let element = document.querySelectorAll("#hearts > i")[heart - 1];
        element.classList.remove("orange");
        element.classList.add("grey");
        heart--;

        if (heart > 0) {
            document.getElementById("result").innerHTML = "Wrong answer:(";
        } else {
            ShowButton("again-button");
            HideButton("guess-button");

            document.getElementById("result").innerHTML = "Wrong answer:( Correct answer is  " + random;
        }
    }

};

function Again() {
    heart = 3;
    for (let i = 0; i < 3; i++) {
        let element = document.querySelectorAll("#hearts > i")[i];
        element.classList.remove("grey");
        element.classList.add("orange");
    }

    HideButton("again-button");
    ShowButton("guess-button");
    document.getElementById("result").innerHTML = "";
}


function ShowButton(id) {
    document.getElementById(id).classList.add("btn-show");
    document.getElementById(id).classList.remove("btn-hide");
}

function HideButton(id) {
    document.getElementById(id).classList.remove("btn-show");
    document.getElementById(id).classList.add("btn-hide");
}
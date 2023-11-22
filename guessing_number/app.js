let heart = 3;
let random = 0;
let guessButton = document.getElementById("guess-button");
let againButton = document.getElementById("again-button");
let icon = document.querySelector(".red");


guessButton.addEventListener("click", function () {
    let number = document.getElementById("number").value;
    if (heart == 3) {
        random = Math.floor(Math.random() * 10 + 1);
    }
    if (number == random) {
        document.getElementById("result").innerHTML = "Congratulations!"
        document.getElementById("guess-button").innerHTML = "Play again!"

    }else {

        let heartIcon = document.querySelectorAll("#hearts > i")[heart - 1];
        heartIcon.classList.remove("red");
        heartIcon.classList.add("grey");

        heart--;

        if (heart > 0) {
            document.getElementById("result").innerHTML = "Wrong answer:(";

            guessButton.classList.remove("btn-show");
            guessButton.classList.add("btn-hide");
            againButton.classList.remove("btn-hide");
            againButton.classList.add("btn-show");
        }
        else {

        }




    }
})

function Show







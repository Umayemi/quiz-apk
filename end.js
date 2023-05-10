const numberScored = document.querySelector("#number_scored");
if (availableQuestion.length==0 || questionCounter>= max_que) {
    numberScored.innerHTML = questionCounter
}
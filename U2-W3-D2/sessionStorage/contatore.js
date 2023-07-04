 function startCounter() {
    var counterElement = document.getElementById("counter");
    var counterValue = sessionStorage.getItem("counterValue") || 0;

    counterElement.textContent = counterValue;

    var intervalId = setInterval(function() {
        counterValue++;
        counterElement.textContent = counterValue;

        sessionStorage.setItem("counterValue", counterValue);
    }, 1000);

    sessionStorage.setItem("intervalId", intervalId);
}

function stopCounter() {
    var intervalId = sessionStorage.getItem("intervalId");
    clearInterval(intervalId);
}

window.onload = startCounter;

window.onbeforeunload = stopCounter;
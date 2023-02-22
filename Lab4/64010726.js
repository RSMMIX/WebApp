function updateTime() {
    postMessage(new Date().toString());

    setTimeout(updateTime, 1000);
}

updateTime()

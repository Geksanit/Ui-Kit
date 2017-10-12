
window.video = function () {
    console.log(document.getElementsByTagName('video'));

}();
window.play = function () {
    document.getElementsByTagName('video')[0].paused = false;
};

var initSimpleRipple = function() {
    var spawnRipple = function(e) {
        var xPos = e.pageX - this.offsetLeft;
        var yPos = e.pageY - this.offsetTop;
        var color = this.getAttribute('data-ripple-color') || 'white';
        var opacity = this.getAttribute('data-ripple-opacity') || 0.5;

        var rippleEffect = document.createElement("span");
        rippleEffect.className = "ripple-effect";
        rippleEffect.style.left = xPos + 'px';
        rippleEffect.style.top = yPos + 'px';
        rippleEffect.style.backgroundColor = color;
        rippleEffect.style.opacity = opacity;

        this.appendChild(rippleEffect);
        setTimeout(function(){
            this.removeChild(rippleEffect);
        }.bind(this), 1000);
    };

    var ripples = document.getElementsByClassName('ripple');
    for(var i = 0; i < ripples.length; i++){
        ripples[i].addEventListener('click', spawnRipple, false);
    }
};
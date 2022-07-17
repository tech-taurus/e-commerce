
    window.onload = addAutoplay();
    var videoLocation  = document.getElementById("hero-video");

    function addAutoplay() {
        if(window.innerWidth > 1024){
            videoLocation.setAttribute("autoplay","");
      };
    }

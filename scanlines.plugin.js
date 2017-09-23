//META{"name":"Systemspace scanlines"}*//

var BlurNSFW = (function() {

class Plugin {
	getName(){return "Systemspace Scanlines"}
	getShortName() {return "sssl"}
	getDescription(){return "Add's the systemspace scanlines too your discord."}
	getVersion(){return "0.3"}
	getAuthor(){return "Kneesox"}

	constructor() {
		this.style = `/* Scanlines */

      #overlay {
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1000;
          background-image: url(https://systemspace.network/res/images/static/overlay.png);
          background-repeat: all;
          background-position: 0px 0px;

          animation-name: Static;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-timing-function: steps(4);

          box-shadow: inset 0px 0px 10em rgba(0,0,0,0.4);
      }

      @keyframes Static {
          0% { background-position: 0px 0px; }
          100% { background-position: 0px 4px; }
      }

      #overlay2 {
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1000;
          background-image: url(https://systemspace.network/res/images/static/overlay2.png);
          background-repeat: all;
          background-position: 0px 0px;

          animation-name: Static;
          animation-duration: 0.8s;
          animation-iteration-count: infinite;
          animation-timing-function: steps(4);
      }`
	}



  load(){

	}

  start(){
    BdApi.injectCSS(this.getShortName(), this.style);
		const divs = $(`<div id="overlay"></div><div id="overlay2"></div>`);
    $("body").append(divs);
  }

  stop(){
		BdApi.clearCSS(this.getShortName())
		$("div.overlay").remove();
		$("div.overlay2").remove();
	}



};

return Plugin
})();

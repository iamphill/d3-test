var Colour = function () {
    // Get random rgb
    this.red = Math.floor(Math.random() * 255);
    this.green = Math.floor(Math.random() * 255);
    this.blue = Math.floor(Math.random() * 255);

    // Create new rgb mixed with white
    this.red = (this.red + 255) / 2 >> 0;
    this.green = (this.green + 255) / 2 >> 0;
    this.blue = (this.blue + 255) / 2 >> 0;

    // Create darker rgb for hover effect
    this.darkRed = (this.red + 170) / 2 >> 0;
    this.darkGreen = (this.green + 170) / 2 >> 0;
    this.darkBlue = (this.blue + 170) / 2 >> 0;

    this.createHex();
};
Colour.prototype.constructor = Colour;

// Turn into hex string
Colour.prototype.createHex = function () {
    var redHex = this.red.toString(16);
    var blueHex = this.blue.toString(16);
    var greenHex = this.green.toString(16);

    this.hex = '#' + redHex + blueHex + greenHex;

    redHex = this.darkRed.toString(16);
    blueHex = this.darkBlue.toString(16);
    greenHex = this.darkGreen.toString(16);

    this.hoverHex = '#' + redHex + blueHex + greenHex;
};

document.addEventListener('DOMContentLoaded', function () {
    var $holder = document.getElementById('js-svg-holder');
    var holderWidth = $holder.offsetWidth;
    var holderHeight = $holder.offsetHeight;

    // Create container
    var svgContainer = d3.select($holder).append('svg')
                         .attr('width', holderWidth)
                         .attr('height', holderHeight);

    // X & Y vars
    var x = 0
    var y = -(new Hexagon().HEIGHT / 2);

    // Loop over height to create rows
    for (var a = 0; a < ((holderHeight / new Hexagon().HEIGHT) + 3); a++) {
        // Loop over width to create rows
        for (var i = 0; i < (holderWidth / new Hexagon().WIDTH); i++) {
            var h = new Hexagon(svgContainer, x, y);
            h.createData();
            h.draw();

            // Increase X
            x += new Hexagon().WIDTH;
        }

        // Reset X
        if ((a % 2) == 0) {
            x = -(new Hexagon().WIDTH / 2);
        } else {
            x = 0;
        }

        // Increase Y
        y += new Hexagon().HEIGHT - (new Hexagon().HEIGHT / 4)
    }
}, false);

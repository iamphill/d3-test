var Hexagon = function (svg, x, y) {
    this.svg = svg;
    this.x = x;
    this.y = y;
};
Hexagon.prototype.constructor = Hexagon;
Hexagon.prototype.WIDTH = 90;
Hexagon.prototype.HEIGHT = 100;

// Create data based on X & Y
Hexagon.prototype.createData = function () {
    this.lineData = [
        { 'x': this.x + (this.WIDTH / 2),    'y': this.y },
        { 'x': this.x + this.WIDTH,          'y': this.y + (this.HEIGHT / 2) / 2 },
        { 'x': this.x + this.WIDTH,          'y': this.y + (this.HEIGHT / 2) + ((this.HEIGHT / 2) / 2) },
        { 'x': this.x + (this.WIDTH / 2),    'y': this.y + this.HEIGHT },
        { 'x': this.x,                       'y': this.y + (this.HEIGHT / 2) + ((this.HEIGHT / 2) / 2) },
        { 'x': this.x,                       'y': this.y + (this.HEIGHT / 2) / 2 },
        { 'x': this.x + (this.WIDTH / 2),    'y': this.y }
    ];
};

// Draw Hexagon
Hexagon.prototype.draw = function () {
    var self = this;

    // Get random colour
    this.colour = new Colour();

    // Create new line
    this.svg.append('path')
            .attr('d', Line(this.lineData))
            .attr('stroke', 'none')
            .attr('stroke-width', 0)
            .attr('fill', this.colour.hex)
            .on('mouseover', function () {
                self.mouseOver(this, self);
            });
};

Hexagon.prototype.mouseOver = function (e, self) {
    self.svg.append('path')
            .attr('id', 'js-path-hover')
            .attr('d', d3.select(e).attr('d'))
            .attr('fill', self.colour.hoverHex)
            .style('transform-origin', '50% 50%')
            .style('transform', 'scale(1.1)')
            .on('mouseout', function () {
                self.mouseOut(this, self);
            })
};

Hexagon.prototype.mouseOut = function (e, self) {
    d3.selectAll('#js-path-hover').remove();
};

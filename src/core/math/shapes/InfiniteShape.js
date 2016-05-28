var CONST = require('../../const');

/**
 * A shape that contains every point on the canvas. Useful for creating fullscreen
 * graphics or setting hitAreas that cover everything.
 *
 * @class
 * @memberof PIXI
 */
function InifiniteShape()
{
    this.type = CONST.SHAPES.INFINITE;
}

InifiniteShape.prototype.constructor = InifiniteShape;
module.exports = InifiniteShape;

/**
 * Checks whether the x and y coordinates given are contained within this Rectangle
 *
 * @param x {number} The X coordinate of the point to test
 * @param y {number} The Y coordinate of the point to test
 * @return {boolean} Whether the x/y coordinates are within this Rectangle
 */
InifiniteShape.prototype.contains = function (x, y)
{
    return true;
};

const Util = {
    inherits(childClass, parentClass) {
        const Surrogate = function () { };
        Surrogate.prototype = parentClass.prototype;
        childClass.prototype = new Surrogate();
        childClass.prototype.constructor = childClass;
    },

    determineDirection(lastPressed) {
        switch(lastPressed){
            case "left":
                return [-4, 0];
            case "right":
                return [4, 0];
            case "up":
                return [0, -4];
            case "down":
                return [0, 4];
            default: 
                return [4, 0];

        }
    }
}


module.exports = Util;

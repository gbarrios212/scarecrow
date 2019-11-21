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
                break;
            case "right":
                return [4, 0];
                break;
            case "up":
                return [0, -4];
                break;
            case "down":
                return [0, 4];
                break;
            default: 
                return [4, 0];

        }
    }
}


module.exports = Util;

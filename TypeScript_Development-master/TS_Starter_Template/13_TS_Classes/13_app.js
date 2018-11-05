var Car = (function () {
    function Car(model, year, mileage, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }
    Car.prototype.getModel = function () {
        return this.model;
    };
    Object.defineProperty(Car.prototype, "getYear", {
        get: function () {
            return this.year;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "getMileage", {
        get: function () {
            return this.mileage;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.specification = function () {
        return " ";
    };
    return Car;
}());

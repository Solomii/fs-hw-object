/* створити конструктор для Cattle(brand, maxVolume, minVolume)
brand
maxVolume
minVolume
currentVolume = 0
isOn = false

addWater(value) //налий води
makeTea(value)  //відлий воду
turnOn()  //кип'яти
 */

function Cattle(brand, maxVolume, minVolume) {
    this.brand = brand;
    this.maxVolume = maxVolume;
    this.minVolume = minVolume;
    this.currentVolume = 0;
    this.isOn = false;

    /**
     * add water
     * @param {number} value
     * @returns {string}
     */
    this.addWater = function (value) {
        if (value < 0) {
            console.log("error");
        }
        if (this.currentVolume + value > maxVolume) {
            console.log(this.brand + "," + " error overflow");
            return;
        } else {
            this.currentVolume += value;
        }
        console.log(
            this.brand +
                ", " +
                "water is added, now cattle has " +
                this.currentVolume +
                "ml water"
        );
    };

    /**
     * remove(made) tea
     * @param {number} value
     * @returns {string | number}
     */
    this.makeTea = function (value) {
        if (value < 0) {
            console.log("error");
        }
        if (this.isOn === false) {
            console.log(this.brand + "," + " water is cold");
            return;
        }

        if (this.currentVolume - value < 0) {
            console.log(this.brand + " ," + "error not enough water");
            return;
        } else {
            this.currentVolume -= value;
        }
        console.log(
            this.brand +
                ", " +
                "your tea is done, " +
                this.currentVolume +
                " is left"
        );
    };

    /**
     * turned on cattle
     * @returns {string}
     */
    this.turnOn = function () {
        if (
            this.currentVolume >= this.minVolume &&
            this.currentVolume <= this.maxVolume
        ) {
            this.isOn = true;
            console.log(this.brand + ", " + "turned on cattle");
        }
    };
}

const cattel = new Cattle("Braun", 1500, 200);
const cattel2 = new Cattle("Samsung", 2500, 300);
const cattel3 = new Cattle("Philips", 1000, 100);

cattel.addWater(400);
cattel.turnOn();
cattel.makeTea(350);
cattel2.addWater(3000);
cattel2.turnOn();
cattel2.makeTea(200);
cattel3.addWater(800);
cattel3.turnOn();
cattel3.makeTea(1200);

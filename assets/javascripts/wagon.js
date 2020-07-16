class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }

    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }

    join(traveler) {
        if ((this.capacity - this.passengers.length) === 0) {
            //            console.log("There is no space in the wagon for the new traveler to join!")
        } else {
            this.passengers.push(traveler)
        }
    }

    shouldQuarantine() {
        for (let index = 0; index < this.passengers.length; index += 1) {
            if (this.passengers[index].isHealthy === false) {
                return true
            }
        }
        return false
    }

    totalFood() {
        let totalAmount = 0
        for (let index = 0; index < this.passengers.length; index += 1) {
            totalAmount += this.passengers[index].food
        }
        return totalAmount
    }
}
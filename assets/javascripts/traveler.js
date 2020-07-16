class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }

    hunt() {
        this.food += 2
    }

    eat() {
        if (this.food <= 0) {
            this.isHealthy = false
            //            console.log("The Traveler has no food and thus has fallen ill!")
        } else {
            this.food -= 1
        }
    }
}
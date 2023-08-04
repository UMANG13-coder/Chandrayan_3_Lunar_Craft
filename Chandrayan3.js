class Galaxy {
    constructor(px, py, pz, nx, ny, nz) {
        this.px = px
        this.py = py
        this.pz = pz
        this.nx = nx * -1
        this.ny = ny * -1
        this.nz = nz * -1
    }
}

class Chandrayan3_LunarCraft {
    constructor(x, y, z, currDirection, galaxy) {
        this.x = x
        this.y = y
        this.z = z
        this.currDirection = currDirection
        this.galaxy = galaxy
    }

    moveForward() {
        if (this.currDirection == 'N') {
            if (this.y + 1 <= this.galaxy.py) {
                this.y += 1;
            }
            else {
                throw Error("You have reached Max Y-boundary of galaxy");
            }
        }
        else if (this.currDirection == 'S') {
            if (this.y - 1 >= this.galaxy.ny) {
                this.y -= 1;
            }
            else {
                throw Error("You have reached Max Y-boundary of galaxy");
            }
        }
        else if (this.currDirection == 'E') {
            if (this.x + 1 <= this.galaxy.px) {
                this.x += 1;
            }
            else {
                throw Error("You have reached Max X-boundary of galaxy");
            }
        }
        else if (this.currDirection == 'W') {
            if (this.x - 1 >= this.galaxy.nx) {
                this.x -= 1;
            }
            else {
                throw Error("You have reached Max X-boundary of galaxy");
            }
        }
        else if (this.currDirection == 'U') {
            if (this.z + 1 <= this.galaxy.pz) {
                this.z += 1;
            }
            else {
                throw Error("You have reached Max Z-boundary of galaxy");
            }
        }
        else if (this.currDirection == 'D') {
            if (this.z - 1 >= this.galaxy.nz) {
                this.z -= 1;
            }
            else {
                throw Error("You have reached Max Z-boundary of galaxy");
            }
        }
    }

    moveBackward(){}

    moveLeft(){}

    moveRight(){}

    moveUpward(){}

    moveDownward(){}

    executeCommands(command) {
        for (const cmd of command) {
            switch (cmd) {
                case 'f':
                    this.moveForward()
                    break;
                case 'b':
                    this.moveBackward()
                    break;
                case 'l':
                    this.moveLeft()
                    break;
                case 'r':
                    this.moveRight()
                    break;
                case 'u':
                    this.moveUpward()
                    break;
                case 'd':
                    this.moveDownward()
                    break;
                default:
                    throw Error("Invalid Command")
                    break;
            }
        }
    }
}

module.exports = {
    Galaxy,
    Chandrayan3_LunarCraft
}
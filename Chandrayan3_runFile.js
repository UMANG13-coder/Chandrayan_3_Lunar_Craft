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
            if (this.y+1 <= this.galaxy.py) {
                this.y += 1;
            }
            else {
                throw Error("You have reached Max Y-boundary of galaxy");
            }
        }
        else if (this.currDirection == 'S') {
            if (this.y-1 >= this.galaxy.ny) {
                this.y -= 1;
            }
            else {
                throw Error("You have reached Max Y-boundary of galaxy");
            }
        }
        else if (this.currDirection == 'E') {
            if (this.x+1 <= this.galaxy.px) {
                this.x += 1;
            }
            else {
                throw Error("You have reached Max X-boundary of galaxy");
            }
        }
        else if (this.currDirection == 'W') {
            if (this.x-1 >= this.galaxy.nx) {
                this.x -= 1;
            }
            else {
                throw Error("You have reached Max X-boundary of galaxy"); 
            }
        }
        else if (this.currDirection == 'U') {
            if (this.z+1 <= this.galaxy.pz) {
                this.z += 1;
            }
            else {
                throw Error("You have reached Max Z-boundary of galaxy"); 
            }
        }
        else if (this.currDirection == 'D') {
            if (this.z-1 >= this.galaxy.nz) {
                this.z -= 1;
            }
            else {
                throw Error("You have reached Max Z-boundary of galaxy");
            }
        }
    }

    moveBackward() {
        if (this.currDirection == 'N') {
            if (this.y - 1 >= this.galaxy.ny) {
                this.y -= 1;
            }
            else {
                throw Error("You have reached Max Y-boundary of galaxy");
            }
        }
        else if (this.currDirection == 'S') {
            if (this.y + 1 <= this.galaxy.py) {
                this.y += 1;
            }
            else {
                throw Error("You have reached Max Y-boundary of galaxy");
            }
        }
        else if (this.currDirection == 'E') {

            if (this.x - 1 >= this.galaxy.nx) {
                this.x -= 1;
            }
            else {
                throw Error("You have reached Max X-boundary of galaxy");
            }
        }
        else if (this.currDirection == 'W') {

            if (this.x + 1 <= this.galaxy.px) {
                this.x += 1;
            }
            else {
                throw Error("You have reached Max X-boundary of galaxy");
            }
        }
        else if (this.currDirection == 'U') {

            if (this.z - 1 >= this.galaxy.nz) {
                this.z -= 1;
            }
            else {
                throw Error("You have reached Max Z-boundary of galaxy");
            }
        }
        else if (this.currDirection == 'D') {

            if (this.z + 1 <= this.galaxy.pz) {
                this.z += 1;
            }
            else {
                throw Error("You have reached Max Z-boundary of galaxy");
            }
        }
    }

    turnLeft() {
        if (this.currDirection == 'N') {
            this.currDirection = 'W'
        }
        else if (this.currDirection == 'S') {
            this.currDirection = 'E'
        }
        else if (this.currDirection == 'W') {
            this.currDirection = 'S'
        }
        else if (this.currDirection == 'E') {
            this.currDirection = 'N'
        }
        else if (this.currDirection == 'U') {
            this.currDirection = 'W';
        }
        else if (this.currDirection == 'D') {
            this.currDirection = 'E'
        }
    }

    turnRight() {
        if (this.currDirection == 'N') {
            this.currDirection = 'E';
        }
        else if (this.currDirection == 'E') {
            this.currDirection = 'S';
        }
        else if (this.currDirection == 'S') {
            this.currDirection = 'W';
        }
        else if (this.currDirection == 'W') {
            this.currDirection = 'N';
        }
        else if (this.currDirection == 'U') {
            this.currDirection = 'E';
        }
        else if (this.currDirection == 'D') {
            this.currDirection = 'W';
        }
    }

    turnUpward() {
        this.currDirection = 'U';
    }

    turnDownward() {
        this.currDirection = 'D';
    }

    executeCommands(command) {
        for (var cmd of command) {
            switch (cmd) {
                case 'f':
                    this.moveForward()
                    break;
                case 'b':
                    this.moveBackward()
                    break;
                case 'l':
                    this.turnLeft()
                    break;
                case 'r':
                    this.turnRight()
                    break;
                case 'u':
                    this.turnUpward()
                    break;
                case 'd':
                    this.turnDownward()
                    break;
                default:
                    throw Error("Invalid Command")
                    break;
            }
        }
    }

    printDir() {
        console.log("Direction : " + this.currDirection);
    }
    
    printCoordinates() {
        console.log("( " + this.x + ", " + this.y + ", " + this.z + " )");
    }
}


var commands = ['f','r','u','b','l']
const galaxy = new Galaxy(3, 3, 3, 3, 3, 3);
const test = new Chandrayan3_LunarCraft(0, 0, 0, 'N', galaxy);

test.executeCommands(commands);

test.printCoordinates()
test.printDir()
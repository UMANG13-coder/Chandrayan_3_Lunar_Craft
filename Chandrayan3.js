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
}

module.exports = {
    Galaxy,
    Chandrayan3_LunarCraft
}
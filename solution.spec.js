const {Galaxy,Chandrayan3_LunarCraft} = require('./Chandrayan3')

describe("Initializa the state of Chandrayan3_LunarCraft class and Galaxy class",()=>{
    
    let galaxy;
    let chandrayan;
    beforeEach(()=>{
        galaxy = new Galaxy(3,3,3,3,3,3);
        chandrayan = new Chandrayan3_LunarCraft(0,0,0,'N',galaxy);
    })
    test("State Initialize Successfully",()=>{
        expect(chandrayan.x).toBe(0);
        expect(chandrayan.y).toBe(0);
        expect(chandrayan.z).toBe(0);
        expect(chandrayan.currDirection).toBe('N');
        expect(chandrayan.galaxy.px).toBe(3);
        expect(chandrayan.galaxy.py).toBe(3);
        expect(chandrayan.galaxy.pz).toBe(3);
        expect(chandrayan.galaxy.nx).toBe(-3);
        expect(chandrayan.galaxy.ny).toBe(-3);
        expect(chandrayan.galaxy.nz).toBe(-3);
    })
})
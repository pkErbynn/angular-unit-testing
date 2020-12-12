import { compute } from "./compute";

// value return test 

// component system under test is "Compute"
describe('Compute', () =>{
    // after "should" is a verb
    it('should return 0 if input is negative', () => {
        const res= compute(-1);
        expect(res).toBe(0);
    })
})
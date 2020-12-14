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


// nb: 
// if method does only console log whithout changing state 
// and it's a void, verify its invocation times
// also, it's spyOn returns nothing

// const logger = jasmine.createSpy("LoggerService", ["log"]);
// logger.log.and.returnValue();
import { getCurrencies } from "./getCurrencies";

describe('getCurrencies', () => {
    it('should return the supported currencies', () => {
        const res = getCurrencies();
        expect(res).toContain('USD');
        expect(res).toContain('AUD');
        expect(res).toContain('EUR');
    })
})
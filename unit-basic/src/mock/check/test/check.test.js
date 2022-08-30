const check = require('../check.js');

describe('check', ()=>{
    let mockPredicate, mockSuccess, mockFail;

    beforeEach(()=>{
        mockPredicate = jest.fn(()=>true);
        mockSuccess = jest.fn((value)=>value);
        mockFail = jest.fn((value)=>value);
    })
    it('predicate', ()=>{
        check(mockPredicate, mockSuccess, mockFail);
        expect(mockPredicate.mock.calls.length).toBe(1);
        expect(mockPredicate.mock.results[0].value).toBe(true);
    });

    it('onSuccess', ()=>{
        check(mockPredicate, mockSuccess, mockFail);
        expect(mockSuccess.mock.calls.length).toBe(1);
        expect(mockSuccess.mock.results[0].value).toBe('yes');
    })
    it('onFail', ()=>{
        mockPredicate = jest.fn(()=>false);
        check(mockPredicate, mockSuccess, mockFail);
        expect(mockFail.mock.calls.length).toBe(1);
        expect(mockFail.mock.results[0].value).toBe('no');
    })
})

describe('check-ellie', ()=>{
    let onSuccess;
    let onFail;

    beforeEach(()=>{
        onSuccess = jest.fn();
        onFail = jest.fn();
    });

    it('should call onSuccess when predicate is true', ()=>{
        check(()=>true, onSuccess, onFail);
        expect(onSuccess).toHaveBeenCalledTimes(1);
        //expect(onSuccess.mock.calls.length).toBe(1);
        
        expect(onSuccess).toHaveBeenCalledWith('yes');
        //expect(onSuccess.mock.calls[0][0]).toBe('yes');
        
        expect(onFail).toHaveBeenCalledTimes(0);
        //expect(onFail.mock.calls.length).toBe(0);
    })
})
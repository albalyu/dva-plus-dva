/**
 * Created by albal on 06.07.2016.
 */


var assert = require('assert');
var fib = require('../fib').fib;
describe('fib', function () {
    var testNumber;

    before(() => {
        console.log("start Suit");
        testNumber = 0;
    });

    after(() => {
        console.log("end Suit");
    });

    beforeEach(() => {
        console.log("start Test ", testNumber);
    });

    afterEach(() => {
        console.log("end Test ", testNumber);
    });

    it('fib check1', function () {
        assert.equal(89, fib(11));
        assert.equal(5, fib(5));
        assert.equal(55, fib(10));
    });

    it('fib check2', function () {
        assert.equal(1, fib(1));
        assert.equal(0, fib(0));
    });

    it('fib check3', function () {
        assert.equal(1, fib(1));
        assert.equal(0, fib(0));
    });

    it('fib check4', function () {
        assert.equal(1, fib(1));
        assert.equal(0, fib(0));
    });
});/**/
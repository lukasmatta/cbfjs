var expect = require('chai').expect;
var CBFjs = require('./cbfjs');

describe('CBFjs', function() {
    describe('new', function () {
        it('creates a new instance of CBFjs', function () {
            expect(new CBFjs()).to.not.be.null;
        })
    })
})
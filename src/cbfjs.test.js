var expect = require('chai').expect;
// Simulates browser with it's dom elements (window, document, etc.) inside Node.js
var jsdom = require('mocha-jsdom');

//var CBFjs = require('./cbfjs');

describe('CBFjs', function() {

    var CBFjs
    jsdom()

    before(function () {
        CBFjs = require('./cbfjs')
    })

    it('creates a new instance of CBFjs', function () {
        var cbfjs = new CBFjs();
        expect(cbfjs).to.not.be.null
    })

    describe('getScreenResolution', function () {
        it('gets screen resolution', function() {
            expect((new CBFjs()).getScreenResolution()).to.be.a('number')
        })
    })

    describe('getTouchSupport', function () {
        it('gets support of touch screen', function() {
            expect((new CBFjs()).getTouchSupport()).to.be.a('boolean')
        })
    })

    describe('getColorDepth', function () {
        it('gets color depth of the screen', function() {
            expect((new CBFjs()).getColorDepth()).to.be.a('number')
        })
    })

    describe('getTimezoneOffset', function () {
        it('gets timezone offset', function() {
            expect((new CBFjs()).getTimezoneOffset()).to.be.a('number')
        })
    })

    describe('getOS', function () {
        it('gets OS name', function() {
            expect((new CBFjs()).getOS()).to.be.a('string')
        })
    })

    describe('getOSVersion', function () {
        it('gets OS version', function() {
            expect((new CBFjs()).getOSVersion()).to.be.a('string')
        })
    })

    describe('isMobile', function () {
        it('is mobile phone', function() {
            expect((new CBFjs()).isMobile()).to.be.a('boolean')
        })
    })

    describe('getFonts', function () {
        it('creates font detector', function() {
            var cbfjs = new CBFjs();
            expect(cbfjs.getFonts()).to.not.be.null;
            console.log(cbfjs.getFonts());
        })
    })

})
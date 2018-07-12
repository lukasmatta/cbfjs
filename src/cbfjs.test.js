var expect = require('chai').expect;
// Simulates browser with it's dom elements (window, document, etc.) inside Node.js
var jsdom = require('mocha-jsdom');

//var CBFjs = require('./cbfjs');

describe('CBFjs', function() {

    var CBFjs
    jsdom()

    before(function () {
        CBFjs = require('./cbfjs')
        Object.defineProperty(window.navigator, 'userAgent', {
            value: "Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0"
        });
    })

    it('creates a new instance of CBFjs', function () {
        var cbfjs = new CBFjs();
        expect(cbfjs).to.not.be.null
    })

    describe('getCPUcores', function () {
        var testValue;
        var testFunc = function(cores) {
            testValue = cores;
        };

        it('gets number of cpu cores', function() {
            (new CBFjs()).getCPUCores(testFunc);
            expect(testValue).to.be.a('number')
        })
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
            var fonts = cbfjs.getFonts()
            expect(fonts).to.not.be.null
        })
    })

    // describe('getCPUarchitecture', function () {
    //     it('returns cpu architecture value', function() {
    //         expect((new CBFjs()).getCPUarchitecture()).to.not.be.undefined
    //     })
    // })

})
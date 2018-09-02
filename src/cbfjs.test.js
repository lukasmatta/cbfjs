var expect = require('chai').expect;
// Simulates browser with it's dom elements (window, document, etc.) inside Node.js

//var CBFjs = require('./cbfjs');

describe('CBFjs', function() {

    var Detector = require('./vendors/font-detect/fontdetect.js');
    var CBFjs


    before(function () {
        CBFjs = require('./cbfjs')
        Object.defineProperty(window.navigator, 'userAgent', {
            value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.3"
        });
    })

    describe('new', function() {
        it('creates a new instance of CBFjs', function () {
            var cbfjs = new CBFjs();
            expect(cbfjs).to.not.be.null
        })
    })


    describe('components', function() {
        describe('getCPUcores', function () {
            it('gets number of cpu cores', function() {
                var testValue = (new CBFjs()).getCPUCores();
                expect(testValue).to.be.a('number');
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
                var detector = new Detector();
                expect(detector).to.not.be.null
            })

            it('returns font list', function() {
                // Create the event.
                var event = document.createEvent('Event');
                event.initEvent('DOMContentLoaded', true, true);
                window.document.dispatchEvent(event);
                var cbfjs = new CBFjs();
                var fonts = cbfjs.getFonts()
                expect(fonts).to.not.be.null
            })
        })

        describe('getCPUarchitecture', function () {            
            it('returns cpu architecture value', function() {
                var cbfjs = new CBFjs();
                expect(cbfjs.getCPUarchitecture()).to.not.be.undefined
            })
        })
    })

    describe('hash creation', function (){
        it('generates proper hash', function() {
            var cbfjs = new CBFjs();
            cbfjs.get(function(hash, components) {
                expect(hash).to.be.a("number");
                expect(components).to.be.a("array");
            })
        })
    })
})
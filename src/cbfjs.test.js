var expect = require('chai').expect;
var MockBrowser = require('mock-browser').mocks.MockBrowser;
var mock = new MockBrowser();
global.window = mock.getWindow();
global.navigator = mock.getNavigator();
global.screen = mock.getWindow().screen;
global.screen.colorDepth = 24;
global.document = mock.getDocument();
Object.defineProperty(window.navigator, 'userAgent', {
    value: "Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0"
});

var CBFjs = require('./cbfjs');

describe('CBFjs', function() {
    describe('new', function () {
        it('creates a new instance of CBFjs', function () {
            expect(new CBFjs()).to.not.be.null
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

})
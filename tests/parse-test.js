var fs = require('fs');
var assert = require('assert');
var BinaryKv = require('../index.js');

describe('#parse()', function() {
    context('with a simple binary kv', function() {
        var testData = {
            binary: fs.readFileSync('./tests/data/simple.bin_vdf'),
            result: JSON.parse(fs.readFileSync('./tests/data/simple.json'))
        };
        
        it('should parse correctly', function() {
            assert.deepEqual(BinaryKv.parse(testData.binary), testData.result);
        });
    });
    
    context('with a binary kv with a blank string key', function() {
        var testData = {
            binary: fs.readFileSync('./tests/data/blank_string.bin_vdf'),
            result: JSON.parse(fs.readFileSync('./tests/data/blank_string.json'))
        };
        
        it('should parse correctly', function() {
            assert.deepEqual(BinaryKv.parse(testData.binary), testData.result);
        });
    });
});

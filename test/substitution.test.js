const expect = require('chai').expect;
const substitution = require('../src/substitution.js');

const key = 'kydnbtefghijlaprscuvwxzqom';
const badKey1 = 'kydnbtefghijlaprscuvwxzqoz';
const badKey2 = 'bad key yikes';
const noKey = 'abcdefghijklmnopqrstuvwxyz';


// Write your tests here!
describe('substitution', () => {
    it('should endode', () => {
        const result = substitution('test', key);
        expect(result).to.eql('vbuv');
    });
    it('should dendode', () => {
        const result = substitution('vbuv', key, false);
        expect(result).to.eql('test');
    });
    it('should return false if given a key without that is not 26 characters', () => {
        const result = substitution('test', badKey2);
        expect(result).to.eql(false);
    });
    it('should ignore capital letters', () => {
        const result = substitution('A', noKey);
        expect(result).to.eql('a');
    });
    it('should contain every letter', () => {
        const result = substitution('test', badKey1);
        expect(result).to.eql(false);
    });
    it('should maintain spaces when encoding', () => {
        const result = substitution('wa ge', key);
        expect(result).to.eql('zk eb');
    });
    it('should maintain spaces when encoding', () => {
        const result = substitution('zk eb', key, false);
        expect(result).to.eql('wa ge');
    });
});
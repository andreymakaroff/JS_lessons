const assert = require('assert');
import {sum} from './tools';
describe('sum', function () {
  it('should return 5 from sum(2,3)', ()=>{
    assert.equal(sum(2,3),5);
  });

  it('should return 5 from sum(2,0)', ()=>{
    assert.equal(sum(2,0),2);
  });

  it('should return 0 from sum()', ()=>{
    assert.equal(sum(),0);
  })
});

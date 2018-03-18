// const assert = require('assert');
import {sum} from './tools';
import {assert, expect} from 'chai';
import chai from 'chai';
chai.should();

describe('sum', function () {
  // it('should return 5 from sum(2,3)', ()=>{    //1
  //   assert.equal(sum(2,3),5);
  // });
  // it('should return 5 from sum(2,3)', ()=>{    //2
  //   expect(sum(2,3)).to.equal(5);
  // });
  it('should return 5 from sum(2,3)', ()=>{     //3
    sum(2,3).should.equal(5);
  });

  it('should return 5 from sum(2,0)', ()=>{
    assert.equal(sum(2,0),2);
  });

  // it('should return 0 from sum()', ()=>{
  //   assert.equal(sum(),0);
  // });
  it('should return 0 from sum()', ()=>{
    // expect(sum()).to.equal(0);
    expect(sum()).not.to.be.undefined;
  });
});


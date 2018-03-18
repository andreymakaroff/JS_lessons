import {assert, expect} from 'chai';
import chai from 'chai';
import sinon from 'sinon';
import {days, defaultProduct, money, users} from './constants';
// import {showMessage} from "./main";
import {getDay} from "./main";
import {getUsers} from "../../classwork/src/users";


let alert; // We are going to overwrite default alert() function


describe('test for getDay', function() {

  describe('should call Date', function () {
    let Date;

    beforeEach(() => {
      Date = sinon.stub(window, 'Date');
      Date.returns({getDay:2});
    });

    afterEach(() => {
      window.Date.restore();
    });

    it('should call Date',() => {
      expect(getDay()).to.be.equal(days[1]);
    });
    it('should return today',() => {
      let today = days[new Date().getDay()];
      expect(getDay()).to.be.equal(today);
    });
  });

  describe('should call Date', function () {
  });

});
describe('showMessage shown', function () {

  // it('should return 5 from sum(2,3)', ()=>{    //2
  //   expect(sum(2,3)).to.equal(5);
  // });
  // it('should return 5 from sum(2,3)', ()=>{     //3
  //   sum(2,3).should.equal(5);
  // });
  //
  // it('should return 5 from sum(2,0)', ()=>{
  //   assert.equal(sum(2,0),2);
  // });

  // it('should return 0 from sum()', ()=>{
  //   assert.equal(sum(),0);
  // });
  // it('should return 0 from sum()', ()=>{
  //   // expect(sum()).to.equal(0);
  //   expect(sum()).not.to.be.undefined;
  // });
});


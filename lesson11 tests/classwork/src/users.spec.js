import { getUsers } from './users';
import { expect } from 'chai';
import sinon from 'sinon';

describe('getUsers', () => {
  let fetch;

  beforeEach(() => {
    fetch = sinon.stub(window, 'fetch');
    fetch.returns(new Promise(res => res({
        json() {
          return new Promise(resolve => resolve('test'));
        }
      }))
    );
  });

  afterEach(() => {
    window.fetch.restore();
  });

  it('should call fetch', () => {
    getUsers();
    expect(fetch.called).to.be.true;
  });

  it('should call console.log() on success', (done) => {
    const log = sinon.stub(console, 'log');

    getUsers()
      .then(data => {
        expect(log.called).to.be.true;
        done();
        console.log.restore();
      });
  });

  // it('should call console.log() on success with args', (done) => {
  //   const log = sinon.stub(console, 'log');
  //
  //   getUsers()
  //     .then(data => {
  //       expect(log.getCall(0).args[0]).to.equal('test1');
  //       done();
  //       console.log.restore();
  //     });
  // });
});
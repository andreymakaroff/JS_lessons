import chai, { expect } from 'chai';
import { Person } from './Person';

describe('Person class', () => {
  let person;

  beforeEach(() =>{
    person = new Person();
  });

  it('should create an instance with passed name', () => {
    const name= 'test';
    expect( new Person(name).name).to.equal(name);
  });

  it('should create an instance with Date type "cretion" field ', () => {
    expect( new Person().creation).to.be.an.instanceOf(Date);
  });

  let tests = [
    {hours:23,text:'night child'},
    {hours:10,text:'morning child'},
    {hours:12,text:'day child'},
  ];

  it('test time creation to name child ', () => {
    tests.forEach(({hours,text}) => {
      person.creation.setHours(hours);
        expect( person.getCreation()).to.equal(text);
    })
  });
});


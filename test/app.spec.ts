import { app } from '../src/app';
import { expect } from 'chai';
import 'mocha';

describe('Hello function', () => {

  it('should return hello world', () => {
    const result = app();
    expect(result).to.equal('Hello world!');
  });

});
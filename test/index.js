import assert from 'assert';
import tarikCircle from '../lib';

describe('Tarik-circle', function () {
  it('should have a version number!', function () {
    assert(typeof tarikCircle.VERSION !== 'undefined', 'The Project should have a VERSION, whatever the actual version.');
  });
});

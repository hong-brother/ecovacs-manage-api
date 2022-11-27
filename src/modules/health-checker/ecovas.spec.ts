import { EcoVacsAPI } from 'ecovacs-deebot';
import assert from 'assert';

describe('ecovas api test', () => {
  let ecoVas: EcoVacsAPI;
  const machineId = 'E03315513D1FP4DD0455';

  it('get deviceId', () => {
    const deviceId = EcoVacsAPI.getDeviceId(machineId);
    assert.equal(deviceId, '9f4efa36773c04298977415e3ce34d1d');
  });

  it('create encrypt pw', () => {
    const pw = EcoVacsAPI.md5('');
    expect(pw).toBeNaN();
  });

  it('connection', async () => {
    expect(1).toBeNaN();
  });
});

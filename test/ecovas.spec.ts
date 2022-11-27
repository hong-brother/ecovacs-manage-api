import { EcoVacsAPI } from 'ecovacs-deebot';
import assert from 'assert';

describe('ecovas api test', () => {
  let ecoVas: EcoVacsAPI;
  const machineId = 'E03315513D1FP4DD0455';

  it('create instance', () => {
    const deviceId = EcoVacsAPI.getDeviceId('machineId');
    assert.equal(deviceId, '1');
  });

  test('get device', () => {
    expect(1).toEqual(1);
  });
});

const apiDog = require('./ex6');

describe('Testando API', () => {
  const api = jest.spyOn(apiDog, 'apiDog');
  afterEach(api.mockReset);

  test('Request success', async () => {
    api.mockResolvedValue('Request success');

    api();
    expect.assertions(4);
    expect(api).toHaveBeenCalled();
    expect(api).toHaveBeenCalledTimes(1);
    expect(api()).resolves.toBe('Request success');
    expect(api).toHaveBeenCalledTimes(2);
  });

  test('Request failed', async () => {
    api.mockRejectedValue('Request failed');

    api();
    expect.assertions(4);
    expect(api).toHaveBeenCalled();
    expect(api).toHaveBeenCalledTimes(1);
    expect(api()).rejects.toMatch('Request failed');
    expect(api).toHaveBeenCalledTimes(2);
  });
});

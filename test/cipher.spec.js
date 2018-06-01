
describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
  
    it('debería retornar "HIJ KLMNOPQRSTUVWXYZABCDEFG" para "ABC DEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode('ABC DEFGHIJKLMNOPQRSTUVWXYZ', 33),'HIJ KLMNOPQRSTUVWXYZABCDEFG');
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
  
    it('debería retornar "ABC DEFGHIJKLMNOPQRSTUVWXYZ" para "HIJ KLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode('HIJ KLMNOPQRSTUVWXYZABCDEFG', 33),'ABC DEFGHIJKLMNOPQRSTUVWXYZ');
    });
  });

});
describe('Cursor Tests', function() {
  var Cursor = firepad.Cursor;
  var TextOperation = firepad.TextOperation;

  it('FromJSON', function() {
    var cursor = Cursor.fromJSON({ position: 3, selectionEnd: 5 });
    expect(cursor instanceof Cursor).toBeTruthy();
    expect(cursor.position).toBe(3);
    expect(cursor.selectionEnd).toBe(5);
  });
});

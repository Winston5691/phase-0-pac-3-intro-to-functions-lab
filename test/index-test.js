function shout(string) {
  return string.toUpperCase();
}
describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('HELLO')).toEqual('HELLO');
  })
})
function whisper(string) {
  return string.toLowerCase();
}
describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello');
  })
})
function logShout(string) {
  console.log();
  return string.toUpperCase();
}
describe('logShout(string)', function() {
  it('takes a string argument and logs it in all caps using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logShout('hello');

    expect(spy).toHaveBeenCalledWith ["HELLO"];

    console.log.restore();
  })
})
function logWhisper(string) {
  console.log();
  return string.toLowerCase();
}
describe('logWhisper(string)', function() {
  it('takes a string argument and logs it in all lowercase using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logWhisper('HELLO');

    expect(spy).toHaveBeenCalledWith["HELLO"];
    
    console.log.restore();
  })
})
function sayHiToHeadphonedRoommate(string) {
  return string.toLowerCase();
}
describe('sayHiToHeadphonedRoommate(string)', function() {
  it('returns "i can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToHeadphonedRoommate("I can't hear you!")).toEqual("i can't hear you!");
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToHeadphonedRoommate("YES INDEED!")).toEqual("yes indeed!");
  })

  it('returns "i would love to!" if `string` is "Let\'s have dinner together!"`', function () {
    expect(sayHiToHeadphonedRoommate("I would love to!")).toEqual("i would love to!");
  });
})

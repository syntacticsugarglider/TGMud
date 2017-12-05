var path = require('path');

module.exports = class {
  constructor(world) {
    this.rooms = world.rooms
    for (var room in world.rooms) {
      if (world.rooms.hasOwnProperty(room)) {
        var prototype = require(path.join(__dirname,'modules','rooms',world.rooms[room].className+'.js'))
        this.rooms[room] = new prototype(world.rooms[room].properties)
      }
    }
  }
}

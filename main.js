var path = require('path')
var shortid = require('shortid').generate
var World = require(path.join(__dirname,'src','World.js'))

var world = new World({
  rooms: {
    aqsjwis: {
      className: "Room",
      properties: {
        contents: {
          adawdawdawd: {
            className: "Container",
            properties: {
              capacity: 10,
              idk man: "meme"
            }
          }
        }
      }
    }
  }
})

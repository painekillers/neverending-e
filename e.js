//Yea because why not

G.AddData({
  name: "Neverending E",
  author: "Panda",
  desc: "The E never ends!",
  engineVersion: 1,
  sheets: {"customSheet":"[link to sprite sheet here]"},
  func: function () {
    
  }
})

if (!window.TheBigELoaded){
  var msgFunc = G.Message
  
  G.Message = function(obj) {
    obj.text = obj.text.replace(/\p{L}/gu, "e")
    
    msgFunc(obj)
  }
var TheBigELoaded = true
}

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

const desc = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerText");

Object.defineProperty(HTMLElement.prototype, "innerText", {
    get: desc.get,
    set: function(v) {
        if (typeof v === "string") v = v.replace(/\p{L}/gu, "e");
        return desc.set.call(this, v);
    }
});

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
  var doTheE = function (value) {
    if (typeof value !== "string") {
        value = value == null ? "" : String(value);
    }

    return value.replace(/\[[^\]]*]|\p{L}/gu, (match) => {
        // leave bracket blocks unchanged
        if (match[0] === "[") return match;

        // replace letters with e/E based on case
        return match === match.toUpperCase() ? "E" : "e";
    });
}
  
  //Replace the .Message function
  var msgFunc = G.Message
  G.Message = function(obj) {
    obj.text = doTheE(obj.text)
    
    msgFunc(obj)
  }

  //Buttons
  var buttonFunc = G.button
  G.button = function(obj) {
    obj.text = doTheE(obj.text)
    obj.tooltip = doTheE(obj.tooltip)

    buttonFunc(obj)
  }

  var settingButtonFunc = G.writeSettingButton
  G.writeSettingButton = function(obj) {
    obj.text = doTheE(obj.text)
    obj.tooltip = doTheE(obj.tooltip)

    settingButtonFunc(obj)
  }

  //Resources

  var resFunc = G.Res
  G.Res = function(obj) {
    obj.displayName = doTheE(obj.displayName || obj.name)
    obj.desc = doTheE(obj.desc)

    resFunc(obj)
  }

  //Tech

  var techFunc = G.Tech
  G.Tech = function(obj) {
    obj.displayName = doTheE(obj.displayName || obj.name)
    obj.desc = doTheE(obj.desc)

    techFunc(obj)
  }

  //Traits

  var traitFunc = G.Trait
  G.Tech = function(obj) {
    obj.displayName = doTheE(obj.displayName || obj.name)
    obj.desc = doTheE(obj.desc)

    traitFunc(obj)
  }  

  //Units

  var unitFunc = G.Unit
  G.Unit = function(obj) {
    obj.displayName = doTheE(obj.displayName || obj.name)
    obj.desc = doTheE(obj.desc)

    unitFunc(obj)
  }  

  var TheBigELoaded = true
}


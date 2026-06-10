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

if (!window.bigELoaded) {
  function replacePageTextWithE(root = document.body) {
    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
  
          const tag = parent.tagName;
  
          // Never touch code / logic-critical areas
          if (
            ["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA"].includes(tag)
          ) {
            return NodeFilter.FILTER_REJECT;
          }
  
          // Avoid inputs & editable content
          if (parent.closest("input, select, option, textarea, [contenteditable='true']")) {
            return NodeFilter.FILTER_REJECT;
          }
  
          const text = node.nodeValue;
          if (!text || !text.trim()) return NodeFilter.FILTER_REJECT;
  
          // Skip likely templating / placeholder syntax blocks entirely
          if (
            text.includes("[") && text.includes("]") ||
            text.includes("{{") && text.includes("}}") ||
            text.includes("${")
          ) {
            return NodeFilter.FILTER_REJECT;
          }
  
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );
  
    let node;
  
    while ((node = walker.nextNode())) {
      node.nodeValue = node.nodeValue.replace(/[a-zA-Z0-9]/g, (ch) => {
        if (/[a-zA-Z]/.test(ch)) {
          return ch === ch.toUpperCase() ? "E" : "e";
        }
        return "e"; // numbers → e
      });
    }
  }
  
  let scheduled = false;
  
  function scheduleRun() {
    if (scheduled) return;
  
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      replacePageTextWithE();
    });
  }
  
  const observer = new MutationObserver(() => {
    scheduleRun();
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
  });
  
  // initial run
  replacePageTextWithE();

  var bigELoaded = true
}


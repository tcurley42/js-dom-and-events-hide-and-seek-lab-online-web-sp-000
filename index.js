function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let nodes = document.querySelectorAll('#grand-node div');
  return nodes[nodes.length-1];
}

function increaseRankBy(n) {
  let elements = document.querySelectorAll('.ranked-list');
  for (const e of elements) {
    for (let i = 0; i < e.children.length; ++i) {
      e.children[i].innerHTML = parseInt(e.children[i].innerHTML) + n;
    }
  }
}

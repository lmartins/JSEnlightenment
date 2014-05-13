'use strict';
var actOnNodeList, cell, evens, getParents, getSiblings, parents, siblings, toggleActive;

toggleActive = function(el) {
  return el.classList.toggle('active');
};

actOnNodeList = function(list, callback) {
  var item, _i, _len, _results;
  _results = [];
  for (_i = 0, _len = list.length; _i < _len; _i++) {
    item = list[_i];
    _results.push(callback(item));
  }
  return _results;
};

getSiblings = function(elem) {
  var matches, n;
  matches = [];
  n = elem.parentNode.firstChild;
  while (n) {
    if (n.nodeType === 1 && n !== elem) {
      matches.push(n);
    }
    n = n.nextSibling;
  }
  return matches;
};

getParents = function(elem) {
  var matches, n;
  n = elem.parentNode;
  matches = [];
  while (n) {
    if (n.nodeType === 9) {
      matches;
    } else if (n.nodeType === 1) {
      matches.push(n);
    }
    n = n.parentNode;
  }
  return matches;
};

cell = document.querySelector('#cell33');

toggleActive(cell);

evens = document.querySelectorAll('td:nth-child(even)');

actOnNodeList(evens, toggleActive);

siblings = getSiblings(document.querySelector('#cell33'));

actOnNodeList(siblings, toggleActive);

parents = getParents(document.querySelector('#cell33'));

console.log(parents);

/*
//# sourceMappingURL=main.js.map
*/

'use strict'

# Person = (living, age, gender) ->
#   @living = living
#   @age = age
#   @gender = gender
#   @getGender = ->
#     @gender
#   return @
#
# cody = new Person true, 33, 'male'
# console.log cody
#
# myString = new String 'foo'
# console.log myString


toggleActive = (el) ->
  el.classList.toggle 'active'

actOnNodeList = (list, callback) ->
  for item in list
    callback(item)

getSiblings = (elem) ->
  matches = []
  n = elem.parentNode.firstChild
  while n
    matches.push n if n.nodeType is 1 and n isnt elem
    n = n.nextSibling
  matches

getParents = (elem) ->
  n = elem.parentNode
  matches = []

  while n
    if n.nodeType is 9
      matches
    else if n.nodeType is 1
      matches.push n
    n = n.parentNode
  matches



cell = document.querySelector '#cell33'
toggleActive(cell)

evens = document.querySelectorAll 'td:nth-child(even)'
actOnNodeList evens, toggleActive

siblings = getSiblings document.querySelector('#cell33')
actOnNodeList siblings, toggleActive

parents = getParents document.querySelector('#cell33')
console.log parents

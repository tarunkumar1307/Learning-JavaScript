# DOM Selectors
1. getElementById
2. getElementsByClassName - it selects all elements with the specified class name, returning a live **HTMLCollection**.
3. querySelector - it selects only the first matching element
4. querySelectorAll - it selects all matching elements, returning a **NodeList**.

### HTMLCollection
An HTMLCollection is a collection of elements returned by certain DOM methods, such as getElementsByClassName. It is live, meaning it automatically updates when the document changes. You can access elements in an HTMLCollection using an index, but it does not have array methods like forEach.
**HTMLCollection to Array** ```Array.from(htmlCollection)```

### NodeList
A NodeList is a collection of nodes returned by certain DOM methods, such as querySelectorAll. It is similar to an array but is not an array itself. You can access elements in a NodeList using an index, and you can loop through it using forEach or a for loop.


## Attribute Manipulation
1. getAttribute()
2. setAttribute()

## Content in a Tag
1. textContent - shows all the content in it, hidden also
2. innerText - shows only the visible content
3. innerHTML - shows the HTML content inside the tag
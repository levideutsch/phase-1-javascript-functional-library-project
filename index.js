// Checks if collection is array or object
function checkCollection(collection) {
  if(collection instanceof Array) { // Here we say, if out collection is an array (using "instanceof")
    return collection.slice() // Then return our full collection
  } else { // If it's not an array (basically an object)...
   return Object.values(collection) // Then return the values of the object and place them into a new array
  }
}



function myEach(collection, callback) {

  const result = checkCollection(collection)

  if(result === true) { // If true...
    for(const item of result) { // For every element of our array...
      callback(item) // Store it into our callback function
    }
  } else { // But if our collection is false (an object)...
    
    for(const item of result) { // Then for every element of that object...
    callback(item) // Store it into our callback function
  }
 }
  return collection
}
// myEach()



function myMap(collection, callback) {

  const result = checkCollection(collection) 

   let newCollection = []

   if(result === true) { // Here we say, if our collection is true (an array)...
     for(const element of result) // For every element of our array..
     newCollection.push(callback(element)) // Take those elements and place them into this callback

   } else { // But if our collection is false (an object)...
  
    for(const element of result) { // For every item of that object, convert it into an array..
      newCollection.push(callback(element)) // Then push it into our callback
      
    }
   }
   return newCollection 
  }
// myMap()



function myReduce(collection, callback, acc) {
  let result = checkCollection(collection)
  
  // Does not exist
  if (!acc) { // Here we say if our acc does not exist (does not have a value).. do these following actions:
    acc = result[0]  // 1. Take the first element of result (our collection) and assign it to acc
    result = result.slice(1) // 2. Assign the rest of result (our collection) besides for the first element to result (our collection)
} // We do this because we don't want to count the first element of our collection twice.
    
    const len = result.length // Here we assign result.length to the variable "len"
    for(let i = 0; i < len; i++) { // Then we assign i to 0, and say as long as i(0) is less than len(result.length), i then adds one at a time
    acc = callback(acc, result[i], result) // Then we assign our callback which has the acc, result[i] (every individual element), and the result (collection) to acc.
} 
return acc
}



function myFind(collection, predicate) {
  
  let result = checkCollection(collection)
  
  for(let item of result) {
    if(predicate(item)) {
      return item
     } 
  }
}
// myFind()



function myFilter(collection, predicate) {
  
  let result = checkCollection(collection)
  let emptyArray = []

  for(let item of result) {
    if(predicate(item)) {
     
   emptyArray.push(item)
    }
  }
  return emptyArray
}
// myFilter()



function mySize(collection) {

  let result = checkCollection(collection)
  return result.length
}
// mySize()



function myFirst(array, n) {

  if(n) {
    return array.slice(0, n) 
  
  } else {
    return array[0]
  }
}
// myFirst()



function myLast(array, n) {
  
  if(n) {
    return array.slice(-n, array.length)
  
  } else {
    return array[array.length -1]

  } 
}



function myKeys(object) {

  return Object.keys(object)
  
}



function myValues(object) {

  return Object.values(object)
  
}
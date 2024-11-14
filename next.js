function getDeepestNestedObject(obj, currentDepth = 0, result = { maxDepth: 0, deepestObject: null }) {
  // Iterate over each property in the object
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && typeof obj[key] === "object" && obj[key] !== null) {
      // Recursive call for nested objects
      getDeepestNestedObject(obj[key], currentDepth + 1, result);
    }
  }

  // Update result if a deeper object is found
  if (currentDepth > result.maxDepth) {
    result.maxDepth = currentDepth;
    result.deepestObject = obj;
  }

  return result;
}

// Usage
const result = getDeepestNestedObject(window);
console.log("Deepest Object:", result.deepestObject);
console.log("Max Depth:", result.maxDepth);

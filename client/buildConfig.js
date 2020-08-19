/** `merge` is a helper function used to merge base config
 *  object with update objects. `merge` is called from buildConfig
 */
const merge = (base, update) => {
  /** Helper function used to determine if value is an object */
  const isObject = (value) => {
    return (
      typeof value === 'object' &&
      !Array.isArray(value) &&
      !(value instanceof RegExp) &&
      value !== null
    )
  };

  /** Loop through keys of update object */
  for (const key of Object.keys(update)) {
    /** Construct booleans for flow control. Determine if
     * both the base and update values at current key are 
     * arrays or objects.
     */
    const both = [update[key], base[key]];
    const bothArrays = both.every(Array.isArray);
    const bothObjects = both.every(isObject);

    /** If both base and update values at current key are arrays,
     *  concatenate them and store at key on base. If both base 
     *  and update values are objects, make recursive call,
     *  storing the return at key on base. Otherwise, add or overwrite
     *  value at key of base with value at key of update.
     */
    if (bothArrays) {
      base[key] = [...base[key], ...update[key]];
    } else if (bothObjects) {
      base[key] = merge(base[key], update[key]);
    } else {
      base[key] = update[key];
    }
  }

  return base;
};


/** buildConfig takes select state variable and update rules,
 *  converts select state variable into a filtered array, 
 *  and maps over that array to form an array of update objects
 *  pulled from update rules. `merge` helper function called 
 *  from within a reducer to combine all update rules in the
 *  array into a single result object.
 */
const buildConfig = (stateVariables, updateObjects) => {
  /** Convert stateVariables object into a filtered array.
    *  Need an array that has the name of all the checkboxes 
    *  that are set to true. The names should match the names
    *  of the corresponding update in updateObjects.
    */
  const toBuild = [];
  for (const key in stateVariables) {
    if (stateVariables[key]) toBuild.push(key);
  }
  
  /** Map array of selected boxes to create array of objects to merge */
  const buildObjects = toBuild.map((objectName) => updateObjects[objectName]); 
  
  /** Build config object by reducing all update objects to a single object using merge */
  return buildObjects.reduce((config, update) => {
    return merge(config, update) }, updateObjects.nolibrary);
};

export { merge, buildConfig };
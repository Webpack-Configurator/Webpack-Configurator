/** fetchedRulesToObjects parses the fetched data into
 *  three 
*/
const fetchedRulesToObjects = (rulesArray) => {
  const rulesObj = {};
  const dependencies = {};
  const devDependencies = {};
  const requirements = {};

  for (const rule of rulesArray) {

    rulesObj[rule.name] = rule.code || {};
    dependencies[rule.name] = rule.dependencies;
    devDependencies[rule.name] = rule.devDependencies;
    requirements[rule.name] = rule.require;
  }

  return [rulesObj, dependencies, devDependencies, requirements];
}

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
      if (key === 'extensions') {
        base[key] = base[key].filter((val, index, arr) => arr.indexOf(val) === index);
      }
    } else if (bothObjects) {
      base[key] = merge(base[key], update[key]);
    } else {
      base[key] = update[key];
    }
  }

  return base;
};


/** Helper function that takes in selected state variable (state of checkboxes)
 *  and returns a filtered array of the names of those boxes that are checked.
 */
const buildList = (stateVariables) => {
  const toBuild = [];
  for (const key in stateVariables) {
    if (stateVariables[key]) toBuild.push(key);
  }
  return toBuild;
}

/** buildConfig takes selected state variable and update rules,
 *  uses helper function to convert selected state variable into
 *  a filtered array, and maps over that array to form an array of 
 *  update objects pulled from update rules. `merge` helper function called 
 *  from within a reducer to combine all update rules in the
 *  array into a single result object.
 */
const buildConfig = (stateVariables, updateObjects) => {
  /** Convert stateVariables object into a filtered array.
    *  Need an array that has the name of all the checkboxes 
    *  that are set to true. The names should match the names
    *  of the corresponding update in updateObjects.
    */
  const toBuild = buildList(stateVariables);

  /** Map array of selected boxes to create array of objects to merge */
  const buildObjects = toBuild.map((objectName) => updateObjects[objectName]);

  /** Build config object by reducing all update objects to a single object using merge */
  return buildObjects.reduce((config, update) => {
    return merge(config, update)
  }, updateObjects.nolibrary);
};

/** Returns a string containing requirements matching current checkbox selections. */
const buildRequirements = (stateVariables, requirementsList) => {
  // Create an array containing the names of currently checked boxes
  const toBuild = buildList(stateVariables);
  
  // Map over array of checked objects, building an array of matching requirements.
  const requirements = toBuild.map((objectName) => requirementsList[objectName]);
  // Filter empty strings
  const filteredReqs = requirements.filter((item) => item.length > 0);
  
  // Loop through array of update strings, concatenating them into a single string.
  let requirementString = '';
  filteredReqs.forEach((el) => requirementString += el + `\n`);
  
  return requirementString;
}

export { fetchedRulesToObjects, merge, buildConfig, buildRequirements, buildList };
const stringifyObject = require('stringify-object');


export function Prettify(obj) {
  return stringifyObject(obj, {
    transform: (obj, prop, originalResult) => {
        if (prop === 'path' || prop === 'entry' || prop === 'contentBase' || prop === 'test') {
            return originalResult.replace(/['"]+/g, '');
          } else if (prop === 'plugins') {
            if (originalResult.includes('new')) {
              return originalResult.replace(/[']+/g, '').replace(/\\/g, "'");
            } else {
              return originalResult;
            }
          } else {
            return originalResult; 
        }
    },
    indent: '  ',
  }); 
} 
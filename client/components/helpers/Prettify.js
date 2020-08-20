/* eslint-disable import/prefer-default-export */
const stringifyObject = require('stringify-object');

export function Prettify(obj) {
  return stringifyObject(obj, {
    transform: (obj, prop, originalResult) => {
      if (prop === 'path' || prop === 'plugins' || prop === 'entry' || prop === 'contentBase' || prop === 'preprocess' || prop === 'exclude') {
        return originalResult.replace(/['"]+/g, '').replace(/\\/g, "'");
      } if (prop === 'test') {
        return originalResult.replace(/['"]+/g, '');
      }
      return originalResult;
    },
    indent: '  ',
  });
}

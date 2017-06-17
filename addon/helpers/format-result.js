import Ember from 'ember';
const {
  get,
  isPresent
} = Ember;

export function formatResult(params) {
  let [keys, result] = params;
  if (isPresent(keys) && isPresent(result)) {
    keys = keys.split(/([^a-z0-9_$])/gi).filter(x => x).map(key => {
      return (key && !/([^a-z0-9_$])/gi.test(key) && get(result, key.trim())) || key
    });
    return keys.join('');
  } else {
    let error = [[keys,'Keys'],[result, 'Result']].filter(x => x[0]).map(x => x[1]).join(', and ');
    console.warn(`HYPER-SEARCH::Missing ${error}`);
    return "";
  }
}

export default Ember.Helper.helper(formatResult);

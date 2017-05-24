import Ember from 'ember';
const {
  get,
  isPresent
} = Ember;

export function formatResult(params) {
  let [keys, result, joiner] = params;
  if (isPresent(keys) && isPresent(result)) {
    return keys.map(key => get(result, key)).join(joiner);
  } else {
    let error = [[keys,'Keys'],[result, 'Result']].filter(x => x[0]).map(x => x[1]).join(', and ');
    console.warn(`HYPER-SEARCH::Missing ${error}`);
    return "";
  }
}

export default Ember.Helper.helper(formatResult);

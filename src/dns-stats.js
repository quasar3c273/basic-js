const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {}
  domains.forEach(item => {
    let key = '';
    item.split('.').reverse().forEach(item => {
      key = `${key}.${item}`;
      !res[key] ? res[key] = 1 : res[key] = res[key] + 1;
    });
  })
  return res;
}

module.exports = {
  getDNSStats
};

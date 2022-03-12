/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/** i am not confident its actually O(log n) */
var search = function (nums, target) {
  var i = -1;
  var t = -1;
  var find = function (arr, n) {
    if (arr.length == 1) {
      i += 1;
      if (arr[0] == n) {
        t = i;
        return;
      }
      return;
    }
    find(arr.slice(0, arr.length / 2), n);
    find(arr.slice(arr.length / 2), n);
  };
  find(nums, target);
  return t;
};

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const finalLength = nums1.length + nums2.length;
  const medianIndex = Math.ceil(finalLength / 2);
  const finalArray: number[] = [];
  while (nums1.length > 0 || nums2.length > 0) {
    if (nums1[0] != undefined && nums2[0] != undefined) {
      if (nums1[0] < nums2[0]) {
        finalArray.push(nums1.shift()!);
      } else {
        finalArray.push(nums2.shift()!);
      }
    } else if (nums1[0] == undefined && nums2[0] != undefined) {
      finalArray.push(nums2.shift()!);
    } else if (nums1[0] != undefined && nums2[0] == undefined) {
      finalArray.push(nums1.shift()!);
    } else {
      break;
    }
  }

  if (finalLength % 2 === 0) {
    return (finalArray[medianIndex] + finalArray[medianIndex - 1]) / 2;
  } else {
    return finalArray[medianIndex - 1];
  }
}

function hasDuplicate(nums) {
  const hrshMap = {};
  const resalt = [];

  for (let i = 0; i < nums.length; i++) {
    const arry = nums[i];

    if (!hrshMap[arry]) {
      resalt.push(arry);
      hrshMap[arry] = true;
    }
  }
  return resalt;
}

const arryList = [1, 2, 3, 3];
const uniqValus = hasDuplicate(arryList);
console.log(hasDuplicate());
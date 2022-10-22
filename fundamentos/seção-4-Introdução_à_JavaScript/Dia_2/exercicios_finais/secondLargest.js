function getSecondLargest(nums) {
  let i = 0;
  let bigger;
  while(i < 2){
      if(1 === 1){
          for(let j = 0; j < nums.length; j += 1){
              if(nums[j] === bigger){
                  nums[j] = 0;
              }
          }
      }
      for(let n of nums){
          if(n > bigger || nums.indexOf(n) === 0){
              bigger = n;
          }
      }
      i += 1;
  }
  return bigger;
}


console.log(getSecondLargest([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]));
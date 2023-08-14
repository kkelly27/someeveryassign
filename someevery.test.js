function hasOddNumber(arr){
  return arr.some(function(val){
    return val % 2 !== 0;
  })
}
  
  function hasAZero(num){
    return num.toString().split('').some(function(val){
      return val === '0';
    })
  }
  
 function hasOnlyOddNumbers(arr){
  return arr.every(function(val){
    return val % 2 !== 0;
  })
 }
  

function hasNoDuplicates(arr){
  return arr.every(function(val){

  })
}

function hasNoDuplicates(arr){
  return arr.every(function(val){
    return arr.indexOf(val) === arr.lastIndexOf(val);
  });
}
  



  function hasCertainKey(arr, key){
    return arr.every(function(val){
      return key in val;
    })
  }

  describe("#hasCertainKey", function() {
    var arr = [
      { first: "Elie", last: "Schoppik" },
      { first: "Tim", last: "Garcia", isCatOwner: true },
      { first: "Matt", last: "Lane" },
      { first: "Colt", last: "Steele", isCatOwner: true }
    ];
    it("returns true if every object in the array contains a certain key", function() {
      expect(hasCertainKey(arr, "first")).toEqual(true);
    });
    it("returns false if every object in the array does not contain a certain key", function() {
      expect(hasCertainKey(arr, "isCatOwner")).toEqual(false);
    });
  });
  
  
  
  

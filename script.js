function snapCrackle(maxValue) {

    let arr = [];
  
    for (let i = 1; i < maxValue; i++) {
  
      if (i % 2 != 0) {
  
        arr.push("snap");
        
      } else {

        arr.push(i);
        
      }
      
    }
  
    return `${arr}`
  }
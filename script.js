let obj1 = {
    name1: "Alisher",
    age1: 27,
    work1: "cafe",
    car1: true,
  };
  
  let obj2 = {
    name2: "Iisus",
    age2: 26,
    work2: "programmer",
    car2: false,
  };
  
  let obj3 = {};
  
  let types = {
    string: [],
    number: [],
    boolean: [],
    object: [],
  };
  
  for (let i in obj1) {
    obj3[i] = obj1[i];
  }
  
  for (let j in obj2) {
    obj3[j] = obj2[j];
  }
  
  for (let k in obj3) {
    switch (typeof obj3[k]) {
      case "string":
        types.string.push(obj3[k]);
        break;
  
      case "number":
        types.number.push(obj3[k]);
        break;
  
  
      case "boolean":
      types.boolean.push(obj3[k]);
      break;
  
      case "object":
        types.object.push(obj3[k]);
        break;
  
      default:
        break;
    }
  }
  console.log(types);
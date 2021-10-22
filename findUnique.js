const export getUniqueElements = (input) => {
  const result = [];
  const lookup = {};
  
  input.forEach( row => {
    let name=row.name;
    if(!(name in lookup)){
      lookup[name]=1;
      result.push(name);
    }
  });
  return result; 
}


const data=[{name:1001,company:'xyz'},{name:1003,company:'xyz'},{name:1002,company:'xyz'},{name:1001,company:'xyz'}]

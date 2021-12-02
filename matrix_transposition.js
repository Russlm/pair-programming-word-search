const transpose = function(matrix) {
  let muse = [];
  for (let col = 0; col < matrix[0].length; col++) {
    muse.push(matrix.map(x => x[col]))
    // console.log(muse)
  }
  main = muse;

  return main;
};

// STEP 1: CREATE FOR LOOP THAT GOES OVER EACH ARRAY IN ARRAY 

// STEP 2: USE FILTER TO CREATE NEW ARRAYS WITH THE RIGHT VARIABLE 

// for (let row = 0; row < matrix.length; row++) {
//   for (let col = 0; col < matrix[0].length; col++) {
    
//     output.push(muse);
//   };
// };











//     }
//   };

  
  // Do not edit this function.
  const printMatrix = (matrix) => {
      for (const row of matrix) {
          for (const el of row) {
              process.stdout.write(el + " ");
          }
          process.stdout.write('\n')
      }
  }
  
  printMatrix(transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4]
  ]));

  
  
  console.log('----')
  
  printMatrix(transpose([
    [1, 2],
    [3, 4],
    [5, 6]
  ]));
  
  console.log('----')
  
  printMatrix(transpose([
    [1, 2, 3, 4, 5, 6, 7]
  ]));

  // https://www.ricksgoodeats.ca/


    // let main = [];
  // // //fill main with elements.

  // for (let i = 0; i < matrix[0].length; i++) {
  //   main.push([]); //creates the arrays to push to
  // }
  // // console.log(`info in first for loop ${main}`)

  // // console.log('----')
  
  // for (let row = 0; row < matrix.length; row++) {
  //   for (let col = 0; col < matrix[0].length; col++) {
  //     main[col].push(matrix[row][col]);
  //   };
  // };

  // let muse = matrix.map(x => x[0])
  // console.log("muse is", muse)


  module.exports = {transpose, printMatrix};
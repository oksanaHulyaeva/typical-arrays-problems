
exports.min = function min (array) {
  if(!array || array.length == 0) return 0;
  else {
    let minEl = array[0];
    for(let i = 0; i< array.length; i++){
      if(minEl > array[i]) minEl = array[i];
    }
    return minEl;
  }
}

exports.max = function max (array) {
  if(!array || array.length == 0) return 0;
  else {
    let maxEl = array[0];
    for(let i = 0; i< array.length; i++){
      if(maxEl < array[i]) maxEl = array[i];
    }
    return maxEl;
  }
}

exports.avg = function avg (array) {
  if(!array || array.length == 0) return 0;
  else {
    let average = 0;
    for(let i = 0; i<array.length; i++){
      average += array[i];
    }
    return (average / array.length);
  }
}

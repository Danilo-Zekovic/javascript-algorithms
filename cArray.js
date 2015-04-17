function CArray(numElements) {
  this.setData = setData;
  this.toString = toString;
}

function setData() {
  for (var i = 0; i < this.numElements; ++i) {
    this.dataStore[i] = Math.floor(Math.random() * 
		    (this.numElements + 1));
  }
}

function toString() {
  var retstr = "";
  for (var i = 0; i < this.dataStore.length; ++i){
    retstr += this.dataStore[i] + " ";
    if (i > 0 && i % 10 == 0) {
      retstr += "\n";
    }
  }
  return retstr;
}

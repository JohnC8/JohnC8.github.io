function MinMaxAvg(minimum,maximum) 
{ this._min=minimum;
  this._max=maximum;
  this._checkresult = function()
  { return this._min + this._max  }
  this._division = function() 
  { return this._checkresult() / 2  }
}

let digit = new MinMaxAvg(2, 6)

console.log(digit._min)
console.log(digit._max)

console.log("The Average is = " + digit._division() )
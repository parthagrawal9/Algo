var monthMapping = {
  'Jan': 1,
  'Feb':2,
  'Mar':3,
  'Apr':4,
  'May':5,
  'Jun':6,
  'Jul':7,
  'Aug':8,
  'Sep':9,
  'Oct':10,
  'Nov':11,
  'Dec':12
}

var data = [
  {'month':'Sep', 'amount':1000},
  {'month':'Oct', 'amount':2000},
  {'month':'Nov', 'amount':3000},
  {'month':'Dec', 'amount':4000},
  {'month':'Jan', 'amount':5000},
  {'month':'Feb', 'amount':6000},
  {'month':'Mar', 'amount':7000}
]

var q1 = []
var q2 = []
var q3 = []
var q4 = []

for(let i=0;i<data.length;i++){
  var monthInNumber = monthMapping[data[i].month]
  if(monthInNumber > 9) q4.push(data[i])
  else if(monthInNumber > 6) q3.push(data[i])
  else if(monthInNumber > 3) q2.push(data[i])
  else q1.push(data[i])
}

console.log(q1)
console.log(q2)
console.log(q3)
console.log(q4)
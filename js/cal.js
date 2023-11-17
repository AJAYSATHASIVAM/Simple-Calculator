var arr=[]
emptyStr = '';
str = '';
document.getElementById('display').innerHTML ='hellow'
function display(){
  for(let i = 0; i<=arr.length-1; i++){
    str += arr[i]
  }
}
function calculation(){
  for(let  i=0; i<= arr.length-1; i++){
    emptyStr += arr[i]
  }
  for(let j = arr.length-1; j>=0; j--){
    arr.pop()
  }

emptyStr=eval(emptyStr)
}
function ac(){
  emptyStr = ''
}


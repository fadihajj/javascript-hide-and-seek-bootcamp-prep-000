function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementsByTagName('div')[4];
}

function deepestChild () {
  
  var el = document.getElementById('grand-node');
  var nest = el.getElementsByTagName('div')[3];

  return nest;
}

function increaseRankBy(n){
  var el =document.querySelector('.ranked-list').innerHTML;
for (var i=0; i<=n; i++){
el = el + '<li>2</li>';}
}
var div = document.getElementById('js')

function test(n){
  alert(n)
}

div.onclick = function(){
    test('112233')
}

function num(){
    console.log('我是被合并的')
}


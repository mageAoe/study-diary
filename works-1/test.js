

//测试一下master里面的东西会不会被删除

function type(target){
	var tar = typeof(target)
	var template = {
		"[object Array]":'array-object',
		"[object Object]":'object-object',
		"[object Boolean]":'boolean-object',
		"[object Number]":'number-object',
		"[object String]":'string-object',
	}
	if(target===null){
		return "null";
	}else if(tar=='object'){
		var str = Object.prototype.toString.call(target);
		return template[str];
	}else{
		return tar; // function
	}
}

function pp(){
    return Object.prototype.toString.call()
}


var tt = []

var yy = {}

var gg = new Number();

var kk = new String('dfhgdk');

var ff = new Boolean(false)

console.log(pp)



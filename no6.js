
function sayInfo(age) {

    console.log("name:"+this.name);
  
    console.log("age:"+age);
 
    
  }
  Function.prototype.call2 = function (obj) {
    obj.fn = this;
    var i = 1;
    var args = [];
    for(; i<arguments.length; i++){
        args.push (arguments[i]);
    }
    obj.fn(args);
  }

  var user = {
    name: "zzx"
  }

  sayInfo.call2(user,100)
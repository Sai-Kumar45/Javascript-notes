function flatten_array(arr){
    var new_arr=[]
    for(let i=0; i<arr.length;i++){
        if(Array.isArray(arr[i])){
            new_arr=new_arr.concat(flatten_array(arr[i]))
        }else{

            new_arr.push(arr[i])
        }
    }
    return new_arr.sort((a,b)=>b-a)
}

var input_arr=[1,2,4,[3,[4,8],9,2],2]
var res=flatten_array(input_arr)
console.log(res);

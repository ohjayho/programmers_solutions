function solution(arr, delete_list) {
    delete_list.forEach((del)=>{
        arr=arr.filter((int)=>int!==del);
    });
    return arr;
}
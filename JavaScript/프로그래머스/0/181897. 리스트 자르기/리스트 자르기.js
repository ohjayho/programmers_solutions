function solution(n, slicer, num_list) {
    if(n===1){
        return num_list.slice(0,slicer[1]+1);
    }
    if(n===2){
        return num_list.slice(slicer[0]);
    }
    if(n===3){
        return num_list.slice(slicer[0],slicer[1]+1);
    }
    if(n===4){
        const result = []
        for(let i=slicer[0];i<=slicer[1];i+=slicer[2]){
            result.push(num_list[i]);
        }
        return result;
    }
}
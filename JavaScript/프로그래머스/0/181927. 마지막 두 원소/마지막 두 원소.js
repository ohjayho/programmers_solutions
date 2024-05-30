function solution(num_list) {
    let len = num_list.length;
    let lastEl = num_list[len-1];
    let secondEl = num_list[len-2];
    num_list.push(lastEl > secondEl ? lastEl - secondEl : lastEl*2);
    return num_list;
}
function solution(my_string) {
    const newStr = [];
    my_string.split('').forEach((el)=>{
      if(!newStr.includes(el)){
          newStr.push(el);
      }
    });
    return newStr.join('');
}
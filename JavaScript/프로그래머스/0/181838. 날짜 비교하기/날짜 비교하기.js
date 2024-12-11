function solution(date1, date2) {
    let firstDate = new Date(`${date1[0]}-${date1[1]}-${date1[2]}`);
    let secondDate = new Date(`${date2[0]}-${date2[1]}-${date2[2]}`);
    return firstDate < secondDate ? 1 : 0;
}
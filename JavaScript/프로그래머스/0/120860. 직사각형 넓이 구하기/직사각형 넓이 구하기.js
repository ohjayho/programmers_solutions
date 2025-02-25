function solution(dots) {
    let sortedDots = dots.sort();
    const height = Math.abs(sortedDots[1][1] - sortedDots[0][1]);
    sortedDots = dots.sort((a,b)=>a[1]-b[1]);
    const width = Math.abs(sortedDots[1][0] - sortedDots[0][0]);
    return height*width;
}
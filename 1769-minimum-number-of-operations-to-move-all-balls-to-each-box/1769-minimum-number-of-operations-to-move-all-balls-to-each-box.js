/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let n = boxes.length;
    let answer = Array.from({length: n}, () => 0);

    let sum = 0;
    let totalBalls = 0;

    // 박스 왼쪽에 있는 공 
    for (let i=0; i<n; i++){
        answer[i] += sum;
        if (boxes[i] === '1') totalBalls++;
        sum += totalBalls;
    }

    // 박스 오른쪽에 있는 공
    sum =0;
    totalBalls = 0;
    for (let i=n-1; i>=0; i--){
        answer[i] += sum;
        if (boxes[i] === '1') totalBalls += 1;
        sum += totalBalls;
    }
    
    return answer
};
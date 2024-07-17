/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function(nums, k) {
    let heap = new MaxHeap();
    for (const num of nums) {
        heap.insert(num);
    }

    let answer;
    for (let i=0; i<k; i++) {
        answer = heap.extractMax();
    }

    return answer;
};

class MaxHeap {
    constructor(){
        this.data = [];
    }

    swap(index1, index2) {
        [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
    }

    insert(num) {
        this.data.push(num);
        this.heapifyUp();
    }

    heapifyUp(){
        let index = this.data.length - 1;
        while (index >= 0) {
            let parentIndex = Math.floor((index-1)/2);
            if (this.data[index] < this.data[parentIndex]) break;
            swap(index, parentIndex);
            index = parentIndex;
        }
    }

    extractMax() {
        let max = this.data[0];
        let last = this.data.pop();
        this.data[0] = last;
        this.heapifyDown();
        return max
    }

    heapifyDown(){
        let index = 0;
        const length = this.data.length;
        while (true) {
            let value = this.data[index];
            let leftIndex = 2 * index + 1;
            let rightIndex = 2 * index + 2;
            let left, right;
            let swapIndex = null;

            if (leftIndex < length) {
                left = this.data[leftIndex];
                if (value < left) {
                    swapIndex = leftIndex;
                }
            }

            if (rightIndex < length) {
                right = this.data[rightIndex];
                if ((swapIndex === null && value < right) || (swapIndex !== null && left < right)){
                    swapIndex = rightIndex;
                }
            }

            if (swapIndex === null) break;

            this.swap(index, swapIndex);
        }
    }
}
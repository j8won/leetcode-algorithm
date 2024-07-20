
class SmallestInfiniteSet {
    constructor() {
        this.data = Array.from({ length: 1000 }, (_, i) => i + 1);
    }

    swap(idx1, idx2) {
        [this.data[idx1], this.data[idx2]] = [this.data[idx2], this.data[idx1]];
    }

    heapifyUp() {
        if (this.data.length <= 1) return;

        let idx = this.data.length - 1;

        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1)/2);

            if (this.data[parentIdx] < this.data[idx]) break;
            this.swap(idx, parentIdx);
            idx = parentIdx;
        }
    }

    heapifyDown() {
        if (this.data.length <= 1) return;
        let idx = 0;
        
        while (true) {
            const leftChild = idx * 2 + 1;
            const rightChild = idx * 2 + 2;
            let swapIdx = null;

            if (leftChild < this.data.length) {
                if (this.data[idx] > this.data[leftChild]) swapIdx = leftChild;
            }

            if (rightChild < this.data.length) {
                if ((swapIdx === null || this.data[leftChild] > this.data[rightChild]) && (this.data[idx] > this.data[rightChild])) {
                    swapIdx = rightChild;
                }
            }

            if (swapIdx === null) break;
            
            this.swap(idx, swapIdx);
            idx = swapIdx;
        }
    }
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
    if (this.data.length === 0) return;
    const smallest = this.data[0];
    const last = this.data.pop();
    this.data[0] = last;
    this.heapifyDown();
    return smallest;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
    if (this.data.includes(num)) return;
    this.data.push(num);
    this.heapifyUp();
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
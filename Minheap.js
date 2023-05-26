class minHeap{
  constructor(array){
    this.heap = []
    if(array){
      this.buildHeap(array)
    }
  }

  buildHeap(array){
    this.heap = array
    for(let i =this.parent(this.heap.length-1);i>=0;i--){
      this.shiftDown(i)
    }
  }

  shifdown(curr){
    let end = this.heap.length-1
    let left = this.leftChild(curr)

    while(left<=end){
      let right = this.rightChild(curr)
      let shift
      if(right<=end && this.heap[right]<this.heap[left]){
        shift = this.heap[right]
      }else{
        shift = this.heap[left]
      }

      if(this.heap[shift]<this.heap[curr]){
        [this.heap[shift],this.heap[curr]]=[this.heap[curr],this.heap[shift]]
        curr= shift
        left = this.leftChild(curr)
      }
      else{
        return 
      }
    }
  }

  insert(value){
    this.heap.push(value)
    this.shiftup(this.heap.length-1)
  }

  shiftup(curr){
    let parent = this.parent(curr)
    while(curr>0 && this.heap[curr]<this.heap[parent]){
      [this.heap[curr],this.heap[parent]]=[this.heap[parent],this.heap[curr]]
      curr = parent
      parent = this.parent(curr)
    }
  }

  remove(){
    [this.heap[0],this.heap[this.heap.length-1]]=[this.heap[this.heap.length-1],this.heap[0]]
    this.heap.pop()
    shiftDown(0)
  }

  sort(){
    for(let i=this.heap.length-1;i>=0;i--){
      this.sorting(i)
    }
  }

  sorting(curr){
    [this.heap[0],this.heap.length-1]=[this.heap[0],this.heap.length-1]
    console.log(this.heap[curr])
    this.heap.pop()
    shiftdown(0)
  }



  parent(i){
    return Math.floor(i-1/2)
  }

  leftChild(i){
    return i*2+1
  }

  rightChild(i){
    return i*2+2
  }

  
}
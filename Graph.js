class graph {
  constructor() {
    this.adjacencyList = {};
  }

  addvertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addvertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addvertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }


bfs(startvertex){
  let visited = {}
  let queue = []

  visited[startvertex]=true
  queue.push(startvertex)

  while(queue.length>0){
    let vertex = queue.shift()
    console.log(vertex);
  }

  for(let adjacentvertex of this.adjacencyList[vertex]){
    if(!visited[adjacentvertex]){
      visited[adjacentvertex]=true
      queue.push(adjacentvertex)
    }
  }
};

dfs(startvertex){
  const visited = {}
  const dfshelper = (vertex)=>{
    visited[vertex]=true
    console.log(vertex);

    for(let adjacentvertex of this.adjacencyList[vertex]){
      if(!visited[adjacentvertex]){
        dfshelper(adjacentvertex)

      }
    }
  }
  dfshelper(startvertex)
}


  hasedge(vertex1,vertex2){
    return(
      this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
    )
  }

  edgeremove(vertex1,vertex2){
    this.adjacencyList[vertex1].delete(vertex2)
    this.adjacencyList[vertex2].delete(vertex1)
  }

  vertexremove(vertex){
    if(!this.adjacencyList[vertex]){
      return 
    }
    for(let adjacentvertex of this.adjacencyList[vertex]){
      this.edgeremove(vertex,adjacentvertex)
    }
    delete this.adjacencyList[vertex]
  }
  



  display(){
    for(let vertex in this.adjacencyList){
      console.log(vertex +"->"+ [...this.adjacencyList[vertex]] );
    }
  }
}

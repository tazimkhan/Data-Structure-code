class Graph{
    constructor(noOfVertex){
        this.adjList=new Map();
        this.noOfVertex=noOfVertex;
    }
    addVertex(arr){
        for(let i=0;i<arr.length;i++){
            this.adjList.set(arr[i],[])
        }
    }
    addEdge(v,u){
        this.adjList.get(v).push(u);
        this.adjList.get(u).push(v);
    }
}
var g=new Graph(6);
var vertex=['A','B','C','D','E','F'];
g.addVertex(vertex);
g.addEdge('A','B');
g.addEdge('D','A');
g.addEdge('E','F');
g.addEdge('C','B');
g.addEdge('B','F');
g.addEdge('E','B');
console.log(g);
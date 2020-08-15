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
    bfs(sourceNode){
        var visited=[];
        for(let i=0;i<this.noOfVertex;i++){
            visited[i]=false;
        }
        var queue=[];           // work as Queue
        visited[sourceNode]=true;
        queue.push(sourceNode);
        while(queue.length !== 0){
            var getQueueElement=queue.shift();
            console.log(getQueueElement);
            var get_List=this.adjList.get(getQueueElement);
            for (var i in get_List){
                var neigh=get_List[i];
                if(!visited[neigh]){
                    visited[neigh]=true;
                    queue.push(neigh);
                }
            }
        }
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
g.bfs('A');

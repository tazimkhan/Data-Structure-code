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
    dfs(sourceNode){
    var vertexes=['A','B','C','D','E','F'];
    var visited=[];
    for(let i=0;i<vertexes.length;i++){
        visited[vertexes[i]]=false;
    }
    visited[sourceNode]=true;
    var stack=[];
    stack.push(sourceNode);
    while(stack.length!==0){
        var getStackElement=stack.pop();
        console.log(getStackElement)
        var get_List=this.adjList.get(getStackElement);
        for(let i=0;i<get_List.length;i++){
            var neigh=get_List[i];
            if(!visited[neigh]){
                visited[neigh]=true;
                stack.push(neigh);
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
g.dfs('A');


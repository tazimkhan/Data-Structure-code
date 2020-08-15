function bucket(arr){
    var l=arr.length;
    var a=[];
    for(let i=0;i<l;i++){
        a[i]=[];
    }
    for(let i=0;i<l;i++){
        var v=parseInt(arr[i]*10);
        a[v].push(arr[i]);
    }
    var m=[];
    for(let i=0;i<l;i++){
        insertionSort(a[i]);
        for(let j=0;j<a[i].length;j++){
            m.push(a[i][j])
        }
    }
    return m
}
function insertionSort(arr){
    for(let i=0;i<arr.length;i++){
        var temp=arr[i];
        for(let j=i;j>=0;j--){
            if(arr[j]>temp){
                arr[j+1]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}

arr=[0.78,0.17,0.39,0.26,0.72,0.94,0.21,0.12,0.23,0.68];
var s=bucket(arr);
console.log(s)
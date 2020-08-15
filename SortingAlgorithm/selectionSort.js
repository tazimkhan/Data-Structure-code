function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        var min=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j;
            }
        }
        var temp=arr[i];
        arr[i]=arr[min];
        arr[min]=temp;
    }
    return arr;
}
console.log(selectionSort([30,15,21,17,11]))
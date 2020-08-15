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
console.log(insertionSort([4,2,7,6,5]))
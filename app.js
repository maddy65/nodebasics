function simplifyArr(arr){
	var tempArr = [];
	for(var i=0; i<arr.length; i++){
		var newArr = [];
		if(i == 0){
			newArr.push(arr[i]);
		}else{
			for(var j=0; j<tempArr.length; j++){
				var flg = false;
				if(tempArr [j] >= arr[i]){
					flg = true;
					break;
				}
			}
			if(flg == true){
				newArr[0] = 1;
				for(var l=1; l<i; l++){
					newArr[l].push(0);
				}
				
			}else{
				for(var l=0; l<i; l++){
					newArr[l].push(0);
				}
				newArr[i].push(arr[i]);
			}
		}
		tempArr.push(arr[i])
		
		for(var k=0; k<newArr.length; k++){
			console.log(newArr[k]);
		}
	}
}


var arrayTwo = [6,1,5,8,9,2,3];
simplifyArr(arrayTwo);
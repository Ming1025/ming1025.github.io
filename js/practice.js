//Random number
	var arr = [1,2,3,4,5,6,7,8,9];
	var arr_x = [];
	var num = 0;
	for (var sum = arr_x.join("+");sum<55;num++) {
		var ran_x = Math.floor(Math.random() * (arr.length - num));
			arr_x.push(arr[ran_x]);
			arr[ran_x] = arr[arr.length - num - 1];
	}
document.write(sum);
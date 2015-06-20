
exports.Sum = function(num1, num2){
return num1+num2;
}

exports.SumOfArray = function(arrayOfNums){
var sum=0;
for(var i=0;i<arrayOfNums.length;i++)
sum+=arrayOfNums[i];
return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
var temp,sum=0;
for(var i=0;i<arrayOfNums.length ;i++)
	{
	if(arrayOfNums[i]!='*')
		{
		temp=arrayOfNums[i];
		for(var j=i+1;j<arrayOfNums.length;j++)
			{
			if(arrayOfNums[j]==temp)
			arrayOfNums[j]='*';
			}
		sum+=temp;
		}
	}
	return sum;

}

exports.ReverseString = function(str){
var rev="";
for(var i=str.length-1;i>=0;i--)
rev=rev+str.charAt(i);
return rev;
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
var revarray=[];
	for(var i=0;i<arrayOfStrings.length;i++)
		revarray[i]=exports.ReverseString(arrayOfStrings[i]);
	return revarray;
}
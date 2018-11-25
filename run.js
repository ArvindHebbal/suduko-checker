var a = [];

//Function to return sorted array without actually changing the original array
var nonModifyingSort = function (arr) {
  return [].concat(arr).sort( (a,b) => a > b );
}

//Function to check if arrays have all numbers
var checkIfArraysHaveAllNumbers = function (arr) {
	allNumberArrayString = "1,2,3,4,5,6,7,8,9";
if(nonModifyingSort(arr).toString() == allNumberArrayString)
	return true
return false
}
for(var i = 0; i < 9; ++i) {
    a[i] = [ ];
    for(var j = 0; j < 9; ++j) {
        a[i][j] = 0; // a[i] is now an array so this works.
    }
}
//Suduko numbers provided
{a[0][7] = 6;
a[1][2] = 7;
a[1][3] = 3;
a[1][6] = 9;
a[2][2] = 8;
a[2][3] = 9;
a[3][1] = 7;
a[3][2] = 1;
a[4][8] = 8;
a[5][0] = 8;
a[5][4] = 5;
a[5][6] = 6;
a[5][8] = 4;
a[6][1] = 1;
a[6][3] = 2;
a[6][7] = 9;
a[7][0] = 2;
a[7][5] = 4;
a[8][1] = 6;
a[8][2] = 9;
a[8][7] = 7;
}
// Suduko solved answer
{a[0][0] = 9;
a[0][1] = 3;
a[0][2] = 2;
a[0][3] = 8;
a[0][4] = 4;
a[0][5] = 1;
a[0][6] = 5;
a[0][8] = 7;

a[1][0] = 6;
a[1][1] = 4;
a[1][4] = 2;
a[1][5] = 5;
a[1][7] = 8;
a[1][8] = 1;

a[2][0] = 1;
a[2][1] = 5;
a[2][4] = 7;
a[2][5] = 6;
a[2][6] = 2;
a[2][7] = 4;
a[2][8] = 3;

a[3][0] = 4;
a[3][3] = 6;
a[3][4] = 8;
a[3][5] = 2;
a[3][6] = 3;
a[3][7] = 5;
a[3][8] = 9;

a[4][0] = 5;
a[4][1] = 2;
a[4][2] = 6;
a[4][3] = 4;
a[4][4] = 3;
a[4][5] = 9;
a[4][6] = 7;
a[4][7] = 1;

a[5][1] = 9;
a[5][2] = 3;
a[5][3] = 1;
a[5][5] = 7;
a[5][7] = 2;

a[6][0] = 7;
a[6][2] = 4;
a[6][4] = 6;
a[6][5] = 3;
a[6][6] = 8;
a[6][8] = 5;

a[7][1] = 8;
a[7][2] = 5;
a[7][3] = 7;
a[7][4] = 9;
a[7][6] = 1;
a[7][7] = 3;
a[7][8] = 6;

a[8][0] = 3;
a[8][3] = 5;
a[8][4] = 1;
a[8][5] = 8;
a[8][6] = 4;
a[8][8] = 2;}

//Displaying suduko
for(i = 0; i< 9 ; ++i)
{
	if(i%3==0)
	console.log('\n')
	console.log(a[i][0],a[i][1],a[i][2],"  ",a[i][3],a[i][4],a[i][5],"  ",a[i][6],a[i][7],a[i][8],)
}

//Function to check if the solution is right
function checkSudukoSolution(a) {
	//check rows
	for(var i = 0 ;i< 9; i++) {
		if(!checkIfArraysHaveAllNumbers(a[i])){
			return false;
		}
	}
	//check columns
	for (var i = 0 ;i< 9; i++) {
		if(!checkIfArraysHaveAllNumbers([a[0][i],a[1][i],a[2][i],a[3][i],a[4][i],a[5][i],a[6][i],a[7][i],a[8][i]]))
			return false;
	}
	for(var i = 0; i<9; i=i+3) {
		for(var j = 0;j<9; j=j+3) {
		if(!checkIfArraysHaveAllNumbers([a[0+j][0+i],a[0+j][1+i],a[0+j][2+i],a[1+j][0+i],a[1+j][1+i],a[1+j][2+i],a[2+j][0+i],a[2+j][1+i],a[2+j][2+i]]))
			return false;	
		}
	}
	return true;
}

//Displaying validation of solution
console.log('\n Solution validity :',checkSudukoSolution(a))
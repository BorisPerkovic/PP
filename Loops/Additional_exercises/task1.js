/*==================================================================
1.	Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no
===================================================================*/
var e = 3;
var a = [5, -4.2, 3, 7];

for ( i = 0; i < a.length; i++) {
  if ( a[i] === e) {
    string = "Yes";
    break;
  } else {
    string = "No";
  }
}
console.log(string);
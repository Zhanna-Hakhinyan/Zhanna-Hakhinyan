 function uniqueChars (text) {
for ( var i = 0 ; i< text.length ; i++){
for ( var j = i+1 ; j < text.length ; j++)
if ( text[i] === text[j] ){
text=text.replace(text[j] , " ");}}
text=text.replace(/\s/g, "");
return text;
}
alert( uniqueChars("thequickbrownfoxjumpsoverthelazydog"));








/* 
function truncat (str, maxlength, symbol){
	if(str.length > maxlength && arguments[2]) 
	return str.slice(0, maxlength) + symbol;
 return str.slice(0, maxlength) + '...';
}
alert(truncat("sssshtjgk", 4, '---'));
 */









/*  function happy_number(num) 
{
    var m, n ;
    var c = [] ;
 
    while(num != 1 && c[num] !== true) 
    {
        c[num] = true ;
        m = 0 ;
        while (num > 0) {
				n = num % 10 ;
				m += n * n ;
				num = (num  - n) / 10 ;
			}
        num = m ;
    }
    return (num == 1) ;
}
 
var cnt = 5;
var num = 1;
var f5 = ''; 
while(cnt-- > 0) 
{
    while(!happy_number(num))
        num++ ;
f5 = f5+(num + ", ") ;

    num++ ;
}
console.log('happy numbers: '+f5);


 */






/* 
 function numofarg(){
return arguments.length;}
alert ( numofarg('fgg',45)) */;










// Tip calculator using both ternary operator and if/else
let bill, tipCal1, tipCal2,tip;

bill = Number(prompt('Bill'));
tipCal1 = bill * 3/20;
tipCal2 = bill/5;


tip = (bill > 50 && bill < 300) ? `Tip is ${tipCal1}` : `Tip is ${tipCal2}`;
console.log('Ternary operator wali ' +tip);


if(bill > 50 && bill < 300 ){
console.log(`If/Else wali Tip is ${tipCal1}`);
}else{
    console.log(`If/Else wali Tip is ${tipCal2}`);
}
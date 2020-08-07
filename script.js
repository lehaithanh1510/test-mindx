//console.log('Hello Worlds again');
//
//var firstName = 'John';
//console.log(firstName); 
//var lastName = 'ThanhLH';
//var age = 18;
//console.log (typeof lastName);
//
//var fullAge =true; 
//console.log (fullAge);
//
//var firstName = ' Thanh'
//var job;
//console.log (job);
//
////console.log (thanh); 
//console.log (lastName + ' ' + age);
//
//var job, isMarried; 
//job = 'student'; 
//isMarried = false;
//console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married ? ' + isMarried);
//
//age = 'eighteen'; 
//job = 'driver'; 
//
////alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);  
//
////var lastName = prompt('What is his last name?'); 
//console.log(firstName + ' ' + lastName)
//
//var year, yearJonh, yearMark; 
//now = 2018; 
//ageJohn = 28; 
//ageMark = 53;
//yearJonh = now - ageJohn;
//yearMark = now - ageMark;
//
//console.log(yearJonh);
//
//console.log(now + 2);
//console.log(now * 2);
//console.log(now % 10);

//DOI GIO PHUT GIAY
//var soGiay = prompt('So giay la ?');
//var giay, gio , phut;
//gio = Math.floor(soGiay/3600);
//phut = Math.floor((soGiay - gio*3600)/60);
//giay = soGiay % 60;
//console.log( gio + ' gio ' + phut + ' phut ' + giay + ' giay ' )

// BMI 
//var heightMark, massMark, heightJohn, massJohn; 
//massJohn = 70; 
//massMark = 80; 
//heightJohn = 1.76;
//heightMark = 1.85;
//var BMIMark = massMark/(heightMark*heightMark);
//var BMIJohn = massJohn/(heightJohn*heightJohn);
//console.log(' BMIJohn is ' + BMIJohn + ' ' + ' BMIMark is ' + BMIMark );
//if (BMIJohn > BMIMark ) {
//    console.log (' BMI John is higher than BMI Mark ')
//}
//else {
//  console.log (' BMI Mark is higher than BMI John ')  
//} 

//var mark = 8.5 , johnPoint = 25;
//console.log (gio + ' ' + phut + ' ' + giay + ' ');
//
//if (mark >= 8){
//  console.log ('Very Good')     
//}
//else if (mark >=6 && mark <8 ){
//    console.log ('Good')
//}
//else if (mark >= 5 && mark <6){
//    console.log( 'Average')     
//}
//else {
//    console.log('Bad')
//}
// TAM GIAC 
var canh1 = parseInt (prompt(' Do dai canh 1 la '));
var canh2 = parseInt (prompt(' Do dai canh 2 la '));
var canh3 = parseInt (prompt(' Do dai canh 3 la '));
sum12= canh1 + canh2; //tong canh 1 va 2 
sum23= canh2 + canh3; //tong canh 2 va 3 
sum13= canh1 + canh3; //tong canh 1 va 3
bp1 = canh1*canh1; //binh phuong canh 1
bp2 = canh2*canh2; //binh phuong canh 2 
bp3 = canh3*canh3; //binh phuong canh 3 
if(sum12 > canh3 && sum23 > canh1 && sum13 > canh2){
   console.log(' Do la mot tam giac ')
   if(canh1 == canh2 && canh2 == canh3 && canh1 == canh3){
       console.log(' Do la tam giac deu ')    
   }
   else if( canh1 == canh2 || canh2 == canh3 || canh1 == canh3){
       console.log(' Do la tam giac can ')
   } 
   else if( bp1 + bp2 == bp3 || bp1 + bp3 == bp2 || bp2 + bp3 == bp1) {
       console.log( ' Do la tam giac vuong ')
   }
   else console.log(' Do la tam giac thuong ')
}
else console.log(' Do khong phai la tam giac ')
// GIAI PHUONG TRINH BAC HAI 
//var a = parseInt(prompt('He so bac hai la')) ;
//var b = parseInt(prompt('He so bac mot la')) ;
//var c = parseInt(prompt('He so tu do'));
//var delta = b*b-4*a*c;
//if (delta < 0) console.log('Phuong trinh vo nghiem');
//else if (delta == 0) {
//    var nghiem = -b/(2*a);
//    console.log ('Phuong trinh co nghiem kep '+ nghiem);
//}
//else {
//    var nghiem1 = (-b+Math.sqrt(delta))/(2*a);
//    var nghiem2 = (-b-Math.sqrt(delta))/(2*a)
//    console.log(' Phuong trinh co 2 nghiem phan biet x1 = ' + nghiem1+ ' va x2 = ' + nghiem2 ) 
//}
// Phan 1
//var mikeScore, johnScore ;
//var mike1, mike2, mike3, john1, john2, john3; 
//a = (89 + 120 + 103)/3;
//b = (116 + 94 + 123)/3;
//c = (97 + 134 + 105)/3
//// Phan 2
//if(a > b) console.log('John is the winner in turn 1 with the score is ' + a)
//else if (a < b) console.log('Mike is the winner in turn 1 with the score is ' + b )
//else cons1ole.log('Draw');
//// Phan 3
//mike1 = parseInt(prompt('Diem game 1 cua mike la'));
//mike2 = parseInt(prompt('Diem game 2 cua mike la'));
//mike3 = parseInt(prompt('Diem game 3 cua mike la'));
//john1 = parseInt(prompt('Diem game 1 cua john la'));
//john2 = parseInt(prompt('Diem game 2 cua john la'));
//john3 = parseInt(prompt('Diem game 3 cua john la'));
//johnScore = (john1 + john2 + john3)/3;
//mikeScore = (mike1 + mike2 + mike3)/3;
//if(johnScore > mikeScore) console.log('John is the winner in turn 2 with the score is ' + johnScore)
//else if (johnScore < mikeScore) console.log('Mike is the winner in turn 2 with the score is ' + mikeScore )
//else console.log('Draw in turn 2');
//// Phan 4
//var marryScore, marry1, marry2, marry3;
//if(a > b && a > c) console.log('John is the winner in turn 3 with the score is ' + a)
//else if (b > a && b > c) console.log('Mike is the winner in turn 3 with the score is' + b )
//else if (c > a && c > b) console.log('Marry is the winner in turn 3 with the score is ' + c );
//else console.log ('Draw in turn 3')
////Phan 5
//marry1 = parseInt(prompt('Diem game 1 cua marry la'));
//marry2 = parseInt(prompt('Diem game 2 cua marry la'));
//marry3 = parseInt(prompt('Diem game 3 cua marry la')); 
//marryScore = (marry1 + marry2 +marry3)/3;
//if(johnScore > mikeScore && johnScore > marryScore) console.log('John is the winner in turn 4 with the score is ' + johnScore);
//else if (mikeScore > johnScore && mikeScore > marryScore) console.log('Mike is the winner in turn 4 with the score is  ' + mikeScore );
//else if (marryScore > johnScore && marryScore > mikeScore) console.log('Marry is the winner in turn 4 with the score is  ' + marryScore );
//else console.log ('Draw in turn 4');

// FUNCTION 
//function calculateAge(birthYear){
//    var caculatedAge = 2019 - birthYear 
//    return caculatedAge 
//}
//var ageJohn = calculateAge(1990);
//console.log (ageJohn);
//
//var whatDoYouDo = function(job, firstName) {
//    switch (job) {
//        case 'teacher':
//           return firstName + ' teachs kids how to code';
//        case 'driver':
//           return firstName + ' drives a cab in Lisbon';
//        default : 
//           return firstName + 'does something else'
//    }
//    }
// ARRAY    
//function calculateTips(bills){
//    var tips;
//    if(bills < 50) tips = bills*20/100;
//    else if(bills > 50 && bills < 200 || bills == 50 || bills ==200) tips = bills*15/100;
//    else tips = bills*10/100;
//    return tips;
//}
//var bill1 = parseInt(prompt(' Hoa don tai nha hang 1 la '))
//var bill2 = parseInt(prompt(' Hoa don tai nha hang 2 la '))
//var bill3 = parseInt(prompt(' Hoa don tai nha hang 3 la '))
//
//var tip = [calculateTips(bill1), calculateTips(bill2), calculateTips(bill3)]; 
//var totalCost = [bill1 + calculateTips(bill1), bill2 + calculateTips(bill2), bill3+ calculateTips(bill3)]; 
//console.log (tip);
//console.log (totalCost);

//OBJECT 
//function test (){
//    console.log('here')
//}
//var dung ={
//    name: 'Dung Nguyen',
//    age:25,
//    address:'Ha Noi', 
//    run: test
//}
//console.log(dung.run())

//BMI 
//function calculateBMI (mass , height) {
//    var BMI = mass / (height * height);
//    return BMI ;
//}
//var John = {
//    fullname : 'John Cena',
//    mass : 90,
//    height : 1.90,
//    BMI : calculateBMI (90, 1.90)
//}
//var Mark ={
//    fullname : 'Tony Mark',
//    mass : 70,
//    height : 1.85,
//    BMI : calculateBMI (70, 1.85)
//}
//
//var bmiJohn = John.BMI;
//var bmiMark = Mark.BMI;
//if (bmiJohn > bmiMark) console.log('John Cena have the highest BMI score ' + bmiJohn)
//else if (bmiJohn < bmiMark) console.log('Tony Mark have the highest score ' + bcosmiMark)
//else console.log('They have the same BMI score ' + bmiJohn)

//LOOP
//Cay Thong 
//var a = '*'
//for (var i = 1; i <= 10; i++){
//    var b = ''
//    for (var j = 1; j <= 10-i ; j++){
//        b = b+ ' '
//    }
//     console.log(b+a)
//    a = a+'**'
//}
// Hình Vuông 
//function drawSquare ( length , width){
//    var a = '', b=''
//    for (var j=1; j <= width;j++){
//            a = a+'*'
//        }
//    for (var k=1; k < width; k++ ){
//            b = b+' ' 
//    }
//    var  c='*'+b+'*'
//    for (var x=1;x <=length ; x++){
//        if (x==1||x==length) console.log(a)
//        else console.log(c)
//    }
//}
//drawSquare(5,5)
//var johnBill = [124,48,268,180,42], johnTips = []
//var johnTotalBill =[]
//for (var i = 0; i < 5; i++){
//        var bill = johnBill[i]
//        var tips, totalBill
//        if(bill < 50) tips = bill*20/100;
//        else if(bill > 50 && bill < 200 || bill == 50 || bill ==200) tips = bill*15/100;
//        else tips = bill*10/100;
//        totalBill = bill + tips
//        johnTips.push(tips)
//        johnTotalBill.push(totalBill)     
//    }
//console.log(' Tips of John are ' + johnTips);
//console.log(' Total bill of John are ' +johnTotalBill)
//var markBill = [77,375,110,45]
//var markTips = [], markTotalBill = []
//for (var i = 0; i < 4; i++){
//        var bill = markBill[i], tips, totalBill
//        if(bill < 100) tips = bill*20/100;
//        else if(bill > 100 && bill < 300 || bill == 100 || bill == 300) tips = bill*10/100;
//        else tips = bill*25/100;
//        totalBill = bill + tips
//        markTips.push(tips)
//        markTotalBill.push(totalBill)
//    }
//function caculateAverageTips(a =[]){
//    var sum= 0
//    for (var i = 0; i <a.length;i++){
//        sum = sum + a[i]
//    }
//    var averageTips = sum/a.length
//    return averageTips;
//}
//var markAverageTips = caculateAverageTips(markTips)
//var johnAverageTips = caculateAverageTips(johnTips)
//
//if (markAverageTips < johnAverageTips) console.log(' John paid the highest tips on average')
//else if (markAverageTips > johnAverageTips) console.log(' Mark paid the highest tips on average')
//else console.log (' Two family has the same tips on average')
//function longestWord(str) {
//  var word =[]
//  for (var i =0 ; i <= str.length-1 ; i++ )
//    word[i]=''
//  var x = 0 
//  var count =0 , longest =''
//  for (var i = 0 ;i < str.length-1; i++){ 
//    if (str[i] !== ' ') word[x]= word[x]+ str[i] 
//    else {
//      x++
//    }
//  }
//  for (var j = 0; j <= x; j++) {
//    if (word[j].length > count) {
//      longest = word[j]  
//      count = word[j].length
//   } 
//  }
//  
//    return longest
//}
//console.log(longestWord('How is it that despite millenia of research, we still know nothing?'))

//function convert(temp) {
//    var temperature = 0 
//    var x = temp.length
//    var result 
//    for (var i = 0 ; i < temp.length -1; i++){
//        temperature= temperature + parseInt(temp[i]) * Math.pow(10,temp.length- i -2)
//    }
//  if (temp[temp.length-1]=='F') 
//      result = (5/9) * temperature - 32
//  if (temp[temp.length-1]=='C')
//      result = (9/5) * temperature + 32 
//  return result     
//}
//console.log( convert('100C'))

//var i ='12345'
//console.log (parseInt(i)*10)
//document.querySelector('.overflow').style.color = 'blue';
// These variables store the boxes on the side
//let itemOne = document.getElementById('list-item-one');
//let itemTwo = document.getElementById('list-item-two');
//let itemThree = document.getElementById('list-item-three');
//let itemFour = document.getElementById('list-item-four');
//let itemFive = document.getElementById('list-item-five');
//let resetButton = document.getElementById('reset-button');
//
//// This function programs the "Reset" button to return the boxes to their default styles
//let reset = function() {
//  itemOne.style.width = ''
//  itemTwo.style.backgroundColor = ''
//  itemThree.innerHTML = 'The mouse must leave the box to change the text'
//  itemFive.style.display = "none"
//};
//resetButton.onclick = reset;
//
//// Write code for the first list item
//itemTwo.onmouseover = function() {
//  itemTwo.style.width = '500px';
//}
//var arr1 = [1,2,3,4]
//var arr2 = [1,4,2,3]
//
//var arr3 = [
//    {
//        name : 1, 
//        index1 : arr1.indexOf(1),
//        index2 : arr2.indexOf(1),
//        difference :  arr1.indexOf(1) - arr2.indexOf(1)
//    },
//    {
//        name : 2, 
//        index1 : arr1.indexOf(2),
//        index2 : arr2.indexOf(2),
//        difference :  arr1.indexOf(2) - arr2.indexOf(2)
//    },
//    {
//        name : 3, 
//        index1 : arr1.indexOf(3),
//        index2 : arr2.indexOf(3),
//        difference :  arr1.indexOf(3) - arr2.indexOf(3)
//    },
//    {
//        name : 4, 
//        index1 : arr1.indexOf(4),
//        index2 : arr2.indexOf(4),
//        difference :  arr1.indexOf(4) - arr2.indexOf(4)
//    },
//    
//]
//console.log(arr3)
//var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
//
//var countedNames = names.reduce(function (allNames, name) { 
//  if (name in allNames) {
//    allNames[name]++;
//  }
//  else {
//    allNames[name] = 1;
//  }
//  return allNames;
//}, {})
//console.log(typeof(countedNames))
// const store = {
//     sunglasses: {
//       inventory: 817, 
//       cost: 9.99
//     },
//     pants: {
//       inventory: 236, 
//       cost: 7.99
//     },
//     bags: {
//       inventory: 17, 
//       cost: 12.99
//     }
//   };
  
//   const checkInventory = (order) => {
//       return new Promise((resolve, reject) => {
//       setTimeout(()=> {  
//          const itemsArr = order.items;  
//          let inStock = itemsArr.every(item => store[item[0]].inventory >= item[1]);
//          if (inStock){
//              let total = 0;   
//              itemsArr.forEach(item => {
//                  total += item[1] * store[item[0]].cost
//              });
//              console.log(`All of the items are in stock. The total cost of the order is ${total}.`);
//              resolve([order, total])
//          }
//          else {
//              reject (`The order could not be completed because some items are sold out.`)
//          }     
//      }, 5000);
//   })
//   }
  
  
  //const processPayment = (responseArray) => {
  //  const order = responseArray[0];
  //  const total = responseArray[1];
  //  return new Promise ((resolve, reject) => {
  //   setTimeout(()=> {  
  //   let hasEnoughMoney = order.giftcardBalance >= total;
  //   // For simplicity we've omited a lot of functionality
  //   // If we were making more realistic code, we would want to update the giftcardBalance and the inventory
  //   if (hasEnoughMoney) {
  //     console.log(`Payment processed with giftcard. Generating shipping label.`);
  //     let trackingNum = generateTrackingNumber();
  //     resolve([order, trackingNum]);
  //   } 
  //   else {
  //     reject(`Cannot process order: giftcard balance was insufficient.`);
  //   }
  //   
  //}, generateRandomDelay());
  // });
  //};
  //
  //const shipOrder = (responseArray) => {
  //  const order = responseArray[0];
  //  const trackingNum = responseArray[1];
  //  return new Promise ((resolve, reject) => {
  //   setTimeout(()=> {  
  //     resolve(`The order has been shipped. The tracking number is: ${trackingNum}.`);
  //}, generateRandomDelay());
  // });
  //};
  //// This function generates a random number to serve as a "tracking number" on the shipping label. In real life this wouldn't be a random number
  //function generateTrackingNumber() {
  //  return Math.floor(Math.random() * 1000000);
  //}
//   function generateRandomDelay() {
//     return Math.floor(Math.random() * 2000);
//   }
//   const order = {
//     items: [['sunglasses', 1], ['bags', 2]],
//     giftcardBalance: 79.82
//   };
//   const processing = async () => {
//     let value = await checkInventory(order)
//     console.log(value)  
//   }
//   processing()
  // return processPayment(resolvedValueArray) 
  //.then((resolvedValueArray) => {
  //  // Write the correct return statement here:
  //  console.log(resolvedValueArray)    
  //  return shipOrder(resolvedValueArray)
  //})
  //.then((successMessage) => {
  //  console.log(successMessage);
  //})
  //.catch((errorMessage) => {
  //  console.log(errorMessage);
  //});
setInterval(function(){
    let date = new Date();
    let currentHour = date.getHours();
    let currentMinute = date.getMinutes();
    if (currentMinute < 10) {
        currentMinute = '0' + currentMinute
    }
    document.getElementById("time").innerHTML = (currentHour % 12) + ":" + currentMinute
}, 0);

let lZero = document.getElementById("lZero")
let cZero = document.getElementById("cZero")
let rZero = document.getElementById("rZero")
let zero = document.getElementById("zeroButton")
let answer = document.getElementById("answer")
let AC = document.getElementById("AC")
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
let point = document.getElementById("point")
let neg = document.getElementById("neg")
let percent = document.getElementById('percent')
let divide = document.getElementById('divide')
let multiply = document.getElementById('multiply')
let add = document.getElementById('add')
let subtract = document.getElementById('subtract')
let equals = document.getElementById('equals')
let nums = document.querySelectorAll('#one, #two, #three', '#four','five','six','seven','eight','nine');

let number = "0"
let tempNum = false
let expression = ''

answer.innerHTML = 0
number = "0"
AC.addEventListener("click", function() {
  answer.style.fontSize = "80px"
  number = "0"
  answer.innerHTML = number
  expression = ''
})

one.addEventListener("click", function() {
  if ((number == "Error")||(number == "Overflow")) {
    console.log("Err0")
    return;
  }
  else if (number.length > 8) {
    if (tempNum == true) {
      answer.style.fontSize = "80px"
      number = '1';
      answer.innerHTML = number;
      console.log("tempnum is" + answer.innerHTML)
      expression = expression + "1"
      tempNum = false
    }
    console.log("Err1")
    return;
  }
  else if (tempNum == true) {
    console.log("Err2")
    answer.style.fontSize = "80px"
    number = '1';
    answer.innerHTML = number;
    console.log("tempnum is" + answer.innerHTML)
    expression = expression + "1"
    tempNum = false
  }
  else if (number == '0'){
    console.log("Err3")
    answer.style.fontSize = "80px"
    number = '1';
    answer.innerHTML = number;
    console.log("zero!")
    return;
  }
  else if (number.length > 6){
    console.log("Err4")
    answer.style.fontSize = "60px"
    number = number + '1';
    answer.innerHTML = number;
    expression = expression + "1"
    return;
  }
  else if (((expression.indexOf("a")) != -1) || (((expression.indexOf("s")) != -1) || (((expression.indexOf("d")) != -1)|| (((expression.indexOf("m")) != -1))))) {
    if (number.length > 6){
      answer.style.fontSize = "60px"
      console.log("Err5")
    } else {
      answer.style.fontSize = "80px"
      console.log("Err6")
    }

    expression = expression + '1';
    //number = '';
    //console.log(number)
    if ((number == '') || (expression.slice(-1) != 'a')) {
      console.log("Err7")
      number = number + '1';
      answer.innerHTML = number
      console.log(number)
      console.log(123)
    }
    answer.innerHTML = number;
    console.log(expression)
    return;
  }
  else if (number == '0') {
    console.log("Err8")
    answer.style.fontSize = "80px"
    number = '1';
    answer.innerHTML = number;
    return;
  }
  else if (number.length <= 6) {
    console.log("Err9")
    answer.style.fontSize = "80px"
    number = number + '1';
    answer.innerHTML = number;
    return;
  }
})

two.addEventListener("click", function() {
  if ((number == "Error")||(number == "Overflow")) {
    return;
  }
  else if (number.length > 8) {
    if (tempNum == true) {
      answer.style.fontSize = "80px"
      number = '2';
      answer.innerHTML = number;
      console.log("tempnum is" + answer.innerHTML)
      expression = expression + "2"
      tempNum = false
    }
    console.log("Err1")
    return;
  }
  else if (tempNum == true) {
    answer.style.fontSize = "80px"
    number = '2';
    answer.innerHTML = number;
    console.log("tempnum is" + answer.innerHTML)
    expression = expression + "2"
    tempNum = false
  }
  else if (number == '0'){
    answer.style.fontSize = "80px"
    number = '2';
    answer.innerHTML = number;
    console.log("zero!")
    return;
  }
  else if (number.length > 6){
    answer.style.fontSize = "60px"
    number = number + '2';
    answer.innerHTML = number;
    expression = expression + "2"
    return;
  }
  else if (((expression.indexOf("a")) != -1) || (((expression.indexOf("s")) != -1) || (((expression.indexOf("d")) != -1)|| (((expression.indexOf("m")) != -1))))) {
    if (number.length > 6){
      answer.style.fontSize = "60px"
    } else {
      answer.style.fontSize = "80px"
    }

    expression = expression + '2';
    //number = '';
    //console.log(number)
    if ((number == '') || (expression.slice(-1) != 'a')) {
      number = number + '2';
      answer.innerHTML = number
      console.log(number)
      console.log(123)
    }
    answer.innerHTML = number;
    console.log(expression)
    return;
  }
  else if (number == '0') {
    answer.style.fontSize = "80px"
    number = '2';
    answer.innerHTML = number;
    return;
  }
  else if (number.length <= 6) {
    answer.style.fontSize = "80px"
    number = number + '2';
    answer.innerHTML = number;
    return;
  }
})

three.addEventListener("click", function() {
  if ((number == "Error")||(number == "Overflow")) {
    return;
  }
  else if (number.length > 8) {
    if (tempNum == true) {
      answer.style.fontSize = "80px"
      number = '3';
      answer.innerHTML = number;
      console.log("tempnum is" + answer.innerHTML)
      expression = expression + "3"
      tempNum = false
    }
    console.log("Err1")
    return;
  }
  else if (tempNum == true) {
    answer.style.fontSize = "80px"
    number = '3';
    answer.innerHTML = number;
    console.log("tempnum is" + answer.innerHTML)
    expression = expression + "3"
    tempNum = false
  }
  else if (number == '0'){
    answer.style.fontSize = "80px"
    number = '3';
    answer.innerHTML = number;
    console.log("zero!")
    return;
  }
  else if (number.length > 6){
    answer.style.fontSize = "60px"
    number = number + '3';
    answer.innerHTML = number;
    expression = expression + "3"
    return;
  }
  else if (((expression.indexOf("a")) != -1) || (((expression.indexOf("s")) != -1) || (((expression.indexOf("d")) != -1)|| (((expression.indexOf("m")) != -1))))) {
    if (number.length > 6){
      answer.style.fontSize = "60px"
    } else {
      answer.style.fontSize = "80px"
    }

    expression = expression + '3';
    //number = '';
    //console.log(number)
    if ((number == '') || (expression.slice(-1) != 'a')) {
      number = number + '3';
      answer.innerHTML = number
      console.log(number)
      console.log(123)
    }
    answer.innerHTML = number;
    console.log(expression)
    return;
  }
  else if (number == '0') {
    answer.style.fontSize = "80px"
    number = '3';
    answer.innerHTML = number;
    return;
  }
  else if (number.length <= 6) {
    answer.style.fontSize = "80px"
    number = number + '3';
    answer.innerHTML = number;
    return;
  }
})

four.addEventListener("click", function() {
  if ((number == "Error")||(number == "Overflow")) {
    return;
  }
  else if (number.length > 8) {
    if (tempNum == true) {
      answer.style.fontSize = "80px"
      number = '4';
      answer.innerHTML = number;
      console.log("tempnum is" + answer.innerHTML)
      expression = expression + "4"
      tempNum = false
    }
    console.log("Err1")
    return;
  }
  else if (tempNum == true) {
    answer.style.fontSize = "80px"
    number = '4';
    answer.innerHTML = number;
    console.log("tempnum is" + answer.innerHTML)
    expression = expression + "4"
    tempNum = false
  }
  else if (number == '0'){
    answer.style.fontSize = "80px"
    number = '4';
    answer.innerHTML = number;
    console.log("zero!")
    return;
  }
  else if (number.length > 6){
    answer.style.fontSize = "60px"
    number = number + '4';
    answer.innerHTML = number;
    expression = expression + "4"
    return;
  }
  else if (((expression.indexOf("a")) != -1) || (((expression.indexOf("s")) != -1) || (((expression.indexOf("d")) != -1)|| (((expression.indexOf("m")) != -1))))) {
    if (number.length > 6){
      answer.style.fontSize = "60px"
    } else {
      answer.style.fontSize = "80px"
    }

    expression = expression + '4';
    //number = '';
    //console.log(number)
    if ((number == '') || (expression.slice(-1) != 'a')) {
      number = number + '4';
      answer.innerHTML = number
      console.log(number)
      console.log(123)
    }
    answer.innerHTML = number;
    console.log(expression)
    return;
  }
  else if (number == '0') {
    answer.style.fontSize = "80px"
    number = '4';
    answer.innerHTML = number;
    return;
  }
  else if (number.length <= 6) {
    answer.style.fontSize = "80px"
    number = number + '4';
    answer.innerHTML = number;
    return;
  }
})

five.addEventListener("click", function() {
  if ((number == "Error")||(number == "Overflow")) {
    return;
  }
  else if (number.length > 8) {
    if (tempNum == true) {
      answer.style.fontSize = "80px"
      number = '5';
      answer.innerHTML = number;
      console.log("tempnum is" + answer.innerHTML)
      expression = expression + "5"
      tempNum = false
    }
    console.log("Err1")
    return;
  }
  else if (tempNum == true) {
    answer.style.fontSize = "80px"
    number = '5';
    answer.innerHTML = number;
    console.log("tempnum is" + answer.innerHTML)
    expression = expression + "5"
    tempNum = false
  }
  else if (number == '0'){
    answer.style.fontSize = "80px"
    number = '5';
    answer.innerHTML = number;
    console.log("zero!")
    return;
  }
  else if (number.length > 6){
    answer.style.fontSize = "60px"
    number = number + '5';
    answer.innerHTML = number;
    expression = expression + "5"
    return;
  }
  else if (((expression.indexOf("a")) != -1) || (((expression.indexOf("s")) != -1) || (((expression.indexOf("d")) != -1)|| (((expression.indexOf("m")) != -1))))) {
    if (number.length > 6){
      answer.style.fontSize = "60px"
    } else {
      answer.style.fontSize = "80px"
    }

    expression = expression + '5';
    //number = '';
    //console.log(number)
    if ((number == '') || (expression.slice(-1) != 'a')) {
      number = number + '5';
      answer.innerHTML = number
      console.log(number)
      console.log(123)
    }
    answer.innerHTML = number;
    console.log(expression)
    return;
  }
  else if (number == '0') {
    answer.style.fontSize = "80px"
    number = '5';
    answer.innerHTML = number;
    return;
  }
  else if (number.length <= 6) {
    answer.style.fontSize = "80px"
    number = number + '5';
    answer.innerHTML = number;
    return;
  }
})

six.addEventListener("click", function() {
  if ((number == "Error")||(number == "Overflow")) {
    return;
  }
  else if (number.length > 8) {
    if (tempNum == true) {
      answer.style.fontSize = "80px"
      number = '1';
      answer.innerHTML = number;
      console.log("tempnum is" + answer.innerHTML)
      expression = expression + "6"
      tempNum = false
    }
    console.log("Err1")
    return;
  }
  else if (tempNum == true) {
    answer.style.fontSize = "80px"
    number = '6';
    answer.innerHTML = number;
    console.log("tempnum is" + answer.innerHTML)
    expression = expression + "6"
    tempNum = false
  }
  else if (number == '0'){
    answer.style.fontSize = "80px"
    number = '6';
    answer.innerHTML = number;
    console.log("zero!")
    return;
  }
  else if (number.length > 6){
    answer.style.fontSize = "60px"
    number = number + '6';
    answer.innerHTML = number;
    expression = expression + "6"
    return;
  }
  else if (((expression.indexOf("a")) != -1) || (((expression.indexOf("s")) != -1) || (((expression.indexOf("d")) != -1)|| (((expression.indexOf("m")) != -1))))) {
    if (number.length > 6){
      answer.style.fontSize = "60px"
    } else {
      answer.style.fontSize = "80px"
    }

    expression = expression + '6';
    //number = '';
    //console.log(number)
    if ((number == '') || (expression.slice(-1) != 'a')) {
      number = number + '6';
      answer.innerHTML = number
      console.log(number)
      console.log(123)
    }
    answer.innerHTML = number;
    console.log(expression)
    return;
  }
  else if (number == '0') {
    answer.style.fontSize = "80px"
    number = '6';
    answer.innerHTML = number;
    return;
  }
  else if (number.length <= 6) {
    answer.style.fontSize = "80px"
    number = number + '6';
    answer.innerHTML = number;
    return;
  }
})

seven.addEventListener("click", function() {
  if ((number == "Error")||(number == "Overflow")) {
    return;
  }
  else if (number.length > 8) {
    if (tempNum == true) {
      answer.style.fontSize = "80px"
      number = '7';
      answer.innerHTML = number;
      console.log("tempnum is" + answer.innerHTML)
      expression = expression + "7"
      tempNum = false
    }
    console.log("Err1")
    return;
  }
  else if (tempNum == true) {
    answer.style.fontSize = "80px"
    number = '7';
    answer.innerHTML = number;
    console.log("tempnum is" + answer.innerHTML)
    expression = expression + "7"
    tempNum = false
  }
  else if (number == '0'){
    answer.style.fontSize = "80px"
    number = '7';
    answer.innerHTML = number;
    console.log("zero!")
    return;
  }
  else if (number.length > 6){
    answer.style.fontSize = "60px"
    number = number + '7';
    answer.innerHTML = number;
    expression = expression + "7"
    return;
  }
  else if (((expression.indexOf("a")) != -1) || (((expression.indexOf("s")) != -1) || (((expression.indexOf("d")) != -1)|| (((expression.indexOf("m")) != -1))))) {
    if (number.length > 6){
      answer.style.fontSize = "60px"
    } else {
      answer.style.fontSize = "80px"
    }

    expression = expression + '7';
    //number = '';
    //console.log(number)
    if ((number == '') || (expression.slice(-1) != 'a')) {
      number = number + '7';
      answer.innerHTML = number
      console.log(number)
      console.log(123)
    }
    answer.innerHTML = number;
    console.log(expression)
    return;
  }
  else if (number == '0') {
    answer.style.fontSize = "80px"
    number = '7';
    answer.innerHTML = number;
    return;
  }
  else if (number.length <= 6) {
    answer.style.fontSize = "80px"
    number = number + '7';
    answer.innerHTML = number;
    return;
  }
})

eight.addEventListener("click", function() {
  if ((number == "Error")||(number == "Overflow")) {
    return;
  }
  else if (number.length > 8) {
    if (tempNum == true) {
      answer.style.fontSize = "80px"
      number = '8';
      answer.innerHTML = number;
      console.log("tempnum is" + answer.innerHTML)
      expression = expression + "8"
      tempNum = false
    }
    console.log("Err1")
    return;
  }
  else if (tempNum == true) {
    answer.style.fontSize = "80px"
    number = '8';
    answer.innerHTML = number;
    console.log("tempnum is" + answer.innerHTML)
    expression = expression + "8"
    tempNum = false
  }
  else if (number == '0'){
    answer.style.fontSize = "80px"
    number = '8';
    answer.innerHTML = number;
    console.log("zero!")
    return;
  }
  else if (number.length > 6){
    answer.style.fontSize = "60px"
    number = number + '8';
    answer.innerHTML = number;
    expression = expression + "8"
    return;
  }
  else if (((expression.indexOf("a")) != -1) || (((expression.indexOf("s")) != -1) || (((expression.indexOf("d")) != -1)|| (((expression.indexOf("m")) != -1))))) {
    if (number.length > 6){
      answer.style.fontSize = "60px"
    } else {
      answer.style.fontSize = "80px"
    }

    expression = expression + '8';
    //number = '';
    //console.log(number)
    if ((number == '') || (expression.slice(-1) != 'a')) {
      number = number + '8';
      answer.innerHTML = number
      console.log(number)
      console.log(123)
    }
    answer.innerHTML = number;
    console.log(expression)
    return;
  }
  else if (number == '0') {
    answer.style.fontSize = "80px"
    number = '8';
    answer.innerHTML = number;
    return;
  }
  else if (number.length <= 6) {
    answer.style.fontSize = "80px"
    number = number + '8';
    answer.innerHTML = number;
    return;
  }
})

nine.addEventListener("click", function() {
  if ((number == "Error")||(number == "Overflow")) {
    return;
  }
  else if (number.length > 8) {
    if (tempNum == true) {
      answer.style.fontSize = "80px"
      number = '9';
      answer.innerHTML = number;
      console.log("tempnum is" + answer.innerHTML)
      expression = expression + "9"
      tempNum = false
    }
    console.log("Err1")
    return;
  }
  else if (tempNum == true) {
    answer.style.fontSize = "80px"
    number = '9';
    answer.innerHTML = number;
    console.log("tempnum is" + answer.innerHTML)
    expression = expression + "9"
    tempNum = false
  }
  else if (number == '0'){
    answer.style.fontSize = "80px"
    number = '9';
    answer.innerHTML = number;
    console.log("zero!")
    return;
  }
  else if (number.length > 6){
    answer.style.fontSize = "60px"
    number = number + '9';
    answer.innerHTML = number;
    expression = expression + "9"
    return;
  }
  else if (((expression.indexOf("a")) != -1) || (((expression.indexOf("s")) != -1) || (((expression.indexOf("d")) != -1)|| (((expression.indexOf("m")) != -1))))) {
    if (number.length > 6){
      answer.style.fontSize = "60px"
    } else {
      answer.style.fontSize = "80px"
    }

    expression = expression + '9';
    //number = '';
    //console.log(number)
    if ((number == '') || (expression.slice(-1) != 'a')) {
      number = number + '9';
      answer.innerHTML = number
      console.log(number)
      console.log(123)
    }
    answer.innerHTML = number;
    console.log(expression)
    return;
  }
  else if (number == '0') {
    answer.style.fontSize = "80px"
    number = '9';
    answer.innerHTML = number;
    return;
  }
  else if (number.length <= 6) {
    answer.style.fontSize = "80px"
    number = number + '9';
    answer.innerHTML = number;
    return;
  }
})

point.addEventListener("click", function() {
  if ((number == "Error")||(number == "Overflow")) {
    return;
  }
  if ((number.length > 8)||(number.includes('.'))) {
    return;
  }
  if (number.length > 6){
    answer.style.fontSize = "60px"
    number = number + '.';
    answer.innerHTML = number;
    expression = expression + "."
    return;
  }
  if (number == '0') {
    answer.style.fontSize = "80px"
    number = '0.';
    answer.innerHTML = number;
    expression = expression + "."
    return;
  }
  else {
    answer.style.fontSize = "80px"
    number = number + '.';
    answer.innerHTML = number;
    expression = expression + "."
    return;
  }
})

neg.addEventListener("click", function() {
  if (number == "0") {
    return;
  }
  if ((expression.indexOf('a') != -1)||(expression.indexOf('s') != -1)||(expression.indexOf('d') != -1)||(expression.indexOf('m') != -1)){
    console.log('hi')
    let x2 = expression.split("").reverse().join("")
    console.log(x2)
    let lenA= expression.length - x2.indexOf("a")
    let lenS= expression.length - x2.indexOf("s")
    let lenD= expression.length - x2.indexOf("d")
    let lenM= expression.length - x2.indexOf("m")
    let max = Math.max(lenA,lenS,lenD,lenM)
    expression = expression.slice(0, max) + "-" + expression.slice(max);
    console.log(expression)
  }
  if ((number == "Error")||(number == "Overflow")) {
    return;
  }
  if ((number.length > 8) && (number[0] == "-")){
    answer.style.fontSize = "60px"
    number = number.slice(1)
    answer.innerHTML = number;
    return;
  }
  if ((number.length > 8) && (number[0] != "-")){
    answer.style.fontSize = "60px"
    number = '-' + number;
    answer.innerHTML = number;
    return;
  }
  if (number.length > 8){
    return;
  }
  if ((number.length > 6) && (number[0] != "-")){
    answer.style.fontSize = "60px"
    number = '-' + number;
    answer.innerHTML = number;
    return;
  }
  if ((number.length > 6) && (number[0] == "-")){
    answer.style.fontSize = "60px"
    number = number.slice(1)
    answer.innerHTML = number;
    return;
  }
  else if (number[0] != "-") {
    number = '-' + number;
    answer.innerHTML = number;
    return;
  }
  else if (number[0] == "-"){
    number = number.slice(1)
    answer.innerHTML = number;
  }
})

lZero.addEventListener("click", function() {
  if ((number == "Error")||(number == "Overflow")) {
    return;
  }
  if (number.length > 8) {
    return;
  }
  if (number == '0') {
    answer.style.fontSize = "80px"
    number = '0';
    answer.innerHTML = number;
    return;
  }
  if (number.length > 6){
    answer.style.fontSize = "60px"
    number = number + '0';
    answer.innerHTML = number;
    expression = expression + "0"
    return;
  }
  if (((expression.indexOf("a")) != -1) || ((expression.indexOf("s")) || ((expression.indexOf("d"))|| ((expression.indexOf("m")))))) {
    if (number.length > 6){
      answer.style.fontSize = "60px"
    } else {
      answer.style.fontSize = "80px"
    }

    expression = expression + '0';
    //number = '';
    console.log(number)
    if ((number == '') || (expression.slice(-1) != 'a')) {
      number = number + '0';
      answer.innerHTML = number
      console.log(number)
      console.log(123)
    }
    answer.innerHTML = number;
    console.log(expression)
    return;
  }
  if (number == '0') {
    answer.style.fontSize = "80px"
    number = '0';
    answer.innerHTML = number;
    return;
  }
  if (number.length <= 6) {
    answer.style.fontSize = "80px"
    number = number + '0';
    answer.innerHTML = number;
    return;
  }
})

cZero.addEventListener("click", function() {
  if ((number == "Error")||(number == "Overflow")) {
    return;
  }
  if (number.length > 8) {
    return;
  }
  if (number == '0') {
    answer.style.fontSize = "80px"
    number = '0';
    answer.innerHTML = number;
    return;
  }
  if (number.length > 6){
    answer.style.fontSize = "60px"
    number = number + '0';
    answer.innerHTML = number;
    expression = expression + "0"
    return;
  }
  if (((expression.indexOf("a")) != -1) || ((expression.indexOf("s")) || ((expression.indexOf("d"))|| ((expression.indexOf("m")))))) {
    if (number.length > 6){
      answer.style.fontSize = "60px"
    } else {
      answer.style.fontSize = "80px"
    }

    expression = expression + '0';
    //number = '';
    console.log(number)
    if ((number == '') || (expression.slice(-1) != 'a')) {
      number = number + '0';
      answer.innerHTML = number
      console.log(number)
      console.log(123)
    }
    answer.innerHTML = number;
    console.log(expression)
    return;
  }
  if (number == '0') {
    answer.style.fontSize = "80px"
    number = '0';
    answer.innerHTML = number;
    return;
  }
  if (number.length <= 6) {
    answer.style.fontSize = "80px"
    number = number + '0';
    answer.innerHTML = number;
    return;
  }
})

rZero.addEventListener("click", function() {
  if ((number == "Error")||(number == "Overflow")) {
    return;
  }
  if (number.length > 8) {
    return;
  }
  if (number == '0') {
    answer.style.fontSize = "80px"
    number = '0';
    answer.innerHTML = number;
    return;
  }
  if (number.length > 6){
    answer.style.fontSize = "60px"
    number = number + '0';
    answer.innerHTML = number;
    expression = expression + "0"
    return;
  }
  if (((expression.indexOf("a")) != -1) || ((expression.indexOf("s")) || ((expression.indexOf("d"))|| ((expression.indexOf("m")))))) {
    if (number.length > 6){
      answer.style.fontSize = "60px"
    } else {
      answer.style.fontSize = "80px"
    }

    expression = expression + '0';
    //number = '';
    console.log(number)
    if ((number == '') || (expression.slice(-1) != 'a')) {
      number = number + '0';
      answer.innerHTML = number
      console.log(number)
      console.log(123)
    }
    answer.innerHTML = number;
    console.log(expression)
    return;
  }
  if (number == '0') {
    answer.style.fontSize = "80px"
    number = '0';
    answer.innerHTML = number;
    return;
  }
  if (number.length <= 6) {
    answer.style.fontSize = "80px"
    number = number + '0';
    answer.innerHTML = number;
    return;
  }
})

percent.addEventListener("click", function() {
  let applyPercent = +number
  applyPercent = applyPercent * (0.0100)
  applyPercent = applyPercent.toString()
  if ((number == "Error")||(number == "Overflow")) {
    return;
  }
  if ((applyPercent.indexOf('e')) != -1) {
    return;
  }
  if (applyPercent.length > 6) {
    answer.style.fontSize = "60px"
    console.log(2)
  }
  if (applyPercent.length > 9) {
    applyPercent = applyPercent.slice(0,9)
    console.log(3)
  }
  console.log(applyPercent)
  number = applyPercent
  answer.innerHTML = number
  expression = expression + applyPercent
})

add.addEventListener("click", function() {
  if ((cleanList(makeList(expression))).length == 3) {
    let updatedAns = calculate()
    number = updatedAns
    expression = updatedAns + 'a'
    console.log(expression)
    return;
  }
  if ((number == "Error")||(number == "Overflow")) {
    return;
  }
  if (expression.slice(-1) == 'a') {
    return;
  }
  if ((expression.slice(-1) == 's')||(expression.slice(-1) == 'd')||(expression.slice(-1) == 'm')){
    expression = expression.slice(0,-1) + "a"
    console.log(expression)
    return;
  }
  if ((expression.indexOf("a") != -1) || (expression.indexOf("s") != -1) || (expression.indexOf("m") != -1) || (expression.indexOf("d") != -1)){
    expression = expression + 'a'
    number = ''
    console.log(expression)
    return;
  }
  expression = number + "a"
  console.log(expression)
  number = ''
  //console.log("Here2")
})

subtract.addEventListener("click", function() {
  if ((cleanList(makeList(expression))).length == 3) {
    let updatedAns = calculate()
    number = updatedAns
    expression = updatedAns + 's'
    console.log(expression)
    return;
  }
  if ((number == "Error")||(number == "Overflow")) {
    return;
  }
  if (expression.slice(-1) == 's') {
    return;
  }
  if ((expression.slice(-1) == 'a')||(expression.slice(-1) == 'd')||(expression.slice(-1) == 'm')){
    expression = expression.slice(0,-1) + "s"
    console.log(expression)
    return;
  }
  if ((expression.indexOf("a") != -1) || (expression.indexOf("s") != -1) || (expression.indexOf("m") != -1) || (expression.indexOf("d") != -1)){
    expression = expression + 's'
    number = ''
    console.log(expression)
    return;
  }
  expression = number + "s"
  console.log(expression)
  number = ''
  //console.log("Here2")
})

multiply.addEventListener("click", function() {
  if ((cleanList(makeList(expression))).length == 3) {
    let updatedAns = calculate()
    number = updatedAns
    expression = updatedAns + 'm'
    console.log(expression)
    return;
  }
  if ((number == "Error")||(number == "Overflow")) {
    return;
  }
  if ((number == "Error")||(number == "Overflow")) {
    return;
  }
  if (expression.slice(-1) == 'm') {
    return;
  }
  if ((expression.slice(-1) == 's')||(expression.slice(-1) == 'd')||(expression.slice(-1) == 'a')){
    expression = expression.slice(0,-1) + "m"
    console.log(expression)
    return;
  }
  if ((expression.indexOf("a") != -1) || (expression.indexOf("s") != -1) || (expression.indexOf("m") != -1) || (expression.indexOf("d") != -1)){
    expression = expression + 'm'
    number = ''
    console.log(expression)
    return;
  }
  expression = number + "m"
  console.log(expression)
  number = ''
  //console.log("Here2")
})

divide.addEventListener("click", function() {
  if ((cleanList(makeList(expression))).length == 3) {
    let updatedAns = calculate()
    number = updatedAns
    expression = updatedAns + 'd'
    console.log(expression)
    return;
  }
  if ((number == "Error")||(number == "Overflow")) {
    return;
  }
  if (expression.slice(-1) == 'd') {
    return;
  }
  if ((number == "Error")||(number == "Overflow")) {
    return;
  }
  if ((expression.slice(-1) == 's')||(expression.slice(-1) == 'a')||(expression.slice(-1) == 'm')){
    expression = expression.slice(0,-1) + "d"
    console.log(expression)
    return;
  }
  if ((expression.indexOf("a") != -1) || (expression.indexOf("s") != -1) || (expression.indexOf("m") != -1) || (expression.indexOf("d") != -1)){
    expression = expression + 'd'
    number = ''
    console.log(expression)
    return;
  }
  expression = number + "d"
  console.log(expression)
  number = ''
  //console.log("Here2")
})



function makeNeg(x){
  let counter = 0
  for (let i in x) {
      if (x[i] == "-") {
          counter = counter + 1
      }
  }
  if (counter % 2 == 0) {
      let ans = x.replaceAll("-", "");
      return ans
  }
  else if (counter % 2 == 1) {
      let ans = x.replaceAll("-", "");
      ans = "-" + ans
      return ans
  }
}

function removePoint(y) {
    
  if ((y.indexOf(".")) == -1){
      return y
  }
  if (countChar(y, ".") == 1) {
      return y
  }
  let numPoints = countChar(y, ".")
  let yCopy = y
  while (numPoints != 1) {
      yCopy = yCopy.slice((yCopy.indexOf(".")) + 1)
      numPoints = numPoints - 1
  }
  return yCopy
    
}

function countChar(str, char) {

  let count = 0;
  for(var i = 0; i < str.length; i++){
    if(str.charAt(i) === char)
      count++;
  }
 return count;
}

function makeList(lis) {
  let listEl = ""
  let listA = []
  for (i in lis) {
      if ((lis[i] == 'a') || (lis[i] == 's') ||(lis[i] == 'd') || (lis[i] == 'm')){
          console.log(listEl)
          listA.push(listEl)
          listEl = ""
          listA.push(lis[i])
      } else {
          listEl = listEl + lis[i]
      }
  }
  let rev = lis.split("").reverse().join("");
  let indexA = lis.indexOf("a")
  let indexS = lis.indexOf("s")
  let indexD = lis.indexOf("d")
  let indexM = lis.indexOf("m")
  let max = Math.max(indexA,indexS,indexD,indexM)
  let length = lis.length
  listA.push(lis.slice(max +1))
  return listA
}

function cleanList(y) {
  let cleanedList = []
  for (i in y) {
      if ((y[i] == "a")||(y[i] == "s")||(y[i] == "d")||(y[i] == "m")) {
          cleanedList.push(y[i])
      } else {
          let update1 = makeNeg(y[i])
          let update2 = removePoint(update1)
          cleanedList.push(update2)
      }
  }
  return cleanedList
}

function roundToNine(x) {
  if (x.length >= 9) {
      answer.style.fontSize = "60px"
      return x.substring(0,9)
  } else if (x.length == 8) {
    answer.style.fontSize = "60px"
  }
  return x
}

function calcExpr(ex){
  let first = ex[0]
  let second = ex[2]
  let expr = ex[1]
  //console.log(first)
  //console.log(second)
  //console.log(expr)
  if (expr == "a") {
      return (Number(first)) + (Number(second))
  }
  else if (expr == "s") {
      return (Number(first)) - (Number(second))
  }
  else if (expr == "m") {
      return (Number(first)) * (Number(second))
  }
  else if ((expr == "d") && ((Number(second)) == 0)) {
      return "Error"
  }
  else if (expr == "d") {
      return (Number(first)) / (Number(second))
  }
}

listex = "-214124.45679------a214s0.000098a1111111111.110011.1110990.11111090.00111110.0000111m4"
console.log(cleanList(makeList(listex)))

function calculate(){
  if ((countChar(expression, "a") == 0) && (countChar(expression, "s") == 0) && (countChar(expression, "d") == 0) && (countChar(expression, "m") == 0)){
    return;
  }
  if (((expression.slice(-1)) == "a")||((expression.slice(-1)) == "s")||((expression.slice(-1)) == "d")||((expression.slice(-1)) == "m")) {
    return;
  }
  console.log(expression)
  let ans = (calcExpr(cleanList(makeList(expression))))
  if ((ans > 999999999) || (ans < -999999999)){
    number = "Overflow"
    answer.innerHTML = "Overflow"
    expression = "Overflow"
    return;
  }
  let strAns = ans.toString()
  console.log(strAns)
  let strAnsNine = (roundToNine(strAns))
  number = strAnsNine
  tempNum = true
  answer.innerHTML = strAnsNine
  expression = strAnsNine
  return strAnsNine
}

equals.addEventListener('click', calculate)
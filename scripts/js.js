//document.querySelector('like-button').click()
//function clickOnMe() {
//	alert('Работает кнопачка')
//}
//

localStorage.setItem('Count', "");
let i = 0;

function buyButton(element) {
	i++;
	localStorage.setItem('Count', JSON.stringify(i));
	element.innerHTML = "В корзине " + localStorage.getItem('Count') + " шт.";
}

console.log(typeof 'Count');




//
//let name;
//let age = prompt('How old are you?');
//if (age <= 18) {
//	alert('Go home')
//} else {
//	name = prompt('Как тебя зовут?');
//	alert('Welcome, ' + name);
//}
/* при загрузке боди работает, остальное попробовать */
//onload="alert('Получилось?')"

//let counter = 3;
//
//function counterF(element) {
//	counter++;
//	element.innerHTML = "Наш адрес: Платформа " + counter + " и 1&#92;4 :";
//}

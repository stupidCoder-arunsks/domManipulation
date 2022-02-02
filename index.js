// console.log(document);
// console.log(document.all);
// console.log(document.doctype)
// console.log(document.all[9]);
// document.all[9].innerHTML = '<h6>js pro</h6>';

// << Getting element by id >>

// var mainHeader = document.getElementById('main-header');
// console.log(mainHeader);
// mainHeader.textContent = 'js for begin';
// mainHeader.innerText = 'js to begin';
// console.log(mainHeader.textContent);
// console.log(mainHeader.innerText);
// mainHeader.innerHTML = '<h2> < js for beginners > </h2>';
// console.log(mainHeader);
// mainHeader.style.borderBottom = 'solid 3px #000';

// var item1 = document.getElementById('item-header');
// item1.style.color = 'green';
// item1.style.fontSize = 'bold';

// << GET ELEMENT BY CLASSNAME >>


var items = document.getElementsByClassName('item');
console.log(items);

// items[1].textContent = 'hello';
// items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'green';

// items.style.backgroundColor = 'yellow';

for(var i=0;i < items.length;i++){
    items[i].style.fontWeight = 'bold';
}


// items[1].style.backgroundColor = 'red';
// console.log(item[1]);


// << Getting element by the tag name >>

// var li = document.getElementsByTagName('li');
// console.log(li);

// li[1].textContent = 'hello';
// li[1].style.fontWeight = 'bold';

// for(var i=0;i < li.length;i++){
//     li[i].style.backgroundColor = 'red';
// }

// <<  QUERY SELECTOR >>

// var firstItem = document.querySelector('.item')
// console.log(firstItem);
// firstItem.textContent = 'item one';

// var lastItem = document.querySelector('.item:last-child');
// lastItem.textContent = 'last one';

// var secondItem = document.querySelector('.item:nth-child(2)');
// secondItem.textContent = 'second one';

// var input = document.querySelector('input');
// input.value = 'arunsks';

// var submit = document.querySelector("input[type='submit']");
// submit.value = "Don't submit";

// << QUERY SELECTOR ALL >>

//  var h1 = document.querySelectorAll('h1');
//  console.log(h1);
//  h1[0].textContent = 'js for beginners';

//  var li = document.querySelectorAll('li');
//  console.log(li);

//  var odd = document.querySelectorAll('li:nth-child(odd)');
//  var even = document.querySelectorAll('li:nth-child(even'); 

//  for(var i=0;i < odd.length;i++){
//      odd[i].style.backgroundColor = 'red';
//      even[i].style.backgroundColor = 'yellow';
//  }
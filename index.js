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


// var items = document.getElementsByClassName('itemTwo');
// console.log(items);
// items[0].style.backgroundColor = 'red';
// items[0].style.backgroundColor = 'red';
// btn.value = 'submit all';

// item[0].getElementsByClassName.backgroundColor = 'red';

// items[1].textContent = 'hello';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'green';

// items.style.backgroundColor = 'yellow';

// for(var i=0;i < items.length;i++){
//     items[i].style.fontWeight = 'bold';
// }


// items[1].style.backgroundColor = 'red';
// console.log(item[1]);


// << Getting element by the tag name >>

// var liWithClassName = document.getElementsByClassName('itemTwo');
// console.log(liWithClassName);
// liWithClassName.style.backgroundColor = 'red';

// liWithClassName.style.backgroundColor = 'red';
// liWithClassName.style.backgroundColor = 'red';
// liWithClassName.

// var liWithTagName = document.getElementsByTagName('li');
// console.log(liWithTagName);
// liWithTagName[4].style.backgroundColor = 'yellow';

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
// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.item:nth-child(3)');
// thirdItem.style.display = 'none';

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
// //  var even = document.querySelectorAll('li:nth-child(even'); 

//  for(var i=0;i < odd.length;i++){
//      odd[i].style.backgroundColor = 'green';
     
//  }


// var itemList = document.querySelector('#items'); 

// // parent node and parent element
// console.log(itemList.parentElement);
// console.log(itemList.parentNode);

// // child node and children element

// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'hello 4';
// itemList.firstElementChild.textContent = 'hello 1';

// children

// console.log(itemList.children);
// itemList.children[1].style.color = 'red';

// // next siblings
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// // previous siblings
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);

// create div

// var newDiv = document.createElement('div');

// newDiv.className = 'hello 1';

// newDiv.id = 'hello 2';

// newDiv.setAttribute('title' , 'hello div');

// var newTextNode = document.createTextNode('hello world!');

// newDiv.appendChild(newTextNode);

// console.log(newDiv);

// adding before main header

// var container = document.querySelector('header .container');
// console.log(container);

// var h1 = document.querySelector('header h1');
// console.log(h1);

// container.insertBefore(newDiv , h1);

// adding before add item

// var itemHeader = document.querySelector('#item-header');
// console.log(itemHeader);

// var itemHeaderParent = itemHeader.parentElement;
// console.log(itemHeaderParent);

// itemHeaderParent.insertBefore(newDiv,itemHeader);

// localStorage.setItem('name' , 'arunsks' + 'email' , 'eamil@com');
// localStorage.setItem('email' , 'email@email.com');
// localStorage.removeItem('name');

// // Adding data to localstorage task 10

// var form = document.getElementById('my-form');

// form.addEventListener('submit' , addLocalStorage);

// function addLocalStorage(e){

//     e.preventDefault();
  
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;

//     console.log(name , email);


//     // Adding data to local storage in the form of obj

// let myObj = {
//     'name': name,
//     'email': email
// };

// // console.log(myObj);

// let myObj_serialiazable = JSON.stringify(myObj);

// localStorage.setItem(email , myObj_serialiazable);
// // console.log(localStorage.getItem('myObj'));

// let myObj_deSerializable = JSON.parse(localStorage.getItem(email));
// console.log(myObj_deSerializable);

// var user = document.getElementById('user-name');
// var email = document.getElementById('user-email');

// user.textContent = myObj_deSerializable.name;
// email.textContent = myObj_deSerializable.email;

// var label = document.createElement('label');
// label.className = user;
// console.log(label);
 


// }

// for(let i=0;i < localStorage.length;i++){
//     console.log(localStorage.getItem(localStorage.key(i)[0]));
// }

// );

// TASK 12

var submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click' , showRegisteredUser);

function showRegisteredUser(event){
    event.preventDefault();
    
    console.log(event);

}





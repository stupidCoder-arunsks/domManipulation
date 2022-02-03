console.log("hello world !");

// Getting the form id to access the value
var form = document.getElementById('addForm');

// Getting the item id to add an item
var itemList = document.getElementById('items');

// Getting filter id to get an input
var filter = document.getElementById('filter');

// adding event listner to form to listen whether the submit is click
form.addEventListener('submit' , addItem);

//listening to items in the list
itemList.addEventListener('click' , removeItem);

//listening to filter event
filter.addEventListener('keyup' , filterItem);

function filterItem(e){
  
    //converting text to lower case
    var text = e.target.value.toLowerCase();

    // getting all the tag element of li
    var items = document.getElementsByTagName('li');
   
    // converting to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
           item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });

}

function removeItem(e){
  if(e.target.classList.contains('delete')){
     if(confirm('Are u sure ?')){
         var li = e.target.parentElement;
         itemList.removeChild(li);
     }
  }
}



function addItem(e){
  e.preventDefault();
  
  // Getting input from user to add an item
  var input = document.getElementById('item').value;
  
  console.log(input);

  // creating the li
  var li = document.createElement('li');

  // adding the class name to li
  li.className = 'list-group-item';

  // adding child to the li with the input 
  li.appendChild(document.createTextNode(input));


  // creating the button
  var delBtn = document.createElement('button');
   
  //Adding classes to btn
  delBtn.className = 'btn btn-danger btn-sm float-right delete';

  // add text node to delBtn
  delBtn.appendChild(document.createTextNode(' X'));


//   console.log(delBtn);

  // append child to deleteBtn
  li.appendChild(delBtn);

  // <<<<<<<<<<<< edit button >>>>>>>>

//   var editBtn = document.createElement('button');

//   editBtn.className = 'edit button';

//   editBtn.appendChild(document.createTextNode(' edit '));

//   li.appendChild(editBtn);

  // <<<<<<<< adding description to an item >>>>>>>.

  var input = document.getElementById('description').value;

  input.className = 'description';

  console.log(input);

  li.appendChild(document.createTextNode(input));

  console.log("<< li >> " + li);

 // append li to itemlist
  itemList.appendChild(li);

}




// // Filter Items
// function filterItems(e){
//   // convert text to lowercase
//   var text = e.target.value.toLowerCase();
//   // Get lis
//   var items = itemList.getElementsByTagName('li');
//   // Convert to an array
//   Array.from(items).forEach(function(item){
//     var itemName = item.firstChild.textContent;
//     if(itemName.toLowerCase().indexOf(text) != -1){
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   });
// }

// document.getElementById('firstHeading')
// <h1 id="firtHeading" class="firstHeading mw-first-heading">
// </h1>
// document.getElementById('firstHeading').innerHTML = "<h1> chai aur code </h1>"

// lets first go with elementwithid
document.getElementById('title')                   // by appying dot we can access different elements of it

ex- document.getElementById('title').className
ex- document.getElementById('title').title
ex- document.getElementById('title').getAttribute('title')    // another way to get access 
ex- document.getElementById('title').setAttribute('class', 'test')    // always overwrite the orignal one


// store all values of inside title to a variable
const yo = document.getElementById('title')

// now we can do anything with this yo
yo.style.backgroundColor = 'green'
yo.style.padding = "15px"
yo.style.borderRadius = "15px"




// how to excrete value from the document

title.innerText       // gives only which is visible, this span thing will not be visible in this
title.textContent     // gives that also which is hidden like <span style disply = 'none'>  ye bhi dikhega </span>
title.innerHTML       // ye sab dikhayega, even the span command also be show




// another mp method to select things is quarySelector
document.querySelector('h1')                // gives access to first h1
document.querySelector('#title')            // to target id
document.querySelector('.heading')         // to target class(so give class name)
document.querySelector('input[type = "password"]')       // if input was present we can the access of that also

document.querySelector('ul')           // can select the whole unordered list

const myul = document.querySelector('ul')     // can be stored in variable 
const turngreen = myul.querySelector('li')          // further can be also used to access one by one every list

turngreen.style.backgroundColor = "green"
turngreen.style.padding = '15px'
turngreen.style.innerText = "five"                  // can be changed also like this




// now when u want the access of the elements together use querySelectorALL
document.querySelectorAll('li')  // this results in NodeList
//  *****Nodelist is not a array*****

const tempList = document.querySelectorAll('li') 


tempList[0].style.color = 'green'

tempList.forEach(function (l) {
    l.style.backgroundColor = 'green'
})



// same access by class
document.getElementsByClassName ('list-item')            // returns HTMLcollection  similar to array but not array
const tempClassList = document.getElementsByClassName('list-item')
// .item. returns somethong like array but forEach is not applicable
// so we have to convert this into array

Array.from(tempClassList)
const myConvertedArray = Array.from(tempClassList)
 // now all methods of array are applicable
 myConvertedArray.forEach(function(li) {
    li.style.color = 'orange'
 })
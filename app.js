let books = [
 {author: 'Thomas Pynchon', title: 'Bleeding Edge'},
 {author: 'Haruki Murakami', title: '1Q84'},
 {author: 'Chetan Bhagat', title: 'One Indian Girl'},
 {author: 'Ncholas', title: 'Understanding ecmscript 6'},
 {author: 'Balagorswamai', title: 'ObjectOriented Programming'},
 {author: 'Ravinder Kumar', title: 'Can Love Happen Twice'},
 {author: 'Chetan Bhagat', title: 'Five Point someone'},
 {author: 'Chetan Bhagat', title: 'Half Girlfriend'}
]
// ==========================User====================================
let user =[ 
{name:'Reena', mail: 'sharmareena551@gmail.com', cardNo: 1, issuebook:0},
{name:'Rohit', mail: 'rohit76@gmail.com', cardNo: 2, issuebook:0},
{name:'Rishu', mail: 'rishu55@gmail.com', cardNo: 3, issuebook:0},
]

// =========================IssuedBook========================
let issueBook =[
  {author: 'Balagorswamai', title: 'ObjectOriented Programming', cardNo: 1},
 {author: 'Ravinder Kumar', title: 'Can Love Happen Twice', cardNo: 2},
 {author: 'Chetan Bhagat', title: 'Five Point someone' ,cardNo: 3},
 {author: 'Chetan Bhagat', title: 'Half Girlfriend' ,cardNo: 4}
]

// To show only welcome message on page load
  function homeload(){
    document.getElementById("home").style.display = "block";//show welcome message
    document.getElementById("books").style.display = "none";//hide books details
    document.getElementById("Adduser").style.display = "none";//hide users details
    document.getElementById("users-records").style.display = "none";//hide users records
    document.getElementById("issuebooks").style.display = "none";//hide issue form
  }

  // To show books details when user click on BOOKS button
  function booksfunction(){
    document.getElementById("home").style.display = "none";//hide welcome message
    document.getElementById("books").style.display = "block";//show books details
    document.getElementById("users").style.display = "none";//hide users details
    document.getElementById("users-records").style.display = "none";//hide users records
    document.getElementById("issuebooks").style.display = "none";//hide issue form
  }

  //To show users details when click on USERS button
  function Addusers(){
    document.getElementById("home").style.display = "none";//hide welcome message
    document.getElementById("books").style.display = "none";//hide books details
    document.getElementById("users").style.display = "block";//show users details
    document.getElementById("users-records").style.display = "none";//hide users records
    document.getElementById("issuebooks").style.display = "none";//hide issue form
  }
  function userrecords(){
    document.getElementById("users-records").style.display = "block";//hide users records
    document.getElementById("home").style.display = "none";//hide welcome message
    document.getElementById("books").style.display = "none";//hide books details
    document.getElementById("users").style.display = "none";//hide users details
    document.getElementById("issuebooks").style.display = "none";//hide issue form
  }
  function issue(){
    document.getElementById("issuebooks").style.display = "block";//show issue form
    document.getElementById("users-records").style.display = "none";//hide users records
    document.getElementById("home").style.display = "none";//hide welcome message
    document.getElementById("books").style.display = "none";//hide books details
    document.getElementById("users").style.display = "none";//hide users details
  }















//Books
function authSearch(){
	let aName = document.getElementById('authorSearch').value
	let name = books.filter((x)=>(x.author.match(aName)))
	if(name.length>0){
        document.getElementById('result').innerHTML='Yes! there is book/s by'+ aName
    for(var i=0;i<name.length;i++){
        let listItem=document.createElement('li')
        let textnode=document.createTextNode(name[i].author)
        listItem.appendChild(textnode)
        document.getElementById('result').appendChild(listItem)
        }
    }
else
    {
        document.getElementById('result').innerHTML='Sorry there is no book/s by '+ aName
    }
	}
  
	function addBook(book){
       books.push({author: document.getElementById('addAuthor').value, title:document.getElementById("addBook").value, genre:document.getElementById("addGenre").value, copies:document.getElementById("addCopies").value});
       document.getElementById("addAuthor").value = "";
       document.getElementById("addBook").value = "";
       document.getElementById("addGenre").value = "";
       document.getElementById("addCopies").value = "";
       alert("New has been added in library.");
	}
	function showAllBooks () {
    for(var i=0;i<books.length;i++){
        let listItem=document.createElement('li')
        let textnode=document.createTextNode(books[i].title)
        listItem.appendChild(textnode)
        document.getElementById('result').appendChild(listItem)
        document.getElementById('allTheBooks').appendChild(listItem)
        }
		
	}

  //users
  function addUser(book){
       user.push({name: document.getElementById('addUser').value, email:document.getElementById("addEmail").value, libcard:document.getElementById("addCard").value});
       document.getElementById("addUser").value = "";
       document.getElementById("addEmail").value = "";
       document.getElementById("addCard").value = "";
       alert("New Library Card has been issued.");
    }

  // users records
  function showAllUsers() {
    for(var i=0;i<user.length;i++){
        let listItem=document.createElement('li')
        let textnode=document.createTextNode(user[i].name)
        listItem.appendChild(textnode)
        document.getElementById('result').appendChild(listItem)
        document.getElementById('allTheUsers').appendChild(listItem)
        }
  }
  function recordSearch(){
  let aCard = document.getElementById('recordSearch').value
  // let card = user.filter((x)=>(x.libcard.match(aCard)))
  for(var i=0;i<user.length;i++)
  {
    if(aCard===user[i].libcard){
        document.getElementById('result-user').innerHTML=user[i].name+' with Library Card No: '+ aCard +' has ' + user[i].issuedbooks +' issued to him/her.'
       }
    else
    {
        document.getElementById('result-user').innerHTML='Sorry there is no user having '+ aCard + ' Library Card No.'
    }
  }
}























  

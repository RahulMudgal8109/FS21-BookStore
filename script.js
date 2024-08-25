let booksSection = document.getElementById("booksSection");
let leftCategories = document.getElementById("leftCategories");
const urlParams = new URL(window.location.href).searchParams;
let signUpBtn=document.getElementById("signUpBtn");
let signUpLink=document.getElementById("signUpLink");
let logoutLink=document.getElementById("logoutLink");
const user = urlParams.get('email');
const username = urlParams.get('name');
console.log(user);
if(user && username)
{
    signUpBtn.innerText=`${username}`
    signUpLink.removeAttribute("href");
    logoutLink.style.display="block";
}
logoutLink.addEventListener('click',()=>{
    document.location.href = "index.html";
}
)

async function fetchBooks() {
    let result = await fetch("https://books-backend.p.goit.global/books/top-books");
    let data = await result.json();
    console.log(data);
    return data;
}
async function fetchBooksCategories() {
    let result = await fetch("https://books-backend.p.goit.global/books/category-list");
    let data = await result.json();
    //console.log(data);
    return data;
}


window.onload = async function onloadFunc() {
    let dta = await fetchBooksCategories();
    //console.log(dta);
    dta.forEach((element) => {
        let li = document.createElement("li");

        li.innerText = `${element["list_name"]}`
        li.classList.add("listHover");
        li.addEventListener('click',()=>{
            document.location.href = `details.html?list_name=${element["list_name"]}&email=${user}&name=${username}`;

        })
        leftCategories.appendChild(li);
    });
    let dta2 = await fetchBooks();
    //console.log(dta2);
    dta2.forEach((element,index) => {
        //console.log(element);
        console.log(element.books.length);
        let div = document.createElement("div");
        let div3 = document.createElement("div");

        let div1 = document.createElement("div");
        div1.innerHTML = `
                    <h4>${element["list_name"]}</h4>`

        div1.classList.add("title");
        div.append(div1);

        for (var i = 0; i < 3; i++) {
            let div2 = document.createElement('div');
            div2.innerHTML = ` 
                        
                            <img src="${element.books[i]["book_image"]}"/>
                            <h5 id="bookName" class="bookName">${element.books[i].title.length>13?element.books[i].title.slice(0,15)+"...":element.books[i].title}</h5>
                            <h6>${element.books[i].author}</h6>`
            div2.classList.add("bookWithImg");
            div3.append(div2)


        }
        let div4=document.createElement("div");
        div4.innerHTML=`<div class="button" id="seeMore">
                            <h6 onclick="document.location.href = 'details.html?index=${index}&email=${user}&name=${username}'">See More</h6>
                        </div>`
                        div4.classList.add("end");
        div3.classList.add("imgSection");
        div.append(div3);
        div.append(div4);

        div.classList.add("book")
        booksSection.append(div);

    });
    
    let seeMore=document.getElementById("seeMore");
   


}




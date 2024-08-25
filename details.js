console.log(window.location.href);
let signUpBtn = document.getElementById("signUpBtn");
let signUpLink = document.getElementById("signUpLink");
const urlParams = new URL(window.location.href).searchParams;
const index = urlParams.get('index');
const user = urlParams.get('email');
const username = urlParams.get('name');
const list_name = urlParams.get('list_name');
console.log(list_name);
console.log(user);
console.log(username);
if (user!="null" && username!="null") {
    signUpBtn.innerText = `${username}`
    signUpLink.removeAttribute("href");
    logoutLink.style.display = "block";
}

logoutLink.addEventListener('click', () => {
    document.location.href = "index.html";
})
console.log(index);

let booksSectionDeatils = document.getElementById("booksSectionDeatils");
let leftCategories = document.getElementById("leftCategories");

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
            //list_name = element.list_name;
            console.log(element.list_name)

        })
        leftCategories.appendChild(li);
    });
    let dta2 = await fetchBooks();
    //console.log(dta2);
    // dta2.forEach((element,index) => {
    //console.log(element);
    // console.log(element.books.length);
    let div = document.createElement("div");
    let div3 = document.createElement("div");
    if (index) {
        // let div1 = document.createElement("div");
        // div1.innerHTML = `
        //             <h1>${dta2[index]["list_name"]}</h1>`

        // div1.classList.add("title");
        // div.append(div1);

        // dta2[index].books.forEach((ele) => {
        //     let div2 = document.createElement('div');
        //     div2.innerHTML = ` 
                        
        //                     <img src="${ele["book_image"]}"/>
        //                     <h5 id="bookName" class="bookName">${ele.title.length > 13 ? ele.title.slice(0, 15) + "..." : ele.title}</h5>
        //                     <h6>${ele.author}</h6>`
        //     div2.classList.add("bookWithImg");
        //     div3.append(div2)

        // })
        renderOnButton(dta2,div,div3)

    }
    if (list_name) {
        // let index = 0;
        // dta2.forEach((e, idx) => {
        //     if (e.list_name === list_name) {
        //         index = idx;
        //         let div1 = document.createElement("div");
        //         div1.innerHTML = `
        //             <h1>${dta2[idx]["list_name"]}</h1>`
        //         div1.classList.add("title");
        //         div.append(div1);
        //         dta2[index].books.forEach((ele) => {
        //             let div2 = document.createElement('div');
        //             div2.innerHTML = ` 
                                    
        //                                 <img src="${ele["book_image"]}"/>
        //                                 <h5 id="bookName" class="bookName">${ele.title.length > 13 ? ele.title.slice(0, 15) + "..." : ele.title}</h5>
        //                                 <h6>${ele.author}</h6>`
        //             div2.classList.add("bookWithImg");
        //             div3.append(div2)

        //         })


        //     }
        // })
        renderOnList(dta2,div,div3)

    }
    function renderOnButton(dta2,div,div3)
    {
        let div1 = document.createElement("div");
        div1.innerHTML = `
                    <h1>${dta2[index]["list_name"]}</h1>`

        div1.classList.add("title");
        div.append(div1);

        dta2[index].books.forEach((ele) => {
            let div2 = document.createElement('div');
            div2.innerHTML = ` 
                        
                            <img src="${ele["book_image"]}"/>
                            <h5 id="bookName" class="bookName">${ele.title.length > 13 ? ele.title.slice(0, 15) + "..." : ele.title}</h5>
                            <h6>${ele.author}</h6>`
            div2.classList.add("bookWithImg");
            div3.append(div2)

        })

    }
    function renderOnList(dta2,div,div3)
    {
        let index = 0;
        dta2.forEach((e, idx) => {
            if (e.list_name === list_name) {
                index = idx;
                let div1 = document.createElement("div");
                div1.innerHTML = `
                    <h1>${dta2[idx]["list_name"]}</h1>`
                div1.classList.add("title");
                div.append(div1);
                dta2[index].books.forEach((ele) => {
                    let div2 = document.createElement('div');
                    div2.innerHTML = ` 
                                    
                                        <img src="${ele["book_image"]}"/>
                                        <h5 id="bookName" class="bookName">${ele.title.length > 13 ? ele.title.slice(0, 15) + "..." : ele.title}</h5>
                                        <h6>${ele.author}</h6>`
                    div2.classList.add("bookWithImg");
                    div3.append(div2)

                })


            }
        })

    }


    // for (var i = 0; i < 3; i++) {



    // }

    div3.classList.add("imgSection");
    div.append(div3);


    div.classList.add("book")
    booksSectionDeatils.append(div);

    // });
    let seeMore = document.getElementById("seeMore");



}




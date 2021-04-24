/* Seccion David */


/*Fin*/
/*Seccion Mario */


// $(document).ready( function(){
//     $(".content-wrapper").load('./views/create-post.html')
//     loadView("index.html", "create-post")
// })

$('.test-button').click(event => {
    event.preventDefault()
    let view = event.target.dataset.viewTarget
    let url = `./views/${view}.html`
    //  $(".test-button").removeClass("active")
    //  $(event.target).closest(".nav-item").addClass("active")
    loadView(url, view)
})

const loadView = (url, view) => {
    $('.content-wrapper').load(url, () => {
        console.log(view)
        switch (view) {
            case "create-post":
                // alert("cargando crear post")

                break



            default:
            // alert("cargando crear post")
        }
    })
}



const printPost = postCollection => {
    $(".post-wrapper").children().remove()
    console.log("imprimiendo post")
    console.log(postCollection)
    //$(".post-wrapper").empty()
    Object.keys(postCollection).forEach(post => {
        let { img, title, tags, date } = postCollection[post]
        let postCard = `
        <a href="post.html?postKey=${post}" class="insidePostLink">
        <div class="col-12 d-flex p-0 pl-md-2 pr-md-2 pb-2">
            <div class="card d-flex w-100">
                <img src="${img}" class="card-img-top" style="max-height: 350px;">
                <div class="card-body">
                
                        <div class="media mb-2">
                            <img src="https://picsum.photos/seed/picsum/200/300" class="mr-2" alt="Generic placeholder image" style="width: 35px; height: 35px; border-radius: 50%;">
                            <div class="media-body">
                                <span style=" font-size: 0.8rem; display: block; margin-bottom: 4px;"><b>Israel Salinas</b></span>
                                <span class="gray-text" style=" font-size: 0.7rem; display: block; margin-bottom: 5px;">${date}</span>
                            </div>
                        </div>
                    
                    <h5 class="card-title pl-5" style="font-size: 1.7rem;"><b>${title}</b></h5>
                    <p class="card-text gray-text pl-5" style="font-size: 0.9rem;">${tags}</p>
                    <div class="col-12 d-flex">
                        
                        <div class="col-4 col-md-8 d-flex align-items-center">
                            <i class="gray-text far fa-heart pl-4"></i><span class="d-none d-md-block pl-2 gray-text" style="font-size: 0.85rem;">25 reactions</span>
                            <i class="gray-text far fa-comment pl-4"></i><span class="d-none d-md-block pl-2 gray-text" style="font-size: 0.85rem;">4 comments</span>
                        </div>
                        <div class="col-8 col-md-4 d-flex justify-content-end align-items-center">
                            <span class="gray-text pr-2" style="font-size: 0.7rem;">4 min read</span>
                            <button class="btn-save">Save</button>
                        </div>
                        
                    </div>
                </div>     
            </div>    
        </div>`

        $(".post-wrapper").prepend(postCard)


    })
}




// const printinsidePost = insidepostCollection => {
//     $(".insidepost-wrapper").children().remove()
//     console.log("imprimiendo post")
//     console.log(insidepostCollection)
//     //$(".insidepost-wrapper").empty()
//     Object.keys(insidepostCollection).forEach(insidepost => {
//         let { img, title, tags, date, content } = insidepostCollection[insidepost]
//         let insidepostCard = `
//         <a href="post.html">
//         <div class="col-12 d-flex p-0 p-md-2">
//             <div class="card d-flex w-100">
//                 <img src="${img}" class="card-img-top" style="max-height: 350px;">
//                 <div class="card-body">
//                     <h5 class="card-title pl-5" style="font-size: 2rem;"><b>${title}</b></h5>
//                     <p class="card-text gray-text pl-5" style="font-size: 0.9rem;"><span class="tag-button bg-danger">#Javascript</span> <span class="tag-button bg-dark">${tags}</span> <span class="tag-button bg-success">#Technology</span> <span class="tag-button bg-warning">#JS</span></p>
//                     <div class="media mb-2">
//                         <img src="https://picsum.photos/seed/picsum/200/300" class="mr-2" alt="Generic placeholder image" style="width: 35px; height: 35px; border-radius: 50%;">
//                         <div class="media-body">
//                             <span style=" font-size: 0.8rem;; margin-bottom: 4px;"><b>Yogini Bende</b></span>
//                             <span class="gray-text" style=" font-size: 0.7rem;  margin-bottom: 5px;">${date}</span>
//                             <p class="mt-5 d-flex text-justify">${content}</p>
//                             <img src="${img}" class="card-img-top" style="max-height: 350px;">

//                             <p class="mt-5 d-flex text-justify">
//                                 Hello folks,

//                                 In my last article, I explained how you can get started with Tailwind and React by creating a simple login form. In that, we started with a bare minimum form structure. In this article, let's work on the same login form and implement responsiveness.

//                                 Before we get started, this was the form which we developed earlier -
//                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ut iusto officia excepturi animi illum suscipit, obcaecati tempore eum similique aliquid inventore perferendis corrupti consectetur autem. Voluptas, beatae? Fugiat vitae adipisci dolorum distinctio rem laborum assumenda modi nesciunt quasi ab odit enim voluptatem amet non nobis officiis, vero, unde velit veniam veritatis quibusdam corrupti doloremque? Praesentium, eius id minima aut voluptate, voluptates tenetur voluptatem possimus fugiat iure mollitia sit quaerat laborum quisquam velit tempora voluptatum dolores unde. Voluptates debitis dolores molestias exercitationem, veritatis assumenda pariatur aut quaerat fugit voluptatum, earum autem perspiciatis nobis quo sit sunt cupiditate, adipisci temporibus ex ab explicabo itaque iste expedita. Voluptatem autem, accusantium voluptas quam beatae temporibus perspiciatis commodi maxime molestias quae nostrum officiis delectus inventore neque sed! Ducimus dicta itaque eaque pariatur adipisci sit odio cumque repellendus iure sed dolore doloremque laudantium facere, modi molestias, hic nemo dignissimos maxime repellat numquam nulla dolores rerum?
//                             </p>
//                             <img src="https://picsum.photos/800/352" class="card-img-top" style="max-height: 350px;">

//                             <p class="mt-5 d-flex text-justify">
//                                 Hello folks,

//                                 In my last article, I explained how you can get started with Tailwind and React by creating a simple login form. In that, we started with a bare minimum form structure. In this article, let's work on the same login form and implement responsiveness.

//                                 Before we get started, this was the form which we developed earlier -
//                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ut iusto officia excepturi animi illum suscipit, obcaecati tempore eum similique aliquid inventore perferendis corrupti consectetur autem. Voluptas, beatae? Fugiat vitae adipisci dolorum distinctio rem laborum assumenda modi nesciunt quasi ab odit enim voluptatem amet non nobis officiis, vero, unde velit veniam veritatis quibusdam corrupti doloremque? Praesentium, eius id minima aut voluptate, voluptates tenetur voluptatem possimus fugiat iure mollitia sit quaerat laborum quisquam velit tempora voluptatum dolores unde. Voluptates debitis dolores molestias exercitationem, veritatis assumenda pariatur aut quaerat fugit voluptatum, earum autem perspiciatis nobis quo sit sunt cupiditate, adipisci temporibus ex ab explicabo itaque iste expedita. Voluptatem autem, accusantium voluptas quam beatae temporibus perspiciatis commodi maxime molestias quae nostrum officiis delectus inventore neque sed! Ducimus dicta itaque eaque pariatur adipisci sit odio cumque repellendus iure sed dolore doloremque laudantium facere, modi molestias, hic nemo dignissimos maxime repellat numquam nulla dolores rerum?
//                             </p>
//                             <img src="https://picsum.photos/800/354" class="card-img-top" style="max-height: 350px;">

//                             // <p class="mt-5 d-flex text-justify">
//                             //     Hello folks,

//                             //     In my last article, I explained how you can get started with Tailwind and React by creating a simple login form. In that, we started with a bare minimum form structure. In this article, let's work on the same login form and implement responsiveness.

//                             //     Before we get started, this was the form which we developed earlier -
//                             //     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ut iusto officia excepturi animi illum suscipit, obcaecati tempore eum similique aliquid inventore perferendis corrupti consectetur autem. Voluptas, beatae? Fugiat vitae adipisci dolorum distinctio rem laborum assumenda modi nesciunt quasi ab odit enim voluptatem amet non nobis officiis, vero, unde velit veniam veritatis quibusdam corrupti doloremque? Praesentium, eius id minima aut voluptate, voluptates tenetur voluptatem possimus fugiat iure mollitia sit quaerat laborum quisquam velit tempora voluptatum dolores unde. Voluptates debitis dolores molestias exercitationem, veritatis assumenda pariatur aut quaerat fugit voluptatum, earum autem perspiciatis nobis quo sit sunt cupiditate, adipisci temporibus ex ab explicabo itaque iste expedita. Voluptatem autem, accusantium voluptas quam beatae temporibus perspiciatis commodi maxime molestias quae nostrum officiis delectus inventore neque sed! Ducimus dicta itaque eaque pariatur adipisci sit odio cumque repellendus iure sed dolore doloremque laudantium facere, modi molestias, hic nemo dignissimos maxime repellat numquam nulla dolores rerum?
//                             // </p>
//                             // <img src="https://picsum.photos/800/349" class="card-img-top" style="max-height: 350px;">
                                   
//                         </div>
//                     </div>
//                 </div>     
//             </div>    
//         </div>`

//         $(".insidepost-wrapper").prepend(insidepostCard)
//     })
// }




// $(".content-wrapper").on("click", ".test-button", () => {
//     console.log(" creando post ")
// })




const getPostData = () => {
    let postObject = {}
    $(".post-form textarea,input").each(function () {
        let property = this.name
        let value = this.value
        postObject = { ...postObject, [property]: value }


    })
    postObject = { ...postObject, id: new Date().getTime() }
    console.log(postObject)
    savePost(postObject)
}


const savePost = postData => {
    $.ajax({
        method: "POST",
        url: "https://devto-31446-default-rtdb.firebaseio.com/.json",
        data: JSON.stringify(postData),
        success: response => {
            console.log(response)
        },
        error: error => {
            console.log(error)
        }
    })
}

const getAllPost = () => {
    console.log("getting post")
    $.ajax({
        method: "GET",
        url: "https://devto-31446-default-rtdb.firebaseio.com/.json",
        success: response => {
            console.log(response)
            printPost(response)
            //printinsidePost(response)
        },
        error: error => {
            console.log(error)
        }
    })
}



$(".content-wrapper").on("click", ".save-post", () => {
    getPostData()
    //getAllPost()
    // setTimeout( () => {
    //     window.open("index.html")
    // },3000)

    //loadView("index.html")
    window.location.assign("../index.html")
})
// $(".insidepost-wrapper").on("click", ".insidePostLink", () => {
//     getAllPost()
//     //getAllPost()
//     // setTimeout( () => {
//     //     window.open("index.html")
//     // },3000)

//     //loadView("index.html")
//     window.location.assign("../post.html")
// })

getAllPost()
/*Fin*/
/*Seccion Ivan */


/*FIn*/
/*Seccion Jav */

/*Fin*/
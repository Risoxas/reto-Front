/* Seccion David */


/*Fin*/
/*Seccion Mario */


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
        <a href="post.html" class="insidePostLink">
        <div class="col-12 d-flex p-0 pl-md-2 pr-md-2 pb-2">
            <div class="card d-flex w-100">
                <img src="${img}" class="card-img-top" style="max-height: 350px;">
                <div class="card-body">
                
                        <div class="media mb-2">
                            <img src="https://picsum.photos/seed/picsum/200/300" class="mr-2" alt="Generic placeholder image" style="width: 35px; height: 35px; border-radius: 50%;">
                            <div class="media-body">
                                <span style=" font-size: 0.8rem; display: block; margin-bottom: 4px;"><b>Yogini Bende</b></span>
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
            postsCollection = response
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

    window.location.assign("../index.html")
})


getAllPost()
/*Fin*/
/*Seccion Ivan */


/*FIn*/

/*Seccion Jav */

$("#search-bar").on('keyup', function() {
    let searchText = $(`#search-bar`).val().toLowerCase()
    let result = Object.keys( postsCollection ).reduce( ( accum, current ) => {

        if( postsCollection[current].title.toLowerCase().includes(searchText)) {
          accum = {...accum, [current]:postsCollection[current]}

        }

        return accum
      },{})

    printPost (result)
})

/*Fin---*/


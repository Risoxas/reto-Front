/* Seccion David */


/*Fin*/
/*Seccion Mario */


/*Fin*/
/*Seccion Ivan */


/*FIn*/
/*Seccion Jav */

let postsCollection = {}

$("#search-bar").on('keyup', function() {
    let searchText = $(`#search-bar`).val().toLowerCase()
    let result = Object.keys( postsCollection ).reduce( ( accum, current ) => {

        if( postsCollection[current].title.toLowerCase().includes(searchText)) {
          accum = {...accum, [current]:postsCollection[current]}

        }

        return accum
      },{})

    printPosts (result)
})

const getData = () => {
    $.ajax({
        method: "GET",
        url: "https://devto-31446-default-rtdb.firebaseio.com/.json",
        success: response => {

            console.log( response )
            postsCollection = response
            printPosts( response )
        
        },
        error: error => {
            console.log(error)
        }
    })
}

getData()

const printPosts = infoToPrint => {

    $(".cards-wrapper").empty()

    for (post in infoToPrint) {

        let postInfo = infoToPrint[post]

        let {content, date, id, img, tags, title} = postInfo

        let postHtml = 
                        `<div class="card d-flex w-100 col-12 mb-2 mt-2">
                                <img src=${img} class="card-img-top" style="max-height: 350px;">
                                <div class="card-body">
                                
                                        <div class="media mb-2">
                                            <img src="https://picsum.photos/seed/picsum/200/300" class="mr-2" alt="Generic placeholder image" style="width: 35px; height: 35px; border-radius: 50%;">
                                            <div class="media-body">
                                                <span style=" font-size: 0.8rem; display: block; margin-bottom: 4px;"><b>Yogini Bende</b></span>
                                                <span class="gray-text" style=" font-size: 0.7rem; display: block; margin-bottom: 5px;">${date}</span>
                                            </div>
                                        </div>
                                    
                                    <h5 class="card-title pl-5" style="font-size: 1.7rem;"><b><mark class = "bg bg-warning">${title}</mark></b></h5>
                                    <p class="card-text">${content}</p>
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
                        </div>`

        $(".cards-wrapper").append(postHtml)
    }
}

/*Fin---*/


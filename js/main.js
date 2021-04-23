/* Seccion David Agregar comentario */

let commentCollection = {
    comment1: { /*entrada de comentario*/
        userId: 2, /*id del usuario que comenta*/
        postId: 1, /*id del post en el que se comenta*/
        text: "Excelente post 1!", /*contenido del comentario */
        creationDate: "14/04/2021" /*fecha de creación del comentario */
    },
    comment2: { /*entrada de comentario*/
        userId: 1, /*id del usuario que comenta*/
        postId: 1, /*id del post en el que se comenta*/
        text: "Excelente post 2!", /*contenido del comentario */
        creationDate: "14/04/2021" /*fecha de creación del comentario */
    },
    comment3: { /*entrada de comentario*/
        userId: 2, /*id del usuario que comenta*/
        postId: 3, /*id del post en el que se comenta*/
        text: "Excelente post 3!", /*contenido del comentario */
        creationDate: "14/04/2021" /*fecha de creación del comentario */
    },
    comment4: { /*entrada de comentario*/
        userId: 1, /*id del usuario que comenta*/
        postId: 3, /*id del post en el que se comenta*/
        text: "Excelente post 4!", /*contenido del comentario */
        creationDate: "14/04/2021" /*fecha de creación del comentario */
    }
}

let commentHTML =  `
<li class="list-group-item">
    <div class="comment-box">
        <h3><span>User: Juan</span></h3>
        <p>Texto</p>
        <p class="text-right text-muted">
            <span class="date">Date</span>
            <span class="time">time</span>
        </p>
    </div>
</li>
`

// let completeCommentData = keysArray.reduce((accum, current) => { 
//     let postId = Date.now()
    
//     let postComments = Object.values(commentCollection).filter(comment => {
//         return comment.postId === postId
//     })

//     let commentValue = {comment : postComments} 

//     return {...accum, [current]: commentValue}
// },{})

const addComment = event => {
    let text = $(event.target).prev().val()
    let postId = postObject.id
    let commentKey = $(event.target).data('comment-key')

    let commentObject = {text, postId}

    completeCommentData[commentKey].commentCollection.push(commentObject)
    // console.log(completeCommentData)
    printcomment(commentObject)
    
}


$('.add-comment').click( addComment )

const printComment = comment => {
    let commentHTML =  `
<li class="list-group-item">
    <div class="comment-box">
        <h3><span>User: Juan</span></h3>
        <p>Texto</p>
        <p class="text-right text-muted">
            <span class="date">Date</span>
            <span class="time">time</span>
        </p>
    </div>
</li>
`
$(`#${comment.postId}`).append(commentHTML)

}

const printPost

/*Fin*/
/*Seccion Mario */


/*Fin*/
/*Seccion Ivan */


/*FIn*/
/*Seccion Jav */

/*Fin*/
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

// let completeCommentData = keysArray.reduce((accum, current) => { 
//     let postId = Date.now()
    
//     let postComments = Object.values(commentCollection).filter(comment => {
//         return comment.postId === postId
//     })

//     let commentValue = {comment : postComments} 

//     return {...accum, [current]: commentValue}
// },{})


const addComment = event => {
    console.log(event)
    let text = $(event.target).prev().val()
    let postId = "1215"
    let commentKey = $(event.target).data('comment-key')

    let commentObject = {text, postId}
    console.log(commentObject)

    // completeCommentData[commentKey].commentCollection.push(commentObject)
    // console.log(completeCommentData)
}


$('.add-comment').click( addComment )

/*Fin*/
/*Seccion Mario */


/*Fin*/
/*Seccion Ivan */


/*FIn*/
/*Seccion Jav */

/*Fin*/
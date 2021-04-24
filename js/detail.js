let url = new URL(window.location.href);
let postKey = url.searchParams.get("postKey")
let postData = {}

/*hacer get al post*/
getPostData = () => {
    $.ajax({
        method: "GET",
        url: `https://devto-31446-default-rtdb.firebaseio.com/${postKey}.json`,
        success: response => {
            postData = response

        },
        async: false
    })
}

getPostData()
$("#detail-img").attr("src", postData.img)
$("#detail-title").text(postData.title)
$("#detail-tags").text(postData.tags)
$("#detail-date").text(postData.date)
$("#detail-content").text(postData.content)

const printCommentinPost = comments => {
    $(`#comment-wrapper`).children().remove()
    for (data in comments) {
        let object = comments[data]
        let commentHTML = `
        <li class="list-group-item w-100" id="${object.commentId}">
            <div class="comment-box">
                <h3>
                    <span><img id="user-nav-img" class="b-radius-100 mr-20" src="assets/images/usuarioLogNav.webp" alt="" style="height: 40px; "></span>
                    <span class = "mx-2"> Juan </span>
                    <span class="date" style="font-size:60%">${object.date}</span>
                    <button class="btn btn-danger btn-sm rounded-0 float-right delete-comment" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fa fa-trash"></i></button>
                </h3>
                <p>${object.text}</p>
                <p class="text-right text-muted">
                </p>
            </div>
        </li>
        `
        $(`#comment-wrapper`).append(commentHTML)

    }
}
printCommentinPost(postData.comments)

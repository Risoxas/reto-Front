let url = new URL(window.location.href);
let postKey = url.searchParams.get("postKey")
let postData = {}
console.log( postKey )

/*hacer get al post*/
getPostData = ( ) => {
    $.ajax({
        method:"GET",
        url:`https://devto-31446-default-rtdb.firebaseio.com/${postKey}.json`,
        success: response => {
            postData = response
            console.log( postData )
        },
        async:false
    })
}

getPostData()
console.log( )

$("#detail-title").text(postData.title)
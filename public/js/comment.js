const commentFormHandler = async function(e){
    
e.preventDefault()
const postId = document.querySelector("input[name='post-id']").value
console.log("postId",postId);
const body = document.querySelector("textarea[name='comment-body']").value
console.log("body",body);
if (body){
    await fetch("/api/comment",{
        method:"POST",
        body:JSON.stringify({postId,body}),
        headers:{
            "Content-Type":"application/json"
        }
    })
    document.location.reload()
}
}
document.querySelector("#Comment-form").addEventListener("submit",commentFormHandler)
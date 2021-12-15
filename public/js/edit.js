const postId = document.querySelector('input[name="post-id"]').value;
const editFormHandler = async function(event) {
    console.log("where");
    event.preventDefault(); 
    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;

    fetch("/api/post/" + postId, {
        method: "put", 
        body: JSON.stringify({
            title,
            body,
        }),
        headers: { "Content-Type": "application/json"}
    })
        .then(function() {
            document.location.replace("/dashboard");
        })
        .catch(err => console.log(err))
}
const deleteHandler=async function(){
await fetch("/api/post/"+postId,{
    method:"delete",
})
document.location.replace("/dashboard");
}

document.querySelector("#editForm").addEventListener("submit", editFormHandler);

document.querySelector("#delete-post-btn").addEventListener("click", deleteHandler);

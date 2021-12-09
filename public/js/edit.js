const postId = document.getElementById('input[name="post-id"]')
const editFormHandler = async function(event) {
    event.preventDefault(); 
    const titleEl = document.getElementById('input[name="post-title"]');
    const bodyEl = document.getElementById('textarea[name="post-body"]');
    

    fetch("/api/post/" + postId.value, {
        method: "put", 
        body: JSON.stringify({
            title: titleEl.value,
            body: bodyEl.value
        }),
        headers: { "Content-Type": "application/json"}
    })
        .then(function() {
            document.location.replace("/dashboard");
        })
        .catch(err => console.log(err))
}
const deleteHandler=async function(){
await fetch("/api/post"+postId.value,{
    method:"delete",
})
document.location.replace("/dashboard");
}

document.querySelector("#edit-post-form").addEventListener("submit", editFormHandler);

document.querySelector(".delete-post-btn").addEventListener("submit", deleteHandler);
//class="delete-post-btn btn">Delete Post</button>
//const { post } = require("../../controllers/api/comment-routes");

async function commentFormHandler(event) {
    event.preventDefault();
    // console.log(event);
  
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    const post_id = document.querySelector('input[name="hideme"]').getAttribute('value');
    alert(post_id)
  
    
    if (comment_text) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            post_id: post_id,
            comment_text: comment_text
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          // alert(response.statusText);
          document.location.reload();
          console.log(response);
        } else {
          alert(response.statusText);
          console.log(response);
        }
    }
      
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
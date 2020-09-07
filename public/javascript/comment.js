//const { post } = require("../../controllers/api/comment-routes");

async function commentFormHandler(event) {
    event.preventDefault();
    console.log(event);
  
    const comment_text2 = document.querySelector('textarea[name="comment-body"]').value.trim();
    const post_id2 = document.querySelector('input[name="hideme"]').getAttribute('value');
    
  
    
    if (comment_text2) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            post_id: post_id2,
            comment_text: comment_text2
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
          console.log(response);
        } else {
          alert(response.statusText);
          console.log(response);
        }
    }
      
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
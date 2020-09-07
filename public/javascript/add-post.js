async function newFormHandler(event) {
    event.preventDefault();
    console.log('add post successful')
  
    const title = document.querySelector('input[name="post-title"]').value;
    const post_url = document.querySelector('input[name="post-url"]').value;
    const post_summary = document.querySelector('textarea[name="post-summary"]').value;
    const id = Math.floor((Math.random() * 101)+20);
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        id,
        title,
        post_url,
        post_summary
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      console.log(response);
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
}
  
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  
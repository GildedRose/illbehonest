async function newFormHandler(event) {
    event.preventDefault();
    console.log('add post successful')
  
    const title = document.querySelector('input[name="post-title"]').value;
    const post_url = document.querySelector('input[name="post-url"]').value;
    const post_summary = document.querySelector('input[name="post-summary"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        id,
        title,
        post_url,
        post_summary,
        category_id,
        created_at,
        updated_at
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
}
  
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  
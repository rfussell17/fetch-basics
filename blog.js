async function getPosts() {
  const postsPromise = await fetch('https://jsonplaceholder.typicode.com/posts');

  if(postsPromise.ok) {
    const posts = await postsPromise.json();
    let html = "";
  
  
    posts.slice(0,3).forEach( post => {
      const title = post.title;
      const body = post.body;
      html += `
          <div class='post'>
              <h3>${title}</h3>
              <p>${body}</p>
          </div>
      `;
    });
  document.body.innerHTML = html;
    } else {
      console.log(console.error(`Error: ${postsPromise.status}`))
    }
  }


getPosts();
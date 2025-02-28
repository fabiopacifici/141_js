// select the dom element where place our posts
const postRowEl = document.querySelector('.posts .row');
const postsUrlEndpoint = 'https://jsonplaceholder.typicode.com/posts';



// fetch the data from the url


fetch(postsUrlEndpoint)
  .then(res => res.json())
  .then(posts => {


    displayPosts(posts);


  }).catch(err => console.error(err));



/* axios.get(postsUrlEndpoint)
  .then(res => {
    console.log(res.data);
    displayPosts(res.data);

  }).catch(err => {
    console.error(err);
  })
 */



/**
 * Display the posts
 * @param {Array} posts The posts array
 * @returns {void}
 */
function displayPosts(posts) {

  console.log(posts);
  // slicd the first 10 posts
  const postsList = posts.slice(0, 10);
  console.log(postsList);


  // loop through the posts
  postsList.forEach(post => {

    console.log(post);

    const markup = renderCard(post);

    postRowEl.insertAdjacentHTML('beforeend', markup);


  })

}



/**
 * Renders a post card
 * @param {Object} post - The post object
 * @returns {string} - The HTML markup for the post card
 */

function renderCard(post) {
  return `
    <div class="col-md-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${post.body}</p>
        </div>
      </div>
    </div>`;
}
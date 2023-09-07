
// target add attribute
const postContent = document.querySelector('.post__content');
const links = postContent.querySelectorAll('a');

links.forEach(link => {
  link.setAttribute('target', '_blank');
});
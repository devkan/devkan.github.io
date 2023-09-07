
// target add attribute
const links = document.querySelectorAll('a.post__content');
links.forEach(link => {
  if (!link.hasAttribute('target')) {
    link.setAttribute('target', '_blank');
  }
});
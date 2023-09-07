
// target add attribute
const links = document.querySelectorAll('a');
links.forEach(link => {
  if (!link.hasAttribute('target')) {
    link.setAttribute('target', '_blank');
  }
});
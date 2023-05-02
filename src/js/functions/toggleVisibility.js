export default function toggleVisibility(el) {
  if (el) {
    let display = getComputedStyle(el).display;
    if (display == 'none') {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
  }
}

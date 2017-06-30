
function listItemClicked(event) {
  var link = event.target.querySelector('a').href
  window.open(link)
}

document.querySelectorAll('.link-list li').forEach(function (el) {
  el.addEventListener('click', listItemClicked)
})

console.log(`%c
 _______________________________________________
| It was so easy to create this website using   |
| codepen and Flexbox, that I had time to teach |
| this cow how to talk                          |
\`-----------------------------------------------´
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`, "font-family:monospace")

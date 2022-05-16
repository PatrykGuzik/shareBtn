console.log("test");

const meta = document.head.querySelector('meta[property="og:title"]')

meta.content = "nowa nazwa strony"

console.log(meta.content);
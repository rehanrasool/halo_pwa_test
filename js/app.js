const container = document.querySelector(".container")
const items = [
  { name: "Item 1", image: "images/item1.jpg" },
  { name: "Item 2", image: "images/item2.jpg" },
  { name: "Item 3", image: "images/item3.jpg" },
  { name: "Item 4", image: "images/item4.jpg" },
  { name: "Item 5", image: "images/item5.jpg" },
  { name: "Item 6", image: "images/item6.jpg" },
  { name: "Item 7", image: "images/item7.jpg" },
  { name: "Item 8", image: "images/item8.jpg" },
  { name: "Item 9", image: "images/item9.jpg" },
]

const showItems = () => {
  let output = ""
  items.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Add to Gift</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showItems)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("service-worker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
} else {
	console.log("serviceWorker not supported")
}

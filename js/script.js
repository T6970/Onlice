import { Nqde } from 'https://cdn.jsdelivr.net/gh/T6970/Nqde@main/src/index.js'
console.log(Nqde)

Nqde.newCard("toolbar")
Nqde.resizeCard("toolbar", (window.innerWidth - 80), 60)
Nqde.moveCard("toolbar", 20 , 20)

Nqde.newCard("main")
Nqde.resizeCard("main", (window.innerWidth - 80), (window.innerHeight - 140))
Nqde.moveCard("main", 20 , 100)
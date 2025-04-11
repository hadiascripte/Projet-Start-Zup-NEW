const h3FAQ = document.querySelectorAll("#h3FAQ");
const pFAQ = document.querySelectorAll("#pFAQ");
let color = ["red", "green", "pink", "purple", "blue", "orange", "black"];

// Je crée ma fonction dans laquelle je mets mes éléments qui sont dans un tableau (car sélectionnés avec All)
console.log(h3FAQ);
console.log(pFAQ);
console.log(h3FAQ.length, pFAQ.length);

//  Je paramètre la base en indiquant ce qu eje veux au départ (display none, margin ect)

for (let i = 0; i < h3FAQ.length; i++) {
    pFAQ[i].style.display = "none";

    // Puis dans mon FOR (car je veux qu'il agisse sur les éléments un à un) j'ajoute l'événement sur mon élément voulu (ici les h3). J'indique donc que je veux que mes p soient en display "block" au moment du click sur mes h3.

    h3FAQ[i].addEventListener("click", function () {
        pFAQ[i].style.display = pFAQ[i].style.display === "none" ? "block" : "none";

        if (pFAQ[i].style.display === "block") {
            // mettre en display "none" tous les autres pFAQ lorsque un autre h3 est cliqué: je demande que SI au click les éléments ((j) de mon pFAQ qui sont donc en "block") deviennent "none"

            for (let j = 0; j < pFAQ.length; j++) {
                if (j !== i) {
                    pFAQ[j].style.display = "none";
                }
            }
        }
    });
}


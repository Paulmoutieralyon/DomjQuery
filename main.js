// Met à jour le message affiché à l´adversaire à chaque nouvelle
// lettre saisie dans l´input ´Mon nom´
$ ("# moi"). keyup (fonction (événement) {
    var myName = $ ("# moi"). val ();
    $ ("# mégaphone"). text (promptMessage (myName));
});

// Génère le message diffusé à l´adversaire
fonction promptMessage (playerName) {
    si (playerName.length> 0) {
        retourne ">>" + nom du joueur + "va attaquer en ...";
    } autre {
        retour "> En attente d'un joueur";
    }
}

let shipOne = {'b4': 0, 'b5': 0, 'b6': 0, 'total': 0};
let shipTwo = {'d9': 0, 'e9': 0, 'f9': 0, 'total': 0};

let loc = $ ("# canon");


loc.keyup ((k) => {
    if (k.key === 'Enter') {
        locValue = loc.val (). toLowerCase ();

        $ ("#" + locValue) .css ({
            'couleur de fond': 'rouge'
        });

        touche = false;
        coule = false;

        if (shipOne [locValue] === 0) {
            shipOne [locValue] = 1;
            shipOne ['total'] ++;
            touche = true;
            if (shipOne ['total'] === 3) {
                coule = true;
            }
        }

        if (shipTwo [locValue] === 0) {
            shipTwo [locValue] = 1;
            shipTwo ['total'] ++;
            touche = true;
            if (shipTwo ['total'] === 3) {
                coule = true;
            }
        }

        if (shipOne ['total'] === 3 && shipTwo ['total'] === 3) {
            $ ("# historique"). append ('<br /> WIN');
            $ ("# no-mans-land"). css ({'background-color': 'white', 'background-image': 'url ("http://www.codingblocks.net/wp-content/uploads /2014/10/BangBangJavascript-300x100.png ") '});
        } sinon si (coule) {
            $ ("# historique"). append ('<br /> COULE');
        } sinon si (touche) {
            $ ("# historique"). append ('<br /> TOUCHE');
        } autre {
            $ ("# historique"). append ('<br /> PLOUF');
        }
    }
})

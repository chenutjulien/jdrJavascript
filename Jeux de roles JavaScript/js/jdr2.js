    let annonce = [
    'background: linear-gradient(#0495FC, #002B8E)',
    'border: 1px solid #3E0E02',
    'color: white',
    'display: block',
    'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)',
    'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
    'line-height: 40px',
    'text-align: center',
    'font-weight: bold',
    ].join(';');

    let succes = [
    'background: linear-gradient(#01FC82, #018820)',
    'border: 1px solid #3E0E02',
    'color: white',
    'display: block',
    'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)',
    'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
    'line-height: 40px',
    'text-align: center',
    'font-weight: bold',
    ].join(';');

    let echec = [
    'background: linear-gradient(#F2153B, #DEA2AA)',
    'border: 1px solid #3E0E02',
    'color: white',
    'display: block',
    'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)',
    'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
    'line-height: 40px',
    'text-align: center',
    'font-weight: bold',
    ].join(';');

    console.log("%c Bienvenue dans ce petit jeu sur la parabole de Marc 10.17-21.", annonce);
    console.log("Il vous faudra faire les bon choix pour être sauvé.");
    console.log("Voici lee contexte. Vous êtes un jeune homme riche qui voit Jésus marcher avec ses disciples. Vous l'interpellez");
    console.log("%c A vous de jouer !", annonce);
    let choisir;
    console.log("1 : parler");
    console.log("2 : Ne rien dire et faire demi tour");
    console.log("0 : Quitter le jeu.");

    

    while (choisir != "0") {
        choisir = prompt("Fais ton choix : ");

        switch (choisir) {
            case "1":
            console.log("Salutation bon Maître");
            console.log("Jésus lui répondit : Pourquoi m'appelles tu bon Maître ? Il n'y a de bon que Celui qui m'envoie !");

                //let choisir;
                console.log("3 : parler du temps et des romains.");
                console.log("4 : parler du Salut.");
                console.log("0 : Quitter le jeu.");

                while (choisir != "0") {
                    choisir = prompt("Fais ton choix");

                    switch(choisir) {
                        case "3":
                        console.log("Vous pensez que les romains sont responsables du mauvais temps ?");
                        console.log("Jésus soupira et continua sa route.");
                        console.log("%c Dommage, vous avez raté l'occasion du salut avec Jésus.", echec);
                        break;

                        // default : 
                        // console.log("Seul les choix 1 2 et 0 sont autorisés.");
                        // break;

                        case "4":
                        console.log("Que dois-je faire pour hériter de la vie Eternelle ?");
                        console.log("Jésus lui répondit : Tu connais les Commandements, tu ne commetras point d'adultère, tu ne feras pas de faux témoignages, tu ne voleras point...");

                        //let choisir;
                        console.log("5 : Acquieser et dire que l'on a respecté la Loi.");
                        console.log("6 : Secouer la tête et dire que l'on a pas fait tout cela.");
                        console.log("0 : Quitter le jeu.");

                        while(choisir !="0") {
                            choisir = prompt("Fais ton choix.");

                            switch(choisir) {
                               case "5": 
                                console.log("Le jeune homme répondit : Oui, j'ai respecté toutes les Lois de Moïse depuis mon plus jeune age !");
                                console.log("Ecoutant cela, Jésus le regarda et l'aima.");
                                console.log("Jésus dit au jeune homme: il te reste encore une chose: vend tes richesses et donne les pauvres, tu y gagneras un trésor dans le ciel et ensuite, suis moi.");

                                    //let choisir;
                                    console.log("7 : Refuser la proposition de Jésus et partir d'un pas las.");
                                    console.log("8 : Faire ce qu'il demande et le suivre le coeur joyeux.");
                                    console.log("0 : Quitter le jeu.");

                                    while (choisir != "0") {
                                        choisir = prompt("Fais ton choix");

                                        switch(choisir) {
                                            case "7":
                                            console.log("Affligé par cette parole, le jeune homme s'en alla tout triste car il avait de grands biens.");
                                            console.log("Jésus soupira et continua sa route.");
                                            console.log("Il dit : Il est plus facile pour un chameau de passer par un trou d'aiguille que pour un riche d'accéder au royaume de mon Père !");
                                            console.log("%c Dommage, vous avez raté l'occasion du salut avec Jésus.", echec);
                                            break;

                                            case "8":
                                            console.log("Le jeune homme fit avec joie ce que lui demanda Jésus et gagna la vie éternelle.");
                                            console.log("Il s'engaga sur le chemin étroit et rocailleux mais persevera dans le bon combat.");
                                            console.log("%c Félicitations, vous avez trouvé le chemin du salut, mais n'oubliez pas que cela n'est pas par votre oeuvre.", succes);

                                            case "0":
                                            console.log("%c Merci d'avoir utilisé Parabole Appli. Appuyez sur F5 pour recharger.",annonce);
                                            break;
                                        }
                                    }

                                break;

                                case "6":
                                console.log("Tout penaud, le jeune homme expliqua qu'il n'avait respecté ces Lois et que cela lui était trop dur.");
                                console.log("Jésus soupira et continua sa route.");
                                console.log("%c Dommage, vous avez raté l'occasion du salut avec Jésus.", echec);
                                break;

                                
                            }
                        }

                        break;

                        
                    }
            }

            break;

            case "2":
            console.log("%c Dommage, vous avez raté l'occasion du salut avec Jésus.", echec);
            break;

            case "0":
            console.log("%c Merci d'avoir utilisé Parabole Appli. Appuyez sur F5 pour recharger.",annonce);
            break;

            default : 
            console.log("Seul les choix 1 2 et 0 sont autorisés.")
    }
    break;        
}

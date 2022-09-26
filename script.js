let Balle = document.getElementsByClassName('balle')[0]; //va chercher la classe balle de l'html

Balle.coord_x=0; 
Balle.coord_y=0;

const deplacement = 1; // nombre utiliser pour le décalage
const uniter = 'px'; // uniter du décalage

    Balle.delta_x = deplacement;
    Balle.delta_y = deplacement;

function Mouvement (){  
    
    let rect = Balle.getBoundingClientRect();

    Balle.coord_y += Balle.delta_y; // coordonner de base 0 + le deplacement 
    Balle.coord_x += Balle.delta_x;

    Balle.style.top = Balle.coord_y + uniter;  //le haut = y px
    Balle.style.left = Balle.coord_x + uniter; // coter = x px

    if(Balle.coord_y<0||Balle.coord_y + rect.height > document.body.clientHeight ){  // si balle touche le haut rebondi.    
        Balle.delta_y = -Balle.delta_y;
    }
         
    else if(Balle.coord_x<0|| Balle.coord_x + rect.width > document.body.clientWidth  ){// si balle touche le coter rebondi.
        Balle.delta_x = -Balle.delta_x; 
    }
}
setInterval(Mouvement, 10)


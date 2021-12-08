import imagen1 from './imgs/cafe_blend_brasil_colombia.jpg'
import imagen2 from './imgs/cafe_etiopia.jpg'
import imagen3 from './imgs/cafe_guatemala.jpg'
import imagen4 from './imgs/pava_cisne_inox.jpg'
import imagen5 from './imgs/tazas_oslo_180.jpg'
import imagen6 from './imgs/mocca_master.jpg'
import imagen7 from './imgs/bialetti_moka_express.jpg'

const productos = [
{id:1,img: imagen1 ,categoria:"Café en grano",titulo:"Café Blend Brasil Colombia",precio:1170},
{id:2,img: imagen2 ,categoria:"Café en grano",titulo:"Café Etiopía"              ,precio:2121},
{id:3,img: imagen3 ,categoria:"Café en grano",titulo:"Café Guatemala"            ,precio:1490},
{id:4,img: imagen4 ,categoria:"Accesorios"   ,titulo:"Pava Cuello de Cisne Inox" ,precio:10876},
{id:5,img: imagen5 ,categoria:"Vajilla"      ,titulo:"Tazas Oslo 180ml"          ,precio:2990},
{id:6,img: imagen6 ,categoria:"Cafeteras"    ,titulo:"Mocca Master KBG Select"   ,precio:108770},
{id:7,img: imagen7 ,categoria:"Cafeteras"    ,titulo:"Bialetti Moka Express"     ,precio:11000}
];

export const getFetch = new Promise ((resolve)=>{
    setTimeout(()=>{
        resolve(productos)
    }, 2000)
})

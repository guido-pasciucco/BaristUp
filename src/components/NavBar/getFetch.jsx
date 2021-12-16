
import imagen1 from './imgs/cafe_blend_brasil_colombia.jpg'
import imagen2 from './imgs/cafe_etiopia.jpg'
import imagen3 from './imgs/cafe_guatemala.jpg'
import imagen4 from './imgs/pava_cisne_inox.jpg'
import imagen5 from './imgs/tazas_oslo_180.jpg'
import imagen6 from './imgs/mocca_master.jpg'
import imagen7 from './imgs/bialetti_moka_express.jpg'

const productos = [
{id:1,img:imagen1,categoria:"Cafe"      ,titulo:"Café Blend Brasil Colombia",precio:1170,  detalle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a sollicitudin metus. Donec eleifend tellus sem, sodales velit dictum amet. Duis sagittis nec ma ultricies. Sed varius neque in vehicula varius."},
{id:2,img:imagen2,categoria:"Cafe"      ,titulo:"Café Etiopía"              ,precio:2121,  detalle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a sollicitudin metus. Donec eleifend tellus sem, sodales velit dictum amet. Duis sagittis nec ma ultricies. Sed varius neque in vehicula varius."},
{id:3,img:imagen3,categoria:"Cafe"      ,titulo:"Café Guatemala"            ,precio:1490,  detalle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a sollicitudin metus. Donec eleifend tellus sem, sodales velit dictum amet. Duis sagittis nec ma ultricies. Sed varius neque in vehicula varius."},
{id:4,img:imagen4,categoria:"Accesorios",titulo:"Pava Cuello de Cisne Inox" ,precio:10876, detalle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a sollicitudin metus. Donec eleifend tellus sem, sodales velit dictum amet. Duis sagittis nec ma ultricies. Sed varius neque in vehicula varius."},
{id:5,img:imagen5,categoria:"Accesorios",titulo:"Tazas Oslo 180ml"          ,precio:2990,  detalle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a sollicitudin metus. Donec eleifend tellus sem, sodales velit dictum amet. Duis sagittis nec ma ultricies. Sed varius neque in vehicula varius."},
{id:6,img:imagen6,categoria:"Accesorios",titulo:"Mocca Master KBG Select"   ,precio:108770,detalle:"Certificada por la ECBC (European Coffee Brewing Center) y SCA (Specialty Coffee Association) bajo estrictos controles y siendo así la mejor máquina para la preparación de café filtrado y te contamos porque."},
{id:7,img:imagen7,categoria:"Accesorios",titulo:"Bialetti Moka Express"     ,precio:11000, detalle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a sollicitudin metus. Donec eleifend tellus sem, sodales velit dictum amet. Duis sagittis nec ma ultricies. Sed varius neque in vehicula varius."}
];

export const getFetch = new Promise ((resolve)=>{
    setTimeout(()=>{
        resolve(productos)
    }, 500)
})

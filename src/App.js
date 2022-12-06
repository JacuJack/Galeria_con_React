import Cards from './Cards.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';

function App() {
  return (
    <main>
      <Header tituloPrincipal="Galeria de Imagenes con React" />
      <div className='contenedorGaleria'>
        <Cards srcImg="https://picsum.photos/id/237/200/300" descripcionImg="super mega descripcion de la imagen number one" tituloImg="Titulo Img 1"/>
        <Cards srcImg="https://picsum.photos/seed/picsum/200/300" descripcionImg="super mega descripcion de la imagen number two" tituloImg="Titulo Img 2"/>
        <Cards srcImg="https://picsum.photos/200/300?grayscale" descripcionImg="super mega descripcion de la imagen number three" tituloImg="Titulo Img 3"/>
      </div>
      <Footer />
    </main>
  );
}

export default App;

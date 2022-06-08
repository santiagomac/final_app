import "./App.css";
import Quote from "./components/Quote";
import Subscribe from "./components/Subscribe"

const App = () => {
  return (
    <div>
      <header>
        <img
          src="https://www.pngkey.com/png/full/313-3135653_on-about-3-years-ago-yeezus-hat-yeezy.png"
          className="main-image"
        />
      </header>
      <main>
        <section className="body">
          <Quote />
          <div className="image">
            <img src="https://www.e-dea.co/hubfs/lucidchart-en-colombia-decoration.png" />
          </div>
        </section>
      <Subscribe />
      </main>
      <footer>
        <span>© Copyright 2022</span>
      </footer>
    </div>
  );
};

export default App;

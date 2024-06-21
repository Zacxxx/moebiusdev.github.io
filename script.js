// script.js
class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><a href="index.html">Accueil</a></li>
            <li><a href="about.html">À propos</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <main>
        <section>
          <h1>Bienvenue sur Moebius Dev</h1>
          <p>Ce site est en cours de développement. Restez à l'écoute pour plus de mises à jour !</p>
          <p>Pour plus d'informations, visitez notre <a href="https://github.com/Zacxxx/moebiusdev.github.io" target="_blank">GitHub</a>.</p>
        </section>
      </main>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>&copy; 2024 Moebius Dev. Tous droits réservés.</p>
      </footer>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

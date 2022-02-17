// PROGRAMMING STEPS
// =================
// We use a React project to work on component basis.
// We divide our page into 3 parts as header content (cards menu) and footer.
// We create separate components for each section under a folder named component.
// We use the bootstrap navbar menu for the header component.
// We use bootstrap card for content (cards menu).
// We use the standard bootstrap footer for the footer.
// We definitely export our components so that we can use them in the app.js page.
// On the App.js page, we import and use our components.

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Card from "./component/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <div class="row m-4 d-flex justify-content-around">
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;

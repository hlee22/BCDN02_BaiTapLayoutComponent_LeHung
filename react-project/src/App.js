import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./btap/HeaderComponent";
import BodyComponent from "./btap/BodyComponent";
import BannerComponent from "./btap/BannerComponent";
import FooterComponent from "./btap/FooterComponent";
import ItemComponent from "./btap/ItemComponent";

function App() {
  return (
    <div className="">
      <HeaderComponent />
      <BannerComponent />

      <BodyComponent />
      <ItemComponent />

      <FooterComponent />
    </div>
  );
}

export default App;

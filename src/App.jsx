import AppRouter from "./router";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { AppContainer } from "./screens/styles";

const App = () => {
  const handleOnEnter = () => {

  }

  const handleOnExit = () => {

  }

  return (
    <AppContainer>
      <Header />
      <AppRouter />
      <Footer />
    </AppContainer>
  )
}

export default App;

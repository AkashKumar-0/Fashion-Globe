import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.route';
import SignIn from './routes/sign-in-page/sign-in-page.route';
import Checkout from './components/checkout/checkout.component';
import { ErrorPage } from './routes/error.page.route';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  );
};

export default App;

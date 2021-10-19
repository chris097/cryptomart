import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import './App.css';
import { 
  Navbar, 
  Homepage, 
  Exchanges, 
  Cryptocurrencies, 
  CryptoDetails, 
  News 
} from './components';

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar /> 
      </div>
      <div className="main">
        <Layout>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </Layout>
      </div>
      <div className="footer">
        <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
          Cryptomart <br />
          All rights reserved
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  );
}

export default App;

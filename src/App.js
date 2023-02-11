import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import HomeScreen from './screens/home';
import TopListScreen from './screens/toplist';
import TopListDataScreen from './screens/toplist-data';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

function App() {
  const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
      graphqlErrors.map(({ message, location, path }) => {
        alert(`graphql error: ${message}`);
      });
    }
  });

  const link = from([
    errorLink,
    new HttpLink({ uri: 'http://localhost:3001/graphql' }),
  ]);

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });

  // style for active navlinks
  const activeStyle = {
    color: '#a974be',
    cursor: 'default',
  };

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <nav className="Nav">
            <ul>
              <li>
                <NavLink
                  to="/"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  All Pokemon
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/toplist"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  My Pokemon
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/toplist-data"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  My Pokemon Data
                </NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/toplist" element={<TopListScreen />} />
            <Route path="/toplist-data" element={<TopListDataScreen />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

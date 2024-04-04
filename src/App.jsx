//import * as React from 'react';
import { Container } from "@mui/material";
import ListScreen from "./screens/suggestions/list/ListScreen";
import AppMenu from './components/AppMenu';
import {Navigate, Route, Routes } from 'react-router-dom';
import MyProfilePage from './screens/suggestions/myProfile/MyProfileScreen';
import DetailsPage from './screens/suggestions/details/DetailsPage';
import UserPage from './screens/suggestions/user/UserPage';
import Page404 from './Page404';
import Provider from './Provider';
import AddScreen from './screens/suggestions/add/AddScreen';
import { useAuth } from "./hooks/useAuth";

// eslint-disable-next-line react/prop-types
function ProtectedPage({children}) {
  const { authToken } = useAuth();
  if (authToken === false) {
    return <Navigate to="/"></Navigate>
  }

  return children;
}
function App() {
  return (
      <Provider>
        <AppMenu/>
        <br/>
        <Container maxWidth={"lg"}>
          <Routes>
            <Route path="/" element={<ListScreen/>}/>
            <Route path="/myprofile" element={<ProtectedPage>
              <MyProfilePage/>
            </ProtectedPage>}/>
            <Route path="/new" element={<ProtectedPage>
              <AddScreen/>
            </ProtectedPage>}/>
            <Route path="/suggestion/:id" element={<DetailsPage/>}/>
            <Route path="/user/:id" element={<UserPage/>}/>
            <Route path="*" element={<Page404/>}/>
          </Routes>
        </Container>
      </Provider>
  );
}

export default App;

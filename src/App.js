import * as React from 'react';
import { Container } from "@mui/material";
import ListScreen from "./screens/suggestions/list/ListScreen";
import AppMenu from './components/Menu';
import {Route, Routes } from 'react-router-dom';
import AddSuggestion from './screens/suggestions/myProfile/components/AddSuggestion';
import MyProfilePage from './screens/suggestions/myProfile/MyProfileScreen';
import DetailsPage from './screens/suggestions/details/DetailsPage';
import UserPage from './screens/suggestions/user/UserPage';
import Page404 from './Page404';
import Provider from './Provider';


function App() {
  return (
      <Provider>
      <AppMenu/>
      <br/>
        <Container maxWidth={"lg"}>
          <Routes>
            <Route path="/" element={<ListScreen/>}/>
            <Route path="/myprofile" element={<MyProfilePage/>}/>
            <Route path="/new" element={<AddSuggestion/>}/>
            <Route path="/suggestion/:id" element={<DetailsPage/>}/>
            <Route path="/user/:id" element={<UserPage/>}/>
            <Route path="*" element={<Page404/>}/>
          </Routes>
        </Container>
      </Provider>
  );
}

export default App;

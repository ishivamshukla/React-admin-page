import  React from "react";
import { Admin, Resource, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./User";
import { ProductsList } from "./Products";
import { Dashboard } from "./Dashboard";
// import LoginPage from './Loginpage';

const dataProvider = jsonServerProvider("https://documenter.getpostman.com/view/3418464/TWDfEZM7");

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} />
    <Resource name="products" list={ProductsList} edit={EditGuesser} />
  </Admin>
);

export default App;


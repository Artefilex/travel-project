import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../../Main/Main";
import DataLocation from "../../Main/DataLocation";
import Shop from "../../Shop/Shop";
import Login from "../../Login/Login";
import Join from "../../Login/Join";
const Location = () => {
  return (
    <Routes>
      <Route path="/" exact Component={Main} />
      <Route path="/shop" Component={Shop} />
      <Route path="/:id" Component={DataLocation} />
      <Route path="/login" Component={Login} />
      <Route path="/join" Component={Join} />
    </Routes>
  );
};

export default memo(Location);

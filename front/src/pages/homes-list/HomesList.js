import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
  
import {Card} from "../../components/card/Card"
import "./HomesList.scss";
import { getHomes } from "../../services/utils";

export const HomesList = () => {
  const [homes, setHomes] = useState([]);
console.log(homes)
  useEffect(() => {
    getHomes().then((data) => setHomes(data));
  }, []);

  return (
    <div className="container home">
      <h1>
        <FormattedMessage id="spaces"/>
      </h1>
      <div className="homeList">
      {homes && homes.map((home)=> <Card props={home}/>)}
      </div>
    </div>
  );
};

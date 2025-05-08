import React from "react";
import Landing from '../components/Landing.jsx';
import Highlight from '../components/Highlight.jsx'
import Featured from '../components/Featured.jsx';
import Discounted from '../components/Discounted.jsx';
import Explore from '../components/Explore.jsx';

const Home = () => {
    return (
      <>
        <Landing />
        <Highlight />
        <Featured />
        <Discounted />
        <Explore />
      </>
    );
}

export default Home;
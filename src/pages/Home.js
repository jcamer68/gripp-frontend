import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="section">
      <h2>Home</h2>
      <Link to="/" className="btn">
        Change User
      </Link>
      <Link to="/trends" className="btn">
        Trends
      </Link>
    </section>
  );
};

export default Home;

// const Home = () => {
//   return (
//     <div>
//       <h2>Home Page</h2>
//       <Link to='/trends' className='btn'>
//         Trends
//       </Link>
//       <a href=""></a>
//     </div>
//   )
// }

// export default Home;

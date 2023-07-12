import React from 'react';


import NavigationBar from './NavigationBar';

import './styles.css';

const App = () => {
  return (
      <div>
        <h1>
        {/* < LoginPage/> */}
        <NavigationBar/>
        </h1>
        </div>
    //   <Router>
    //   <NavigationBar />
    //   <Routes>
        
    //     <Route path="/login" component={LoginPage} />
    //     <Route path="/register" component={RegistrationPage} />
    //   </Routes>
    // </Router>
  );
    

};

export default App;


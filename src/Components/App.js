import React, {PropTypes} from 'react';
import Header from "./Common/Header"
class App extends React.Component {
    render() {return(
        <div className="container-fluid">
            <Header/>
            {this.props.children}
        </div>
    );
}
}

App.prototypes = {
    children:PropTypes.object.isRequired
};

export default App;
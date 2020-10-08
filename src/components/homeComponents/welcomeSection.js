import React from 'react';
import axios from 'axios';

import data from '../../utils/cms-data/homepage.json';

// const welcome = data.map((data) => {
//     if(data.field_name === 'welcome'){
//         return (
//             <p>
//                 {data.text}
//             </p>
//         )
//     }
// })


class Welcome extends React.Component {
    // state = {
    //     ttable: {},
    //     isLoaded: false
    //  }
  
    //  componentDidMount(){
    //     axios.get('http://www.jaisunhouse.com/wp/wp-json/wp/v2/home/')
    //     .then(res => this.setState({
    //        hometable: res.data,
    //        isLoaded: true
    //     }))
    //     .catch(err => console.log(err));
    //  }
  
    //  constructor(props) {    
    //   super(props)
    //   this.state = {
    //     condition: false
    //   }
    //   this.handleClick = this.handleClick.bind(this)
    // }
    // handleClick() {
    //   this.setState({
    //     condition: !this.state.condition
    //   })
    // }
  
    render() {
        // const {hometable, isLoaded } = this.state;
        // if(isLoaded) {
            return (
                // <div>{newdata}</div>
                <div className="welcome-container">
                    <div className="title-container">
                        <div className="title-seperator title-seperator-container-left">
                            <div className="title-sep"></div>
                        </div>
                        <h1>Welcome to Jaisun House</h1>
                        <div className="title-seperator title-seperator-container-right">
                            <div className="title-sep"></div>
                        </div>
                    </div>

                    <div className="welcome-text">
                        {/* <p>Welcome to Jaisun House, a leading distributor in high end fashion.  With collections stocked in retail stores throughout Ireland Jaisun House have a strong history and reputation for their offering within the high end fashion business.</p> */}
                        {/* <p>{hometable.map(welcome => (
                            <div key={welcome.id} dangerouslySetInnerHTML={{ __html:welcome.acf.welcome}}/>
                        ))}</p> */}
                        {
                            data.Home.map((weldata, i) => {
                                if(weldata.field_name === 'welcome'){
                                    return (
                                        <div key={i}>
                                            <p>
                                                {weldata.text}
                                            </p>
                                        </div>
                                    );
                                }
                            })
                        }
                    </div>
                </div>
             );
        // } return null;
    }
}
export default Welcome;
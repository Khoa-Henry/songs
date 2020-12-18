import React from 'react';
import SongList from './songlist';
import SongDetails from './songdetails';



const App = () => {
    return(
        <div className="ui container grid">
            <div className="column eight wide">
                <SongList/>
            </div>
            <div className="column eight wide">
                <SongDetails/>
            </div>
        </div>
    )
}

export default App;
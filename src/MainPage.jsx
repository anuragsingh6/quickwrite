import { useContext } from 'react';
import { ThemeContext } from './App';
import { Link } from 'react-router-dom';
import Segment from './Segment';

function MainPage(){
    const {theme} = useContext(ThemeContext);
    return (
        <>
        <Segment id={theme} className="segment main-segment">
            <div id={theme} className="main-segment-image-container"></div>
            <div id={theme} className="main-segment-content-container">
                <div style={{height:"25%",display:"flex",alignItems:"flex-end"}}><h1>QuickWrite</h1></div><br />
                <div style={{padding:"0% 7% 5% 7%"}}><h2>An autocomplete text editor to help you write at 5x speed.</h2></div>
                <div className="main-button-container">
                    <Link to="/writer"><button type="button" className="main-button">Start Writing</button></Link>
                    <Link to="/"><button type="button" className="main-button">Know More</button></Link>
                </div>
            </div>
        </Segment>
        <Segment id={theme} className="segment secondary-segment segment2">
            <div id="more" className="secondary-segment-left-top"><h2>Powerful Autocomplete</h2><h3>QuickWrite's powerful autocomplete helps you to accomplish tasks in far lesser than half the actual time.</h3></div>
            <div className="secondary-segment-right-bottom image-container"><div className="image"></div></div>
        </Segment>
        <Segment id={theme} className="segment secondary-segment segment3">
            <div className="secondary-segment-left-top image-container"><div className="image"></div></div>
            <div className="secondary-segment-right-bottom"><h2>Write Less, Accomplish More</h2><h3>You focus on ideas, we'll take care of the words.</h3></div>
        </Segment>
        <Segment id={theme} className="segment secondary-segment segment4">
            <div style={{height:"40%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
            <h2>Try Now</h2><div style={{padding:"0% 7% 5% 7%",textAlign:"center"}}>And experience a new adventure in the world of writing</div>
            </div>
            <Link to="/writer"><button type="button" className="main-button">Start Writing</button></Link>
        </Segment>
        <Segment id={theme} className="footer">
            <div className="footer-image-container"></div>
            <div className="footer-content-container"><div>QuickWrite<br />&copy; Anurag Singh</div><div>Made by Anurag Singh</div></div>
        </Segment>
        </>
    )
}

export default MainPage
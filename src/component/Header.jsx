import React from 'react';
import '../style/style.css';

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className='headerContent'>
                    <ul>
                        <li style={{borderBottom:'2px solid black'}}>
                            <span style={{padding:'10px',borderRadius:'5px',backgroundColor:'blue'}}>1</span>
                            <a href='/'> Personal</a></li>
                        <li>2 <a href='/list'>List</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;
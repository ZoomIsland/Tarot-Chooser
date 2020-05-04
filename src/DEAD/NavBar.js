import React from 'react';

class NavBar extends React.Component {
    render() {
        return (
        <nav>
            <ul>
                <li><a href="./thoth.html">Thoth</a></li>
                <li><a href="./rider-waite.html">Rider-Waite</a></li>
                <li><a href="./wildunknown.html">Wild Unknown</a></li>
            </ul>
        </nav>
        )
    }
}

export default NavBar;
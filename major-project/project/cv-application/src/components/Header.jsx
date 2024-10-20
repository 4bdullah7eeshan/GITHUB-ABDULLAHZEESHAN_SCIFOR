import Icon from '@mdi/react';
import { mdiFileAccount } from '@mdi/js';

function Header() {
    return (
        <header className='logo'>
            <h1>
                <Icon path={mdiFileAccount} size={2} /> CV Application
            </h1>
        </header>
    );
}

export default Header;
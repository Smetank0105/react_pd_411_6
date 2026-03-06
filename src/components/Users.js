import './Users.css';
import { User } from './User';

export function Users({ users }) {
    return (
        <div>
            <div className='search'>
                <input type="search" placeholder='Find user' />
            </div>
            <div>
                <ul className='users-list'>
                    {
                        users.map(obj => (<User key={obj.id} {...obj} />))
                    }
                </ul>
            </div>
            <button className='send-invite-btn'>Invite</button>
        </div>
    )
}
import './Users.css';
import { User } from './User';

export function Users({ users, searchValue, onChangeValue, invites, onClickInvite }) {
    return (
        <div>
            <div className='search'>
                <input
                    type="search"
                    placeholder='Find user'
                    value={searchValue}
                    onChange={onChangeValue}
                />
            </div>
            <div>
                <ul className='users-list'>
                    {
                        // users.map(obj => (<User key={obj.id} {...obj} />))
                        users.filter(obj => {
                            const full_name = `${obj.first_name} ${obj.last_name}`.toLowerCase();
                            return full_name.includes(searchValue.toLowerCase())
                                || obj.email.toLowerCase().includes(searchValue.toLowerCase());
                        }).map(obj => (
                            <User key={obj.id} {...obj} 
                            onClickInvite={onClickInvite}
                            isInvited={invites.includes(obj.id)}
                            />
                        ))
                    }
                </ul>
            </div>
            <button className='send-invite-btn'>Invite</button>
        </div>
    )
}
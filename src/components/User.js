
export function User({id, email, first_name, last_name, avatar})
{
    return(
        <li>
            <div>
                <img src={avatar} alt="" className="avatar" />
                <div className="text">
                    <h3>{last_name} {first_name}</h3>
                    <p>{email}</p>
                </div>
                <div className="button">+</div>
            </div>
        </li>
    )
}
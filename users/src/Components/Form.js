import React from "react";

const Form = (props) => {
    const { change, submit } = props;
    const { username, email, password, checked } = props.values;

    const onChange = (e) => {
        const { name, value, checked, type } = e.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal)
    }

   const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }
    return(
        <div>
            <h1>My new form!</h1>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input>
                        type="text"
                        name="username"
                        value={username}
                        onChange={onChange}
                        </input>
                </label>
                <label>Email: 
                    <input>
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                    </input>
                </label>
                <label>Password: 
                    <input>
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                    </input>
                </label>
                <label>Terms of service: 
                    <input>
                        type="checkbox"
                        name="tos"
                        checked={checked}
                        onChange={onChange}
                    </input>
                </label>
                <input type="submit" value="Create a Friend!" />
            </form>
        </div>
    )
}

export default Form;
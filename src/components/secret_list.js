import React from 'react';
import auth from '../hoc/auth';

const SecretList = props => {

    return (
        <div>
            <h1 className="center">Secret Operatives</h1>
            <ol>
                <li>Bear</li>
                <li>Bo</li>
                <li>Seth</li>
                <li>Josh</li>
            </ol>
        </div>
    );

};

export default auth(SecretList);
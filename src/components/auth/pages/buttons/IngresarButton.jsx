import React from 'react'

import '../../../../styles/components/auth/pages/buttons/_ingresarButton.scss';

export const IngresarButton = () => {
    return (
        <button
            type="submit"
            id="submitButton"
            className="custom-ingresar-btn ingresar-btn">
            <span>Login</span>
        </button>
    )
}

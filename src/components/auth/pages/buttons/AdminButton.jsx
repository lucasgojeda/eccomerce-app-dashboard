import React from 'react'

import '../../../../styles/components/auth/pages/buttons/_adminButton.scss';

export const AdminButton = ({handleAdminLogin}) => {
    return (
        <button className='custom-admin-btn admin-btn' onClick={handleAdminLogin}>
            <span>Administrator</span>
        </button>
    )
}

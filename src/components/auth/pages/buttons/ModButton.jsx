import React from 'react'

import '../../../../styles/components/auth/pages/buttons/_modButton.scss';

export const ModButton = ({handleModLogin}) => {
    return (
        <button className='custom-mod-btn mod-btn' onClick={handleModLogin}>
            <span>Moderator</span>
        </button>
    )
}

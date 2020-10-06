import React from 'react'

export default function DateDropdown(props) {
    const { changePhoto } = props

    const handleChangePhoto = (value) => {
        changePhoto(value)
    }

    return (
        <div>
            <form>
                <input type="date" id="date" name="date" onChange={ e => handleChangePhoto(e.target.value) } />
            </form>
            
        </div>
    )
}

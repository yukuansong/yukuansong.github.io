import React from 'react'

import TableHeader from './TableHeader'
import TableBody from './TableBody'

const Table = (props) => {
        const {charactersData, removeCharacter} = props

        return (
            <table>
                <TableHeader />
                <TableBody charactersData={charactersData} removeCharacter={removeCharacter}/>
            </table>
        )
    }
    

export default Table
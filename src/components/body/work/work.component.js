import React from 'react'
import { WorkData } from '../../../data/work'
import Separator from '../../common/separator/separator.component'
import WorkCard from './work-card.component'
import './work.styles.css'

function Work() {
    const data = WorkData
    return (
        <div className="work" >
            <Separator />
            <label className="section-title" >Work</label>
            <div className="work-list">
                {
                    data.map((item) => {
                        return (
                            <WorkCard item={item} />
                        )
                    } )
                }
            </div>
        </div>
    )
}

export default Work

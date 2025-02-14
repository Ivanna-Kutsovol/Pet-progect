import React from 'react';
import stl from "./case.module.scss"

interface CaseProps {
    className?: string;
    title?: string;
    description: string;
    classNameMain?: string;
    classNameTitle?: string;
    classNameDescription?: string;
}

export const Case :React.FC<CaseProps> = ({className = '', title, description, classNameMain='',classNameTitle='', classNameDescription=''}) => {
    return (
        <section className={classNameMain}>
            <section className={classNameTitle}>
            {title?.split(`\n`).map((line, i) => (
                <React.Fragment key={i}>
                    {line}
                </React.Fragment>
            ))} 
            </section>
            <section className={classNameDescription}>
            {description.split(`\n`).map((text, t) => (
                <div key={t}>
                    {text}
                </div>
            ))}
            </section>
            <div className={stl.leanMore}>
                <button className={stl.leanMore__text}>Lean more</button>
            </div>
        </section>
    )
}

export default Case;
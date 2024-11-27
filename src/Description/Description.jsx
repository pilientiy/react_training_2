import css from './Description.module.css';

export function Description() {
    return (
        <div className={css.descriptionContainer}>
            <h1 className={css.descriptionHeader}>Sip Happens Cafe</h1>
            <p className={css.description}>
                Please leave your feedback about our services be selecting one of the options below.
            </p>
        </div>
    )
}

export default Description;
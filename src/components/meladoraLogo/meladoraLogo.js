export const Meladora = (props) => {
    return(
        <div className={`meladoraLogo ${props.blogClass}`}>
            {props.children}
        </div>
    )
}
function Footer(){
    const currYear = new Date().getFullYear();
    return(
        <footer>
            <hr />
            <p>{currYear} My Modules</p>
        </footer>
    )
}

export default Footer
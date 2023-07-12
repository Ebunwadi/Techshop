import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Ebube N. Techshop!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in the Beautiful Lagos City, Ebube N. Techshop provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    Ebube N. Techshop<br />
                    5 Adeba Drive<br />
                    Lagos City, Nigeria<br />
                    <a href="tel:+15555555555">(234) 813-625-6883</a>
                </address>
                <br />
                <p>Owner: Ebube Nwadiokwu</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public
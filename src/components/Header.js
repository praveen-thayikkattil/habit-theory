import Menu from './Menu';

const Header = () => {
    return (
        <>
            <Menu />

            <header className="app-header">
                <h1 className="app-logo animate__animated animate__fadeIn animate__delay-5s" title="Habit Theory">Habit Theory</h1>
            </header>
        </>
    )
}

export default Header

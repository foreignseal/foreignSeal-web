import Tab from "./components/Tab";
import Header from "./components/Header";
import Hero from "./components/Hero";
import './index.css';

function App() {
    return (
        <>
            <Tab />
            <div className="webContent">
                <Header />
                <Hero />
            </div>
        </>
    );
}

export default App;
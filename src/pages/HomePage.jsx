import Header from "../components/Header";
import DayCare from "../components/DayCare";
import WhyUs from "../components/WhyUs";
import Footer from '../components/Footer'
import Calendar from "../components/Calendar";
import background from '../asseets/images/background-dog.webp'

function HomePage() {
    return (
        <div style={{backgroundImage: `url(${background})`}}>
 <Header />

<DayCare/>

<WhyUs />

<Calendar />

<Footer />
        </div>
    )
}

export default HomePage
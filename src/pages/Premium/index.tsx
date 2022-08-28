import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PlanItem from "../../components/PlanList";
import BannerPremium from "../../components/BannerPremium";

export default function Premium() {
    return (
        <div>
            <Header />
            <BannerPremium />
            <PlanItem />
            <Footer />
        </div>
    )
}
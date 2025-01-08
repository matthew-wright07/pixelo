import Feature from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header/header";
import HomeHeader from "@/components/homeHeader/homeHeader";
import Pricing from "@/components/pricing";

export default function Home(){
    return (
        <>
        <Header />
        <HomeHeader />
        <Feature />
        <Pricing />
        <Footer />
        </>
    )
}
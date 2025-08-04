import CitiesComponents from "../components/CitiesComponents";

export default function CityWrapper() {
    return (
        <section id="Cities" className="flex flex-col gap-[30px] mt-[100px]">
            <div className="w-full max-w-[1130px] mx-auto flex items-center justify-between">
                <h2 className="font-bold text-[32px] leading-[48px] text-nowrap">
                    You Can Choose <br />
                    Our Favorite Cities
                </h2>
                <a
                    href="#"
                    className="rounded-full rounded-full py-3 px-5 bg-white font-bold"
                >
                    Explore All City
                </a>
            </div>
            <div className="swiper w-full">
                <div className="swiper-wrapper">
                    {/* Here */}
                    <CitiesComponents/>
                </div>
            </div>
        </section>
    );
}
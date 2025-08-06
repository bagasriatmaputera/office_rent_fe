import { useEffect, useState } from "react";
import CitiesComponents from "../components/CitiesComponents";
import type { City } from "../types/types";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

export default function CityWrapper() {
    const [city, setCity] = useState<City[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        axios.get('http://localhost/officeRentWebBE/public/api/cities', {
            headers: {
                'x-api-key': 'qwe23asd456#fsd$'
            }
        }).then((response) => {
            setLoading(false)
            setCity(response.data.data)
        }).catch((error) => {
            setError(error.message || 'Terjadi Error')
            setLoading(false)
        })
    }, []);
    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error}</p>
    }
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
                    {error}
                    {loading}
                    {/* Here */}
                    <Swiper
                        className='w-full mt-3 '
                        direction='horizontal'
                        spaceBetween={0}
                        slidesPerView={4}
                        slidesOffsetBefore={20}
                        slidesOffsetAfter={15}
                    >
                        {city.length > 0 ? (
                            city.map((cities) => (
                                <SwiperSlide key={cities.id}>
                                    <Link to={`/city/${cities.slug}`}>
                                        <CitiesComponents cities={cities} /></Link>
                                </SwiperSlide>
                            ))) : <p>Data kosong</p>
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
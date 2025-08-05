export default function CityDetails() {
    return (
        <>
            <nav className="bg-white">
                <div className="flex items-center justify-between w-full max-w-[1130px] py-[22px] mx-auto">
                    <a href="index.html">
                        <img src="/images/logos/logo.svg" alt="logo" />
                    </a>
                    <ul className="flex items-center gap-[50px] w-fit">
                        <li>
                            <a href="">Browse</a>
                        </li>
                        <li>
                            <a href="">Popular</a>
                        </li>
                        <li>
                            <a href="">Categories</a>
                        </li>
                        <li>
                            <a href="">Events</a>
                        </li>
                        <li>
                            <a href="view-booking-details.html">My Booking</a>
                        </li>
                    </ul>
                    <a
                        href="#"
                        className="flex items-center gap-[10px] rounded-full border border-[#000929] py-3 px-5"
                    >
                        <img
                            src="/images/icons/call.svg"
                            className="w-6 h-6"
                            alt="icon"
                        />
                        <span className="font-semibold">Contact Us</span>
                    </a>
                </div>
            </nav>
            <header className="flex flex-col w-full">
                <section id="Hero-Banner" className="relative flex h-[434px]">
                    <div
                        id="Hero-Text"
                        className="relative flex flex-col w-full max-w-[650px] h-fit rounded-[30px] border border-[#E0DEF7] p-10 gap-[30px] bg-white mt-[70px] ml-[calc((100%-1130px)/2)] z-10"
                    >
                        <h1 className="font-extrabold text-[50px] leading-[60px]">
                            Great Office in <br />{" "}
                            <span className="text-[#0D903A]">Jakarta Pusat City</span>
                        </h1>
                        <p className="text-lg leading-8 text-[#000929]">
                            Kantor yang tepat dapat memberikan impact pekerjaan menjadi lebih baik
                            dan sehat dalam tumbuhkan karir.
                        </p>
                    </div>
                    <div
                        id="Hero-Image"
                        className="absolute right-0 w-[calc(100%-((100%-1130px)/2)-305px)] h-[434px] rounded-bl-[40px] overflow-hidden"
                    >
                        <img
                            src="/images/thumbnails/thumbnail-details-4.png"
                            className="w-full h-full object-cover"
                            alt="hero background"
                        />
                    </div>
                </section>
            </header>
            <section
                id="Fresh-Space"
                className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[70px] mb-[120px]"
            >
                <h2 className="font-bold text-[32px] leading-[48px] text-nowrap">
                    Browse Offices
                </h2>
                <div className="grid grid-cols-3 gap-[30px]">
                    <a href="details.html" className="card">
                        <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] bg-white overflow-hidden">
                            <div className="thumbnail-container relative w-full h-[200px]">
                                <p className="absolute top-5 left-5 w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
                                    Popular
                                </p>
                                <img
                                    src="/images/thumbnails/thumbnails-1.png"
                                    className="w-full h-full object-cover"
                                    alt="thumbnails"
                                />
                            </div>
                            <div className="card-detail-container flex flex-col p-5 pb-[30px] gap-4">
                                <h3 className="line-clamp-2 font-bold text-[22px] leading-[36px] h-[72px]">
                                    Angga Park Central Master Silicon Valley Star Class
                                </h3>
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold text-xl leading-[30px]">
                                        Rp 18.560.000
                                    </p>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <p className="font-semibold">20 days</p>
                                        <img
                                            src="/images/icons/clock.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                    </div>
                                </div>
                                <hr className="border-[#F6F5FD]" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            src="/images/icons/location.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                        <p className="font-semibold">Jakarta Pusat</p>
                                    </div>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <p className="font-semibold">4.5/5</p>
                                        <img
                                            src="/images/icons/Star 1.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                    </div>
                                </div>
                                <hr className="border-[#F6F5FD]" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            src="/images/icons/wifi.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                        <p className="font-semibold">Fast-Connection</p>
                                    </div>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            src="/images/icons/security-user.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                        <p className="font-semibold">Secure 100%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="details-fully-booked.html" className="card">
                        <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] bg-white overflow-hidden">
                            <div className="thumbnail-container relative w-full h-[200px]">
                                <p className="absolute top-5 left-5 w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
                                    Popular
                                </p>
                                <img
                                    src="/images/thumbnails/thumbnails-3.png"
                                    className="w-full h-full object-cover"
                                    alt="thumbnails"
                                />
                            </div>
                            <div className="card-detail-container flex flex-col p-5 pb-[30px] gap-4">
                                <h3 className="line-clamp-2 font-bold text-[22px] leading-[36px] h-[72px]">
                                    Masayoshi Future Space
                                </h3>
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold text-xl leading-[30px]">
                                        Rp 18.560.000
                                    </p>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <p className="font-semibold">20 days</p>
                                        <img
                                            src="/images/icons/clock.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                    </div>
                                </div>
                                <hr className="border-[#F6F5FD]" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            src="/images/icons/location.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                        <p className="font-semibold">Jakarta Pusat</p>
                                    </div>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <p className="font-semibold">4.5/5</p>
                                        <img
                                            src="/images/icons/Star 1.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                    </div>
                                </div>
                                <hr className="border-[#F6F5FD]" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            src="/images/icons/wifi.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                        <p className="font-semibold">Fast-Connection</p>
                                    </div>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            src="/images/icons/security-user.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                        <p className="font-semibold">Secure 100%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="details-closed.html" className="card">
                        <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] bg-white overflow-hidden">
                            <div className="thumbnail-container relative w-full h-[200px]">
                                <p className="absolute top-5 left-5 w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
                                    Popular
                                </p>
                                <img
                                    src="/images/thumbnails/thumbnails-4.png"
                                    className="w-full h-full object-cover"
                                    alt="thumbnails"
                                />
                            </div>
                            <div className="card-detail-container flex flex-col p-5 pb-[30px] gap-4">
                                <h3 className="line-clamp-2 font-bold text-[22px] leading-[36px] h-[72px]">
                                    Angga Park Central Master Silicon Valley Star Class
                                </h3>
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold text-xl leading-[30px]">
                                        Rp 18.560.000
                                    </p>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <p className="font-semibold">20 days</p>
                                        <img
                                            src="/images/icons/clock.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                    </div>
                                </div>
                                <hr className="border-[#F6F5FD]" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            src="/images/icons/location.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                        <p className="font-semibold">Jakarta Pusat</p>
                                    </div>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <p className="font-semibold">4.5/5</p>
                                        <img
                                            src="/images/icons/Star 1.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                    </div>
                                </div>
                                <hr className="border-[#F6F5FD]" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            src="/images/icons/wifi.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                        <p className="font-semibold">Fast-Connection</p>
                                    </div>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            src="/images/icons/security-user.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                        <p className="font-semibold">Secure 100%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="details.html" className="card">
                        <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] bg-white overflow-hidden">
                            <div className="thumbnail-container relative w-full h-[200px]">
                                <p className="absolute top-5 left-5 w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
                                    Popular
                                </p>
                                <img
                                    src="/images/thumbnails/thumbnails-5.png"
                                    className="w-full h-full object-cover"
                                    alt="thumbnails"
                                />
                            </div>
                            <div className="card-detail-container flex flex-col p-5 pb-[30px] gap-4">
                                <h3 className="line-clamp-2 font-bold text-[22px] leading-[36px] h-[72px]">
                                    Angga Park Central Master Silicon Valley Star Class
                                </h3>
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold text-xl leading-[30px]">
                                        Rp 18.560.000
                                    </p>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <p className="font-semibold">20 days</p>
                                        <img
                                            src="/images/icons/clock.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                    </div>
                                </div>
                                <hr className="border-[#F6F5FD]" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            src="/images/icons/location.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                        <p className="font-semibold">Jakarta Pusat</p>
                                    </div>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <p className="font-semibold">4.5/5</p>
                                        <img
                                            src="/images/icons/Star 1.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                    </div>
                                </div>
                                <hr className="border-[#F6F5FD]" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            src="/images/icons/wifi.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                        <p className="font-semibold">Fast-Connection</p>
                                    </div>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            src="/images/icons/security-user.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                        <p className="font-semibold">Secure 100%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="details-closed.html" className="card">
                        <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] bg-white overflow-hidden">
                            <div className="thumbnail-container relative w-full h-[200px]">
                                <p className="absolute top-5 left-5 w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
                                    Popular
                                </p>
                                <img
                                    src="/images/thumbnails/thumbnails-6.png"
                                    className="w-full h-full object-cover"
                                    alt="thumbnails"
                                />
                            </div>
                            <div className="card-detail-container flex flex-col p-5 pb-[30px] gap-4">
                                <h3 className="line-clamp-2 font-bold text-[22px] leading-[36px] h-[72px]">
                                    Masayoshi Future Space
                                </h3>
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold text-xl leading-[30px]">
                                        Rp 18.560.000
                                    </p>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <p className="font-semibold">20 days</p>
                                        <img
                                            src="/images/icons/clock.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                    </div>
                                </div>
                                <hr className="border-[#F6F5FD]" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            src="/images/icons/location.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                        <p className="font-semibold">Jakarta Pusat</p>
                                    </div>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <p className="font-semibold">4.5/5</p>
                                        <img
                                            src="/images/icons/Star 1.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                    </div>
                                </div>
                                <hr className="border-[#F6F5FD]" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            src="/images/icons/wifi.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                        <p className="font-semibold">Fast-Connection</p>
                                    </div>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            src="/images/icons/security-user.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                        <p className="font-semibold">Secure 100%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="details-fully-booked.html" className="card">
                        <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] bg-white overflow-hidden">
                            <div className="thumbnail-container relative w-full h-[200px]">
                                <p className="absolute top-5 left-5 w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
                                    Popular
                                </p>
                                <img
                                    src="/images/thumbnails/thumbnails-2.png"
                                    className="w-full h-full object-cover"
                                    alt="thumbnails"
                                />
                            </div>
                            <div className="card-detail-container flex flex-col p-5 pb-[30px] gap-4">
                                <h3 className="line-clamp-2 font-bold text-[22px] leading-[36px] h-[72px]">
                                    Angga Park Central Master Silicon Valley Star Class
                                </h3>
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold text-xl leading-[30px]">
                                        Rp 18.560.000
                                    </p>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <p className="font-semibold">20 days</p>
                                        <img
                                            src="/images/icons/clock.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                    </div>
                                </div>
                                <hr className="border-[#F6F5FD]" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            src="/images/icons/location.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                        <p className="font-semibold">Jakarta Pusat</p>
                                    </div>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <p className="font-semibold">4.5/5</p>
                                        <img
                                            src="/images/icons/Star 1.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                    </div>
                                </div>
                                <hr className="border-[#F6F5FD]" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            src="/images/icons/wifi.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                        <p className="font-semibold">Fast-Connection</p>
                                    </div>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            src="/images/icons/security-user.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                        <p className="font-semibold">Secure 100%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </section>
        </>

    );
}
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import type { Office } from "../types/types";

// A placeholder for the CheckBooking component if it's not defined elsewhere
// const CheckBooking = () => <div>Check Booking Component</div>;

export default function BookOffice() {
    const { slug } = useParams<{ slug: string }>();
    const [office, setOffice] = useState<Office | null>(null);
    const [loading, setLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const baseUrl = 'http://localhost/officeRentWebBE/public/storage/';

    // Centralized state for form data
    const [formData, setFormData] = useState({
        name: '',
        phone_number: '',
        started_at: '',
        office_space_id: '',
        total_amount: 0, // Changed from totalAmountWithUniqueCode for consistency
    });

    // Centralized state for form validation errors
    const [formError, setFormError] = useState({
        name: '',
        phone_number: '',
        started_at: ''
    });

    const [uniqueNumber, setUniqueNumber] = useState<number>(0);

    // Fetch office details on component mount
    useEffect(() => {
        axios.get(`http://localhost/officeRentWebBE/public/api/officespace/${slug}`, {
            headers: {
                'x-api-key': 'qwe23asd456#fsd$'
            }
        }).then((response) => {
            const officeData = response.data.data;
            setOffice(officeData);

            // Calculate discount and final price
            const generatedUniqueNumber = Math.floor(100 + Math.random() * 900);
            const totalPrice = officeData.price - generatedUniqueNumber;
            setUniqueNumber(generatedUniqueNumber);

            // Set initial form data
            setFormData((prevData) => ({
                ...prevData,
                office_space_id: officeData.id,
                total_amount: totalPrice
            }));

            setLoading(false);
        }).catch((error: unknown) => {
            if (axios.isAxiosError(error)) {
                setError(error.message);
            } else {
                setError("An unexpected error occurred");
            }
            setLoading(false);
        });
    }, [slug]);

    // Handle input changes and clear corresponding errors
    const handleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Validate the form fields
    const validationForm = () => {
        let valid = true;
        let errorValidation = { name: '', phone_number: '', started_at: '' };

        if (!formData.name.trim()) {
            errorValidation.name = 'Nama Harus di isi';
            valid = false;
        }

        if (!formData.phone_number.trim()) {
            errorValidation.phone_number = 'Nomor Telp di perlukan';
            valid = false;
        } else if (!/^\d{10,15}$/.test(formData.phone_number)) {
            errorValidation.phone_number = "Nomor telepon harus 10-15 digit angka";
            valid = false;
        }

        if (!formData.started_at.trim()) {
            errorValidation.started_at = 'Tanggal harus dipilih';
            valid = false;
        } else {
            const today = new Date();
            today.setHours(0, 0, 0, 0); // Normalize today's date to midnight
            const selectedDay = new Date(formData.started_at);
            if (selectedDay < today) {
                errorValidation.started_at = 'Tidak boleh memasukan tanggal masa lampau';
                valid = false;
            }
        }

        setFormError(errorValidation);
        return valid;
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validationForm()) return;

        setIsLoading(true);
        setError(null); // Clear previous errors

        try {
            const response = await axios.post(`http://localhost/officeRentWebBE/public/api/booking-transaction`, {
                ...formData
            }, {
                headers: {
                    'x-api-key': 'qwe23asd456#fsd$'
                }
            });
            console.log('Form berhasil submit:', response.data)
            // Navigate on successful booking
            navigate('/success-booking', { // Recommended to navigate to a success page
                state: {
                    office,
                     BookingTransaction: response.data    // Corrected key
                }
            });
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                setError(error.response?.data?.message || error.message);
            } else {
                setError("An unexpected error occurred during booking.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    if (loading) {
        return <div className="text-center p-10">Loading ...</div>;
    }
    if (isLoading) {
        return <div className="text-center p-10">Loading post data...</div>;
    }

    if (error && !isLoading) { // Show general error if not related to form submission
        return <div className="text-center p-10 text-red-500">Error: {error}</div>;
    }

    return (
        <>
            <div
                id="Banner"
                className="relative w-full h-[240px] flex items-center shrink-0 overflow-hidden -mb-[50px]"
            >
                <h1 className="text-center mx-auto font-extrabold text-[40px] leading-[60px] text-white mb-5 z-20">
                    Start Booking Your Office
                </h1>
                <div className="absolute w-full h-full bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,#000000_91.83%)] z-10" />
                <img
                    src="/images/thumbnails/thumbnail-details-4.png" // Use relative path for public assets
                    className="absolute w-full h-full object-cover object-top"
                    alt="Banner"
                />
            </div>
            {/* The form now correctly handles submission */}
            <form
                onSubmit={handleSubmit}
                className="relative flex flex-wrap justify-center max-w-[1130px] mx-auto gap-[30px] mb-20 z-20"
            >
                <div className="flex flex-col shrink-0 w-full md:w-[500px] h-fit rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
                    <div className="flex items-center gap-4">
                        <div className="flex shrink-0 w-[140px] h-[100px] rounded-[20px] overflow-hidden">
                            <img
                                src={office?.thumbnail ? `${baseUrl}${office.thumbnail}` : '/images/placeholder.png'}
                                className="w-full h-full object-cover"
                                alt="thumbnail"
                                onError={(e) => { e.currentTarget.src = '/images/placeholder.png'; }}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-xl leading-[30px]">
                                {office?.name}
                            </p>
                            <div className="flex items-center gap-[6px]">
                                <img
                                    src="/images/icons/location.svg"
                                    className="w-6 h-6"
                                    alt="icon"
                                />
                                <p className="font-semibold">{office?.city?.name || 'N/A'}</p>
                            </div>
                        </div>
                    </div>
                    <hr className="border-[#F6F5FD]" />
                    <div className="flex flex-col gap-4">
                        <h2 className="font-bold">Complete The Details</h2>
                        {/* Name Input */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="font-semibold">
                                Full Name
                            </label>
                            <div className={`flex items-center rounded-full border px-5 gap-[10px] transition-all duration-300 ${formError.name ? 'border-red-500 ring-2 ring-red-200' : 'border-[#000929] focus-within:ring-2 focus-within:ring-[#0D903A]'}`}>
                                <img
                                    src="/images/icons/security-user-black.svg"
                                    className="w-6 h-6"
                                    alt="icon"
                                />
                                <input
                                    type="text"
                                    name="name"
                                    onChange={handleChanged}
                                    value={formData.name}
                                    id="name"
                                    className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#000929]"
                                    placeholder="Write your complete name"
                                />
                            </div>
                            {formError.name && <p className="text-red-500 text-sm mt-1 ml-4">{formError.name}</p>}
                        </div>
                        {/* Phone Number Input */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone" className="font-semibold">
                                Phone Number
                            </label>
                            <div className={`flex items-center rounded-full border px-5 gap-[10px] transition-all duration-300 ${formError.phone_number ? 'border-red-500 ring-2 ring-red-200' : 'border-[#000929] focus-within:ring-2 focus-within:ring-[#0D903A]'}`}>
                                <img
                                    src="/images/icons/call-black.svg"
                                    className="w-6 h-6"
                                    alt="icon"
                                />
                                <input
                                    type="tel"
                                    name="phone_number"
                                    onChange={handleChanged}
                                    value={formData.phone_number}
                                    id="phone"
                                    className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#000929]"
                                    placeholder="Write your valid number"
                                />
                            </div>
                            {formError.phone_number && <p className="text-red-500 text-sm mt-1 ml-4">{formError.phone_number}</p>}
                        </div>
                        {/* Date Input */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="date" className="font-semibold">
                                Started At
                            </label>
                            <div className={`flex items-center rounded-full border px-5 gap-[10px] transition-all duration-300 overflow-hidden ${formError.started_at ? 'border-red-500 ring-2 ring-red-200' : 'border-[#000929] focus-within:ring-2 focus-within:ring-[#0D903A]'}`}>
                                <img
                                    src="/images/icons/calendar-black.svg"
                                    className="w-6 h-6"
                                    alt="icon"
                                />
                                <input
                                    type="date"
                                    value={formData.started_at}
                                    name="started_at"
                                    onChange={handleChanged}
                                    id="date"
                                    className="relative appearance-none outline-none w-full py-3 font-semibold [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0"
                                />
                            </div>
                            {formError.started_at && <p className="text-red-500 text-sm mt-1 ml-4">{formError.started_at}</p>}
                        </div>
                    </div>
                    <hr className="border-[#F6F5FD]" />
                    <div className="flex items-center gap-3">
                        <img
                            src="/images/icons/shield-tick.svg"
                            className="w-[30px] h-[30px]"
                            alt="icon"
                        />
                        <p className="font-semibold leading-[28px]">
                            Kami akan melindungi privasi Anda sebaik mungkin sehingga dapat fokus
                            bekerja
                        </p>
                    </div>
                </div>
                <div className="flex flex-col shrink-0 w-full md:w-[400px] h-fit rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
                    <h2 className="font-bold">Your Order Details</h2>
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center justify-between">
                            <p className="font-semibold">Duration</p>
                            <p className="font-bold">{office?.duration || 0} Days Working</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="font-semibold">Sub Total</p>
                            <p className="font-bold">Rp {(office?.price || 0).toLocaleString('id-ID')}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="font-semibold">Unique Code</p>
                            <p className="font-bold text-[#FF2D2D]">-Rp {uniqueNumber.toLocaleString('id-ID')}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="font-semibold">Grand Total</p>
                            <p className="font-bold text-[22px] leading-[33px] text-[#0D903A]">
                                Rp {formData.total_amount.toLocaleString('id-ID')}
                            </p>
                        </div>
                        <div className="relative rounded-xl p-[10px_20px] gap-[10px] bg-[#000929] text-white">
                            <img
                                src="/images/icons/Polygon 1.svg"
                                className="absolute -top-[15px] right-[10px] "
                                alt=""
                            />
                            <p className="font-semibold text-sm leading-[24px] z-10">
                                Tolong perhatikan kode unik berikut ketika melakukan pembayaran
                                kantor
                            </p>
                        </div>
                    </div>
                    <hr className="border-[#F6F5FD]" />
                    <h2 className="font-bold">Send Payment to</h2>
                    <div className="flex flex-col gap-[30px]">
                        {/* Bank Details */}
                        <div className="flex items-center gap-3">
                            <div className="w-[71px] flex shrink-0">
                                <img
                                    src="/images/logos/bca.svg"
                                    className="w-full object-contain"
                                    alt="bank logo"
                                />
                            </div>
                            <div className="flex flex-col gap-[2px]">
                                <div className="flex items-center gap-1">
                                    <p className="font-semibold">BPR Company</p>
                                    <img
                                        src="/images/icons/verify.svg"
                                        className="w-[18px] h-[18px]"
                                        alt="icon"
                                    />
                                </div>
                                <p>8008129839</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-[71px] flex shrink-0">
                                <img
                                    src="/images/logos/mandiri.svg"
                                    className="w-full object-contain"
                                    alt="bank logo"
                                />
                            </div>
                            <div className="flex flex-col gap-[2px]">
                                <div className="flex items-center gap-1">
                                    <p className="font-semibold">BRP Bank Mandiri</p>
                                    <img
                                        src="/images/icons/verify.svg"
                                        className="w-[18px] h-[18px]"
                                        alt="icon"
                                    />
                                </div>
                                <p>12379834983281</p>
                            </div>
                        </div>
                    </div>
                    <hr className="border-[#F6F5FD]" />
                    {/* Display submission error */}
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex items-center justify-center w-full rounded-full p-[16px_26px] gap-3 bg-[#0D903A] font-bold text-[#F7F7FD] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    >
                        <span>{isLoading ? 'Processing...' : 'I’ve Made The Payment'}</span>
                    </button>
                </div>
            </form>
        </>
    );
}

// Mock Office type for demonstration if not provided

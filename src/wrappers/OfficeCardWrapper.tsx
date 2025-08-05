import { useEffect, useState } from "react";
import OfficeCardComponents from "../components/OfficeCardComponents";
import type { Office } from "../types/types";
import axios from "axios";

export default function OfficeCardWrapper() {
    const [office, setOffice] = useState<Office[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        axios.get('http://localhost/officeRentWebBE/public/api/officespaces', {
            headers: {
                'x-api-key': 'qwe23asd456#fsd$'
            }
        })
            .then((response) => {
                setLoading(false)
                setOffice(response.data.data)
            })
            .catch((error) => {
                setLoading(false)
                setError(error.message)
            })
    })
    return (
        <section
            id="Fresh-Space"
            className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[100px] mb-[120px]"
        >
            <h2 className="font-bold text-[32px] leading-[48px] text-nowrap text-center">
                Browse Our Fresh Space.
                <br />
                For Your Better Productivity.
            </h2>
            <div className="grid grid-cols-3 gap-[30px]">
                {error}
                {loading}
                {office.map((office) => (
                    <OfficeCardComponents key={office.id} office={office} />
                ))}
            </div>
        </section>
    );
}
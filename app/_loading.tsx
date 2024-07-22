'use client';
import {useEffect, useState} from "react";

export default function Loading() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        console.log('loading');
    }, []);

    if (!loading) {
        return <div></div>
    } else {
        return <div className="w-screen h-screen bg-base-100 flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
        </div>
    }

}
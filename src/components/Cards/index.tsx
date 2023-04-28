import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export interface IProductProps {
    id?: string;
    name?: string;
    avaliation?: string;
    price?: number;
    url?: string;
    picture?: string;
    description?: string;
}

export default function Card({
    name,
    picture,
    description,
    price,
    url,
    avaliation,
}: IProductProps) {
    const [products, setProducts] = useState<IProductProps[]>([]);

    useEffect(() => {
        api.get<IProductProps[]>(`/products`)
            .then((response) => {
                setProducts(response.data);
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <div className="w-full p-6 inline-flex gap-x-2 space-x-5 overflow-x-auto  bg-green-300">
            {products.map(
                ({
                    price,
                    description,
                    id,
                    name,
                    picture,
                    url,
                    avaliation,
                }) => (
                    <div className="md:max-w-[40rem] bg-red-300 flex  justify-center items-center h-[20rem] md:max-h-64 md:h-[40rem] border-b-[1px] border-b-slate-600">
                        Teste
                    </div>
                )
            )}
        </div>
    );
}

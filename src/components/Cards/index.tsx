export interface IProductProps {
    key?: string;
    name?: string;
    price?: number;
    picture?: string;
    avaliation?: string;
    description?: string;
}

export default function Card({
    name,
    picture,
    description,
    price,
    avaliation,
}: IProductProps) {
    return (
        <div className="w-full min-w-[15rem] p-6 flex flex-col gap-x-2 space-x-5 transition duration-300 hover:translate-y-2 bg-white rounded-sm shadow-2xl drop-shadow-md">
            <div className="w-full h-3/4 bg-red-300 border-[1px] border-b-slate-500">
                <img src={picture} alt="Imagem do produto" />
            </div>
            <div className="">Descrição</div>
        </div>
    );
}

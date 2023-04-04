import { ButtonLink } from '../Buttom';

export default function Banner() {
    return (
        <>
            <div className="w-full md:h-[20rem] bg-theme-blue-50 rounded-md shadow-md p-8 text-white font-roboto space-y-[3rem] mb-6">
                <div className="w-full md:h-[5rem] flex justify-center items-center text-center ">
                    <span className="text-white font-bold text-3xl">
                        Seja muito bem-vindo(a) ao nosso E-commerce
                    </span>
                </div>
                <div className="w-full flex flex-col justify-center items-center p-3 space-y-4">
                    <span className="text-white font-semibold text-center text-xl">
                        Fique por dentro de nossas ofertas e produtos
                    </span>
                    <ButtonLink url="/products" pattern="primary">
                        Saiba mais
                    </ButtonLink>
                </div>
            </div>
        </>
    );
}

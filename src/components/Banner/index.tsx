import Button from '../Buttom';

export default function Banner() {
    return (
        <>
            <div className="w-full h-[20rem] bg-theme-blue-50 rounded-md shadow-md p-6 text-white font-roboto">
                <div className="w-full flex justify-center items-center text-center">
                    <span className="text-white font-bold text-3xl">
                        Seja muito bem-vindo(a) ao nosso E-commerce
                    </span>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                    <Button>Saiba mais</Button>
                </div>
            </div>
        </>
    );
}

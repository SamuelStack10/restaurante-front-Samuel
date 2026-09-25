import Link from "next/link";


export default function Navbar(){

    return(

        <header className="w-full bg-red-950 border-b shadow-sm">
            <nav className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
                <Link href="/" 
                className="flex items-center gap-2 text-2xl font-bold text-yellow-300">
                    Restaurante Sabor Eduardo 
                </Link>

                <div className="flex items-center gap-8">

                    <Link href="/admin" className="text-gray-100 
                    hover:text-yellow-500 transition">
                        Inicio
                    </Link>

                    <Link href="/cardapio" 
                    className="text-gray-100 
                    hover:text-yellow-500 transition">
                        Cardápio
                    </Link>

                    <Link href="/sobre" className="text-gray-100 
                    hover:text-yellow-500 transition">
                        Sobre nós
                    </Link>

                    <Link href="/pedidos"
                    className="text-gray-100 
                    hover:text-yellow-500 transition"
                    >
                        Fazer pedido
                    </Link>

                </div>

            </nav>
        </header>

    )

}
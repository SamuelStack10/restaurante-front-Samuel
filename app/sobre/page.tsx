import Image from "next/image";
import Navbar from "@/components/Navbar"

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-red-900 px-6 py-12">
      <Navbar />
      <div className="mx-auto max-w-5xl">

        {/* Título */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-yellow-300">
            Sobre nós
          </h1>

          <p className="mt-3 text-yellow-100">
            Conheça um pouco mais sobre o nosso restaurante
          </p>
        </div>

        {/* Conteúdo */}
        <div className="grid items-center gap-10 md:grid-cols-2">

          {/* Imagem */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/Restaurante.jpeg"
              alt="Restaurante"
              width={600}
              height={400}
              className="h-100 w-full object-cover"
            />
          </div>

          {/* Texto */}
          <div>
            <h2 className="mb-5 text-3xl font-bold text-yellow-500">
              Bem-vindo ao nosso restaurante
            </h2>

            <p className="mb-5 text-lg leading-8 text-yellow-100">
              Somos um restaurante dedicado a oferecer comida saborosa,
              preparada com ingredientes selecionados e muito carinho.
            </p>

            <p className="mb-6 text-lg leading-8 text-yellow-100">
              Nosso compromisso é proporcionar uma experiência especial
              para nossos clientes, unindo qualidade, sabor e um
              atendimento acolhedor.
            </p>

            {/* Destaques */}
            <div className="grid grid-cols-3 gap-4">

              <div className="rounded-xl bg-amber-500 p-4 text-center shadow-sm transition-transform duration-300 hover:scale-110">
                <span className="text-2xl">🍽️</span>
                <p className="mt-2 font-semibold text-red-950">
                  Sabor
                </p>
              </div>

              <div className="rounded-xl bg-amber-500 p-4 text-center shadow-sm transition-transform duration-300 hover:scale-110">
                <span className="text-2xl">⭐</span>
                <p className="mt-2 font-semibold text-red-950">
                  Qualidade
                </p>
              </div>

              <div className="rounded-xl bg-amber-500 p-4 text-center shadow-sm transition-transform duration-300 hover:scale-110">
                <span className="text-2xl">❤️</span>
                <p className="mt-2 font-semibold text-red-950">
                  Carinho
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
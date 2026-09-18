"use client"

import Navbar from '@/components/Navbar'
import Image from 'next/image'


export default function Pedidos() {

  async function cadastrar(e:any) {
    e.preventDefault()
    alert("Produto cadastrado com sucesso!")
  }


  return (
    
    <main className="min-h-screen bg-red-900 items-center justify-center p-6 ">
    <Navbar />
    <div className="w-full max-w-lg bg-red-950 rounded-xl shadow-md p-8 grid grid-cols mt-4 ml-120 gap-4">
     
     <Image
     src="/RestauranteLogo2.jpeg"
     alt="Logotipo"
     width={100}
     height={100}
     className="mx-auto mb-4 rounded-full shadow-lg"
     />

    

      <input type="text"
      placeholder="Digite a descricao..."
      className="w-full rounded-xl border border-gray-200 bg-red-950 px-4 py-3 text-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />

      <input type="number"
      placeholder="Digite o preço..."
      className="w-full rounded-xl border border-gray-200 bg-red-950 px-4 py-3 text-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />

      <input type="text"
      placeholder="Digite a categoria..."
      className="w-full rounded-xl border border-gray-200 bg-red-950  px-4 py-3 text-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />

      <input type="text"
      placeholder="O lanche está disponivel?"
      className="w-full rounded-xl border border-gray-200 bg-red-950 px-4 py-3 text-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />

      <button 
      onClick={cadastrar}
      className="w-full rounded-xl 
      bg-amber-600 px-4 py-3 
      font-medium text-white shadow-sm cursor-pointer 
      hover:bg-amber-800" 
      >
        Cadastrar
      </button>


    </div>
    </main>
  );
}

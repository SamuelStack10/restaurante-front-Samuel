"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import axios from "axios"
import Image from "next/image"

export default function Cadastro() {
    const router = useRouter()

    const[nome, setNome] = useState("")
    const[email, setEmail] = useState("")
    const[senha, setSenha] = useState("")

    async function cadastrar(e){
        e.preventDefault()
        try {
            await axios.post(`https://${process.env.NEXT_PUBLIC_API_URL}/register`, {
                nome,
                email,
                senha
            })
            alert("Cadastro realizado com sucesso!")
            router.push("/login")
        } catch (error) {
            console.error("Erro ao cadastrar:", error)
            alert("Erro ao realizar cadastro!")
        }
    }

    return(
        <main className="flex min-h-screen items-center justify-center bg-red-900">
        

        <form onSubmit={cadastrar} className="flex flex-col gap-4 w-full max-w-md mx-auto mt-10 p-8 bg-red-950 rounded-lg shadow-lg">
        
            <Image
            src="/RestauranteLogo2.jpeg"
            alt="Logo do restaurante"
            width={100}
            height={100}
            className="mx-auto mb-4 rounded-full"
            />
            <h1 className="text-3xl mb-8 text-center text-yellow-300 font-bold ">Sabor Eduardo - Cadastro</h1>

            <label htmlFor="nome" className="text-yellow-300 font-semibold">Nome:</label>
            <input type="text"
            value={nome}
            placeholder="Digite seu nome"
            className="w-full rounded-lg border p-3 
            outline-none focus:ring-2 focus:ring-yellow-500 mb-4"
            onChange={(e)=>setNome(e.target.value)}
            required
            />

            <label htmlFor="email" className="text-yellow-300 font-semibold">Email:</label>
            <input type="email"
            value={email}
            placeholder="Digite seu email"
            className="w-full rounded-lg border p-3 
            outline-none focus:ring-2 focus:ring-yellow-500 mb-4"
            onChange={(e)=>setEmail(e.target.value)}
            required
            />

            <label htmlFor="senha" className="text-yellow-300 font-semibold">Senha:</label>
            <input type="password"
            value={senha}
            placeholder="Digite sua senha"
            className="w-full rounded-lg border p-3 
            outline-none focus:ring-2 focus:ring-yellow-500 mb-4"
            onChange={(e)=>setSenha(e.target.value)}
            required
            />

        <button type="submit" className="bg-yellow-500 text-white py-2 px-4 rounded-lg h-12 hover:bg-yellow-600">
            Cadastrar
        </button>

    </form>
    
    </main>
)};
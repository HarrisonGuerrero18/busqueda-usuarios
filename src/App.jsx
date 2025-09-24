import { useCallback, useEffect, useState } from 'react'

import axios from 'axios'

import Card from './components/Card'

import SearchInput from './components/SearchInput'

export default function App() {
  const [usuarios, setUsuarios] = useState([])

  const [filtrados, setFiltrados] = useState([])

  const obtenerUsuarios = async () => {
    try {
      const response = await axios.get('http://localhost:8000/usuarios')

      setUsuarios(response.data)

      setFiltrados(response.data)
    } catch (error) {
      console.error('Error al obtener usuarios:', error)
    }
  }

  console.log(usuarios)

  useEffect(() => {
    obtenerUsuarios()
  }, [])

  const filtrarUsuarios = useCallback(
    (query) => {
      const q = query.trim().toLowerCase()

      const resultados = usuarios.filter((usuario) =>
        [usuario.nombre, usuario.perfil, usuario.intereses, usuario.email].some(
          (campo) => String(campo).toLowerCase().includes(q)
        )
      )

      setFiltrados(resultados)
    },
    [usuarios]
  )

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        BUSCADOR DE USUARIOS
      </h1>
      <SearchInput onSearch={filtrarUsuarios} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {filtrados.map((usuario) => (
          <Card key={usuario.id} usuario={usuario} />
        ))}
      </div>
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/utils/supabase'
import { useRouter } from 'next/navigation'
import { User, MessageCircle, CreditCard, Phone, Video, Settings, LogOut } from 'lucide-react'

interface Profile {
  id: string
  username: string
  email: string
  credits_balance?: number
}

export default function Dashboard() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('discover')
  const router = useRouter()

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/auth')
        return
      }

      const { data: profile } = await supabase
        .from('profiles')
        .select('*, credits(balance)')
        .eq('id', user.id)
        .single()

      setProfile(profile)
    } catch (error) {
      console.error('Error loading profile:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center">
        <div className="text-white text-xl">Carregando...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-black bg-opacity-20">
        <h1 className="text-2xl font-bold text-white">ConnectAll</h1>
        <div className="flex items-center space-x-4">
          <div className="text-white">
            <span className="font-semibold">{profile?.username}</span>
            <div className="text-sm text-yellow-300">
              💰 {profile?.credits_balance || 0} créditos
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="text-white hover:text-red-300 transition"
          >
            <LogOut size={20} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <nav className="w-64 bg-white bg-opacity-10 backdrop-blur-lg p-4">
          <div className="space-y-2">
            <button
              onClick={() => setActiveTab('discover')}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg transition ${
                activeTab === 'discover'
                  ? 'bg-yellow-400 text-black'
                  : 'text-white hover:bg-white hover:bg-opacity-20'
              }`}
            >
              <User size={20} />
              <span>Descobrir</span>
            </button>

            <button
              onClick={() => setActiveTab('chats')}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg transition ${
                activeTab === 'chats'
                  ? 'bg-yellow-400 text-black'
                  : 'text-white hover:bg-white hover:bg-opacity-20'
              }`}
            >
              <MessageCircle size={20} />
              <span>Chats</span>
            </button>

            <button
              onClick={() => setActiveTab('credits')}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg transition ${
                activeTab === 'credits'
                  ? 'bg-yellow-400 text-black'
                  : 'text-white hover:bg-white hover:bg-opacity-20'
              }`}
            >
              <CreditCard size={20} />
              <span>Créditos</span>
            </button>

            <button
              onClick={() => setActiveTab('calls')}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg transition ${
                activeTab === 'calls'
                  ? 'bg-yellow-400 text-black'
                  : 'text-white hover:bg-white hover:bg-opacity-20'
              }`}
            >
              <Phone size={20} />
              <span>Chamadas</span>
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg transition ${
                activeTab === 'settings'
                  ? 'bg-yellow-400 text-black'
                  : 'text-white hover:bg-white hover:bg-opacity-20'
              }`}
            >
              <Settings size={20} />
              <span>Configurações</span>
            </button>
          </div>
        </nav>

        {/* Content Area */}
        <main className="flex-1 p-6">
          {activeTab === 'discover' && (
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Descobrir Pessoas</h2>
              <p className="text-xl mb-8">Encontre conexões incríveis perto de você!</p>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {/* Placeholder cards for users */}
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6 hover:bg-opacity-30 transition">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mx-auto mb-4"></div>
                    <h3 className="font-semibold text-lg mb-2">Usuário {i}</h3>
                    <p className="text-sm mb-4">Olá! Vamos conversar?</p>
                    <button className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition">
                      Conversar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'chats' && (
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Seus Chats</h2>
              <p className="text-xl mb-8">Converse gratuitamente com suas conexões!</p>
              <div className="max-w-2xl mx-auto space-y-4">
                {/* Placeholder chat list */}
                <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-4 hover:bg-opacity-30 transition">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    <div className="flex-1 text-left">
                      <h3 className="font-semibold">Usuário Exemplo</h3>
                      <p className="text-sm text-gray-200">Última mensagem...</p>
                    </div>
                    <span className="text-sm text-gray-300">2h atrás</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'credits' && (
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Sistema de Créditos</h2>
              <p className="text-xl mb-8">Você tem {profile?.credits_balance || 0} créditos</p>
              <div className="max-w-md mx-auto space-y-4">
                <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Comprar Créditos</h3>
                  <div className="space-y-3">
                    <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg hover:from-pink-600 hover:to-purple-600 transition">
                      Plano Voz - R$9,99 (100 créditos)
                    </button>
                    <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg hover:from-purple-600 hover:to-blue-600 transition">
                      Plano Vídeo - R$14,99 (200 créditos)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'calls' && (
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Histórico de Chamadas</h2>
              <p className="text-xl mb-8">Suas chamadas recentes</p>
              <div className="max-w-2xl mx-auto space-y-4">
                <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Phone className="text-green-400" size={24} />
                      <div>
                        <h3 className="font-semibold">Chamada de Voz</h3>
                        <p className="text-sm text-gray-200">com Usuário Exemplo</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">5 min</p>
                      <p className="text-sm text-yellow-300">-10 créditos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Configurações</h2>
              <p className="text-xl mb-8">Personalize seu perfil</p>
              <div className="max-w-md mx-auto bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome de usuário</label>
                    <input
                      type="text"
                      defaultValue={profile?.username}
                      className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Bio</label>
                    <textarea
                      className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      rows={3}
                      placeholder="Conte um pouco sobre você..."
                    />
                  </div>
                  <button className="w-full bg-yellow-400 text-black py-2 rounded-lg hover:bg-yellow-500 transition">
                    Salvar Alterações
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
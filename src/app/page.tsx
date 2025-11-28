import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          ConnectAll
        </h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:text-yellow-300 transition">Sobre</a>
          <a href="#features" className="hover:text-yellow-300 transition">Recursos</a>
          <a href="#pricing" className="hover:text-yellow-300 transition">Preços</a>
          <a href="#download" className="bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-400 transition">
            Baixar App
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
          Conecte-se com Todos, Sem Limites!
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          O ConnectAll é o app de encontros para todos os gêneros e orientações. Chat gratuito, chamadas de voz e vídeo pagas com créditos acessíveis. Descubra conexões reais hoje!
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition transform hover:scale-105">
            Comece Agora
          </button>
          <button className="border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-500 transition">
            Saiba Mais
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6 text-purple-600">Sobre o ConnectAll</h3>
          <p className="text-lg mb-8">
            Inspirado no sucesso do Grindr, o ConnectAll quebra barreiras e une pessoas de todos os gêneros. Seja você hétero, gay, bi, trans ou qualquer orientação, encontre conexões autênticas aqui.
          </p>
          <p className="text-lg">
            Nosso foco é na interação genuína: chat gratuito sem fotos para uma experiência segura e focada na conversa.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Recursos Incríveis
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center hover:bg-opacity-30 transition">
              <div className="text-6xl mb-4">💬</div>
              <h4 className="text-2xl font-semibold mb-2">Chat Gratuito</h4>
              <p>Interaja com mensagens de texto sem custo. Sem fotos para manter o foco na conversa e privacidade.</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center hover:bg-opacity-30 transition">
              <div className="text-6xl mb-4">🎤</div>
              <h4 className="text-2xl font-semibold mb-2">Chamadas de Voz Pagas</h4>
              <p>Até 10 minutos por chamada. Preço acessível com créditos que você ganha ao contribuir.</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center hover:bg-opacity-30 transition">
              <div className="text-6xl mb-4">📹</div>
              <h4 className="text-2xl font-semibold mb-2">Chamadas de Vídeo Pagas</h4>
              <p>Até 30 minutos por chamada. Plano médio a R$14,99 para acesso ilimitado com créditos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6 text-purple-600">Sistema de Créditos</h3>
          <p className="text-lg mb-8">
            Pague uma vez e ganhe créditos para chamadas ilimitadas. Flexível e acessível para todos.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-purple-500 p-6 rounded-lg hover:shadow-lg transition">
              <h4 className="text-2xl font-semibold mb-4">Plano Voz</h4>
              <p className="text-4xl font-bold text-purple-600 mb-4">R$9,99</p>
              <ul className="text-left mb-6">
                <li>✓ Até 10 min por chamada</li>
                <li>✓ Créditos para voz</li>
                <li>✓ Acesso imediato</li>
              </ul>
              <button className="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition">
                Escolher Plano
              </button>
            </div>
            <div className="border-2 border-pink-500 p-6 rounded-lg hover:shadow-lg transition">
              <h4 className="text-2xl font-semibold mb-4">Plano Vídeo</h4>
              <p className="text-4xl font-bold text-pink-600 mb-4">R$14,99</p>
              <ul className="text-left mb-6">
                <li>✓ Até 30 min por chamada</li>
                <li>✓ Créditos para vídeo</li>
                <li>✓ Qualidade HD</li>
              </ul>
              <button className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition">
                Escolher Plano
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-6 text-center">
        <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Baixe Agora e Comece a Conectar!
        </h3>
        <p className="text-xl mb-8">Disponível para iOS e Android. Junte-se a milhares de usuários felizes.</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition">
            App Store
          </button>
          <button className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition">
            Google Play
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 text-center bg-black bg-opacity-50">
        <p>&copy; 2023 ConnectAll. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
import React from 'react';
import heroImage from './assets/hero-image.jpg';

// Use simple SVG icons for visual appeal without external deps issues
const ShoppingBagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><polyline points="20 6 9 17 4 12"/></svg>
);

function App() {
  const affiliateLink = "https://seulinkdeafiliado.com/produto-moda"; // Placeholder for user's link

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <ShoppingBagIcon />
              <span className="ml-2 text-xl font-bold text-gray-900">Sempre na Moda</span>
            </div>
            <a 
              href={affiliateLink}
              className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-800 transition-colors"
            >
              Comprar Agora
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-pink-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col-reverse lg:flex-row items-center">
          <div className="lg:w-1/2 mt-10 lg:mt-0 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
              A elegância que você <span className="text-pink-600">merece</span>, no estilo que você ama.
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Descubra a nova coleção que está transformando guarda-roupas. 
              Peças exclusivas, conforto inigualável e aquele toque de sofisticação 
              para o seu dia a dia.
            </p>
            <div className="mt-10 flex justify-center lg:justify-start gap-4">
              <a 
                href={affiliateLink} 
                className="px-8 py-4 bg-pink-600 text-white text-lg font-bold rounded-lg shadow-lg hover:bg-pink-800 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                Quero Ver a Coleção
              </a>
              <a 
                href="#detalhes" 
                className="px-8 py-4 bg-white text-pink-600 text-lg font-bold rounded-lg shadow border border-pink-600 hover:bg-gray-50 transition-all"
              >
                Saiba Mais
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              *Frete Grátis para todo o Brasil na primeira compra.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            {/* Placeholder Image - replace with real product image */}
            <div className="relative">
              <div className="absolute inset-0 bg-pink-600 opacity-20 blur-3xl rounded-full"></div>
              <img
                src={heroImage}
                alt="Modelo vestindo roupa elegante"
                className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover hover:scale-105 transition-transform duration-500"
                fetchpriority="high"
                width="1200"
                height="800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features/Benefits Section */}
      <section id="detalhes" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-pink-600 font-semibold tracking-wide uppercase">Por que escolher?</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Mais do que moda, um estilo de vida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Qualidade Premium",
                desc: "Tecidos selecionados a dedo para garantir durabilidade e um caimento perfeito no corpo."
              },
              {
                title: "Design Exclusivo",
                desc: "Modelagens pensadas para valorizar sua silhueta, seguindo as últimas tendências de Paris e Milão."
              },
              {
                title: "Conforto Total",
                desc: "Beleza não precisa machucar. Nossas peças são desenvolvidas para você usar o dia todo sem incômodo."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-pink-50 rounded-lg flex items-center justify-center mb-6">
                  <CheckIcon />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12">Quem comprou, amou! ❤</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Juliana Mendes",
                role: "Advogada",
                text: "Chegou super rápido e o vestido é ainda mais lindo pessoalmente. O tecido é muito macio!"
              },
              {
                name: "Carla Souza",
                role: "Empresária",
                text: "Estava receosa de comprar online, mas o guia de medidas funcionou perfeitamente. Recomendo demais."
              },
              {
                name: "Beatriz Lima",
                role: "Designer",
                text: "Amei a experiência de compra. A embalagem é um capricho e a peça veste super bem."
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(star => <StarIcon key={star} />)}
                </div>
                <p className="italic text-gray-300 mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-pink-600 flex items-center justify-center font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-pink-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronta para renovar seu look?</h2>
          <p className="text-xl md:text-2xl mb-10 text-pink-100">
            Aproveite nossa oferta especial por tempo limitado.
          </p>
          <a 
            href={affiliateLink}
            className="inline-block bg-white text-pink-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors shadow-xl"
          >
            GARANTIR MINHA PEÇA AGORA
          </a>
          <p className="mt-8 text-sm opacity-80">
            Compra 100% Segura • Satisfação Garantida
          </p>
        </div>
      </section>

      <footer className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sempre na Moda. Todos os direitos reservados.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-pink-600">Termos de Uso</a>
            <a href="#" className="hover:text-pink-600">Política de Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

// Sections Content - Conteúdo das seções principais
const sectionsHTML = `
        <!-- Missão Section -->
        <section id="missao" class="py-20 md:py-32 bg-black animate-on-scroll">
            <div class="max-w-6xl mx-auto px-4 text-center">
                <h2 class="font-title text-4xl sm:text-5xl text-[#A9A938] uppercase mb-4 tracking-widest border-b-2 border-dashed border-[#222] pb-4 inline-block">
                    O PROJETO INVICTO
                </h2>
                <p class="font-body text-gray-400 max-w-3xl mx-auto mt-6 text-lg">
                    Não é apenas treino. É uma missão. Projetado para quem busca performance de elite e uma estética que reflete sua força interior. Implementamos a disciplina militar na sua rotina para criar um corpo e uma mente inquebráveis.
                </p>

                <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
                    <!-- Pilar 1 -->
                    <div class="p-8 border-2 border-gray-800 rounded-lg shadow-inner shadow-[#A9A938]/20 transition duration-300 hover:border-[#A9A938]">
                        <svg class="h-10 w-10 text-[#A9A938] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 10v4m0-4h4m-4 0V7m0 3H7" />
                        </svg>
                        <h3 class="font-title text-xl text-white uppercase tracking-widest mb-2">Mentalidade Tática</h3>
                        <p class="text-gray-500 font-body text-sm">Disciplina inquebrável e foco de elite.</p>
                    </div>
                    
                    <!-- Pilar 2 -->
                    <div class="p-8 border-2 border-gray-800 rounded-lg shadow-inner shadow-[#A9A938]/20 transition duration-300 hover:border-[#A9A938]">
                        <svg class="h-10 w-10 text-[#A9A938] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h3 class="font-title text-xl text-white uppercase tracking-widest mb-2">Força Bruta</h3>
                        <p class="text-gray-500 font-body text-sm">Rotinas focadas em progressão de carga.</p>
                    </div>

                    <!-- Pilar 3 -->
                    <div class="p-8 border-2 border-gray-800 rounded-lg shadow-inner shadow-[#A9A938]/20 transition duration-300 hover:border-[#A9A938]">
                        <svg class="h-10 w-10 text-[#A9A938] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 6-6M4 21h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                        </svg>
                        <h3 class="font-title text-xl text-white uppercase tracking-widest mb-2">Estética de Elite</h3>
                        <p class="text-gray-500 font-body text-sm">Resultados que refletem sua força interior.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Divisor -->
        <div class="w-full h-px bg-gray-800 my-8 max-w-6xl mx-auto"></div>

        <!-- Arsenal Section -->
        <section id="arsenal" class="py-20 md:py-32 bg-black animate-on-scroll">
            <div class="max-w-6xl mx-auto px-4">
                <h2 class="font-title text-4xl sm:text-5xl text-white uppercase mb-3 tracking-widest text-center">
                    NOSSO ARSENAL
                </h2>
                <h3 class="font-body text-xl text-[#A9A938] font-light text-center mb-16 tracking-wider">
                    O MÉTODO TÁTICO
                </h3>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <!-- Bloco 1 -->
                    <div class="bg-[#111] p-8 rounded-lg border-l-4 border-[#A9A938] hover:shadow-lg hover:shadow-[#A9A938]/20 transition duration-500">
                        <span class="font-title text-5xl text-[#A9A938] block mb-2">01</span>
                        <h4 class="font-title text-2xl text-white uppercase mb-4 tracking-widest">Análise de Campo</h4>
                        <p class="text-gray-400 mb-4">Avaliação detalhada de força, desempenho, biomecânica e histórico. Definimos o ponto de partida para a missão.</p>
                        <span class="text-sm text-gray-500 uppercase">Avaliação Completa</span>
                    </div>

                    <!-- Bloco 2 -->
                    <div class="bg-[#111] p-8 rounded-lg border-l-4 border-[#A9A938] hover:shadow-lg hover:shadow-[#A9A938]/20 transition duration-500">
                        <span class="font-title text-5xl text-[#A9A938] block mb-2">02</span>
                        <h4 class="font-title text-2xl text-white uppercase mb-4 tracking-widest">A Missão</h4>
                        <p class="text-gray-400 mb-4">Rotinas de treino customizadas, focadas em progressão de carga e resultados rápidos. Seu mapa de batalha para a transformação.</p>
                        <span class="text-sm text-gray-500 uppercase">Treinamento Personalizado</span>
                    </div>

                    <!-- Bloco 3 -->
                    <div class="bg-[#111] p-8 rounded-lg border-l-4 border-[#A9A938] hover:shadow-lg hover:shadow-[#A9A938]/20 transition duration-500">
                        <span class="font-title text-5xl text-[#A9A938] block mb-2">03</span>
                        <h4 class="font-title text-2xl text-white uppercase mb-4 tracking-widest">Inteligência de Combate</h4>
                        <p class="text-gray-400 mb-4">Acompanhamento constante, ajustes semanais e contato via app exclusivo. Garantia de que você está sempre no caminho certo.</p>
                        <span class="text-sm text-gray-500 uppercase">Suporte e Ajustes</span>
                    </div>
                </div>

                <div class="text-center mt-16">
                    <a href="#planos" class="btn-primary inline-block text-base">
                        VER PLANOS DE CONSULTORIA
                    </a>
                </div>
            </div>
        </section>

        <!-- Sobre o Treinador -->
        <section id="sobre" class="py-20 md:py-28 bg-[#0A0A0A] animate-on-scroll">
            <div class="max-w-6xl mx-auto px-4">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="order-2 md:order-1">
                        <h2 class="font-title text-4xl md:text-5xl text-white uppercase mb-6 tracking-widest">
                            COMANDANTE VICTOR TOLEDO
                        </h2>
                        <div class="space-y-4 text-gray-300 font-body">
                            <p class="text-lg leading-relaxed">
                                <span class="text-[#A9A938] font-bold">10+ anos</span> transformando vidas através da disciplina militar aplicada ao fitness. Ex-militar com especialização em treinamento tático e performance humana.
                            </p>
                            <p>
                                Formado em Educação Física, com certificações em:
                            </p>
                            <ul class="list-none space-y-2 ml-4">
                                <li class="flex items-center">
                                    <span class="text-[#A9A938] mr-3">▸</span>
                                    Treinamento Funcional Militar
                                </li>
                                <li class="flex items-center">
                                    <span class="text-[#A9A938] mr-3">▸</span>
                                    Preparação Física Tática
                                </li>
                                <li class="flex items-center">
                                    <span class="text-[#A9A938] mr-3">▸</span>
                                    Psicologia do Desempenho
                                </li>
                                <li class="flex items-center">
                                    <span class="text-[#A9A938] mr-3">▸</span>
                                    Nutrição Esportiva
                                </li>
                            </ul>
                            <p class="text-[#A9A938] font-bold text-lg">
                                "Não treino apenas corpos. Forjo guerreiros."
                            </p>
                        </div>
                    </div>
                    <div class="order-1 md:order-2 text-center">
                        <div class="relative inline-block">
                            <div class="w-80 h-80 bg-gradient-to-br from-[#A9A938] to-[#7A7A28] rounded-full flex items-center justify-center">
                                <div class="w-72 h-72 bg-black rounded-full flex items-center justify-center">
                                    <svg class="w-32 h-32 text-[#A9A938]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7V9C15 9.55 14.55 10 14 10S13 9.55 13 9V7H11V9C11 9.55 10.45 10 10 10S9 9.55 9 9V7H3V9H5V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V9H21Z"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#A9A938] text-black px-4 py-2 rounded font-bold text-sm">
                                COMANDANTE
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Resultados/Contador -->
        <section class="py-16 bg-[#A9A938] animate-on-scroll">
            <div class="max-w-6xl mx-auto px-4">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div class="counter text-4xl md:text-5xl font-title font-bold text-black mb-2" data-target="500">0</div>
                        <p class="text-black font-body font-bold uppercase text-sm">Soldados Treinados</p>
                    </div>
                    <div>
                        <div class="counter text-4xl md:text-5xl font-title font-bold text-black mb-2" data-target="10">0</div>
                        <p class="text-black font-body font-bold uppercase text-sm">Anos de Experiência</p>
                    </div>
                    <div>
                        <div class="counter text-4xl md:text-5xl font-title font-bold text-black mb-2" data-target="95">0</div>
                        <p class="text-black font-body font-bold uppercase text-sm">% Taxa de Sucesso</p>
                    </div>
                    <div>
                        <div class="counter text-4xl md:text-5xl font-title font-bold text-black mb-2" data-target="24">0</div>
                        <p class="text-black font-body font-bold uppercase text-sm">Horas de Suporte</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Metodologia Detalhada -->
        <section id="metodologia" class="py-20 md:py-28 bg-[#1A1A1A] animate-on-scroll">
            <div class="max-w-6xl mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="font-title text-4xl md:text-5xl text-white uppercase mb-4 tracking-widest">
                        METODOLOGIA INVICTO
                    </h2>
                    <p class="text-gray-400 text-lg font-body max-w-3xl mx-auto">
                        Sistema científico baseado em treinamento militar adaptado para civis. Cada fase é estrategicamente planejada para máximos resultados.
                    </p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    <div class="bg-black border-2 border-gray-800 p-8 text-center hover:border-[#A9A938] transition duration-300">
                        <div class="w-16 h-16 bg-[#A9A938] rounded-full flex items-center justify-center mx-auto mb-6">
                            <span class="text-black font-title font-bold text-2xl">1</span>
                        </div>
                        <h3 class="font-title text-xl text-white uppercase mb-4 tracking-wider">AVALIAÇÃO TÁTICA</h3>
                        <p class="text-gray-400 font-body">
                            Análise completa: composição corporal, capacidades físicas, limitações e objetivos. Definimos sua missão pessoal.
                        </p>
                    </div>

                    <div class="bg-black border-2 border-gray-800 p-8 text-center hover:border-[#A9A938] transition duration-300">
                        <div class="w-16 h-16 bg-[#A9A938] rounded-full flex items-center justify-center mx-auto mb-6">
                            <span class="text-black font-title font-bold text-2xl">2</span>
                        </div>
                        <h3 class="font-title text-xl text-white uppercase mb-4 tracking-wider">TREINAMENTO PROGRESSIVO</h3>
                        <p class="text-gray-400 font-body">
                            Exercícios funcionais, força, resistência e agilidade. Cada treino é uma batalha vencida rumo ao seu objetivo.
                        </p>
                    </div>

                    <div class="bg-black border-2 border-gray-800 p-8 text-center hover:border-[#A9A938] transition duration-300">
                        <div class="w-16 h-16 bg-[#A9A938] rounded-full flex items-center justify-center mx-auto mb-6">
                            <span class="text-black font-title font-bold text-2xl">3</span>
                        </div>
                        <h3 class="font-title text-xl text-white uppercase mb-4 tracking-wider">MENTALIDADE INVENCÍVEL</h3>
                        <p class="text-gray-400 font-body">
                            Desenvolvimento da disciplina mental, foco e determinação. Transformamos sua mente em sua maior arma.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Planos Section -->
        <section id="planos" class="py-20 md:py-32 bg-[#0A0A0A] border-t border-gray-900 animate-on-scroll">
            <div class="max-w-6xl mx-auto px-4">
                <h2 class="font-title text-4xl sm:text-5xl text-white uppercase mb-4 tracking-widest text-center">
                    PLANOS DE BATALHA
                </h2>
                <p class="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
                    Escolha sua missão. Cada plano foi desenvolvido para diferentes níveis de comprometimento e objetivos.
                </p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Plano Recruta -->
                    <div class="bg-[#111] p-8 rounded-lg border-2 border-gray-800 hover:border-[#A9A938]/50 transition duration-300 flex flex-col">
                        <div class="text-center mb-6">
                            <h3 class="font-title text-2xl text-white uppercase tracking-widest mb-2">RECRUTA</h3>
                            <div class="text-4xl font-bold text-[#A9A938] mb-2">R$ 297</div>
                            <div class="text-gray-500 text-sm">por mês</div>
                        </div>
                        <ul class="space-y-3 mb-8 flex-grow">
                            <li class="flex items-center text-gray-300">
                                <span class="text-[#A9A938] mr-2">✓</span>
                                Treino personalizado
                            </li>
                            <li class="flex items-center text-gray-300">
                                <span class="text-[#A9A938] mr-2">✓</span>
                                Suporte via WhatsApp
                            </li>
                            <li class="flex items-center text-gray-300">
                                <span class="text-[#A9A938] mr-2">✓</span>
                                Ajustes mensais
                            </li>
                        </ul>
                        <a href="mailto:invicto.performance@gmail.com?subject=Interesse no Plano RECRUTA&body=Olá!%0A%0ATenho interesse no plano RECRUTA (R$ 297/mês).%0AGostaria de mais informações e agendar minha consultoria.%0A%0AObrigado!" class="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-[#A9A938] hover:text-black transition duration-300 font-bold uppercase mt-auto block text-center">
                            ESCOLHER PLANO
                        </a>
                    </div>

                    <!-- Plano Soldado (Destaque) -->
                    <div class="bg-[#111] p-8 rounded-lg border-2 border-[#A9A938] relative transform scale-105 flex flex-col">
                        <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#A9A938] text-black px-4 py-1 rounded-full text-sm font-bold uppercase">
                            MAIS POPULAR
                        </div>
                        <div class="text-center mb-6">
                            <h3 class="font-title text-2xl text-white uppercase tracking-widest mb-2">SOLDADO</h3>
                            <div class="text-4xl font-bold text-[#A9A938] mb-2">R$ 497</div>
                            <div class="text-gray-500 text-sm">por mês</div>
                        </div>
                        <ul class="space-y-3 mb-8 flex-grow">
                            <li class="flex items-center text-gray-300">
                                <span class="text-[#A9A938] mr-2">✓</span>
                                Tudo do plano Recruta
                            </li>
                            <li class="flex items-center text-gray-300">
                                <span class="text-[#A9A938] mr-2">✓</span>
                                Plano nutricional
                            </li>
                            <li class="flex items-center text-gray-300">
                                <span class="text-[#A9A938] mr-2">✓</span>
                                Suporte 24/7
                            </li>
                            <li class="flex items-center text-gray-300">
                                <span class="text-[#A9A938] mr-2">✓</span>
                                Ajustes semanais
                            </li>
                        </ul>
                        <a href="mailto:invicto.performance@gmail.com?subject=Interesse no Plano SOLDADO&body=Olá!%0A%0ATenho interesse no plano SOLDADO (R$ 497/mês) - o mais popular!%0AGostaria de mais informações e agendar minha consultoria.%0A%0AObrigado!" class="w-full bg-[#A9A938] text-black py-3 rounded-lg hover:bg-white transition duration-300 font-bold uppercase mt-auto block text-center">
                            ESCOLHER PLANO
                        </a>
                    </div>

                    <!-- Plano Comandante -->
                    <div class="bg-[#111] p-8 rounded-lg border-2 border-gray-800 hover:border-[#A9A938]/50 transition duration-300 flex flex-col">
                        <div class="text-center mb-6">
                            <h3 class="font-title text-2xl text-white uppercase tracking-widest mb-2">COMANDANTE</h3>
                            <div class="text-4xl font-bold text-[#A9A938] mb-2">R$ 797</div>
                            <div class="text-gray-500 text-sm">por mês</div>
                        </div>
                        <ul class="space-y-3 mb-8 flex-grow">
                            <li class="flex items-center text-gray-300">
                                <span class="text-[#A9A938] mr-2">✓</span>
                                Tudo do plano Soldado
                            </li>
                            <li class="flex items-center text-gray-300">
                                <span class="text-[#A9A938] mr-2">✓</span>
                                Consultoria 1:1 semanal
                            </li>
                            <li class="flex items-center text-gray-300">
                                <span class="text-[#A9A938] mr-2">✓</span>
                                Acesso ao app exclusivo
                            </li>
                            <li class="flex items-center text-gray-300">
                                <span class="text-[#A9A938] mr-2">✓</span>
                                Suplementação personalizada
                            </li>
                        </ul>
                        <a href="mailto:invicto.performance@gmail.com?subject=Interesse no Plano COMANDANTE&body=Olá!%0A%0ATenho interesse no plano COMANDANTE (R$ 797/mês) - o mais completo!%0AGostaria de mais informações e agendar minha consultoria.%0A%0AObrigado!" class="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-[#A9A938] hover:text-black transition duration-300 font-bold uppercase mt-auto block text-center">
                            ESCOLHER PLANO
                        </a>
                    </div>
                </div>

                <div class="text-center mt-12">
                    <p class="text-gray-500 mb-4">Todos os planos incluem garantia de 30 dias</p>
                    <a href="#contato" class="text-[#A9A938] hover:text-white transition duration-300 underline">
                        Precisa de um plano personalizado? Fale conosco
                    </a>
                </div>
            </div>
        </section>

        <!-- Galeria de Transformações -->
        <section id="transformacoes" class="py-20 md:py-28 bg-[#0A0A0A] animate-on-scroll">
            <div class="max-w-6xl mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="font-title text-4xl md:text-5xl text-white uppercase mb-4 tracking-widest">
                        MISSÕES CUMPRIDAS
                    </h2>
                    <p class="text-gray-400 text-lg font-body">
                        Soldados que aceitaram o desafio e conquistaram seus objetivos. Sua transformação pode ser a próxima.
                    </p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Transformação 1 -->
                    <div class="bg-black border-2 border-gray-800 overflow-hidden hover:border-[#A9A938] transition duration-300">
                        <div class="relative">
                            <div class="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                                <div class="text-center">
                                    <div class="text-6xl mb-4">💪</div>
                                    <p class="text-gray-400 font-body">ANTES → DEPOIS</p>
                                </div>
                            </div>
                            <div class="absolute top-4 right-4 bg-[#A9A938] text-black px-3 py-1 rounded font-bold text-sm">
                                -15KG
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="font-title text-white uppercase mb-2">SOLDADO CARLOS</h3>
                            <p class="text-gray-400 font-body text-sm mb-3">
                                "Em 4 meses perdi 15kg e ganhei uma disciplina que mudou minha vida profissional e pessoal."
                            </p>
                            <div class="flex justify-between text-xs text-[#A9A938] font-bold">
                                <span>4 MESES</span>
                                <span>PLANO SOLDADO</span>
                            </div>
                        </div>
                    </div>

                    <!-- Transformação 2 -->
                    <div class="bg-black border-2 border-gray-800 overflow-hidden hover:border-[#A9A938] transition duration-300">
                        <div class="relative">
                            <div class="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                                <div class="text-center">
                                    <div class="text-6xl mb-4">🏋️</div>
                                    <p class="text-gray-400 font-body">ANTES → DEPOIS</p>
                                </div>
                            </div>
                            <div class="absolute top-4 right-4 bg-[#A9A938] text-black px-3 py-1 rounded font-bold text-sm">
                                +8KG
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="font-title text-white uppercase mb-2">SOLDADO MARINA</h3>
                            <p class="text-gray-400 font-body text-sm mb-3">
                                "Ganhei 8kg de massa magra e descobri uma força que não sabia que tinha. Sou outra pessoa!"
                            </p>
                            <div class="flex justify-between text-xs text-[#A9A938] font-bold">
                                <span>6 MESES</span>
                                <span>PLANO COMANDANTE</span>
                            </div>
                        </div>
                    </div>

                    <!-- Transformação 3 -->
                    <div class="bg-black border-2 border-gray-800 overflow-hidden hover:border-[#A9A938] transition duration-300">
                        <div class="relative">
                            <div class="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                                <div class="text-center">
                                    <div class="text-6xl mb-4">🎯</div>
                                    <p class="text-gray-400 font-body">ANTES → DEPOIS</p>
                                </div>
                            </div>
                            <div class="absolute top-4 right-4 bg-[#A9A938] text-black px-3 py-1 rounded font-bold text-sm">
                                -20KG
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="font-title text-white uppercase mb-2">SOLDADO RAFAEL</h3>
                            <p class="text-gray-400 font-body text-sm mb-3">
                                "Eliminei 20kg e conquistei o físico que sempre sonhei. A metodologia realmente funciona!"
                            </p>
                            <div class="flex justify-between text-xs text-[#A9A938] font-bold">
                                <span>5 MESES</span>
                                <span>PLANO SOLDADO</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-12">
                    <a href="#contato" class="btn-primary inline-block">
                        QUERO MINHA TRANSFORMAÇÃO
                    </a>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section id="faq" class="py-20 md:py-32 bg-black border-t border-gray-900 animate-on-scroll">
            <div class="max-w-4xl mx-auto px-4">
                <h2 class="font-title text-4xl sm:text-5xl text-white uppercase mb-16 tracking-widest text-center">
                    PERGUNTAS FREQUENTES
                </h2>

                <div>
                    <!-- FAQ Item 1 -->
                    <div class="faq-item">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-gray-900 transition duration-300">
                            <span class="font-body text-white font-bold">Como funciona a consultoria online?</span>
                            <svg class="faq-icon w-5 h-5 text-[#A9A938]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p class="text-gray-400">A consultoria é 100% online através de WhatsApp e app exclusivo. Você recebe seu treino personalizado, acompanhamento diário e ajustes conforme sua evolução. Tudo pensado para quem tem uma rotina corrida mas não abre mão dos resultados.</p>
                        </div>
                    </div>

                    <!-- FAQ Item 2 -->
                    <div class="faq-item">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-gray-900 transition duration-300">
                            <span class="font-body text-white font-bold">Preciso ter experiência com musculação?</span>
                            <svg class="faq-icon w-5 h-5 text-[#A9A938]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p class="text-gray-400">Não! O Projeto Invicto atende desde iniciantes até avançados. Cada treino é personalizado para seu nível atual, com progressões seguras e eficientes. O importante é ter disciplina e comprometimento.</p>
                        </div>
                    </div>

                    <!-- FAQ Item 3 -->
                    <div class="faq-item">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-gray-900 transition duration-300">
                            <span class="font-body text-white font-bold">Quanto tempo para ver resultados?</span>
                            <svg class="faq-icon w-5 h-5 text-[#A9A938]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p class="text-gray-400">Com disciplina e consistência, os primeiros resultados aparecem em 2-3 semanas. Transformações significativas acontecem entre 8-12 semanas. Lembre-se: não vendemos milagres, vendemos resultados sustentáveis.</p>
                        </div>
                    </div>

                    <!-- FAQ Item 4 -->
                    <div class="faq-item">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-gray-900 transition duration-300">
                            <span class="font-body text-white font-bold">Posso cancelar a qualquer momento?</span>
                            <svg class="faq-icon w-5 h-5 text-[#A9A938]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p class="text-gray-400">Sim, todos os planos são mensais e podem ser cancelados a qualquer momento. Além disso, oferecemos garantia de 30 dias. Se não ficar satisfeito, devolvemos 100% do valor investido.</p>
                        </div>
                    </div>

                    <!-- FAQ Item 5 -->
                    <div class="faq-item">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-gray-900 transition duration-300">
                            <span class="font-body text-white font-bold">O que diferencia o Projeto Invicto?</span>
                            <svg class="faq-icon w-5 h-5 text-[#A9A938]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p class="text-gray-400">Nossa metodologia une ciência do treinamento com mentalidade militar. Não é só sobre exercícios, é sobre forjar uma disciplina inquebrável que transforma não apenas seu corpo, mas sua vida inteira.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
`;

// Carrega as seções quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    const sectionsPlaceholder = document.getElementById('sections-placeholder');
    if (sectionsPlaceholder) {
        sectionsPlaceholder.innerHTML = sectionsHTML;
    }
});
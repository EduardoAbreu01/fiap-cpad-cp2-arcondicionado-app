
# ClimaFiap - CP2 - Cross-Platform Application Development
🎯 Atualmente, o ajuste de temperatura em ambientes coletivos é um processo lento e burocrático. A falta de acesso direto aos controles obriga o aluno/colaborador a interromper suas atividades para buscar um monitor ou abrir chamados via whatsApp, gerando demora no atendimento e desconforto térmico.

💡 A Solução

Este app foi desenvolvido para centralizar e agilizar a comunicação com o Help Desk. Ele elimina intermediários, permitindo que o usuário solicite o ajuste do ar-condicionado em poucos segundos diretamente pelo celular, substituindo o processo lento e demorado.

  ## Evolução em relação ao CP1
*Estado Global: Implementação do UserContext para compartilhar dados do usuário entre todas as telas.  
*Navegação Profissional: Uso de expo-router com rotas em pilha (Stack) e abas (Tabs).  
*Persistência: Dados agora são salvos de verdade no dispositivo via AsyncStorage.  
*Refinamento: Melhoria na interface com validações de formulário e feedback visual nos chips de seleção.  

   ## 🛠️ Funcionalidades
*Sistema de Acesso: Cadastro com validações (e-mail, senha) e login com verificação de credenciais.  
*Perfil e Sessão: Gerenciamento de estado do usuário logado e função de logout seguro. 
*Monitoramento Personalizado: Seleção de salas específicas via interface de "chips" interativos.  
*Base de Dados: Integração de arquivo JSON para simular a leitura de temperaturas das salas.  
*Interface Informativa: Tela de "Home" detalhando a motivação do projeto e a equipe de desenvolvimento.  

## 👤 Integrantes

- Eduardo Abreu RM 566460

- Gabriel dos Anjos RM 565532

- Gabrielly Lorentz RM 565806

- Heitor Fernandes RM 563078

- João Pedro de Sousa RM 563869


## 📦 Instalação
- Pré requisitos: Node, Visual Studio, Expo Go e Android Studio;

     **PREPARANDO O AMBIENTE**

- Abra o Visual Studio;
- Crie um diretório chamado: APP;
- Abra o diretório no Visual Studio;
- Abra o terminal e execute os seguintes códigos.

    **EXECUTANDO**
    - Clone o repositório: 

            https://github.com/EduardoAbreu01/
            fiap-cpad-cp1-arcondicionado-app no diretório;
    
    - Entrar na Pasta:

            npm uninstall -g expo-cli

    - Configurar o gerenciador de pacotes do Node

            npm uninstall -g expo-cli

    - Configurar o JavaScript para rodar a aplicação

            npm install --legacy-peer-deps

    - Instalar o React

            npm install react-dom@19.2.0

    - Instalando biblioteca para selecionar a Sala.
             
             npx expo install @react-native-picker/picker


##  📖 Decisões técnicas

   1. O projeto utiliza a estrutura do Expo Router, onde a organização das pastas dita a navegação:
      
        *app/: Pasta raiz da navegação. Contém o arquivo _layout.js (Root Layout) que configura a pilha de telas (Stack).
        *app/(tabs)/: Grupo de rotas protegidas que utiliza navegação por abas. Inclui a tela de Perfil.
        *context/: Pasta destinada ao gerenciamento de estado global, contendo o UserContext.js.
        *Arquivos de Tela:login.js e cadastro.js gerenciam o acesso inicial e criação de contas.
        *Home.js fornece a visão geral e informações do projeto.
        *Dados: Utiliza um arquivo salas.json para armazenar informações estáticas sobre as salas disponíveis.

  2. Contexts Criados e Gerenciamento
     
         Foi criado o UserContext, gerenciado através do componente UserProvider.
         Responsabilidade: Ele armazena e distribui os dados do usuário logado (nome e e-mail) para toda a aplicação.
         Hook: Utiliza o hook customizado useUser() para permitir que telas como Login e Perfil acessem ou modifiquem o estado do usuário.

  3. Implementação da AutenticaçãoA autenticação é feita de forma local, comparando os dados inseridos com os dados previamente salvos:
     
     Cadastro: O usuário insere nome, e-mail, senha e seleciona as salas. Esses dados são validados e persistidos no dispositivo.
     Login: A função verificaLogin busca os valores de "nome", "email" e "senha" salvos no armazenamento local. Se os dados digitados coincidirem com os cadastrados, o estado global do usuário é atualizado via setUser e ele é redirecionado para a área principal (/(tabs)).

  4. Utilização do AsyncStorage
     
    O AsyncStorage é utilizado para persistir os dados do usuário de forma local com as seguintes chaves:
           nome: Armazena o nome do usuário cadastrado.
           email: Armazena o e-mail do usuário.
           senha: Armazena a senha definida no cadastro.
           salas: Armazena um objeto JSON stringificado contendo a lista das salas selecionadas pelo usuário no cadastro.
           usuario_logado: Chave removida durante o processo de logout para encerrar a sessão.
        
   5. Navegação Protegida
       
           A navegação protegida é estruturada através da separação de grupos de rotas no layout
           raiz:As rotas de autenticação (login, cadastro) ficam no mesmo nível que o grupo (tabs).
           Ao realizar o login com sucesso, o app utiliza router.replace('/(tabs)'), substituindo a tela de login pela interface principal.
           No logout, o estado do usuário no contexto é limpo (setUser({ nome: '', email: '' })) e o usuário é redirecionado de volta para a tela de login via router.replace('/login'),            impedindo o acesso às abas sem uma sessão ativa.
           
  ## Diferencial:
     Monitoramento Personalizado (Seleção de Salas)
           *O que é: Sistema de filtros por "chips" que permite ao usuário selecionar apenas as salas de seu interesse durante o cadastro.
           *Justificativa: Evita a sobrecarga de informações ao exibir apenas salas relevantes para a rotina do aluno, tornando a abertura de chamados de temperatura mais rápida e                  eficiente.
     Implementação Técnica:
           *Uso de um estado de array (salasSelecionadas) e componentes interativos TouchableOpacity para a interface de chips.
           *Lógica de toggle para adicionar ou remover salas com feedback visual imediato.
           *Persistência dos dados filtrados do salas.json no AsyncStorage sob a chave "salas".
           *Integração com o UserContext para manter a personalização ativa durante toda a navegação.

   ## Melhorias Futuras
      Autenticação por API: Migrar o sistema de login e cadastro do armazenamento local (AsyncStorage) para um backend real, garantindo maior segurança dos dados e permitindo o acesso à mesma conta em diferentes dispositivos.
      Painel Administrativo para o Help Center: Desenvolver uma interface específica para a equipe de manutenção receber e gerenciar os chamados de temperatura abertos pelos alunos, permitindo alterar o status da solicitação (ex: "Em atendimento", "Concluído").

![Image](https://github.com/user-attachments/assets/b1644e92-8499-4102-9294-6ad7b820206c)
            
ZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZnaWYifQ.DSRYgFbqStGtpMu3ql6esxXYdC8m-emPCy1tPIERRWo)

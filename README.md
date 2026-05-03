
# ClimaFiap - CP1 - Cross-Platform Application Development
🎯 Atualmente, o ajuste de temperatura em ambientes coletivos é um processo lento e burocrático. A falta de acesso direto aos controles obriga o aluno/colaborador a interromper suas atividades para buscar um monitor ou abrir chamados via whatsApp, gerando demora no atendimento e desconforto térmico.

💡 A Solução

Este app foi desenvolvido para centralizar e agilizar a comunicação com o Help Desk. Ele elimina intermediários, permitindo que o usuário solicite o ajuste do ar-condicionado em poucos segundos diretamente pelo celular, substituindo o processo lento e demorado.

   ## 🛠️ Funcionalidades
- [Abrir requisições para alteração de temperatura];

- [Verificar a temperatura que a sala está, antes de solicitar o ajustes];

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
- Estruturamos nosso APP em quatro telas:

            HOME: Explicação de como funciona o APP;
            Temperatura: A temperatura atual da sala;
            Chamado: Solicitação para alteração da temperatura do 
            ar-condicionado;
            Perfil: Mostra o nome e a turma de quem fez a solicitação.
 
 - HOOKS

            useState: Usamos para mudar o valor de uma variavel dinamicamente;
            useRouter: Usamos para navegar entre as telas do APP(link)

![Image](https://github.com/user-attachments/assets/c105684d-7984-4620-bc69-c11a39dd7072)
 

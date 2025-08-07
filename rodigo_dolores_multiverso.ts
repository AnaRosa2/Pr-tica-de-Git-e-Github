
alert('Bem-vindo ao jogo "Rodrigo e Dolores no Multiverso"! Prepare-se para tomar decisões que podem mudar seu destino!');

// Primeira pergunta
let escolha = prompt(
    'Você está dirigindo com Dolores, seu Celta azul bebê, quando encontra um posto estranho no horizonte. Então, de repente, o ponteiro do combustível despenca, e você é obrigado a parar no posto misterioso, se não quiser se atrasar. O frentista oferece duas opções de gasolina:
1. Gasolina comum
2. Gasolina nova (Propulsor Extradimensional - P.E.)
Escolha 1 ou 2:'
);

if (escolha == '1') {
    // Caminho 1: Gasolina comum
    alert('Você escolheu a gasolina comum.');
    alert('Rodrigo segue viagem, mas minutos depois é abordado por um assaltante e Dolores é roubada. O retrovisor emite um reflexo de outras realidades.');
    alert('Fim 01: A perda.');
} else if (escolha == '2') {
    // Caminho 2: Gasolina P.E.
    alert('Você escolheu a gasolina nova.');
    alert('O frentista ri e abastece Dolores. Você percebe que está atrasado para sua aula e acelera Dolores. Ao fazer isso, sente uma dor de cabeça muito forte e desmaia.');
    alert('Ao acordar, percebe que está em um lugar estranho: o céu está roxo e um cheiro forte e ruim invade suas narinas.');
    alert('Você vê uma grande rodovia, torres metálicas, drones voando e humanos cibernéticos com rostos sem expressão.');
    alert('Uma voz robótica no rádio diz: "Sobrevivente detectado. Missão: Encontrar o Bar Obsidiana e recuperar o artefato musical perdido - um disco de vinil da música Living in the Shadows de Matthew Perryman Jones - para voltar para casa."');
    alert('Você pensa que ficou louco, mas acelera, guiado pelas placas quebradas da cidade. Chegando a um ponto com duas ruas diferentes.');

    escolha = prompt(
        'Você se encontra em uma rua estranha com duas opções a seguir:
1. Seguir a rua iluminada e movimentada
2. Seguir a rua escura e vazia
Escolha 1 ou 2:'
    );

    if (escolha == '2') {
        // Rua escura
        alert('Você escolheu a rua escura e vazia.');
        alert('De repente, surge uma figura robótica assustadora com olhos vermelhos, soltando faíscas pelas articulações. Ela solta um som de rangido.');
        alert('A figura pergunta: "QUEM É VOCÊ E O QUE FAZ EM MEU TERRITÓRIO?"');
        alert('"Eu sou apenas um professor de matemática, só vim procurar o Bar Obsidiana", você responde assustado.');
        alert('Ao ouvir "Bar Obsidiana", a criatura se irrita, pega uma estaca de ferro do chão e a arremessa em sua direção...');
        alert('Infelizmente, não dá tempo de desviar e a estaca acerta em cheio o seu coração.');
        alert('Fim de jogo para você :b');
    } else if (escolha == '1') {
        // Rua iluminada
        alert('Você escolheu a rua iluminada e movimentada.');
        alert('Você enfrenta tráfego pesado de drones e veículos bizarros. Um posto de inspeção aparece.');

        escolha = prompt(
            'O guarda cibernético pede os documentos. Você não tem os documentos deste mundo. O que fazer?
1. Tentar fugir acelerando
2. Inventar uma desculpa (sou da manutenção dos cabos de alimentação de rede)
Escolha 1 ou 2:'
        );

        if (escolha == '1') {
            // Tentar fugir
            alert('Você tenta fugir, mas os drones perseguem você e Dolores, atirando mísseis. Um deles acerta Dolores, que explode. Você não sobrevive.');
            alert('Final 02: A fuga sem sucesso.');
        } else if (escolha == '2') {
            // Inventar desculpa
            alert('Você diz ao guarda que é da manutenção dos cabos de alimentação. Ele te olha desconfiado, mas, surpreendentemente, acredita.');
            alert('O guarda permite sua passagem. Você segue pela rodovia e avista a placa do Bar Obsidiana ao longe.');
            alert('Você chega ao Bar Obsidiana, um prédio retorcido com cores néon.');
            alert('No balcão, um velho de aparência desgastada, com membros cibernéticos, segura um disco de vinil da música *Living in the Shadows*.');

            escolha = prompt(
                'O velho diz: "Só há uma maneira de levar o disco. Vencendo um desafio contra os desejos mais profundos dos humanos."
Ele pergunta: "Você trocaria toda a sua história e memória por poder absoluto? Controlaria tudo, mas perderia tudo que conhece de si mesmo."
1. Aceitar
2. Recusar
Escolha 1 ou 2:'
            );

            if (escolha == '1') {
                alert('Você aceita a proposta. Esquece tudo que te torna você: trabalho, família, esposa, seus 3 filhos...');
                alert('Mas de que adianta ter tanto poder se o mais importante foi perdido?');
            } else if (escolha == '2') {
                alert('Você recusa a oferta.');
                alert('Suas memórias e sua família são seu bem mais precioso. Nada pode comprar isso.');
                alert('O velho diz: "Escolha sábia, Rodrigo. Agora vá, antes que percebam que você é feito de carne e tem sentimentos."');
                alert('Você acelera Dolores e atravessa o portal. Enquanto o rádio toca No surprises da banda Radiohead, e aproveita a vista de vários universos, uns em guerra, outros completamente destruídos, alguns apenas deixando de existir, talvez haja algum que esteja inteiro, em algum lugar do vasto universo.');
                alert('Ao retornar para o seu mundo, você percebe que Dolores está precisando de gasolina.');
                alert('O Final Verdadeiro: O Retorno.');
                alert('Obrigada por jogar <3');
            }
        }
    }
}

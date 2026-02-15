async function enviarScript(texto) {

    const delay = (ms) => new Promise(r => setTimeout(r, ms));

    // separa mensagens
    const mensagens = texto
       .split("\n")          
.map(t => t.replace(/\r/g, "")) 
.filter(t => t.length > 0);  


    if (!mensagens.length)
        throw new Error("Sem mensagens.");

    // pega caixa correta
    const caixa = document.querySelector(
        'footer div[contenteditable="true"]'
    );

    if (!caixa)
        throw new Error("Abra uma conversa primeiro.");

    console.log("Enviando mensagens...");

    let total = 0;

    for (const msg of mensagens) {

        caixa.focus();

        // limpa
        caixa.innerHTML = "";

        // insere texto REAL (WhatsApp detecta)
        document.execCommand("insertText", false, msg);

        // dispara evento que o WhatsApp escuta
        caixa.dispatchEvent(
            new InputEvent("input", { bubbles: true })
        );

        await delay(200);

        // envia pressionando ENTER (mais confiável)
        caixa.dispatchEvent(
            new KeyboardEvent("keydown", {
                bubbles: true,
                cancelable: true,
                key: "Enter",
                code: "Enter"
            })
        );

        total++;
        console.log(`✅ ${total}/${mensagens.length}`);

        // tempo humano
        await delay(600 + Math.random() * 800);
    }

    console.log("🎉 Finalizado!");
    return total;
}



enviarScript(`
SHREK

Escrito por

William Steig & Ted Elliott

SHREK
Era uma vez uma linda princesa.
Mas ela tinha sobre si um encantamento
de um tipo terrível que só poderia
ser quebrado pelo primeiro beijo do
verdadeiro amor.
Ela foi trancada em um castelo guardado
por um terrível dragão que cuspia fogo.
Muitos cavaleiros corajosos tentaram
libertá-la dessa terrível prisão,
mas nenhum conseguiu. Ela esperava
na fortaleza do dragão, no quarto mais
alto da torre mais alta, por seu verdadeiro
amor e pelo primeiro beijo do verdadeiro
amor. (ri)
Como se isso fosse acontecer. Que baita —
(descarga do vaso sanitário)

“All Star” — de Smash Mouth começa a tocar. Shrek segue seu dia.
Enquanto isso, em uma cidade próxima, os aldeões se reúnem para
ir atrás do ogro.

NOITE — PERTO DA CASA DO SHREK

HOMEM 1
Acha que está aí dentro?

HOMEM 2
Tudo bem. Vamos pegá-lo!

HOMEM 1
Ei. Espera aí. Você sabe o que aquela coisa pode fazer com você?

HOMEM 3
Sim, vai moer seus ossos para fazer pão.

Shrek aparece silenciosamente atrás deles e ri.

SHREK
Na verdade, isso seria um gigante.
Agora, ogros… ah, eles são bem piores.
Eles fazem roupas com sua pele recém-arrancada.

HOMENS
Não!

SHREK
Eles raspam seu fígado. Espremem a geleia dos seus olhos!
Na verdade, fica ótimo na torrada.

HOMEM 1
Para trás! Para trás, fera! Eu aviso!
(agita a tocha em direção ao Shrek)

Shrek calmamente lambe os dedos e apaga a tocha.
Os homens recuam. Shrek solta um rugido longo e alto,
e seu hálito apaga todas as outras tochas, deixando-os no escuro.

SHREK
Esta é a parte em que vocês saem correndo.
(Os homens fogem desesperados. Ele ri.)
E fiquem longe!
(olha para baixo e pega um papel)
“Procura-se: criaturas de contos de fadas.”
(Ele suspira e joga o papel por cima do ombro.)

MIRROR
Mas eu provavelmente deveria mencionar a pequena
coisa que acontece à noite.

FARQUAAD
Eu farei isso.

MIRROR
Sim, mas depois do pôr do sol...

FARQUAAD
Silêncio! Eu farei desta Princesa Fiona
minha rainha, e DuLoc finalmente terá
o rei perfeito! Capitão, reúna
seus melhores homens. Vamos realizar
um torneio. (sorri malignamente)

ESTACIONAMENTO DE DULOC — SEÇÃO LANCELOT

Shrek e Burro saem do campo ao lado do estacionamento.
O castelo tem cerca de 40 andares.

BURRO
É ali. É ali mesmo.
Aquilo é DuLoc. Eu disse que encontraria.

SHREK
Então aquele deve ser o castelo do Lorde Farquaad.

BURRO
Aham. É ali.

SHREK
Você acha que talvez ele esteja
compensando alguma coisa?
(ri, mas percebe que o Burro não entende a piada)

BURRO
Ei, espera! Espera aí, Shrek.

HOMEM
Depressa, querida. Estamos atrasados!

SHREK
Ei, você!
(O atendente usando uma cabeça gigante de Farquaad grita e sai correndo.)
Calma, eu não vou te comer! Eu só...
(suspira)

DULOC

Eles olham ao redor. Tudo está silencioso.

SHREK
Está quieto. Quieto demais. Onde está todo mundo?

BURRO
Ei, olha isso!

(Burro puxa a alavanca da caixa “Informações”.
Bonecos de madeira começam a cantar.)

PESSOAS DE MADEIRA
Bem-vindo a DuLoc, cidade perfeita
Aqui temos regras
Vamos explicar
Não cause problemas, fique na fila
E tudo vai funcionar
DuLoc é perfeita
Não pise na grama
Limpe os sapatos, lave o rosto
DuLoc é, DuLoc é
DuLoc é perfeita.

(Uma câmera tira foto deles.)

BURRO
Uau! Vamos fazer de novo!

SHREK
(segurando o rabo do Burro)
Não! Não, não, não!

(Soa uma fanfarra e eles seguem até a arena.)

FARQUAAD
Bravos cavaleiros. Vocês são os melhores
de toda a terra. Hoje um de vocês provará
seu valor...

FARQUAAD
O campeão terá o privilégio de resgatar
a bela Princesa Fiona do castelo do dragão.
Alguns de vocês podem morrer,
mas é um sacrifício que estou disposto a fazer.
Que o torneio comece!

(Vê Shrek.)
O que é aquilo? É horrível!

SHREK
Não seja rude.
É só um burro.

FARQUAAD
Cavaleiros! Novo plano!
Quem matar o ogro será o campeão!

MULTIDÃO
Peguem ele!

SHREK
Ei, calma aí!

(Shrek derrota todos os cavaleiros.)

SHREK
Obrigado! Estou aqui até quinta!
Experimentem o vitelo! (ri)

FARQUAAD
Povo de DuLoc, apresento seu campeão!

SHREK
O quê?

FARQUAAD
Você ganhou a honra de embarcar
em uma grande missão.

SHREK
Missão? Eu já tenho uma.
Quero meu pântano de volta.

FARQUAAD
Faça essa missão para mim
e terá seu pântano exatamente como era.

SHREK
Até o último sapo coberto de lodo?

FARQUAAD
Exatamente.

SHREK
Que tipo de missão?

CAMPO — VIAGEM

BURRO
Então você vai lutar com um dragão
só pra recuperar seu pântano?

SHREK
Talvez exista um bom motivo
para burros não falarem.

SHREK
Ogres são como cebolas.

BURRO
Eles fedem?

SHREK
Não!

BURRO
Fazem chorar?

SHREK
Não! Camadas!
Cebolas têm camadas.
Ogres têm camadas!

BURRO
Bolos também têm camadas…

SHREK
Ogres não são como bolos!

BURRO
Parfait! Todo mundo gosta de parfait!

SHREK
Chega! Ogres são como cebolas!

CASTELO DO DRAGÃO

BURRO
Shrek… você soltou isso?

SHREK
Se fosse eu, você estaria morto.
É enxofre. Estamos perto.

(Eles atravessam a ponte sobre a lava.)

BURRO
Estou com medo!

SHREK
Um passo de cada vez.

BURRO
Estou olhando pra baixo!

SHREK
Isso basta, Burro.

TORRE — SALVANDO FIONA

SHREK
Você é a Princesa Fiona?

FIONA
Sou eu, esperando um cavaleiro corajoso.

SHREK
Legal. Vamos.

FIONA
Mas deveria ser um momento romântico!

SHREK
Sem tempo.

(Dragão aparece.)

FIONA
Você não matou o dragão?!

SHREK
Está na lista de tarefas.

FORA DO CASTELO

FIONA
Você me salvou!
Pode tirar o capacete, nobre cavaleiro.

SHREK
Prefiro não.

FIONA
Como irá me beijar?

SHREK
Isso não estava no contrato.

FIONA
É destino! O primeiro beijo do amor verdadeiro!

(Burro e Shrek começam a rir.)

FIONA
O que há de engraçado?

SHREK
Digamos que eu não sou o seu tipo.

(Shrek remove o capacete.)

FIONA
Você… é um ogro!

SHREK
Esperava o Príncipe Encantado?

FIONA
Na verdade… sim.

SHREK
Fui enviado por Lorde Farquaad.
Ele quer se casar com você.

FIONA
Então por que ele não veio me salvar?

SHREK
Boa pergunta. Você deveria perguntar isso a ele
quando chegarmos lá.

FIONA
Mas eu preciso ser resgatada pelo meu verdadeiro
amor, não por algum ogro e seu... seu
animal de estimação.

BURRO
Bom, lá se foi o nobre corcel.

SHREK
Você não está facilitando meu trabalho.

FIONA
Desculpe, mas seu trabalho não é meu problema.
Você pode dizer ao Lorde Farquaad que, se ele
quiser me resgatar direito, eu estarei esperando
por ele bem aqui.

SHREK
Ei! Eu não sou garoto de recados de ninguém,
entendeu? (tom ameaçador) Eu sou um entregador.
(ele a pega rapidamente e a joga sobre o ombro
como se fosse um saco de batatas)

FIONA
Você não ousaria! Me coloque no chão!

SHREK
Tá vindo, Burro?

BURRO
Tô logo atrás!

FIONA
Me coloque no chão ou sofrerá as consequências!
Isso não é nada digno! Me coloque no chão!

FLORESTA

Algum tempo se passa e Fiona se acalma enquanto
Shrek a carrega.

BURRO
Tá, então aqui vai outra pergunta. Digamos
que exista uma mulher que gosta de você,
mas você não gosta dela desse jeito.
Como você dispensa ela sem machucar os sentimentos
e sem acabar torrado e comido?

FIONA
Você só diz que ela não é seu verdadeiro amor.
Todo mundo sabe o que acontece quando você encontra
seu... (Shrek a deixa cair no chão) Ei!
Quanto mais rápido chegarmos a DuLoc, melhor.

BURRO
Você vai amar lá, Princesa. É lindo!

FIONA
E o meu futuro marido? Lorde Farquaad?
Como ele é?

SHREK
Digamos assim, Princesa: homens da estatura
do Farquaad são raros.
(ele e o Burro riem)

BURRO
Tem gente que pensa pouco dele.
(eles riem novamente)

FIONA
Parem! Vocês dois! Só estão com inveja
porque nunca vão se comparar a um grande
governante como Lorde Farquaad.

SHREK
É… talvez você tenha razão.
Mas deixo você fazer as “medições”
quando o vir amanhã.

FIONA
(olha o pôr do sol) Amanhã?
Vai demorar tudo isso?
Não deveríamos acampar?

SHREK
Não. Isso demoraria mais. Podemos continuar.

FIONA
Mas há ladrões na floresta.

BURRO
Opa! Pausa aí, Shrek! Acampar está começando
a parecer uma boa ideia.

SHREK
Vamos lá. Eu sou mais assustador do que
qualquer coisa que vamos encontrar aqui.

FIONA
Eu preciso achar um lugar para acampar agora!

PENHASCO DA MONTANHA

Shrek encontra uma caverna e empurra uma grande
pedra revelando a entrada.

SHREK
Ei! Aqui!

BURRO
Shrek, dá pra achar coisa melhor.
Isso não é lugar pra princesa.

FIONA
Não, não. Está perfeito.
Só precisa de alguns toques aconchegantes.

SHREK
Toques aconchegantes? Tipo o quê?

(Fiona arranca a casca de uma árvore.)

FIONA
Uma porta? Boa noite, senhores.
(ela entra e coloca a casca como porta)

BURRO
Quer que eu leia uma história pra dormir?

FIONA (dentro da caverna)
Eu disse boa noite!

MAIS TARDE — NOITE

Shrek e Burro estão ao redor da fogueira
olhando as estrelas.

SHREK
Aquela ali é Throwback, o único ogro
que já cuspiu por cima de três plantações.

BURRO
Dá pra ver meu futuro nessas estrelas?

SHREK
As estrelas não mostram o futuro.
Elas contam histórias.

BURRO
Você está inventando.

SHREK
Às vezes as coisas são mais do que parecem.

BURRO
E quando a gente recuperar nosso pântano?

SHREK
Nosso?

BURRO
Quando terminarmos de salvar a princesa.

SHREK
Não existe “nós”. Só eu e meu pântano.
A primeira coisa que vou fazer é construir
um muro de três metros.

BURRO
Acho que esse muro é só pra manter alguém fora.

SHREK
Todo mundo, tá bom?

BURRO
Agora estamos chegando em algum lugar.

Fiona observa escondida da caverna.

SHREK
As pessoas olham pra mim e gritam:
“Socorro! Um ogro feio e idiota!”
Elas me julgam antes de me conhecer.
Por isso é melhor ficar sozinho.

BURRO
Quando eu te conheci, não achei isso.

SHREK
Eu sei.
`)


import styles from '../styles/Rules.module.scss';
    import { Header } from '../components/Header';
// import { SubscribeButton } from '../components/SubscribeButton';

export default function Rules() {
    return (
        <main className={styles.container}>
            <section className={styles.content}>  

                <div>
                    <h1>Funcionamento do Grupo</h1>
                    <p>
                    O grupo NÃO é um curso de Hebraico.<br /> O grupo se propõe a ser um espaço de ajuda mútua a estudantes 
                    iniciantes ou intermediários no Hebraico Moderno.<br />
                    Haverá postagens de lições diversas, sem uma metodologia nem didática que seja própria do ensino.<br />
                    O grupo é livre para os membros comunicarem-se, cooperarem e fazerem perguntas sobre o Hebraico Moderno.<br /> 
                    lições em slides e exercícios, que são passados periodicamente.<br /> 
                    Já há mais de 700 delas que foram postadas
                    no Telegram, no Whatsapp, no <a href="https://www.facebook.com/groups/hebraicoparatodos">Facebook</a> e no <a href="https://www.instagram.com/hebraicooficial/">Instagram</a>.
                    Uma boa prática é começar aprendendo por elas.
                    </p>
                </div>

                <div>
                    <h1>Avisos</h1>
                    <p>
                    Este grupo apoia o estado de Israel e, ele é um grupo Judaico.<br /> 
                    Por isso, não entre se você não gosta de Israel, de Judeus, 
                    se é Antissemita, se é Antissionista, se apoia o Boicote do BDS, 
                    se é Neonazista, Racista, Xenofóbico ou pertence a seitas que afrontam o Judaísmo.<br /> 
                    Este grupo se identifica com os princípios da tolerância de Credos, Costumes, Religiosas, 
                    Racias, Étnicas, Gênero (LGBT), etc.<br />
                    Qualquer um dos integrantes que manifestarem intolerância 
                    com algum outro membro será excluído.
                    </p>
                </div>
                <div>
                    <h1>Regras</h1>
                    <p>
                    1 - TODAS as mensagens DEVERÃO ESTAR LIGADAS AO OBJETIVO DO GRUPO: O HEBRAICO MODERNO.<br /><br />
                    2- PERGUNTAS COM TEMÁTICA RELIGIOSA, POLÍTICA ou as que coloquem em risco a segurança 
                    de Israel não são permitidas, mesmo sendo ligadas ao Hebraico.<br /><br />
                    3 - É expressamente proibido postar mensagens de vendas, fake news e spam de qualquer tipo. 
                    Também estão proibidas postagens que violem direitos autorais, no Brasil e no exterior.<br /><br />
                    4 -  Não é tolerado o uso dos contatos dos membros do grupo para qualquer finalidade, nem mesmo PV, DM ou Inbox.<br /><br />
                    5 -  Todas as mensagens devem ser feitas dentro do grupo.<br /><br />
                    6 - FICA EXPRESSAMENTE PROIBIDO MENCIONAR OS NOMES DE D'US EM HEBRAICO, SEJA EM QUAL ALFABETO FOR. ESPECIALMENTE NA SAUDAÇÃO <strong>"SHALOM AD'NAI"</strong>.<br /><br />
                    7 - Não responderemos perguntas enviadas em PV.<br /><br />
                    8 - Mensagens que descumprirem estas regras explícitas, ou que não forem éticas, que forem proselitistas ou que não cumprirem as leis nacionais e locais, serão excluídas. 
                    Seus autores também poderão ser excluídos do grupo.<br /><br />
                    9 - QUALQUER MEMBRO QUE DESCUMPRIR QUALQUER DAS REGRAS ACIMA, SERÁ EXCLUÍDO.<br /><br />
                    10 - Os autores das postagens são os únicos responsáveis, civil e criminalmente, por seus conteúdos.<br /><br />
                    </p>
                </div>

            </section>

            {/* <SubscribeButton /> */}
        </main>
    )
}
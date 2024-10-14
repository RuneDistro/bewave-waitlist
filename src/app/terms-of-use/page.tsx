export default function TermsOfUse() {
  return (
    <main className="max-w-[920px] w-full mx-auto mt-[170px]">
      <div className="flex flex-col gap-8 mb-8">
        <h1 className="text-center font-madefor-display text-5xl font-bold text-white">
          Termos de Uso da Bewave
        </h1>

        <p className="text-[18px] font-medium text-center">
          Efetivo a partir do dia 3 de Março de 2024
        </p>
      </div>

      <section className="w-full flex flex-col gap-4">
        <SectionTitle title="Introdução" />

        <SectionText>
          Bem-vindo ao site da Bewave, localizado em www.bewavemusic.com (o
          “Site”). Este Acordo contém os termos e condições que regem o uso do
          Site e da plataforma de distribuição musical oferecida pela Bewave.
        </SectionText>

        <SectionText>
          Ao acessar ou usar o Site, você concorda em cumprir e estar sujeito a
          estes Termos de Uso. Se você não concorda com estes termos, por favor,
          não use o Site.
        </SectionText>

        <SectionText>
          A Bewave reserva-se o direito de revisar este Acordo, a seu exclusivo
          critério, a qualquer momento e sem aviso prévio ao usuário. É
          responsabilidade do usuário visitar esta página
          (www.bewavemusic.com/terms-of-use) periodicamente para garantir sua
          aceitação contínua dos Termos de Uso. O uso continuado do Site e da
          plataforma, após a publicação de uma versão revisada destes Termos de
          Uso, constitui a aceitação obrigatória de tais revisões.
        </SectionText>

        <SectionText>
          Você concorda em usar o Site de acordo com todas as leis e
          regulamentos aplicáveis e de maneira que não infrinja os direitos de
          terceiros, incluindo, mas não se limitando a, direitos de propriedade
          intelectual.
        </SectionText>

        <SectionText>
          Todo o conteúdo, incluindo, sem limitação, textos, gráficos, imagens,
          logotipos e software, disponível no Site é de propriedade da Bewave ou
          de seus licenciadores e está protegido por leis de direitos autorais,
          marcas registradas e outras leis de propriedade intelectual. Você não
          pode modificar, copiar, reproduzir, republicar, fazer upload, postar,
          transmitir ou distribuir de qualquer forma qualquer material do Site
          sem a permissão prévia por escrito da Bewave.
        </SectionText>

        <SectionText>
          A Bewave não será responsável por quaisquer danos diretos, indiretos,
          incidentais, especiais ou consequenciais resultantes do uso ou da
          incapacidade de usar o Site ou a plataforma, mesmo que a Bewave tenha
          sido avisada da possibilidade de tais danos. Em nenhuma circunstância
          a responsabilidade total da Bewave por todas as perdas, danos e causas
          de ação (seja em contrato, ato ilícito, incluindo, sem limitação,
          negligência, ou de outra forma) excederá o valor que você pagou, se
          houver, para acessar o Site.
        </SectionText>

        <SectionText>
          Este Acordo será regido e interpretado de acordo com as leis da
          República Federativa do Brasil. Qualquer disputa decorrente ou
          relacionada a estes Termos de Uso será resolvida nos tribunais
          competentes do Brasil.
        </SectionText>

        <SectionText>
          Se qualquer disposição destes Termos de Uso for considerada inválida
          ou inexequível, tal disposição será limitada ou eliminada na medida
          mínima necessária para que os Termos de Uso permaneçam em pleno vigor
          e efeito. A falha da Bewave em exercer qualquer direito previsto
          nestes Termos de Uso não será considerada uma renúncia de quaisquer
          outros direitos aqui estabelecidos.
        </SectionText>

        <SectionText>
          Este documento está sujeito a alterações sem aviso prévio.
          Recomendamos que você revise periodicamente esta página para estar
          ciente de quaisquer mudanças.
        </SectionText>
      </section>

      <section className="w-full flex flex-col gap-4">
        <SectionTitle title="1. O que é a plataforma Bewave:" />

        <SectionText>
          A plataforma Bewave é um software projetado para oferecer uma ampla
          gama de soluções e ferramentas destinadas a artistas e selos
          independentes. Ela facilita a gestão eficiente e profissional de
          carreiras e catálogos musicais através do ambiente digital. A Bewave é
          especialmente direcionada a artistas independentes que buscam otimizar
          a distribuição e promoção de seus conteúdos musicais, assim como a
          selos independentes que necessitam de ferramentas avançadas para a
          gestão de seus portfólios.
        </SectionText>

        <SectionSubTitle subtitle="1.1. Soluções oferecidas pela Bewave:" />
        <SectionList
          items={[
            'Gestão de conteúdo musical, incluindo o envio de faixas, metadados e capas de álbuns.',
            'Análises de desempenho e estatísticas para avaliar o alcance e impacto das músicas.',
          ]}
        />

        <SectionSubTitle subtitle="1.2. Benefícios para os usuários:" />
        <SectionList
          items={[
            'Facilita o acesso a plataformas de streaming e venda de música online.',
            'Permite uma gestão centralizada e eficiente dos direitos autorais e licenciamento.',
          ]}
        />

        <SectionSubTitle subtitle="1.3. Público-alvo:" />
        <SectionList
          items={[
            'Artistas independentes que desejam expandir sua presença digital e promover seu trabalho de forma profissional.',
            'Selos independentes que buscam soluções avançadas para gerenciar e promover seu catálogo musical.',
          ]}
        />
      </section>

      <section className="w-full flex flex-col gap-4">
        <SectionTitle title="2. Uso do aplicativo - Forma de utilização:" />

        <SectionText>
          Os usuários devem realizar um registro na plataforma Bewave para
          acessar suas funcionalidades. Isso inclui o envio de músicas,
          gerenciamento de metadados, análise de desempenho e outras ferramentas
          disponibilizadas para a gestão de conteúdo musical. A utilização da
          plataforma requer o cumprimento estrito dos Termos de Uso e das
          legislações aplicáveis.
        </SectionText>

        <SectionSubTitle subtitle="2.1. Registro na plataforma:" />
        <SectionList
          items={[
            'Os usuários devem fornecer informações precisas e completas durante o processo de registro.',
            'É necessário concordar com os Termos de Uso e as políticas de privacidade da Bewave para completar o registro.',
          ]}
        />

        <SectionSubTitle subtitle="2.2. Funcionalidades disponíveis:" />
        <SectionList
          items={[
            'Envio de músicas e outros conteúdos musicais.',
            'Gerenciamento de metadados, incluindo informações sobre artistas, álbuns e faixas.',
            'Análises de desempenho para acompanhar o alcance e impacto das músicas nas plataformas digitais.',
          ]}
        />

        <SectionSubTitle subtitle="2.3. Restrições de uso:" />
        <SectionList
          items={[
            'Proibição de uso da plataforma para atividades ilegais, fraudulentas ou que violem direitos de terceiros, incluindo direitos autorais.',
          ]}
        />
      </section>

      <section className="w-full flex flex-col gap-4">
        <SectionTitle title="3. Regras para a utilização da plataforma:" />

        <SectionText>
          Os usuários concordam em utilizar a plataforma Bewave de acordo com
          todas as leis, regulamentos e os Termos de Uso estabelecidos pela
          empresa. Isso inclui a proibição de atividades ilegais, fraudulentas
          ou que violem direitos de terceiros, como a propriedade intelectual. A
          Bewave reserva-se o direito de suspender ou encerrar contas de
          usuários e reter receitas, para compensar partes prejudicadas em caso
          de infração às diretrizes mencionadas.
        </SectionText>

        <SectionSubTitle subtitle="3.1. Cumprimento das leis aplicáveis:" />
        <SectionList
          items={[
            'Os usuários devem respeitar todas as leis e regulamentos locais e internacionais relacionados ao uso da plataforma e à distribuição de conteúdo musical.',
          ]}
        />

        <SectionSubTitle subtitle="3.2. Uso responsável:" />
        <SectionList
          items={[
            'Os usuários são responsáveis por todas as atividades realizadas em suas contas, incluindo o uso adequado de direitos autorais e licenciamento de músicas.',
          ]}
        />

        <SectionSubTitle subtitle="3.3. Proibições específicas:" />
        <SectionList
          items={[
            'É proibido o uso da plataforma para enviar conteúdo que viole direitos de terceiros, incluindo plágio ou uso não autorizado de propriedade intelectual.',
          ]}
        />
      </section>

      <section className="w-full flex flex-col gap-4">
        <SectionTitle title="4. Envios" />

        <SectionText>
          Ao enviar conteúdos para a plataforma Bewave, os usuários declaram
          possuir os direitos necessários sobre esses materiais ou ter obtido
          autorização dos titulares dos direitos. A Bewave não reivindica nenhum
          direito de propriedade sobre o conteúdo fornecido pelos usuários, mas
          pode remover qualquer material que viole os Termos de Uso ou a
          legislação aplicável, sem aviso prévio.
        </SectionText>

        <SectionSubTitle subtitle="4.1. Direitos sobre o conteúdo:" />
        <SectionList
          items={[
            'Os usuários garantem que possuem os direitos autorais ou licenças necessárias para o envio de músicas e outros conteúdos musicais para a plataforma Bewave.',
          ]}
        />

        <SectionSubTitle subtitle="4.2. Autorizações e licenciamento:" />
        <SectionList
          items={[
            'Os usuários devem obter autorizações adequadas dos titulares dos direitos antes de enviar músicas para distribuição digital através da Bewave.',
          ]}
        />

        <SectionSubTitle subtitle="4.3. Remoção de conteúdo:" />
        <SectionList
          items={[
            'A Bewave reserva-se o direito de remover qualquer conteúdo que viole os Termos de Uso ou que seja denunciado por violação de direitos autorais por terceiros.',
          ]}
        />
      </section>

      <section className="w-full flex flex-col gap-4">
        <SectionTitle title="5. Garantias e declarações:" />
        <SectionText>
          Os usuários garantem que todas as informações fornecidas à Bewave são
          precisas e completas. Além disso, declaram estar devidamente
          autorizados a aceitar os Termos de Uso e utilizar a plataforma
          conforme estabelecido. Qualquer uso indevido da plataforma pode
          resultar em responsabilização legal por danos causados à Bewave ou a
          terceiros.
        </SectionText>

        <SectionSubTitle subtitle="5.1. Veracidade das informações:" />
        <SectionList
          items={[
            'Os usuários são responsáveis por fornecer informações precisas e atualizadas durante o uso da plataforma Bewave, tais como nome completo, CPF, email de pagamento, nome artístico ou nome da gravadora, entre outras necessárias para o correto funcionamento dos serviços oferecidos.',
          ]}
        />
        <SectionSubTitle subtitle="5.2. Responsabilidade por violações:" />
        <SectionList
          items={[
            'Os usuários são responsáveis por qualquer violação dos Termos de Uso que resulte em danos à Bewave ou a terceiros.',
          ]}
        />
        <SectionSubTitle subtitle="5.3. Consequências legais:" />
        <SectionList
          items={[
            'O uso indevido da plataforma pode resultar em responsabilidade civil ou criminal, conforme previsto pela legislação aplicável.',
          ]}
        />
      </section>

      <section className="w-full flex flex-col gap-4">
        <SectionTitle title="6. Objecções, limitações e exclusões:" />
        <SectionText>
          A Bewave reserva-se o direito de limitar ou restringir o acesso de
          qualquer usuário à plataforma, caso haja suspeita de violação dos
          Termos de Uso, atividades fraudulentas ou que possam prejudicar a
          integridade da plataforma. Modificações ou suspensões temporárias da
          plataforma podem ocorrer para manutenção ou melhoria dos serviços, sem
          aviso prévio aos usuários.
        </SectionText>

        <SectionSubTitle subtitle="6.1. Suspensão de contas:" />
        <SectionList
          items={[
            'A Bewave pode suspender temporariamente ou permanentemente contas de usuários que violem repetidamente os Termos de Uso ou participem de atividades fraudulentas.',
          ]}
        />

        <SectionSubTitle subtitle="6.2. Restrições de acesso:" />
        <SectionList
          items={[
            'A plataforma pode ser restrita para manutenção ou atualização, visando melhorar a experiência do usuário e garantir a segurança dos dados.',
          ]}
        />

        <SectionSubTitle subtitle="6.3. Notificação de alterações:" />
        <SectionList
          items={[
            'Alterações significativas na plataforma serão comunicadas aos usuários através de notificações dentro da plataforma ou por e-mail.',
          ]}
        />
      </section>

      <section className="w-full flex flex-col gap-4">
        <SectionTitle title="7. Indenizações:" />
        <SectionText>
          Os usuários concordam em indenizar, defender e isentar a Bewave, seus
          diretores, funcionários e agentes de quaisquer reclamações, demandas
          ou ações judiciais, incluindo honorários advocatícios, decorrentes do
          uso da plataforma em desacordo com estes Termos de Uso ou com a
          legislação aplicável.
        </SectionText>

        <SectionSubTitle subtitle="7.1. Responsabilidade por danos:" />
        <SectionList
          items={[
            'Os usuários são responsáveis por quaisquer danos causados à Bewave ou a terceiros devido ao uso indevido da plataforma.',
          ]}
        />
        <SectionSubTitle subtitle="7.2. Custos legais:" />
        <SectionList
          items={[
            'Custos legais decorrentes de disputas judiciais ou reclamações relacionadas ao uso da plataforma serão de responsabilidade dos usuários.',
          ]}
        />

        <SectionSubTitle subtitle="7.3. Defesa contra reclamações:" />
        <SectionList
          items={[
            'A Bewave tem o direito de assumir o controle da defesa em qualquer reclamação que exija indenização pelos usuários.',
          ]}
        />
      </section>

      <section className="w-full flex flex-col gap-4">
        <SectionTitle title="8. Encerramento:" />
        <SectionText>
          Os usuários têm o direito de encerrar suas contas na Bewave a qualquer
          momento, seguindo os procedimentos estabelecidos na plataforma. A
          Bewave também se reserva o direito de encerrar contas de usuários que
          infrinjam repetidamente os Termos de Uso ou envolvam-se em atividades
          fraudulentas ou prejudiciais.
        </SectionText>

        <SectionSubTitle subtitle="8.1 Encerramento de contas:" />
        <SectionList
          items={[
            'Os usuários podem solicitar o encerramento de suas contas através do suporte na plataforma Bewave.',
          ]}
        />

        <SectionSubTitle subtitle="8.2 Efeitos do encerramento:" />
        <SectionList
          items={[
            'Ao encerrar a conta, os usuários podem perder o acesso a conteúdos e funcionalidades associadas à plataforma Bewave.',
          ]}
        />

        <SectionSubTitle subtitle="8.3 Consequências do encerramento:" />
        <SectionList
          items={[
            'A Bewave pode reter informações e/ou royalties do usuário conforme necessário para cumprir obrigações legais ou resolver disputas pendentes.',
          ]}
        />
      </section>

      <section className="w-full flex flex-col gap-4">
        <SectionTitle title="9. Notificação:" />
        <SectionText>
          A Bewave poderá enviar notificações aos usuários por e-mail, mensagens
          dentro da plataforma ou outros meios de comunicação disponíveis. Os
          usuários são responsáveis por manter suas informações de contato
          atualizadas para receber essas notificações importantes sobre a
          plataforma Bewave.
        </SectionText>

        <SectionSubTitle subtitle="9.1. Formas de notificação:" />
        <SectionList
          items={[
            'Notificações por e-mail para o endereço fornecido durante o registro na plataforma. - Mensagens dentro da própria plataforma Bewave, visíveis ao fazer login.',
          ]}
        />
        <SectionSubTitle subtitle="9.2. Atualização de informações:" />
        <SectionList
          items={[
            'Os usuários são responsáveis por manter suas informações de contato atualizadas na plataforma para garantir o recebimento eficaz de notificações.',
          ]}
        />

        <SectionSubTitle subtitle="9.3. Importância das notificações:" />
        <SectionList
          items={[
            'Notificações podem incluir atualizações de segurança, mudanças nos serviços ou lembretes sobre obrigações legais.',
          ]}
        />
      </section>

      <section className="w-full flex flex-col gap-4">
        <SectionTitle title="10. Resolução de Litígios:" />
        <SectionText>
          Qualquer disputa relacionada a estes Termos de Uso será regida pelas
          leis da República Federativa do Brasil. As partes concordam em buscar
          resolver amigavelmente quaisquer disputas. Na impossibilidade de
          acordo amigável, fica eleito o foro da cidade de Uruaçu, com exclusão
          de qualquer outro, por mais privilegiado que seja, para dirimir
          quaisquer dúvidas ou controvérsias oriundas deste instrumento.
        </SectionText>

        <SectionSubTitle subtitle="10.1. Aplicabilidade da lei brasileira:" />
        <SectionList
          items={[
            'Todos os aspectos dos Termos de Uso da Bewave são regidos pela legislação brasileira, incluindo interpretação e execução.',
          ]}
        />
        <SectionSubTitle subtitle="10.2. Resolução amigável de disputas:" />
        <SectionList
          items={[
            'As partes concordam em tentar resolver quaisquer disputas ou controvérsias de maneira amigável antes de recorrer a medidas legais.',
          ]}
        />

        <SectionSubTitle subtitle="10.3. Competência do foro:" />
        <SectionList
          items={[
            'Em caso de litígio não resolvido amigavelmente, as partes concordam com o foro da cidade de Uruaçu como competente para resolver quaisquer disputas decorrentes dos Termos de Uso da Bewave.',
          ]}
        />
      </section>

      <section className="w-full flex flex-col gap-4">
        <SectionTitle title="11. Conteúdo e propriedade dos direitos autorais:" />
        <SectionText>
          Todo o conteúdo enviado pelos usuários à plataforma Bewave continua
          sendo de propriedade dos respectivos titulares dos direitos autorais.
          A Bewave não reivindica qualquer direito de propriedade sobre o
          conteúdo fornecido pelos usuários, exceto os necessários para operar a
          plataforma conforme estabelecido nestes Termos de Uso.
        </SectionText>

        <SectionSubTitle subtitle="11.1. Direitos sobre o conteúdo enviado:" />
        <SectionList
          items={[
            'Os usuários mantêm todos os direitos autorais e outros direitos de propriedade intelectual sobre o conteúdo que enviam para a plataforma Bewave.',
          ]}
        />
        <SectionSubTitle subtitle="11.2. Licenciamento e distribuição:" />
        <SectionList
          items={[
            'Ao enviar conteúdo, os usuários concedem à Bewave uma licença não exclusiva para distribuir, exibir e promover o conteúdo conforme necessário para operar a plataforma.',
          ]}
        />

        <SectionSubTitle subtitle="11.3. Uso limitado pela Bewave:" />
        <SectionList
          items={[
            'A Bewave utiliza o conteúdo apenas conforme necessário para os fins estabelecidos nos Termos de Uso, sem assumir nenhum direito de propriedade sobre o mesmo.',
          ]}
        />
      </section>

      <section className="w-full flex flex-col gap-4">
        <SectionTitle title="12. Reclamação e Violação de Direitos Autorais:" />
        <SectionText>
          A Bewave respeita os direitos de propriedade intelectual de terceiros.
          Se você acredita que seu trabalho foi copiado de forma que constitua
          violação de direitos autorais, entre em contato conosco pelo e-mail
          contact@bewavemusic.com para resolver a questão de forma adequada e
          legal.
        </SectionText>

        <SectionSubTitle subtitle="12.1. Processo de reclamação:" />
        <SectionList
          items={[
            'Os titulares de direitos autorais podem enviar uma notificação formal à Bewave indicando a violação de seus direitos.',
          ]}
        />
        <SectionSubTitle subtitle="12.2. Resposta da Bewave:" />
        <SectionList
          items={[
            'A Bewave analisará a reclamação e tomará as medidas apropriadas, que podem incluir a remoção do conteúdo infrator da plataforma.',
          ]}
        />

        <SectionSubTitle subtitle="12.3. Proteção dos direitos:" />
        <SectionList
          items={[
            'A Bewave colaborará com os titulares de direitos autorais para resolver disputas de forma justa e eficaz, visando proteger os direitos de propriedade intelectual. Se você tiver alguma dúvida sobre estes Termos de Uso, por favor, entre em contato conosco através do e-mail: contact@bewavemusic.com.',
          ]}
        />
      </section>
    </main>
  )
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="w-full border-b border-[#333] font-madefor-display text-white text-2xl pt-8 pb-3">
      {title}
    </h2>
  )
}

function SectionSubTitle({ subtitle }: { subtitle: string }) {
  return (
    <h3 className="w-full font-madefor-display text-white text-xl pt-4">
      {subtitle}
    </h3>
  )
}

function SectionList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-1">
      {items.map((item) => (
        <li key={item} className="flex text-[15px] leading-7 gap-3">
          <span>-</span>
          {item}
        </li>
      ))}
    </ul>
  )
}

function SectionText({ children }: { children: React.ReactNode }) {
  return <p className="text-[15px] leading-7">{children}</p>
}

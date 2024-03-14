import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'
import * as React from 'react'

export const WaitlistEmail = () => {
  return (
    <Html>
      <Head />
      <Preview>Bewave Welcome</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                black: '#050517',
                offwhite: '#fafbfb',
                orange: '#EC642B',
              },
              spacing: {
                0: '0px',
                10: '10px',
                20: '20px',
                45: '45px',
              },
            },
          },
        }}
      >
        <Body className="bg-offwhite text-base font-sans">
          <Img
            src={`https://live.staticflickr.com/65535/53587570100_02154e8018_n.jpg`}
            width="134"
            height="28"
            alt="Bewave"
            className="mx-auto my-20"
          />
          <Container className="bg-white px-45 pt-45 pb-20">
            <Heading className="text-center mt-0 leading-8">
              Bem-vindo à Bewave
            </Heading>

            <Section>
              <Row>
                <Text key={1} className="text-base">
                  Tudo certo, você já está na nossa lista de espera e iremos
                  notificá-lo quando tivermos grandes novidades!
                </Text>

                <Text key={2} className="text-base">
                  Agradecemos pela sua inscrição e garantimos que irá colher
                  bons frutos com esta nossa parceria. Fique bem🎵
                </Text>
              </Row>
            </Section>
            <Section className="mt-45">
              <Row>
                <Text
                  key={3}
                  className="text-sm text-center text-gray-600 my-0"
                >
                  🧡
                </Text>
                <Text
                  key={4}
                  className="text-sm text-center font-semibold text-gray-600 my-0"
                >
                  Equipe Bewave
                </Text>
              </Row>
            </Section>
          </Container>

          <Container className="my-20 pb-20">
            <Section>
              <Text className="text-center text-base font-semibold text-gray-600 my-10">
                Redes sociais
              </Text>
              <Row>
                <Column className="text-right pl-20">
                  <Link
                    key={5}
                    href="https://www.instagram.com/bewave.music/"
                    target="_blank"
                  >
                    Instagram
                  </Link>
                </Column>
                <Column className="text-center px-0">
                  <Link
                    key={6}
                    href="https://www.youtube.com/@Bewavemusic"
                    target="_blank"
                  >
                    Youtube
                  </Link>
                </Column>
                <Column className="text-left pr-20">
                  <Link
                    key={7}
                    href="https://twitter.com/BewaveMusic"
                    target="_blank"
                  >
                    Twitter - X
                  </Link>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default WaitlistEmail

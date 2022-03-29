import React from 'react';
import { Title, Text, Container, Group, Image, Card } from '@mantine/core';

const Em: React.FC = ({ children }) => (
  <Text inherit variant='gradient' component='span'>
    {children}
  </Text>
);

const Hero = () => {
  return (
    <>
      <Title
        sx={{ fontSize: 100, fontWeight: 900, letterSpacing: -2 }}
        align='center'
        mt={100}
        mb={50}
      >
        Justin{' '}
        <Text
          inherit
          variant='gradient'
          gradient={{ from: 'blue', to: 'violet' }}
          component='span'
        >
          Lambert
        </Text>
      </Title>
      <Container>
        <Card shadow='md'>
          <Group position='center'>
            <Image alt='headshot' height={300} radius='md' src='profile.jpg' />
            <Text
              color='dimmed'
              align='center'
              size='xl'
              sx={{ maxWidth: 580 }}
              m='xl'
            >
              <Text inherit mb='lg'>
                Hi, I&apos;m <Em>Justin</Em>. I&apos;m a software engineer based
                in the Orlando, FL area. I&apos;m experienced in building
                full-stack applications using{' '}
                <Em>TypeScript, React, and Node</Em>. I&apos;m also experienced
                in building and maintaining a variety of other tools and
                technologies.
              </Text>
              <Text inherit>
                I have worked on projects in the{' '}
                <Em>healthcare, finance, and education space</Em> and have
                experience with <Em>Agile, Scrum, and Kanban</Em>. I have a
                passion for learning and building new things and am always
                looking to learn new technologies and improve my skills.
              </Text>
            </Text>
          </Group>
        </Card>
      </Container>
    </>
  );
};

export default Hero;

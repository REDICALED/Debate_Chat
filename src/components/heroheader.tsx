import { IconCheck } from '@tabler/icons-react';
import { Button, Container, Group, Image, List, Text, ThemeIcon, Title } from '@mantine/core';
import image from './chatai.svg';
import classes from './HeroBullets.module.css';

export function HeroBullets() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className="flex ">
        <div className={classes.content}>
          <Title className={classes.title}>
            Debatato! <br/> A simple debate Web with AI.
          </Title>
          <Text c="dimmed" mt="md">
            Debatato는 AI와의 키워드 기반 토론 웹사이트입니다!<br/>
            간단한 키워드를 입력하면 AI가 토론 주제를 제안해줍니다. <br/>
            바로 토론을 시작해보세요!
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck size={12} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>groq API</b> –  LLM(대형 언어 모델)용 맞춤형 추론 언어 처리 장치(LPU)를 개발하는 기업이며, 현재 API를 제공해줍니다!
            </List.Item>
            <List.Item>
              <b>Model - llama3</b> – meta에서 개발 중인 무료 AI LLM 모델. 공짜로 이용가능!
            </List.Item>

          </List>


        </div>
        <Image src={image.src} className={classes.image} />
        </div>
      </div>
    </Container>
  );
}
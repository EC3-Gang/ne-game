import { Button, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import plot from '../plot.json';

function Screen({ currentScreen, onUpdateScreen }) {
  const { choices, heading, text } = plot[currentScreen];

  const onChoiceClicked = (choice) => {
    onUpdateScreen(choice.screenTo);
  };

  useEffect(() => {
    // change background image on component mount
    document.body.style.setProperty('background-image', 'url("https://www.shutterstock.com/image-photo/robin-erithacus-rubecula-isolated-on-260nw-742894039.jpg")', 'important');
    return () => {
      document.body.style.setProperty('background-image', '');
    };
  }, []);
  
  return (
    <>
      <Heading my='5'>{heading}</Heading>
      <Text my='5'>{text}</Text>
      <SimpleGrid my='5' w='100%' columns={{sm: 1, md: 2}} gap={6}>
        {
          choices.map((choice, index) => (
            <Button
              key={index}
              whiteSpace='normal'
              height='auto'
              blockSize='auto'
              py='5'
              w='100%'
              h='100%'
              colorScheme='blue'
              onClick={() => onChoiceClicked(choice)}
            >{choice.label}</Button>
          ))
        }
      </SimpleGrid>
    </>
  );
}

export default Screen;

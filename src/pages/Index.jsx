import React, { useState } from "react";
import { Box, Heading, Text, VStack, Grid, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button } from "@chakra-ui/react";

const projects = [
  {
    title: "Cryptocurrency Price Tracker",
    description: "Created a program capable of tracking the prices of cryptocurrency updated in live time utilizing Python & PyQt6. The program UI was created using QT Designer.",
    image: "https://images.unsplash.com/photo-1554260570-c7068c223285?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMHByaWNlJTIwdHJhY2tlciUyMGFwcHxlbnwwfHx8fDE3MTExNDEzMDV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Drone Simulation Model",
    description: ["Directed an advanced drone delivery simulation using State and Observer patterns to enhance realism by 30%.", "Enhanced both front-end and back-end development processes, achieving a 25% reduction in bug occurrence and a 20% improvement in UI responsiveness.", "Refined Agile project delivery with Jira, leading to a 40% boost in team productivity and a 15% reduction in release time."],
    image: "https://images.unsplash.com/photo-1486611367184-17759508999c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGRlbGl2ZXJ5JTIwc2ltdWxhdGlvbnxlbnwwfHx8fDE3MTExNDEzMDZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Handwritten Digit Detector",
    description: ["Created a machine-learning model capable of identifying handwritten digits utilizing the open-source TensorFlow library and the MNIST dataset.", "The machine-learning model achieved an accuracy of 93 percent on average."],
    image: "https://images.unsplash.com/photo-1510090896050-4005ac527060?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYW5kd3JpdHRlbiUyMGRpZ2l0JTIwcmVjb2duaXRpb258ZW58MHx8fHwxNzExMTQxMzA2fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Publish Subscribe System (PubSub)",
    description: ["PubSub is a publish-subscribe system that allows clients to join, leave, subscribe, unsubscribe, publish and ping.", "The system is comprised of two components: the server and the client.", "The server is implemented using the Remote Procedure Call (RPC) library rpyc and manages a list of clients and articles.", "The client uses the rpyc library to connect to the server and allows the user to make requests.", "Articles are received by clients using a UDP socket and a receive thread is started to listen for incoming articles."],
    image: "https://images.unsplash.com/photo-1578674351410-8b28ab3c66b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwdWJsaXNoJTIwc3Vic2NyaWJlJTIwc3lzdGVtJTIwZGlhZ3JhbXxlbnwwfHx8fDE3MTExNDEzMDZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Tetris Variant",
    description: ["Implemented an animated Python GUI program to play a variant of the classic video game Tetris using the turtle library.", "Utilized object-oriented programming concepts to create classes that encapsulate the game's data and behavior.", "Customized the game's play area size and color, making the game adaptable to different screen sizes."],
    image: "https://images.unsplash.com/photo-1594652634010-275456c808d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZXRyaXMlMjBnYW1lJTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3MTExNDEzMDZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const ProjectModal = ({ isOpen, onClose, project }) => (
  <Modal isOpen={isOpen} onClose={onClose} size="xl">
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{project.title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Image src={project.image} mb={4} />
        {Array.isArray(project.description) ? (
          <VStack align="start" spacing={2}>
            {project.description.map((item, index) => (
              <Text key={index}>{item}</Text>
            ))}
          </VStack>
        ) : (
          <Text>{project.description}</Text>
        )}
      </ModalBody>
      <ModalFooter>
        <Button onClick={onClose}>Close</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

const Index = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openModal = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
    <Box p={8}>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl">
          Adam Shahin
        </Heading>
        <Text fontSize="xl" textAlign="center" maxW="3xl">
          Adam Shahin is a passionate software engineer with a strong drive for technology and software development. He enjoys tackling complex problems and creating innovative solutions that make a difference.
        </Text>
        <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={8}>
          {projects.map((project, index) => (
            <Box key={index} borderWidth={1} borderRadius="lg" p={4} cursor="pointer" onClick={() => openModal(project)}>
              <Image src={project.image} mb={4} />
              <Heading as="h3" size="md" mb={2}>
                {project.title}
              </Heading>
              <Text noOfLines={2}>{Array.isArray(project.description) ? project.description[0] : project.description}</Text>
            </Box>
          ))}
        </Grid>
      </VStack>
      <ProjectModal isOpen={isOpen} onClose={onClose} project={selectedProject} />
    </Box>
  );
};

export default Index;

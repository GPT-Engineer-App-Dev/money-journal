import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="gray.800" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex align="center">
            <Heading as="h1" size="lg" letterSpacing={"tighter"}>
              Financial Times
            </Heading>
            <Spacer />
            <HStack spacing={8}>
              <Link href="#" color="white">Home</Link>
              <Link href="#" color="white">World</Link>
              <Link href="#" color="white">Business</Link>
              <Link href="#" color="white">Tech</Link>
              <Link href="#" color="white">Culture</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Headlines Section */}
          <Box>
            <Heading as="h2" size="xl" mb={4}>Headlines</Heading>
            <VStack spacing={4} align="stretch">
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h3" size="md">Headline 1</Heading>
                <Text mt={2}>Summary of the first headline...</Text>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h3" size="md">Headline 2</Heading>
                <Text mt={2}>Summary of the second headline...</Text>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h3" size="md">Headline 3</Heading>
                <Text mt={2}>Summary of the third headline...</Text>
              </Box>
            </VStack>
          </Box>

          {/* Featured Articles Section */}
          <Box>
            <Heading as="h2" size="xl" mb={4}>Featured Articles</Heading>
            <VStack spacing={4} align="stretch">
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h3" size="md">Featured Article 1</Heading>
                <Text mt={2}>Summary of the first featured article...</Text>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h3" size="md">Featured Article 2</Heading>
                <Text mt={2}>Summary of the second featured article...</Text>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h3" size="md">Featured Article 3</Heading>
                <Text mt={2}>Summary of the third featured article...</Text>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={4} mt={8}>
        <Container maxW="container.xl">
          <Text textAlign="center">&copy; {new Date().getFullYear()} Financial Times. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
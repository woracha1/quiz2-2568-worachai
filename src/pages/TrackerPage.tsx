
import { Button, Stack, Title, Divider, Container } from "@mantine/core";




export default function FoodTracker() {


  return (
    <Container style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Title order={2} mb="md">
        Food Tracker
      </Title>
      <Button>Add Food Item</Button>
      {/* Type additional AddFoodModal here. */}

      <Divider my="md" />
      {/* Type additional total cost here. */}
      <Title order={4}>Total: {} Baht</Title>
      <Stack my="sm">Main Course: {} Baht</Stack>
      <Stack my="sm">Drinks: {} Baht</Stack>
      <Stack my="sm">Dessert: {} Baht</Stack>


      <Divider my="md" />
      {/* Type additional card here. */}

      <Stack>{/* Type additional food card list here. */}</Stack>
    </Container>
  );
}

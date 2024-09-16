import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
 
    <Stack>
        <Stack.Screen name="index"/>
        <Stack.Screen
        name="register"
        options={{
          presentation: 'containedModal',
          
            headerShown:false
        }}

      />
    </Stack>
);
}

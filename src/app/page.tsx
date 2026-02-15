import HomeScreen from "@/components/home/home-screen/HomeScreen";
import AuthScreen from "@/components/home/auth-screen/AuthScreen";


export default function Home() {
  const user = false;
  return (
   <main className="mx-auto px-4 max-w-7xl">
     <h1 className="text-3xl font-bold w-5xl">
      {user ? <HomeScreen /> : <AuthScreen />}
     </h1>
   </main>
  );
}

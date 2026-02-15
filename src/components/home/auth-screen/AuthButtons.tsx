import { Button } from "@/components/ui/button";


const AuthButtons = () => {
  return (
    <div className="flex gap-3 md:flex-row flex-col text-black w-full max-w-md">
        <Button className="flex-1 bg-black text-white hover:bg-gray-800 font-semibold">
            Sign up
        </Button>
        <Button className="flex-1 text-white font-semibold">
            Login
        </Button>
    </div>
  );
};

export default AuthButtons;
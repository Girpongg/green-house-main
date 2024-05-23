import { Button, Card, CardBody, CardHeader, CardFooter, Avatar, Typography } from "@material-tailwind/react";
import { getCurrentUser, isLogin, signInWithGoogle } from "../utils/Auth";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import logo from "/images/logo-bg.png";

export default function Login() {
    const [login, setLogin] = useState(false);
    const [loginMsg, setLoginMsg] = useState(null);

    const signIn = async () => {
        try {
            await signInWithGoogle();
            console.log("sign in done");

            if (isLogin()) {
                console.log("redirect");
                window.location.reload();
                return <Navigate to="/admin" />
            }

            console.log("false");
        } catch (error) {
            setLoginMsg("Login gagal. Silahkan coba lagi")
            console.log("Failed To Sign in");
        }
    }

    if (isLogin()) {
        return <Navigate to="/admin" />
    }

    return (
        <div className="flex items-center justify-center mt-32">
            <Card className="w-96">
                <CardHeader
                    variant="gradient"
                    color="white"
                    className="mb-4 grid h-36 place-items-center border-green-500 border-2"
                >
                    <Avatar
                        variant="circular"
                        size="xxl"
                        alt="logo"
                        className="place-items-center mx-auto"
                        src={logo}
                    />
                </CardHeader>

                <CardFooter className="pt-0">
                    <Button variant="outlined" fullWidth onClick={signIn}>
                        <div className="flex place-items-center justify-center gap-3">
                            <img src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/logos/logo-google.png" alt="google" className="h-6 w-6" />
                            Sign In with Google
                        </div>
                    </Button>
                    {loginMsg && (
                        <Typography color="red" variant="small" className="mt-6 flex justify-center text-center">
                            {loginMsg}
                        </Typography>
                    )}
                    <Typography variant="small" className="mt-6 flex justify-center text-center">
                        Silahkan hubungi Admin untuk mendapatkan akses
                    </Typography>
                </CardFooter>
            </Card>
        </div>
    )
}

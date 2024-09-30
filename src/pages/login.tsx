import "../App.css";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { 
    Input 
} from "@/components/ui/input";


export default function Login() {
    return(
        <div>
            <div>
                <p className="text-2xl mb-10 font-thin">Biblioteca Olhares do Mundo</p>
            </div>
        <Card>
          <CardHeader>
            <CardTitle>Seja bem-vindo</CardTitle>

          </CardHeader>
          <CardContent>
            <p>
                <div>
                    <label>Login</label>
                    <Input></Input>
                </div>
                
            </p>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </div>
    )

}
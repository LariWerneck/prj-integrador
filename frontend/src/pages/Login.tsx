import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-hero items-center justify-center p-12">
        <div className="max-w-md">
          <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-8">
            <span className="text-primary-foreground font-heading font-bold text-2xl">M</span>
          </div>
          <h2 className="text-4xl font-heading font-bold text-primary-foreground mb-4">
            Bem-vindo de volta ao MoodTask
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Gerencie tarefas, acompanhe o humor da equipe e motive seus colaboradores.
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold">M</span>
            </div>
            <span className="font-heading font-bold text-xl text-foreground">MoodTask</span>
          </div>

          <h1 className="text-3xl font-heading font-bold text-foreground mb-2">Entrar</h1>
          <p className="text-muted-foreground mb-8">Digite suas credenciais para acessar</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="password">Senha</Label>
                <Link to="/forgot-password" className="text-sm text-primary hover:underline">Esqueceu a senha?</Link>
              </div>
              <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button type="submit" className="w-full bg-gradient-primary text-primary-foreground">
              Entrar
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Não tem conta?{" "}
            <Link to="/register" className="text-primary font-medium hover:underline">Criar conta</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

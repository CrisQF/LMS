import { headers } from "next/headers";
import { LoginForm } from "./_components/LoginForm";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";


export default async function LoginPage() {
    // Verificar sesión de forma segura
    try {
        const session = await auth.api.getSession({
            headers: await headers(),
        });

        // Solo redirigir si hay sesión válida con usuario
        if(session?.user?.id) {
            redirect("/");
        }
    } catch (error) {
        // Si hay error al verificar sesión, simplemente mostrar el login
        // No bloquear el acceso a la página de login
        // No loguear el error completo para evitar problemas de serialización en RSC
    }
    
    // Mostrar formulario de login (ya sea porque no hay sesión o hubo error)
    return <LoginForm />;
} 
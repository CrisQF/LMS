# Cursos LMS

Sistema de gestión de aprendizaje (LMS) moderno construido con Next.js, React, y TypeScript. Esta aplicación permite gestionar cursos en línea con autenticación segura, verificación de correo electrónico, y protección contra bots y rate limiting.

## Características

- 🔐 **Autenticación segura** con Better Auth
- 📧 **Verificación de correo** con Resend y OTP
- 🛡️ **Protección avanzada** con Arcjet (rate limiting, bot detection, email validation)
- 🎨 **UI moderna** con shadcn/ui y Tailwind CSS
- 🌙 **Tema oscuro/claro** con next-themes
- ⚡ **Rendimiento optimizado** con Next.js 16
- 🧪 **Testing** con Jest y React Testing Library

## Tecnologías

- **Framework**: Next.js 16
- **Lenguaje**: TypeScript
- **Base de datos**: PostgreSQL con Prisma
- **Autenticación**: Better Auth
- **UI**: shadcn/ui, Radix UI, Tailwind CSS
- **Email**: Resend
- **Seguridad**: Arcjet
- **Testing**: Jest, React Testing Library

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

Run tests:

```bash
npm run test
# or
pnpm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Run tests with coverage:

```bash
npm run test:coverage
```

## Scripts Disponibles

- `dev` - Inicia el servidor de desarrollo
- `build` - Construye la aplicación para producción
- `start` - Inicia el servidor de producción
- `lint` - Ejecuta ESLint
- `test` - Ejecuta los tests
- `test:watch` - Ejecuta los tests en modo watch
- `test:coverage` - Ejecuta los tests con cobertura

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

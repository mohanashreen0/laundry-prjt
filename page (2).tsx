import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Store, User } from 'lucide-react';
import { Logo } from '@/components/logo';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Logo className="h-10 w-10 text-primary" />
        <div className="space-x-2">
          <Button asChild variant="ghost">
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </header>
      <main className="flex-grow flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary tracking-tight">
              DropNDry
            </h1>
            <p className="mt-4 text-lg md:text-xl text-foreground/80">
              Doorstep Laundry Pickup & Delivery
            </p>
            <p className="mt-8 text-xl font-semibold text-foreground">
              Who are you?
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Link href="/login">
                <Card className="hover:shadow-lg hover:border-primary transition-all duration-300 cursor-pointer h-full">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 p-4 rounded-full">
                      <User className="h-10 w-10 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-2xl font-bold">I'm a Customer</CardTitle>
                    <CardDescription className="mt-2">
                      Book a pickup for your laundry in minutes.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/login">
                <Card className="hover:shadow-lg hover:border-primary transition-all duration-300 cursor-pointer h-full">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 p-4 rounded-full">
                      <Store className="h-10 w-10 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-2xl font-bold">I'm a Vendor</CardTitle>
                    <CardDescription className="mt-2">
                      Manage your laundry shop and grow your business.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-foreground/60 text-sm">
        &copy; {new Date().getFullYear()} DropNDry. All rights reserved.
      </footer>
    </div>
  );
}

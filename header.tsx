'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Home, ListOrdered, LayoutDashboard, Settings, UserCircle } from 'lucide-react';
import { Logo } from './logo';
import { UserNav } from './shared/user-nav';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/user/dashboard', label: 'Home', icon: Home, roles: ['user'] },
  { href: '/user/orders/order-123', label: 'My Orders', icon: ListOrdered, roles: ['user'] },
  { href: '/vendor/dashboard', label: 'Dashboard', icon: LayoutDashboard, roles: ['vendor'] },
  { href: '/vendor/profile', label: 'Profile', icon: Settings, roles: ['vendor'] },
  { href: '/admin/dashboard', label: 'Admin Dashboard', icon: UserCircle, roles: ['admin'] },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  // A simple way to determine the current role. In a real app, this would come from an auth context.
  const currentRole = pathname.split('/')[1] || 'user';
  const filteredNavLinks = navLinks.filter(link => link.roles.includes(currentRole));

  const NavContent = () => (
    <>
      {filteredNavLinks.map((link) => (
        <Button key={link.href} asChild variant={pathname.startsWith(link.href) ? 'secondary' : 'ghost'} className="justify-start">
          <Link href={link.href} onClick={() => setIsOpen(false)}>
            <link.icon className="mr-2 h-4 w-4" />
            {link.label}
          </Link>
        </Button>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-8 w-8 text-primary" />
            <span className="hidden font-bold sm:inline-block">DropNDry</span>
          </Link>
          <nav className="hidden items-center gap-4 md:flex">
             {filteredNavLinks.map((link) => (
              <Link key={link.href} href={link.href} className={cn("text-sm font-medium transition-colors hover:text-primary", pathname.startsWith(link.href) ? 'text-primary' : 'text-muted-foreground' )}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
           <UserNav />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-4 py-6">
                <Link href="/" className="mb-4 flex items-center gap-2 px-4">
                  <Logo className="h-8 w-8 text-primary" />
                  <span className="font-bold">DropNDry</span>
                </Link>
                <nav className="flex flex-col gap-2 px-4">
                  <NavContent />
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

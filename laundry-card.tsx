import Image from 'next/image';
import Link from 'next/link';
import type { LaundryShop } from '@/lib/placeholder-data';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, WashingMachine, Shirt, Sparkles } from 'lucide-react';

type LaundryCardProps = {
  shop: LaundryShop;
};

const serviceIcons = {
  'Wash & Fold': <WashingMachine className="h-4 w-4" />,
  'Ironing': <Shirt className="h-4 w-4" />,
  'Dry Cleaning': <Sparkles className="h-4 w-4" />,
};

export function LaundryCard({ shop }: LaundryCardProps) {
  return (
    <Link href={`/user/orders/order-123`}>
        <Card className="overflow-hidden h-full flex flex-col group hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="p-0">
            <div className="relative h-40 w-full">
            <Image
                src={shop.image.imageUrl}
                alt={shop.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                data-ai-hint={shop.image.imageHint}
            />
            </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
            <h3 className="text-lg font-bold font-headline truncate">{shop.name}</h3>
            <div className="flex items-center text-sm text-muted-foreground mt-2">
            <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 text-yellow-400 fill-yellow-400" />
                <span>{shop.rating}</span>
                <span className="ml-1">({shop.reviewCount})</span>
            </div>
            <span className="mx-2">•</span>
            <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{shop.distance}</span>
            </div>
            </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
            <div className="flex flex-wrap gap-2">
            {shop.services.map((service) => (
                <Badge key={service.id} variant="secondary" className="flex items-center gap-1">
                {serviceIcons[service.name]}
                {service.name}
                </Badge>
            ))}
            </div>
        </CardFooter>
        </Card>
    </Link>
  );
}

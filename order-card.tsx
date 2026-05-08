import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import type { Order } from '@/lib/placeholder-data';
import { Badge } from '../ui/badge';
import { User, Calendar, Clock } from 'lucide-react';

type OrderCardProps = {
  order: Order;
};

export function OrderCard({ order }: OrderCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex justify-between items-start">
            <div>
                <CardTitle className="text-lg">Order #{order.id.split('-')[1]}</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-1">
                    <User className="h-4 w-4" />
                    {order.customerName}
                </CardDescription>
            </div>
            <Badge variant={order.status === 'Order Placed' ? "default" : "secondary"}>{order.status}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2 text-sm text-muted-foreground">
          {order.items.map((item, index) => (
            <li key={index} className="flex justify-between">
              <span>{item.serviceName} x{item.quantity}</span>
              <span>${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <Separator className="my-3" />
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>${order.total.toFixed(2)}</span>
        </div>
        <div className="text-xs text-muted-foreground mt-4 space-y-2">
            <div className='flex items-center gap-2'>
                <Calendar className='h-3 w-3'/>
                <span>Order Placed: {order.orderDate}</span>
            </div>
            <div className='flex items-center gap-2'>
                <Clock className='h-3 w-3'/>
                <span>Pickup: {order.pickupTime.split(',')[1]}</span>
            </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-accent hover:bg-accent/90">Update Status</Button>
      </CardFooter>
    </Card>
  );
}

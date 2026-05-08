import { cn } from "@/lib/utils";
import { CheckCircle2, Circle, Home, Loader, PackageCheck, Truck } from "lucide-react";

type Status = 'Order Placed' | 'Pickup Scheduled' | 'In Process' | 'Out for Delivery' | 'Delivered';

const statusSteps: { name: Status; icon: React.ElementType }[] = [
  { name: 'Order Placed', icon: PackageCheck },
  { name: 'Pickup Scheduled', icon: Truck },
  { name: 'In Process', icon: Loader },
  { name: 'Out for Delivery', icon: Truck },
  { name: 'Delivered', icon: Home },
];

type OrderStatusTrackerProps = {
  currentStatus: Status;
};

export function OrderStatusTracker({ currentStatus }: OrderStatusTrackerProps) {
  const currentStepIndex = statusSteps.findIndex(step => step.name === currentStatus);

  return (
    <div className="relative">
      <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-border -translate-x-1/2" />
      <ol className="space-y-6">
        {statusSteps.map((step, index) => {
          const isCompleted = index < currentStepIndex;
          const isCurrent = index === currentStepIndex;

          const Icon = isCompleted ? CheckCircle2 : isCurrent ? statusSteps[currentStepIndex].icon : Circle;
          
          return (
            <li key={step.name} className="flex items-start">
              <div className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full z-10 shrink-0",
                  isCompleted || isCurrent ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground border"
                )}>
                  <Icon className={cn("h-5 w-5", isCurrent && step.name === 'In Process' && "animate-spin")} />
              </div>
              <div className="ml-4">
                <h4 className={cn("font-semibold", isCompleted || isCurrent ? "text-foreground" : "text-muted-foreground")}>{step.name}</h4>
                <p className="text-sm text-muted-foreground">
                    {isCompleted ? "Completed" : isCurrent ? "In progress" : "Pending"}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

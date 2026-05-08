import { laundryShops } from '@/lib/placeholder-data';
import { LaundryCard } from './laundry-card';

export function LaundryList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {laundryShops.map((shop) => (
        <LaundryCard key={shop.id} shop={shop} />
      ))}
    </div>
  );
}

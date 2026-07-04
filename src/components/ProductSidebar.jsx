import { X } from 'lucide-react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { useLanguage } from '@/app/context/LanguageContext';

function ProductSidebar({ category, setSelectCategory }) {
  const data = category?.data;
  const { currentLang } = useLanguage();

  const getItemName = (item) => {
    switch (currentLang) {
      case "ru":
        return item.name_ru || item.name;
      case "ar":
        return item.name_ar || item.name;
      case "az":
        return item.name_az || item.name;
      case "tr":
        return item.name_tr || item.name;
      default:
        return item.name;
    }
  };

  return (
    <div className='p-3 sm:p-5 bg-white border rounded'>
      {/* Header */}
      <div className='flex justify-between items-center'>
        <h2 className='text-lg sm:text-2xl font-medium'>Filter</h2>
      </div>

      {/* Category Filter */}
      <div className='px-2 mt-4'>
        <h2 className='font-bold mb-2'>Category</h2>
        <RadioGroup defaultValue="comfortable">
          {data?.map((item) => (
            <div key={item?.id} className="flex items-center gap-3 mb-2">
              <RadioGroupItem
                onClick={() => setSelectCategory(item?.id)}
                className="text-[#7CAE4D]"
                value={String(item?.id)}
                id={String(item?.id)}
              />
              <Label htmlFor={String(item?.id)}>
                {getItemName(item)}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}

export default ProductSidebar;

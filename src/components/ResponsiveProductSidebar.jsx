import { Search } from "lucide-react"
import { Input } from "./ui/input"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Label } from "./ui/label"

function ResponsiveProductSidebar({ search, setSearch, categoryData ,setSelectCategory }) {
    return (
        <div className="px-4 my-5">
            <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-10 text-[#7CAE4D] caret-[#7CAE4D] focus:outline-none focus:ring-2 focus:ring-[#7CAE4D] focus:border-[#7CAE4D] focus:shadow-md focus:shadow-[#7CAE4D]/30"
                    aria-label="Search products"
                />
            </div>
            <div className='px-2 mt-4'>
                <h2 className='font-bold mb-2'>Category</h2>
                <RadioGroup defaultValue="comfortable">
                    {categoryData?.data?.map((item) => (
                        <div key={item?.id} className="flex items-center gap-3 mb-2">
                            <RadioGroupItem
                                onClick={() => setSelectCategory(item?.id)}
                                className="text-[#7CAE4D]"
                                value={String(item?.id)}
                                id={String(item?.id)}
                            />
                            <Label htmlFor={String(item?.id)}>{item?.name}</Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>
        </div>
    )
}

export default ResponsiveProductSidebar
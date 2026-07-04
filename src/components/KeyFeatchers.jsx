import { LocateFixed, UserPlus, BarChart3, Users, RefreshCcw, LifeBuoy } from "lucide-react";
function KeyFeatchers() {
   const myData = [
  {
    id:1,
    icon: LocateFixed,
    title: "Locate Buyers For Your Products",
    description:
      "Easily discover verified food importers who are actively looking for the specific products you export. Save time and grow faster by targeting the right audience in the right regions."
  },
  {
    id:2,
    icon: UserPlus,
    title: "Get New Leads Daily",
    description:
      "Gain access to a fresh list of high-potential leads every single day. Our system keeps your pipeline full with active buyers from global markets, ready to do business."
  },
  {
    id:3,
    icon: BarChart3,
    title: "Analyse Size and Financial Details",
    description:
      "Evaluate potential buyers with in-depth data including company size, financial strength, purchase volume, and trade history — so you only invest time in valuable prospects."
  },
  {
    id:4,
    icon: Users,
    title: "Reach the Decision Makers",
    description:
      "Get direct access to key decision-makers like procurement heads, CEOs, and senior import managers. Skip the gatekeepers and speed up your sales cycle."
  },
  {
    id:5,
    icon: RefreshCcw,
    title: "Work with the Latest Information",
    description:
      "Our platform ensures you always work with the most recent contact details, buyer activity logs, and updated business intelligence to stay one step ahead of the competition."
  },
  {
    id:6,
    icon: LifeBuoy,
    title: "Get Reliable Support and Updates",
    description:
      "Enjoy dedicated customer support and receive timely alerts, buyer updates, and guidance from our expert team — helping you close more deals with confidence."
  }
];

    return (
        <div className="container mx-auto my-10 px-4">
            <h2 className="text-xl sm:text-2xl capitalize font-bold text-center">Key <span className="underlined">Features</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 lg:grid-cols-3 mx-auto">
                {myData?.map((item, index) => (
                <div className="shadow rounded m-2 sm:m-5" key={item?.id}>
                    <div  className="flex flex-col m-3 sm:m-5 items-center">
                    <item.icon className="w-10 h-10 sm:w-14 sm:h-14 text-green-600 mt-1" />
                    <div className="text-center">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default KeyFeatchers
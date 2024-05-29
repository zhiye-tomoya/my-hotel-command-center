import Image from "next/image";
export default async function incidentPage() {
  const data = await getData();

  return (
    <div className="w-full md:ml-[300px]">
      <div className="flex h-full justify-center">
        <h1 className="flex items-center text-4xl font-extrabold">
          <DataTable data={data} />
        </h1>
      </div>
    </div>
  );
}

interface Incident {
  id: number;
  status: string;
  createdAt: Date;
  roomNumber: number;
  description: string;
  photo?: string;
  remarks?: string;
  updatedAt: Date;
  category?: string;
}

async function getData(): Promise<Incident[]> {
  return [
    {
      id: 1,
      status: "pending",
      createdAt: new Date("2023-05-29T10:00:00"),
      roomNumber: 101,
      description: "Pikachu plushy",
      photo: "/images/poke1.jpeg",
      remarks: "Reported in the morning",
      updatedAt: new Date("2023-05-29T12:00:00"),
      category: "Lost and Found",
    },
    {
      id: 2,
      status: "resolved",
      createdAt: new Date("2023-05-28T14:30:00"),
      roomNumber: 201,
      description: "Television not turning on",
      updatedAt: new Date("2023-05-29T09:00:00"),
      category: "Electronics",
    },
    {
      id: 3,
      status: "pending",
      createdAt: new Date("2023-05-29T16:15:00"),
      roomNumber: 301,
      description: "Air conditioning not cooling",
      remarks: "Needs urgent attention",
      updatedAt: new Date("2023-05-29T16:15:00"),
      category: "Malfunction",
    },
    {
      id: 4,
      status: "in-progress",
      createdAt: new Date("2023-05-27T09:00:00"),
      roomNumber: 401,
      description: "Piplup plushy",
      photo: "/images/poke2.jpeg",
      updatedAt: new Date("2023-05-29T10:30:00"),
      category: "Lost and Found",
    },
    {
      id: 5,
      status: "resolved",
      createdAt: new Date("2023-05-26T08:00:00"),
      roomNumber: 501,
      description: "Wifi not working",
      updatedAt: new Date("2023-05-28T14:00:00"),
      category: "Malfunction",
    },
    {
      id: 6,
      status: "pending",
      createdAt: new Date("2023-05-29T18:30:00"),
      roomNumber: 601,
      description: "Bathroom light not working",
      remarks: "Needs to be fixed urgently",
      updatedAt: new Date("2023-05-29T18:30:00"),
      category: "Malfunction",
    },
    {
      id: 7,
      status: "in-progress",
      createdAt: new Date("2023-05-27T11:15:00"),
      roomNumber: 701,
      description: "Charmander plushy",
      photo: "/images/poke3.jpeg",
      updatedAt: new Date("2023-05-29T09:45:00"),
      category: "Furniture",
    },
    {
      id: 8,
      status: "pending",
      createdAt: new Date("2023-05-29T14:20:00"),
      roomNumber: 801,
      description: "Window not closing properly",
      updatedAt: new Date("2023-05-29T14:20:00"),
      category: "Windows",
    },
    {
      id: 9,
      status: "resolved",
      createdAt: new Date("2023-05-28T09:30:00"),
      roomNumber: 901,
      description: "Refrigerator not cooling",
      updatedAt: new Date("2023-05-29T16:00:00"),
      category: "Appliances",
    },
    {
      id: 10,
      status: "in-progress",
      createdAt: new Date("2023-05-27T15:45:00"),
      roomNumber: 1001,
      description: "Mew plushy",
      photo: "/images/poke4.jpeg",
      remarks: "It might be Tomo's",
      updatedAt: new Date("2023-05-29T10:15:00"),
      category: "Losst and Found",
    },
    {
      id: 11,
      status: "pending",
      createdAt: new Date("2023-05-29T11:30:00"),
      roomNumber: 1101,
      description: "Lost wallet",
      updatedAt: new Date("2023-05-29T11:30:00"),
      category: "Lost and Found",
    },
  ];
}

const DataTable = ({ data }: { data: Incident[] }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Created At
            </th>
            <th scope="col" className="px-6 py-3">
              Room Number
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Photo
            </th>
            <th scope="col" className="px-6 py-3">
              Remarks
            </th>
            <th scope="col" className="px-6 py-3">
              Updated At
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.status}</td>
              <td className="px-6 py-4">{new Date(item.createdAt).toLocaleString()}</td>
              <td className="px-6 py-4">{item.roomNumber}</td>
              <td className="px-6 py-4">{item.description}</td>
              <td className="px-6 py-4">{item.photo && <Image src={item.photo} alt="Photo" width={100} height={100} className="rounded-md" />}</td>
              <td className="px-6 py-4">{item.remarks}</td>
              <td className="px-6 py-4">{new Date(item.updatedAt).toLocaleString()}</td>
              <td className="px-6 py-4">{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

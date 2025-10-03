export default function CategoryCard({ name, icon }: { name: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center bg-base-200 rounded-2xl p-6 hover:bg-base-300 transition cursor-pointer">
      {icon}
      <p className="mt-3 font-semibold">{name}</p>
    </div>
  );
}

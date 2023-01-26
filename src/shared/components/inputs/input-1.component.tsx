export default function Input1Component({ title, example, type, name, value }:any) {
  return (
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-white">
        {title}
      </label>
      <div className="mt-1">
        <input
          onChange={(e) => {
            value.current = e.target.value;
          }}
          type={type}
          name={name}
          id={name}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder={example}
        />
      </div>
    </div>
  );
}

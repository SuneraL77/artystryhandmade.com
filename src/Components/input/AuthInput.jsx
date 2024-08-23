export default function AuthInput({
  name,
  type,
  placeholder,
  register,
  error,
}) {
  return (
    <div className="w-full">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="md:p-[10px] p-[5px] w-full outline-none border-none bg-gray-100 Nu font-[600] md:text-[18px] text-[15px]"
        {...register(name)}
      />
      {error && <p className="text-red-400">{error}</p>}
    </div>
  );
}

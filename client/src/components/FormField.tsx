export default function FormField({ label, ...props }: FormFieldProps) {
  return (
    <div className="p-2">
      {label && <span>{label}</span>}
      <input className="w-full p-4 outline-none border-none shadow-card text-primary font-bold" type="text" {...props} />
    </div>
  );
}

interface FormFieldProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
}

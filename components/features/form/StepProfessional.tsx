interface StepProfessionalProps {
  setValue: (name: "tipoRenda", value: string) => void;
  watch: (name: "tipoRenda") => string;
}

export default function StepProfessional({
  setValue,
  watch,
}: StepProfessionalProps) {
  const selected = watch("tipoRenda");

  const options = [
    "CLT",
    "AUTONOMO",
    "PJ",
  ];

  return (
    <div className="grid grid-cols-1 gap-3">
      {options.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setValue("tipoRenda", item)}
          className={`h-14 rounded-xl border transition ${
            selected === item
              ? "border-primary bg-primary/5"
              : "border-border"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
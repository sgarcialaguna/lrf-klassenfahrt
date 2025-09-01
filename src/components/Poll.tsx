import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

function MonthCheckbox({
  number,
  label,
  months,
}: {
  number: number;
  label: string;
  months: Array<number>;
}) {
  return (
    <div className="flex items-center gap-3">
      <Checkbox
        defaultChecked={months.includes(number)}
        name="months"
        id={number.toString()}
        value={number.toString()}
      ></Checkbox>
      <Label htmlFor={number.toString()}>{label}</Label>
    </div>
  );
}

export default function Poll({ months }: { months: Array<number> }) {
  return (
    <>
      <h1 className="text-2xl mb-8">Wann kannst du fahren?</h1>

      <form method="post">
        <div className="grid gap-4 grid-rows-3 grid-flow-col">
          <MonthCheckbox
            months={months}
            number={10}
            label="Oktober"
          ></MonthCheckbox>
          <MonthCheckbox
            months={months}
            number={11}
            label="November"
          ></MonthCheckbox>
          <MonthCheckbox
            months={months}
            number={12}
            label="Dezember"
          ></MonthCheckbox>
          <MonthCheckbox
            months={months}
            number={1}
            label="Januar 2026"
          ></MonthCheckbox>
          <MonthCheckbox
            months={months}
            number={2}
            label="Februar 2026"
          ></MonthCheckbox>
          <MonthCheckbox
            months={months}
            number={3}
            label="März 2026"
          ></MonthCheckbox>
        </div>

        <Button type="submit" className="mt-8">
          Submit
        </Button>
      </form>
    </>
  );
}

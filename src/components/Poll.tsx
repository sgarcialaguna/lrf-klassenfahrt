import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

export default function Poll() {
  return (
    <>
      <h1 className="text-2xl mb-8">Wann kannst du fahren?</h1>

      <form method="post">
        <div className="grid gap-4 grid-rows-3 grid-flow-col">
          <div className="flex items-center gap-3">
            <Checkbox name="months" id="10" value="10"></Checkbox>
            <Label htmlFor="10">Oktober</Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox name="months" id="11" value="11"></Checkbox>
            <Label htmlFor="11">November</Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox name="months" id="12" value="12"></Checkbox>
            <Label htmlFor="12">Dezember</Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox name="months" id="1" value="1"></Checkbox>
            <Label htmlFor="1">Januar 2026</Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox name="months" id="2" value="2"></Checkbox>
            <Label htmlFor="2">Februar 2026</Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox name="months" id="3" value="3"></Checkbox>
            <Label htmlFor="3">März 2026</Label>
          </div>
        </div>

        <Button type="submit" className="mt-8">
          Submit
        </Button>
      </form>
    </>
  );
}

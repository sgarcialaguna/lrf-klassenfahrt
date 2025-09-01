import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
export default function Results() {
  return (
    <div className="mt-8">
      <h1 className="text-2xl mb-8">Ergebnisse</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nutzername</TableHead>
            <TableHead>Oktober</TableHead>
            <TableHead>November</TableHead>
            <TableHead>Dezember</TableHead>
            <TableHead>Januar</TableHead>
            <TableHead>Februar</TableHead>
            <TableHead>März</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Santiago García</TableCell>
            <TableCell>✅</TableCell>
            <TableCell>✅</TableCell>
            <TableCell>✅</TableCell>
            <TableCell>✅</TableCell>
            <TableCell>✅</TableCell>
            <TableCell>✅</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>cpt-marve</TableCell>
            <TableCell>❌</TableCell>
            <TableCell>❌</TableCell>
            <TableCell>❌</TableCell>
            <TableCell>✅</TableCell>
            <TableCell>✅</TableCell>
            <TableCell>✅</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold">Gesamt</TableCell>
            <TableCell>1</TableCell>
            <TableCell>1</TableCell>
            <TableCell>1</TableCell>
            <TableCell className="font-bold">2</TableCell>
            <TableCell className="font-bold">2</TableCell>
            <TableCell className="font-bold">2</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

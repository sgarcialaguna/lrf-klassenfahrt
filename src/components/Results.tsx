import { User } from "astro:db";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

function mode(arr: Array<any>) {
  return arr.sort(
    (a, b) =>
      arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
  )[arr.length - 1];
}

function ResultCell({
  number,
  users,
}: {
  number: number;
  users: Array<{ months: Array<number> }>;
}) {
  const flatMonths = users.map((u) => u.months).reduce((a, b) => a.concat(b));
  const mostCommonElement = mode(flatMonths);
  const length = flatMonths.filter((m) => m === number).length;
  return (
    <TableCell
      className={
        flatMonths.filter((m) => m === mostCommonElement).length === length
          ? "font-bold"
          : ""
      }
    >
      {length}
    </TableCell>
  );
}

export default function Results({
  users,
}: {
  users: [
    { id: string; icon?: string; username: string; months: Array<number> }
  ];
}) {
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
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <img src={user.icon} width="20" height="20"></img>
                  {user.username}
                </div>
              </TableCell>
              <TableCell>{user.months.includes(10) ? "✅" : "❌"}</TableCell>
              <TableCell>{user.months.includes(11) ? "✅" : "❌"}</TableCell>
              <TableCell>{user.months.includes(12) ? "✅" : "❌"}</TableCell>
              <TableCell>{user.months.includes(1) ? "✅" : "❌"}</TableCell>
              <TableCell>{user.months.includes(2) ? "✅" : "❌"}</TableCell>
              <TableCell>{user.months.includes(3) ? "✅" : "❌"}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell></TableCell>
            <ResultCell number={10} users={users}></ResultCell>
            <ResultCell number={11} users={users}></ResultCell>
            <ResultCell number={12} users={users}></ResultCell>
            <ResultCell number={1} users={users}></ResultCell>
            <ResultCell number={2} users={users}></ResultCell>
            <ResultCell number={3} users={users}></ResultCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

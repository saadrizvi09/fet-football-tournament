import Navbar from "@/components/Navbar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TeamData {
  team: string;
  wins: number;
  draws: number;
  losses: number;
  points: number;
}

const groupAData: TeamData[] = [
  { team: "Computer Science", wins: 1, draws: 0, losses: 0, points: 3},
  { team: "Civil Engineering", wins: 0, draws: 0, losses: 0, points: 0 },
  { team: "Electrical Engineering", wins: 0, draws: 0, losses: 1, points: 0},
];

const groupBData: TeamData[] = [
  { team: "Electroncis adn Communication Engineering", wins: 1, draws: 0, losses: 0, points: 3},
  { team: "Mechanical Engineering", wins: 0, draws: 0, losses: 1, points: 0 },
  { team: "Aeronautics Engineering", wins: 0, draws: 0, losses: 0, points: 0 },
];

const GroupTable = ({ title, data }: { title: string; data: TeamData[] }) => {
  return (
    <div className="stat-card animate-fade-in">
      <h2 className="text-2xl font-bold mb-4 text-primary">{title}</h2>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="font-bold">Team</TableHead>
            <TableHead className="text-center font-bold">W</TableHead>
            <TableHead className="text-center font-bold">D</TableHead>
            <TableHead className="text-center font-bold">L</TableHead>
            <TableHead className="text-center font-bold">Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((team, index) => (
            <TableRow key={team.team} className="table-row-hover">
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {index + 1}
                  </span>
                  {team.team}
                </div>
              </TableCell>
              <TableCell className="text-center">{team.wins}</TableCell>
              <TableCell className="text-center">{team.draws}</TableCell>
              <TableCell className="text-center">{team.losses}</TableCell>
              <TableCell className="text-center">
                <span className="inline-flex items-center justify-center rounded-full bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">
                  {team.points}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const TablePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Tournament Standings
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <GroupTable title="Group A" data={groupAData} />
          <GroupTable title="Group B" data={groupBData} />
        </div>
      </main>
    </div>
  );
};

export default TablePage;

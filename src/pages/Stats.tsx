import Navbar from "@/components/Navbar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Target, Users } from "lucide-react";

interface PlayerStat {
  name: string;
  team: string;
  value: number;
}

const topScorers: PlayerStat[] = [
  { name: "Saad Rizvi", team: "Electronics and Communication", value: 10 },
  { name: "Monis", team: "Civil ", value: 1 },
  { name: "Haris", team: "Electrical ", value: 1},
  { name: "Hamza", team: "Computer ", value: 1 },
  { name: "Ashaiz", team: "Electronics and Communication", value: 1 },
  { name: "Rehan", team: "Electrical ", value: 1 },
    { name: "Asjad", team: "Mechanical ", value: 1 }


];

const topAssisters: PlayerStat[] = [
  { name: "Ayaan", team: "Computer ", value: 1 },
  { name: "Haris", team: "Civil Engineering", value: 1 },
  { name: "Ashaiz", team: "Electrical Engineering", value: 1 },
  { name: "Saad Rizvi", team: "Electronics and Communication Engineering", value: 10 },
  { name: "Monis", team: "Computer  ", value: 1 }
];

const StatsTable = ({
  title,
  data,
  icon: Icon,
  valueLabel,
}: {
  title: string;
  data: PlayerStat[];
  icon: typeof Target;
  valueLabel: string;
}) => {
  return (
    <div className="stat-card animate-fade-in">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold text-primary">{title}</h2>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="font-bold">Rank</TableHead>
            <TableHead className="font-bold">Player</TableHead>
            <TableHead className="font-bold">Team</TableHead>
            <TableHead className="text-center font-bold">{valueLabel}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((player, index) => (
            <TableRow key={player.name} className="table-row-hover">
              <TableCell>
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                    index < 3
                      ? "bg-gradient-to-br from-accent to-accent/80 text-accent-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {index + 1}
                </span>
              </TableCell>
              <TableCell className="font-medium">{player.name}</TableCell>
              <TableCell className="text-muted-foreground">{player.team}</TableCell>
              <TableCell className="text-center">
                <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                  {player.value}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const StatsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Player Statistics
        </h1>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <div className="overflow-x-auto -mx-4 px-4">
            <StatsTable
            title="Top Scorers"
            data={topScorers}
            icon={Target}
            valueLabel="Goals"
          />
          </div>
          <div className="overflow-x-auto -mx-4 px-4">
            <StatsTable
            title="Top Assisters"
            data={topAssisters}
            icon={Users}
            valueLabel="Assists"
          />
          </div>
        </div>
      </main>
    </div>
  );
};

export default StatsPage;

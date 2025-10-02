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
  { name: "Ahmed Hassan", team: "Computer Science", value: 7 },
  { name: "Mohamed Ali", team: "Civil Engineering", value: 6 },
  { name: "Omar Khaled", team: "Electrical Engineering", value: 5 },
  { name: "Youssef Ibrahim", team: "Chemical Engineering", value: 5 },
  { name: "Karim Ahmed", team: "Computer Science", value: 4 },
  { name: "Hassan Mohamed", team: "Civil Engineering", value: 4 },
  { name: "Ali Mahmoud", team: "Mechanical Engineering", value: 3 },
  { name: "Ibrahim Samy", team: "Electrical Engineering", value: 3 },
  { name: "Mahmoud Adel", team: "Chemical Engineering", value: 2 },
  { name: "Samy Hassan", team: "Aerospace Engineering", value: 2 },
];

const topAssisters: PlayerStat[] = [
  { name: "Khaled Youssef", team: "Computer Science", value: 5 },
  { name: "Adel Omar", team: "Civil Engineering", value: 4 },
  { name: "Sami Karim", team: "Electrical Engineering", value: 4 },
  { name: "Tarek Ali", team: "Chemical Engineering", value: 3 },
  { name: "Waleed Ahmed", team: "Computer Science", value: 3 },
  { name: "Amr Hassan", team: "Civil Engineering", value: 3 },
  { name: "Hazem Mohamed", team: "Mechanical Engineering", value: 2 },
  { name: "Ramy Ibrahim", team: "Electrical Engineering", value: 2 },
  { name: "Nasser Mahmoud", team: "Chemical Engineering", value: 2 },
  { name: "Fadi Samy", team: "Aerospace Engineering", value: 1 },
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
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Player Statistics
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <StatsTable
            title="Top Scorers"
            data={topScorers}
            icon={Target}
            valueLabel="Goals"
          />
          <StatsTable
            title="Top Assisters"
            data={topAssisters}
            icon={Users}
            valueLabel="Assists"
          />
        </div>
      </main>
    </div>
  );
};

export default StatsPage;

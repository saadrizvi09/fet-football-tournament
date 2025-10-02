import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Calendar, Target, Users } from "lucide-react";

interface Match {
  id: number;
  date: string;
  teamA: string;
  teamB: string;
  scoreA: number;
  scoreB: number;
  scorers: { player: string; team: string }[];
  assisters: { player: string; team: string }[];
}

const recentMatches: Match[] = [
  {
    id: 1,
    date: "2025-09-28",
    teamA: "Computer Science",
    teamB: "Electrical Engineering",
    scoreA: 3,
    scoreB: 2,
    scorers: [
      { player: "Ahmed Hassan", team: "Computer Science" },
      { player: "Karim Ahmed", team: "Computer Science" },
      { player: "Ahmed Hassan", team: "Computer Science" },
      { player: "Omar Khaled", team: "Electrical Engineering" },
      { player: "Ibrahim Samy", team: "Electrical Engineering" },
    ],
    assisters: [
      { player: "Khaled Youssef", team: "Computer Science" },
      { player: "Waleed Ahmed", team: "Computer Science" },
      { player: "Khaled Youssef", team: "Computer Science" },
      { player: "Sami Karim", team: "Electrical Engineering" },
      { player: "Ramy Ibrahim", team: "Electrical Engineering" },
    ],
  },
  {
    id: 2,
    date: "2025-09-27",
    teamA: "Civil Engineering",
    teamB: "Chemical Engineering",
    scoreA: 2,
    scoreB: 2,
    scorers: [
      { player: "Mohamed Ali", team: "Civil Engineering" },
      { player: "Hassan Mohamed", team: "Civil Engineering" },
      { player: "Youssef Ibrahim", team: "Chemical Engineering" },
      { player: "Mahmoud Adel", team: "Chemical Engineering" },
    ],
    assisters: [
      { player: "Adel Omar", team: "Civil Engineering" },
      { player: "Amr Hassan", team: "Civil Engineering" },
      { player: "Tarek Ali", team: "Chemical Engineering" },
      { player: "Nasser Mahmoud", team: "Chemical Engineering" },
    ],
  },
  {
    id: 3,
    date: "2025-09-26",
    teamA: "Mechanical Engineering",
    teamB: "Aerospace Engineering",
    scoreA: 2,
    scoreB: 1,
    scorers: [
      { player: "Ali Mahmoud", team: "Mechanical Engineering" },
      { player: "Ali Mahmoud", team: "Mechanical Engineering" },
      { player: "Samy Hassan", team: "Aerospace Engineering" },
    ],
    assisters: [
      { player: "Hazem Mohamed", team: "Mechanical Engineering" },
      { player: "Hazem Mohamed", team: "Mechanical Engineering" },
      { player: "Fadi Samy", team: "Aerospace Engineering" },
    ],
  },
  {
    id: 4,
    date: "2025-09-25",
    teamA: "Computer Science",
    teamB: "Mechanical Engineering",
    scoreA: 4,
    scoreB: 0,
    scorers: [
      { player: "Ahmed Hassan", team: "Computer Science" },
      { player: "Ahmed Hassan", team: "Computer Science" },
      { player: "Karim Ahmed", team: "Computer Science" },
      { player: "Karim Ahmed", team: "Computer Science" },
    ],
    assisters: [
      { player: "Khaled Youssef", team: "Computer Science" },
      { player: "Waleed Ahmed", team: "Computer Science" },
      { player: "Khaled Youssef", team: "Computer Science" },
      { player: "Waleed Ahmed", team: "Computer Science" },
    ],
  },
  {
    id: 5,
    date: "2025-09-24",
    teamA: "Civil Engineering",
    teamB: "Aerospace Engineering",
    scoreA: 3,
    scoreB: 0,
    scorers: [
      { player: "Mohamed Ali", team: "Civil Engineering" },
      { player: "Mohamed Ali", team: "Civil Engineering" },
      { player: "Hassan Mohamed", team: "Civil Engineering" },
    ],
    assisters: [
      { player: "Adel Omar", team: "Civil Engineering" },
      { player: "Amr Hassan", team: "Civil Engineering" },
      { player: "Adel Omar", team: "Civil Engineering" },
    ],
  },
];

const MatchCard = ({ match }: { match: Match }) => {
  return (
    <div className="match-card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{new Date(match.date).toLocaleDateString()}</span>
        </div>
        <Badge variant={match.scoreA === match.scoreB ? "secondary" : "default"}>
          {match.scoreA === match.scoreB ? "Draw" : "Full Time"}
        </Badge>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex-1 text-center">
          <h3 className="font-bold text-lg mb-2">{match.teamA}</h3>
        </div>
        <div className="flex items-center justify-center gap-4 px-6">
          <span className="text-4xl font-bold text-primary">{match.scoreA}</span>
          <span className="text-2xl text-muted-foreground">-</span>
          <span className="text-4xl font-bold text-primary">{match.scoreB}</span>
        </div>
        <div className="flex-1 text-center">
          <h3 className="font-bold text-lg mb-2">{match.teamB}</h3>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-border">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Target className="h-4 w-4 text-primary" />
            <h4 className="font-semibold text-sm">Scorers</h4>
          </div>
          <div className="space-y-2">
            {match.scorers.map((scorer, index) => (
              <div
                key={index}
                className="text-sm bg-muted/50 rounded-md px-3 py-2 flex items-center justify-between"
              >
                <span className="font-medium">{scorer.player}</span>
                <span className="text-xs text-muted-foreground">{scorer.team}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <Users className="h-4 w-4 text-accent" />
            <h4 className="font-semibold text-sm">Assisters</h4>
          </div>
          <div className="space-y-2">
            {match.assisters.map((assister, index) => (
              <div
                key={index}
                className="text-sm bg-muted/50 rounded-md px-3 py-2 flex items-center justify-between"
              >
                <span className="font-medium">{assister.player}</span>
                <span className="text-xs text-muted-foreground">{assister.team}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MatchesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Recent Matches
        </h1>
        <div className="max-w-4xl mx-auto space-y-6">
          {recentMatches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default MatchesPage;

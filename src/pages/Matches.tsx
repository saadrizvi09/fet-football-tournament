import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface Match {
  id: number;
  date: string;
  teamA: string;
  teamB: string;
  scoreA: number;
  scoreB: number;
  goals: { scorer: string; assister?: string; team: string }[];
}

const recentMatches: Match[] = [
  {
    id: 1,
    date: "2025-09-28",
    teamA: "Computer Science",
    teamB: "Electrical Engineering",
    scoreA: 1,
    scoreB: 1,
    goals: [
      { scorer: "Hamza", assister: "Ayaan", team: "Computer Science" },
      { scorer: "Rehan", team: "Electrical" },
    ],
  },
  {
    id: 2,
    date: "2025-09-27",
    teamA: "Mechanical Engineering",
    teamB: "Electronics and Communication ",
    scoreA: 1,
    scoreB: 5,
    goals: [
      { scorer: "Asjad", team: "Mechanical" },
      { scorer: "Saad Rizvi", assister: "Haris", team: "Electronics and Communication" },
      { scorer: "Haris", assister: "Saad Rizvi", team: "Electronics and Communication" },
      { scorer: "Monis Khan", team: "Electronics and Communication" },
      { scorer: "Saad Rizvi", assister: "Ashaiz", team: "Electronics and Communication" },
      { scorer: "Ashaiz", team: "Electronics and Communication" },
    ],
  }
];

const MatchCard = ({ match }: { match: Match }) => {
  return (
    <>                       <div className="w-[120vw]"></div>
    <div className="bg-card rounded-lg shadow-lg p-4 sm:p-6 border border-border">

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{new Date(match.date).toLocaleDateString()}</span>
        </div>
        <Badge variant={match.scoreA === match.scoreB ? "secondary" : "default"}>
          {match.scoreA === match.scoreB ? "Draw" : "Full Time"}
        </Badge>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:gap-4 items-start">
        {/* Team A Section */}
        <div className="flex flex-col items-start sm:items-center">
          <h3 className="font-bold text-lg mb-4 text-center">{match.teamA}</h3>
          <div className="w-full space-y-2">
            {match.goals
              .filter((goal) => goal.team.includes(match.teamA.split(' ')[0]))
              .map((goal, index) => (
                <div
                  key={`goal-a-${index}`}
                  className="text-sm bg-muted/50 rounded-md px-3 py-2"
                >
                  <div className="flex items-center gap-2">
                    <span>⚽</span>
                    <span className="font-medium">{goal.scorer}</span>
                  </div>
                  {goal.assister && (
                    <div className="flex items-center gap-2 ml-6 mt-1 text-muted-foreground">
                      <span>🎯</span>
                      <span className="text-xs">{goal.assister}</span>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* Score Section */}
        <div className="flex items-center justify-center py-2">
          <div className="flex items-center gap-4">
            <span className="text-3xl sm:text-4xl font-bold text-primary">{match.scoreA}</span>
            <span className="text-xl sm:text-2xl text-muted-foreground">-</span>
            <span className="text-3xl sm:text-4xl font-bold text-primary">{match.scoreB}</span>
          </div>
        </div>

        {/* Team B Section */}
        <div className="flex flex-col items-start sm:items-center">
          <h3 className="font-bold text-lg mb-4 text-center">{match.teamB}</h3>
          <div className="w-full space-y-2">
            {match.goals
              .filter((goal) => goal.team.includes(match.teamB.split(' ')[0]))
              .map((goal, index) => (
                <div
                  key={`goal-b-${index}`}
                  className="text-sm bg-muted/50 rounded-md px-3 py-2"
                >
                  <div className="flex items-center gap-2">
                    <span>⚽</span>
                    <span className="font-medium">{goal.scorer}</span>
                  </div>
                  {goal.assister && (
                    <div className="flex items-center gap-2 ml-6 mt-1 text-muted-foreground">
                      <span>🎯</span>
                      <span className="text-xs">{goal.assister}</span>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
    </>

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
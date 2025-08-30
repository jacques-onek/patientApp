import { Home, Calendar, FileText, HeartPulse } from "lucide-react"

export const sideBarLinks = [
  { 
    href: "/", 
    label: "Accueil",
     icon: Home
 },
  { 
    href: "/rendez-vous",
    label: "Rendez-vous",
    icon: Calendar
 },
  { 
    href: "/dossier",
    label: "Dossier médical", 
    icon: FileText 
},
  { href: "/recommandation", 
    label: "Recommandations", 
    icon: HeartPulse 
},
]

import { useState } from "react";
import { Bell, CheckCircle, XCircle, Clock, AlertCircle, UserPlus, CreditCard } from "lucide-react";

/**
 * Centre de notifications admin (ex: signalements, alertes paiements)
 */

type NotificationType = "payment" | "registration" | "order" | "report";

interface Notification {
  id: number;
  type: NotificationType;
  title: string;
  text: string;
  read: boolean;
  timestamp: string;
  priority: "high" | "medium" | "low";
}

export default function NotificationsAdmin() {
  const [notes, setNotes] = useState<Notification[]>([
    { 
      id: 1, 
      type: "payment",
      title: "Signalement paiement V-001", 
      text: "Vendeur a signalé un retard de paiement pour Janvier 2025", 
      read: false,
      timestamp: "Il y a 5 minutes",
      priority: "high"
    },
    { 
      id: 2, 
      type: "registration",
      title: "Nouvelle inscription", 
      text: "Boutique Mode Saly a soumis une demande d'inscription", 
      read: false,
      timestamp: "Il y a 2 heures",
      priority: "medium"
    },
    { 
      id: 3, 
      type: "order",
      title: "Commande anormale", 
      text: "Commande CMD-123 bloquée pour vérification manuelle", 
      read: true,
      timestamp: "Hier à 14:30",
      priority: "high"
    },
    { 
      id: 4, 
      type: "report",
      title: "Signalement produit", 
      text: "Un client a signalé le produit PRD-456 comme non conforme", 
      read: false,
      timestamp: "Il y a 1 jour",
      priority: "low"
    },
  ]);

  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");

  const markRead = (id: number) => setNotes(n => n.map(x => x.id === id ? {...x, read: true} : x));
  const markAllRead = () => setNotes(n => n.map(x => ({...x, read: true})));
  const remove = (id: number) => setNotes(n => n.filter(x => x.id !== id));

  // Filtrer les notifications
  const filteredNotes = notes.filter(n => {
    if (filter === "unread") return !n.read;
    if (filter === "read") return n.read;
    return true;
  });

  const unreadCount = notes.filter(n => !n.read).length;

  // Icônes selon le type
  const getIcon = (type: NotificationType) => {
    switch(type) {
      case "payment": return <CreditCard className="w-5 h-5" />;
      case "registration": return <UserPlus className="w-5 h-5" />;
      case "order": return <AlertCircle className="w-5 h-5" />;
      case "report": return <Bell className="w-5 h-5" />;
      default: return <Bell className="w-5 h-5" />;
    }
  };

  // Couleurs selon la priorité
  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case "high": return "bg-red-100 text-red-700 border-red-200";
      case "medium": return "bg-orange-100 text-orange-700 border-orange-200";
      case "low": return "bg-blue-100 text-blue-700 border-blue-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div>
      {/* En-tête */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Bell className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Notifications</h1>
            <p className="text-sm text-gray-600">
              {unreadCount} notification{unreadCount > 1 ? 's' : ''} non lue{unreadCount > 1 ? 's' : ''}
            </p>
          </div>
        </div>

        {unreadCount > 0 && (
          <button
            onClick={markAllRead}
            className="px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition inline-flex items-center gap-2 text-sm font-medium"
          >
            <CheckCircle className="w-4 h-4" />
            Tout marquer comme lu
          </button>
        )}
      </div>

      {/* Filtres */}
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            filter === "all" 
              ? "bg-blue-600 text-white" 
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Toutes ({notes.length})
        </button>
        <button
          onClick={() => setFilter("unread")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            filter === "unread" 
              ? "bg-blue-600 text-white" 
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Non lues ({unreadCount})
        </button>
        <button
          onClick={() => setFilter("read")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            filter === "read" 
              ? "bg-blue-600 text-white" 
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Lues ({notes.length - unreadCount})
        </button>
      </div>

      {/* Liste des notifications */}
      <div className="bg-white rounded-lg shadow border overflow-hidden">
        {filteredNotes.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {filteredNotes.map(n => (
              <li 
                key={n.id} 
                className={`p-4 transition hover:bg-gray-50 ${
                  !n.read ? "bg-blue-50/30" : ""
                }`}
              >
                <div className="flex gap-4">
                  {/* Icône du type */}
                  <div className={`flex-shrink-0 p-2 rounded-lg ${getPriorityColor(n.priority)}`}>
                    {getIcon(n.type)}
                  </div>

                  {/* Contenu */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-900">{n.title}</h3>
                          {!n.read && (
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{n.text}</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>{n.timestamp}</span>
                          {n.priority === "high" && (
                            <span className="ml-2 px-2 py-0.5 bg-red-100 text-red-700 rounded-full font-medium">
                              Urgent
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-1 flex-shrink-0">
                        {!n.read && (
                          <button
                            onClick={() => markRead(n.id)}
                            className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition"
                            title="Marquer comme lu"
                          >
                            <CheckCircle className="w-5 h-5" />
                          </button>
                        )}
                        <button
                          onClick={() => remove(n.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                          title="Supprimer"
                        >
                          <XCircle className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <Bell className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-600 font-medium">
              {filter === "all" && "Aucune notification"}
              {filter === "unread" && "Aucune notification non lue"}
              {filter === "read" && "Aucune notification lue"}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Les nouvelles notifications apparaîtront ici
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
import { useState } from "react";
import { Bell, CheckCircle, XCircle } from "lucide-react";

/**
 * Centre de notifications admin (ex: signalements, alertes paiements)
 */

export default function NotificationsAdmin() {
  const [notes, setNotes] = useState([
    { id: 1, title: "Signalement paiement V-001", text: "Vendeur a signalé paiement pour Janvier", read: false },
    { id: 2, title: "Nouvelle inscription", text: "Boutique Mode Saly a soumis une demande", read: false },
    { id: 3, title: "Commande anormale", text: "Commande CMD-123 blocée", read: true },
  ]);

  const markRead = (id: number) => setNotes(n => n.map(x => x.id === id ? {...x, read: true} : x));
  const remove = (id: number) => setNotes(n => n.filter(x => x.id !== id));

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Notifications</h1>
      </div>

      <div className="bg-white rounded-lg shadow border p-4">
        <ul className="space-y-3">
          {notes.map(n => (
            <li key={n.id} className={`p-3 rounded-md border ${n.read ? "bg-gray-50" : "bg-white"}`}>
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium text-gray-800">{n.title}</div>
                  <div className="text-sm text-gray-600">{n.text}</div>
                </div>
                <div className="flex items-center gap-2">
                  {!n.read && <button onClick={() => markRead(n.id)} className="px-2 py-1 bg-green-50 text-green-700 rounded"><CheckCircle className="w-4 h-4" /></button>}
                  <button onClick={() => remove(n.id)} className="px-2 py-1 bg-red-50 text-red-700 rounded"><XCircle className="w-4 h-4" /></button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {notes.length === 0 && <div className="text-center p-6 text-gray-600">Aucune notification</div>}
      </div>
    </div>
  );
}

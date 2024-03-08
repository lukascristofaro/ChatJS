const socket = io('http://localhost:3000'); // Remplacez l'URL et le port par ceux de votre serveur

// Gérer l'événement de connexion au serveur
socket.on('connect', () => {
  console.log('Connecté au serveur');
});

// Gérer l'événement de déconnexion du serveur
socket.on('disconnect', () => {
  console.log('Déconnecté du serveur');
});

// Gérer l'événement de réception d'un message du serveur
socket.on('message', (data) => {
  console.log('Message reçu:', data);
  // Mettre à jour la liste des messages dans l'interface utilisateur
});

// Gérer l'événement de réception de la liste des utilisateurs connectés du serveur
socket.on('userList', (users) => {
  console.log('Liste des utilisateurs connectés:', users);
  // Mettre à jour la liste des utilisateurs dans l'interface utilisateur
});

// Envoyer un message au serveur
document.getElementById('message-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const message = document.getElementById('message-input').value;
  // Envoyer le message au serveur
  socket.emit('sendMessage', message);
  // Réinitialiser le champ de saisie du message
  document.getElementById('message-input').value = '';
});
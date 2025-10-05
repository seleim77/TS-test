// Example TypeScript code demonstrating types and modern features

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

class UserManager {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
    console.log(`Added user: ${user.name}`);
  }

  getActiveUsers(): User[] {
    return this.users.filter(user => user.isActive);
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
}

// Create sample data
const userManager = new UserManager();
const sampleUsers: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", isActive: true },
  { id: 2, name: "Jane Smith", email: "jane@example.com", isActive: false },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", isActive: true }
];

// Add users
sampleUsers.forEach(user => userManager.addUser(user));

// Log active users
console.log("Active users:", userManager.getActiveUsers());

// DOM interaction with type safety
const button = document.getElementById('click-me') as HTMLButtonElement;
if (button) {
  button.addEventListener('click', () => {
    const activeUsers = userManager.getActiveUsers();
    alert(`There are ${activeUsers.length} active users!`);
  });
}

// Example of modern TypeScript features
const processUserData = async (users: User[]): Promise<string[]> => {
  return users
    .filter((user): user is User => user.isActive)
    .map(user => `${user.name} <${user.email}>`)
    .sort();
};

// Use the async function
processUserData(sampleUsers).then(emails => {
  console.log("Processed user emails:", emails);
});

console.log("TypeScript + Vite setup is working! 🚀");
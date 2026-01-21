export default class ProjectService {
  async fetchProjects() {
    // Simulated API fetch; replace with real API call if needed
    return [
      { id: 1, name: "Smart Factory Automation", description: "Automating factories with IoT and AI." },
      { id: 2, name: "IoT Home Solutions", description: "Smart devices for home automation." },
      { id: 3, name: "AI-based Predictive Maintenance", description: "Reducing downtime with AI predictions." },
    ];
  }
}

const api = {
  async getCategories(){ const r = await fetch('/api/categories'); return r.json() },
  async getCategory(slug){ const r = await fetch(`/api/categories/${slug}`); return r.json() },
  async getHackathons(){ const r = await fetch('/api/hackathons'); return r.json() },
  async getCourses(){ const r = await fetch('/api/courses'); return r.json() },
  async getCertifications(){ const r = await fetch('/api/certifications'); return r.json() },
}
export default api;



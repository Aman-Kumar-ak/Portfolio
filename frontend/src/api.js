const API_BASE = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');

const api = {
  async getCategories(){ const r = await fetch(`${API_BASE}/api/categories`); return r.json() },
  async getCategory(slug){ const r = await fetch(`${API_BASE}/api/categories/${slug}`); return r.json() },
  async getHackathons(){ const r = await fetch(`${API_BASE}/api/hackathons`); return r.json() },
  async getCourses(){ const r = await fetch(`${API_BASE}/api/courses`); return r.json() },
  async getCertifications(){ const r = await fetch(`${API_BASE}/api/certifications`); return r.json() },
}
export default api;


